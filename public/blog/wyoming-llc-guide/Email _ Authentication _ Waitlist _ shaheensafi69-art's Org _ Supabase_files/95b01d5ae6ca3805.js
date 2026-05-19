;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="f8d09e9c-d80a-aa0a-e88b-1262e4089847")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,850036,774105,822797,306255,100121,247309,640696,556955,517638,997780,636787,467394,53336,152770,439137,345942,757489,957386,779262,538892,85205,864748,45160,261126,788035,71859,332108,664304,46166,158161,420732,392286,e=>{"use strict";var t,a=e.i(97429),n=e.i(248593),i=e.i(479084);let r=(e,t)=>`
COALESCE(
  (
    SELECT
      array_agg(row_to_json(${e})) FILTER (WHERE ${t})
    FROM
      ${e}
  ),
  '{}'
) AS ${e}`;function s(e,t,a){return(a&&(t=a.concat(t??[])),e?.length)?`IN (${e.map(i.literal).join(",")})`:t?.length?`NOT IN (${t.map(i.literal).join(",")})`:""}let o=`
-- Lists each column's privileges in the form of:
--
-- [
--   {
--     "column_id": "12345.1",
--     "relation_schema": "public",
--     "relation_name": "mytable",
--     "column_name": "mycolumn",
--     "privileges": [
--       {
--         "grantor": "postgres",
--         "grantee": "myrole",
--         "privilege_type": "SELECT",
--         "is_grantable": false
--       },
--       ...
--     ]
--   },
--   ...
-- ]
--
-- Modified from information_schema.column_privileges. We try to be as close as
-- possible to the view definition, obtained from:
--
-- select pg_get_viewdef('information_schema.column_privileges');
--
-- The main differences are:
-- - we include column privileges for materialized views
--   (reason for exclusion in information_schema.column_privileges:
--    https://www.postgresql.org/message-id/9136.1502740844%40sss.pgh.pa.us)
-- - we query a.attrelid and a.attnum to generate column_id
-- - table_catalog is omitted
-- - table_schema -> relation_schema, table_name -> relation_name
--
-- Column privileges are intertwined with table privileges in that table
-- privileges override column privileges. E.g. if we do:
--
-- grant all on mytable to myrole;
--
-- Then myrole is granted privileges for ALL columns. Likewise, if we do:
--
-- grant all (id) on mytable to myrole;
-- revoke all on mytable from myrole;
--
-- Then the grant on the id column is revoked.
--
-- This is unlike how grants for schemas and tables interact, where you need
-- privileges for BOTH the schema the table is in AND the table itself in order
-- to access the table.

select (x.attrelid || '.' || x.attnum) as column_id,
       nc.nspname as relation_schema,
       x.relname as relation_name,
       x.attname as column_name,
       coalesce(
         jsonb_agg(
           jsonb_build_object(
             'grantor', u_grantor.rolname,
             'grantee', grantee.rolname,
             'privilege_type', x.prtype,
             'is_grantable', x.grantable
           )
         ),
         '[]'
       ) as privileges
from
  (select pr_c.grantor,
          pr_c.grantee,
          a.attrelid,
          a.attnum,
          a.attname,
          pr_c.relname,
          pr_c.relnamespace,
          pr_c.prtype,
          pr_c.grantable,
          pr_c.relowner
   from
     (select pg_class.oid,
             pg_class.relname,
             pg_class.relnamespace,
             pg_class.relowner,
             (aclexplode(coalesce(pg_class.relacl, acldefault('r', pg_class.relowner)))).grantor as grantor,
             (aclexplode(coalesce(pg_class.relacl, acldefault('r', pg_class.relowner)))).grantee as grantee,
             (aclexplode(coalesce(pg_class.relacl, acldefault('r', pg_class.relowner)))).privilege_type as privilege_type,
             (aclexplode(coalesce(pg_class.relacl, acldefault('r', pg_class.relowner)))).is_grantable as is_grantable
      from pg_class
      where (pg_class.relkind = any (array['r',
                                           'v',
                                           'm',
                                           'f',
                                           'p'])) ) pr_c(oid, relname, relnamespace, relowner, grantor, grantee, prtype, grantable),
                                                    pg_attribute a
   where ((a.attrelid = pr_c.oid)
          and (a.attnum > 0)
          and (not a.attisdropped))
   union select pr_a.grantor,
                pr_a.grantee,
                pr_a.attrelid,
                pr_a.attnum,
                pr_a.attname,
                c.relname,
                c.relnamespace,
                pr_a.prtype,
                pr_a.grantable,
                c.relowner
   from
     (select a.attrelid,
             a.attnum,
             a.attname,
             (aclexplode(coalesce(a.attacl, acldefault('c', cc.relowner)))).grantor as grantor,
             (aclexplode(coalesce(a.attacl, acldefault('c', cc.relowner)))).grantee as grantee,
             (aclexplode(coalesce(a.attacl, acldefault('c', cc.relowner)))).privilege_type as privilege_type,
             (aclexplode(coalesce(a.attacl, acldefault('c', cc.relowner)))).is_grantable as is_grantable
      from (pg_attribute a
            join pg_class cc on ((a.attrelid = cc.oid)))
      where ((a.attnum > 0)
             and (not a.attisdropped))) pr_a(attrelid, attnum, attname, grantor, grantee, prtype, grantable),
                                        pg_class c
   where ((pr_a.attrelid = c.oid)
          and (c.relkind = any (ARRAY['r',
                                      'v',
                                      'm',
                                      'f',
                                      'p'])))) x,
     pg_namespace nc,
     pg_authid u_grantor,
  (select pg_authid.oid,
          pg_authid.rolname
   from pg_authid
   union all select (0)::oid as oid,
                    'PUBLIC') grantee(oid, rolname)
where ((x.relnamespace = nc.oid)
       and (x.grantee = grantee.oid)
       and (x.grantor = u_grantor.oid)
       and (x.prtype = any (ARRAY['INSERT',
                                  'SELECT',
                                  'UPDATE',
                                  'REFERENCES']))
       and (pg_has_role(u_grantor.oid, 'USAGE')
            or pg_has_role(grantee.oid, 'USAGE')
            or (grantee.rolname = 'PUBLIC')))
group by column_id,
         nc.nspname,
         x.relname,
         x.attname
`,l=a.z.object({grantor:a.z.string(),grantee:a.z.string(),privilege_type:a.z.union([a.z.literal("SELECT"),a.z.literal("INSERT"),a.z.literal("UPDATE"),a.z.literal("REFERENCES")]),is_grantable:a.z.boolean()}),c=a.z.object({column_id:a.z.string(),relation_schema:a.z.string(),relation_name:a.z.string(),column_name:a.z.string(),privileges:a.z.array(l)}),d=a.z.array(c);a.z.object({columnId:a.z.string(),grantee:a.z.string(),privilegeType:a.z.union([a.z.literal("ALL"),a.z.literal("SELECT"),a.z.literal("INSERT"),a.z.literal("UPDATE"),a.z.literal("REFERENCES")]),isGrantable:a.z.boolean().optional()});let _=`
-- Adapted from information_schema.columns

SELECT
  c.oid :: int8 AS table_id,
  nc.nspname AS schema,
  c.relname AS table,
  (c.oid || '.' || a.attnum) AS id,
  a.attnum AS ordinal_position,
  a.attname AS name,
  CASE
    WHEN a.atthasdef THEN pg_get_expr(ad.adbin, ad.adrelid)
    ELSE NULL
  END AS default_value,
  CASE
    WHEN t.typtype = 'd' THEN CASE
      WHEN bt.typelem <> 0 :: oid
      AND bt.typlen = -1 THEN 'ARRAY'
      WHEN nbt.nspname = 'pg_catalog' THEN format_type(t.typbasetype, NULL)
      ELSE 'USER-DEFINED'
    END
    ELSE CASE
      WHEN t.typelem <> 0 :: oid
      AND t.typlen = -1 THEN 'ARRAY'
      WHEN nt.nspname = 'pg_catalog' THEN format_type(a.atttypid, NULL)
      ELSE 'USER-DEFINED'
    END
  END AS data_type,
  COALESCE(bt.typname, t.typname) AS format,
  a.attidentity IN ('a', 'd') AS is_identity,
  CASE
    a.attidentity
    WHEN 'a' THEN 'ALWAYS'
    WHEN 'd' THEN 'BY DEFAULT'
    ELSE NULL
  END AS identity_generation,
  a.attgenerated IN ('s') AS is_generated,
  NOT (
    a.attnotnull
    OR t.typtype = 'd' AND t.typnotnull
  ) AS is_nullable,
  (
    c.relkind IN ('r', 'p')
    OR c.relkind IN ('v', 'f') AND pg_column_is_updatable(c.oid, a.attnum, FALSE)
  ) AS is_updatable,
  uniques.table_id IS NOT NULL AS is_unique,
  check_constraints.definition AS "check",
  array_to_json(
    array(
      SELECT
        enumlabel
      FROM
        pg_catalog.pg_enum enums
      WHERE
        enums.enumtypid = coalesce(bt.oid, t.oid)
        OR enums.enumtypid = coalesce(bt.typelem, t.typelem)
      ORDER BY
        enums.enumsortorder
    )
  ) AS enums,
  col_description(c.oid, a.attnum) AS comment
FROM
  pg_attribute a
  LEFT JOIN pg_attrdef ad ON a.attrelid = ad.adrelid
  AND a.attnum = ad.adnum
  JOIN (
    pg_class c
    JOIN pg_namespace nc ON c.relnamespace = nc.oid
  ) ON a.attrelid = c.oid
  JOIN (
    pg_type t
    JOIN pg_namespace nt ON t.typnamespace = nt.oid
  ) ON a.atttypid = t.oid
  LEFT JOIN (
    pg_type bt
    JOIN pg_namespace nbt ON bt.typnamespace = nbt.oid
  ) ON t.typtype = 'd'
  AND t.typbasetype = bt.oid
  LEFT JOIN (
    SELECT DISTINCT ON (table_id, ordinal_position)
      conrelid AS table_id,
      conkey[1] AS ordinal_position
    FROM pg_catalog.pg_constraint
    WHERE contype = 'u' AND cardinality(conkey) = 1
  ) AS uniques ON uniques.table_id = c.oid AND uniques.ordinal_position = a.attnum
  LEFT JOIN (
    -- We only select the first column check
    SELECT DISTINCT ON (table_id, ordinal_position)
      conrelid AS table_id,
      conkey[1] AS ordinal_position,
      substring(
        pg_get_constraintdef(pg_constraint.oid, true),
        8,
        length(pg_get_constraintdef(pg_constraint.oid, true)) - 8
      ) AS "definition"
    FROM pg_constraint
    WHERE contype = 'c' AND cardinality(conkey) = 1
    ORDER BY table_id, ordinal_position, oid asc
  ) AS check_constraints ON check_constraints.table_id = c.oid AND check_constraints.ordinal_position = a.attnum
WHERE
  NOT pg_is_other_temp_schema(nc.oid)
  AND a.attnum > 0
  AND NOT a.attisdropped
  AND (c.relkind IN ('r', 'v', 'm', 'f', 'p'))
  AND (
    pg_has_role(c.relowner, 'USAGE')
    OR has_column_privilege(
      c.oid,
      a.attnum,
      'SELECT, INSERT, UPDATE, REFERENCES'
    )
  )
`,m=a.z.object({id:a.z.string(),table_id:a.z.number(),schema:a.z.string(),table:a.z.string(),name:a.z.string(),ordinal_position:a.z.number(),data_type:a.z.string(),format:a.z.string(),is_identity:a.z.boolean(),identity_generation:a.z.string().nullable(),is_generated:a.z.boolean(),is_nullable:a.z.boolean(),is_updatable:a.z.boolean(),is_unique:a.z.boolean(),check:a.z.string().nullable(),default_value:a.z.any().nullable(),enums:a.z.array(a.z.string()),comment:a.z.string().nullable()}),p=a.z.array(m),u=a.z.optional(m),E=e=>e.endsWith("[]")?`${(0,i.ident)(e.slice(0,-2))}[]`:e.includes(".")?e:(0,i.ident)(e),g=`
SELECT
  name,
  setting,
  category,
  TRIM(split_part(category, '/', 1)) AS group,
  TRIM(split_part(category, '/', 2)) AS subgroup,
  unit,
  short_desc,
  extra_desc,
  context,
  vartype,
  source,
  min_val,
  max_val,
  enumvals,
  boot_val,
  reset_val,
  sourcefile,
  sourceline,
  pending_restart
FROM
  pg_settings
ORDER BY
  category,
  name
`,b=a.z.object({name:a.z.string(),setting:a.z.string(),category:a.z.string(),group:a.z.string(),subgroup:a.z.string(),unit:a.z.string().nullable(),short_desc:a.z.string(),extra_desc:a.z.string().nullable(),context:a.z.string(),vartype:a.z.string(),source:a.z.string(),min_val:a.z.string().nullable(),max_val:a.z.string().nullable(),enumvals:a.z.array(a.z.string()).nullable(),boot_val:a.z.string().nullable(),reset_val:a.z.string().nullable(),sourcefile:a.z.string().nullable(),sourceline:a.z.number().nullable(),pending_restart:a.z.boolean()}),h=a.z.array(b),f=`
SELECT
  e.name,
  n.nspname AS schema,
  e.default_version,
  x.extversion AS installed_version,
  e.comment
FROM
  pg_available_extensions() e(name, default_version, comment)
  LEFT JOIN pg_extension x ON e.name = x.extname
  LEFT JOIN pg_namespace n ON x.extnamespace = n.oid
`,N=a.z.object({name:a.z.string(),schema:a.z.string().nullable(),default_version:a.z.string(),installed_version:a.z.string().nullable(),comment:a.z.string()}),v=a.z.array(N),T=a.z.optional(N),$=`
select
  c.oid::int8 as id,
  n.nspname as schema,
  c.relname as name,
  obj_description(c.oid) as comment,
  fs.srvname as foreign_server_name,
  fdw.fdwname as foreign_data_wrapper_name,
  handler.proname as foreign_data_wrapper_handler
from
  pg_class c
  join pg_namespace n on n.oid = c.relnamespace
  inner join pg_foreign_table ft on ft.ftrelid = c.oid
  inner join pg_foreign_server fs on fs.oid = ft.ftserver
  inner join pg_foreign_data_wrapper fdw on fdw.oid = fs.srvfdw
  inner join pg_proc handler on handler.oid = fdw.fdwhandler
where
  c.relkind = 'f'
`,S=a.z.object({id:a.z.number(),schema:a.z.string(),name:a.z.string(),comment:a.z.string().nullable(),foreign_server_name:a.z.string(),foreign_data_wrapper_name:a.z.string(),foreign_data_wrapper_handler:a.z.string(),columns:p.optional()}),I=a.z.array(S),A=a.z.optional(S),R=({includeColumns:e})=>`
with foreign_tables as (${$})
  ${e?`, columns as (${_})`:""}
select
  *
  ${e?`, ${r("columns","columns.table_id = foreign_tables.id")}`:""}
from foreign_tables`,L=`
-- CTE with sane arg_modes, arg_names, and arg_types.
-- All three are always of the same length.
-- All three include all args, including OUT and TABLE args.
with functions as (
  select
    *,
    -- proargmodes is null when all arg modes are IN
    coalesce(
      p.proargmodes,
      array_fill('i'::text, array[cardinality(coalesce(p.proallargtypes, p.proargtypes))])
    ) as arg_modes,
    -- proargnames is null when all args are unnamed
    coalesce(
      p.proargnames,
      array_fill(''::text, array[cardinality(coalesce(p.proallargtypes, p.proargtypes))])
    ) as arg_names,
    -- proallargtypes is null when all arg modes are IN
    coalesce(p.proallargtypes, p.proargtypes) as arg_types,
    array_cat(
      array_fill(false, array[pronargs - pronargdefaults]),
      array_fill(true, array[pronargdefaults])) as arg_has_defaults
  from
    pg_proc as p
  where
    p.prokind = 'f'
)
select
  f.oid as id,
  n.nspname as schema,
  f.proname as name,
  l.lanname as language,
  case
    when l.lanname = 'internal' then ''
    else f.prosrc
  end as definition,
  case
    when l.lanname = 'internal' then f.prosrc
    else pg_get_functiondef(f.oid)
  end as complete_statement,
  coalesce(f_args.args, '[]') as args,
  pg_get_function_arguments(f.oid) as argument_types,
  pg_get_function_identity_arguments(f.oid) as identity_argument_types,
  f.prorettype as return_type_id,
  pg_get_function_result(f.oid) as return_type,
  nullif(rt.typrelid, 0) as return_type_relation_id,
  f.proretset as is_set_returning_function,
  case
    when f.provolatile = 'i' then 'IMMUTABLE'
    when f.provolatile = 's' then 'STABLE'
    when f.provolatile = 'v' then 'VOLATILE'
  end as behavior,
  f.prosecdef as security_definer,
  f_config.config_params as config_params
from
  functions f
  left join pg_namespace n on f.pronamespace = n.oid
  left join pg_language l on f.prolang = l.oid
  left join pg_type rt on rt.oid = f.prorettype
  left join (
    select
      oid,
      jsonb_object_agg(param, value) filter (where param is not null) as config_params
    from
      (
        select
          oid,
          (string_to_array(unnest(proconfig), '='))[1] as param,
          (string_to_array(unnest(proconfig), '='))[2] as value
        from
          functions
      ) as t
    group by
      oid
  ) f_config on f_config.oid = f.oid
  left join (
    select
      oid,
      jsonb_agg(jsonb_build_object(
        'mode', t2.mode,
        'name', name,
        'type_id', type_id,
        -- Cast null into false boolean
        'has_default', COALESCE(has_default, false)
      )) as args
    from
      (
        select
          oid,
          unnest(arg_modes) as mode,
          unnest(arg_names) as name,
          -- Coming from: coalesce(p.proallargtypes, p.proargtypes) postgres won't automatically assume
          -- integer, we need to cast it to be properly parsed
          unnest(arg_types)::int8 as type_id,
          unnest(arg_has_defaults) as has_default
        from
          functions
      ) as t1,
      lateral (
        select
          case
            when t1.mode = 'i' then 'in'
            when t1.mode = 'o' then 'out'
            when t1.mode = 'b' then 'inout'
            when t1.mode = 'v' then 'variadic'
            else 'table'
          end as mode
      ) as t2
    group by
      t1.oid
  ) f_args on f_args.oid = f.oid
`,y=a.z.object({id:a.z.number(),schema:a.z.string(),name:a.z.string(),language:a.z.string(),definition:a.z.string(),complete_statement:a.z.string(),args:a.z.array(a.z.object({mode:a.z.union([a.z.literal("in"),a.z.literal("out"),a.z.literal("inout"),a.z.literal("variadic"),a.z.literal("table")]),name:a.z.string(),type_id:a.z.number(),has_default:a.z.boolean()})),argument_types:a.z.string(),identity_argument_types:a.z.string(),return_type_id:a.z.number(),return_type:a.z.string(),return_type_relation_id:a.z.union([a.z.number(),a.z.null()]),is_set_returning_function:a.z.boolean(),behavior:a.z.union([a.z.literal("IMMUTABLE"),a.z.literal("STABLE"),a.z.literal("VOLATILE")]),security_definer:a.z.boolean(),config_params:a.z.union([a.z.record(a.z.string(),a.z.string()),a.z.null()])}),O=a.z.array(y),C=a.z.optional(y);function D({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:a,limit:i,offset:r}={}){let o=`
    with f as (
      ${L}
    )
    select
      f.*
    from f
  `,l=s(t,a,e?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return l&&(o+=` where schema ${l}`),i&&(o=`${o} limit ${i}`),r&&(o=`${o} offset ${r}`),{sql:o,zod:O}}function x({id:e,name:t,schema:a="public",args:n=[]}){if(e)return{sql:`
      with f as (
        ${L}
      )
      select
        f.*
      from f where id = ${(0,i.literal)(e)};`,zod:C};if(t&&a&&n)return{sql:`with f as (
      ${L}
    )
    select
      f.*
    from f join pg_proc as p on id = p.oid where schema = ${(0,i.literal)(a)} and name = ${(0,i.literal)(t)} and p.proargtypes::text = ${n.length?`(
          select string_agg(type_oid::text, ' ') from (
            select (
              split_args.arr[
                array_length(
                  split_args.arr,
                  1
                )
              ]::regtype::oid
            ) as type_oid from (
              select string_to_array(
                unnest(
                  array[${n.map(i.literal)}]
                ),
                ' '
              ) as arr
            ) as split_args
          ) args
        )`:(0,i.literal)("")}`,zod:C};throw Error("Must provide either id or name and schema")}let z=a.z.object({name:a.z.string(),definition:a.z.string(),args:a.z.array(a.z.string()).optional(),behavior:a.z.enum(["IMMUTABLE","STABLE","VOLATILE"]).optional(),config_params:a.z.record(a.z.string(),a.z.string()).optional(),schema:a.z.string().optional(),language:a.z.string().optional(),return_type:a.z.string().optional(),security_definer:a.z.boolean().optional()});function w({name:e,schema:t,args:a,definition:n,return_type:r,language:s,behavior:o,security_definer:l,config_params:c},{replace:d=!1}={}){return`
    CREATE ${d?"OR REPLACE":""} FUNCTION ${(0,i.ident)(t)}.${(0,i.ident)(e)}(${a?.join(", ")||""})
    RETURNS ${r}
    AS ${(0,i.literal)(n)}
    LANGUAGE ${s}
    ${o}
    CALLED ON NULL INPUT
    ${l?"SECURITY DEFINER":"SECURITY INVOKER"}
    ${c?Object.entries(c).map(([e,t])=>`SET ${e} ${"FROM CURRENT"===t?"FROM CURRENT":"TO "+('""'===t?"''":t)}`).join("\n"):""};
  `}function F({name:e,schema:t="public",args:n=[],definition:i,return_type:r="void",language:s="sql",behavior:o="VOLATILE",security_definer:l=!1,config_params:c={}}){return{sql:w({name:e,schema:t,args:n,definition:i,return_type:r,language:s,behavior:o,security_definer:l,config_params:c}),zod:a.z.void()}}let H=a.z.object({name:a.z.string().optional(),schema:a.z.string().optional(),definition:a.z.string().optional()});function j(e,{name:t,schema:n,definition:r}){let s=e.argument_types.split(", "),o=e.identity_argument_types,l="string"==typeof r?w({...e,definition:r,args:s,config_params:e.config_params??{}},{replace:!0}):"",c=t&&t!==e.name?`ALTER FUNCTION ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.name)}(${o}) RENAME TO ${(0,i.ident)(t)};`:"",d=n&&n!==e.schema?`ALTER FUNCTION ${(0,i.ident)(e.schema)}.${(0,i.ident)(t||e.name)}(${o})  SET SCHEMA ${(0,i.ident)(n)};`:"";return{sql:`
    DO LANGUAGE plpgsql $$
    BEGIN
      IF ${"string"==typeof r?"TRUE":"FALSE"} THEN
        ${l}

        IF (
          SELECT id
          FROM (${L}) AS f
          WHERE f.schema = ${(0,i.literal)(e.schema)}
          AND f.name = ${(0,i.literal)(e.name)}
          AND f.identity_argument_types = ${(0,i.literal)(o)}
        ) != ${e.id} THEN
          RAISE EXCEPTION 'Cannot find function "${e.schema}"."${e.name}"(${o})';
        END IF;
      END IF;

      ${c}

      ${d}
    END;
    $$;
  `,zod:a.z.void()}}let q=a.z.object({cascade:a.z.boolean().default(!1).optional()});function U(e,{cascade:t=!1}={}){return{sql:`DROP FUNCTION ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.name)}
  (${e.identity_argument_types})
  ${t?"CASCADE":"RESTRICT"};`,zod:a.z.void()}}e.s(["create",()=>F,"list",()=>D,"pgFunctionArrayZod",0,O,"pgFunctionCreateZod",0,z,"pgFunctionDeleteZod",0,q,"pgFunctionOptionalZod",0,C,"pgFunctionUpdateZod",0,H,"pgFunctionZod",0,y,"remove",()=>U,"retrieve",()=>x,"update",()=>j],198687);var k=e.i(198687);let M=`
  SELECT
    idx.indexrelid::int8 AS id,
    idx.indrelid::int8 AS table_id,
    n.nspname AS schema,
    idx.indnatts AS number_of_attributes,
    idx.indnkeyatts AS number_of_key_attributes,
    idx.indisunique AS is_unique,
    idx.indisprimary AS is_primary,
    idx.indisexclusion AS is_exclusion,
    idx.indimmediate AS is_immediate,
    idx.indisclustered AS is_clustered,
    idx.indisvalid AS is_valid,
    idx.indcheckxmin AS check_xmin,
    idx.indisready AS is_ready,
    idx.indislive AS is_live,
    idx.indisreplident AS is_replica_identity,
    idx.indkey::smallint[] AS key_attributes,
    idx.indcollation::integer[] AS collation,
    idx.indclass::integer[] AS class,
    idx.indoption::smallint[] AS options,
    idx.indpred AS index_predicate,
    obj_description(idx.indexrelid, 'pg_class') AS comment,
    ix.indexdef as index_definition,
    am.amname AS access_method,
    jsonb_agg(
      jsonb_build_object(
        'attribute_number', a.attnum,
        'attribute_name', a.attname,
        'data_type', format_type(a.atttypid, a.atttypmod)
      )
      ORDER BY a.attnum
    ) AS index_attributes
  FROM
    pg_index idx
    JOIN pg_class c ON c.oid = idx.indexrelid
    JOIN pg_namespace n ON c.relnamespace = n.oid
    JOIN pg_am am ON c.relam = am.oid
    JOIN pg_attribute a ON a.attrelid = c.oid AND a.attnum = ANY(idx.indkey)
    JOIN pg_indexes ix ON c.relname = ix.indexname
  GROUP BY
    idx.indexrelid, idx.indrelid, n.nspname, idx.indnatts, idx.indnkeyatts, idx.indisunique, 
    idx.indisprimary, idx.indisexclusion, idx.indimmediate, idx.indisclustered, idx.indisvalid, 
    idx.indcheckxmin, idx.indisready, idx.indislive, idx.indisreplident, idx.indkey, 
    idx.indcollation, idx.indclass, idx.indoption, idx.indexprs, idx.indpred, ix.indexdef, am.amname
`,P=a.z.object({id:a.z.number(),table_id:a.z.number(),schema:a.z.string(),number_of_attributes:a.z.number(),number_of_key_attributes:a.z.number(),is_unique:a.z.boolean(),is_primary:a.z.boolean(),is_exclusion:a.z.boolean(),is_immediate:a.z.boolean(),is_clustered:a.z.boolean(),is_valid:a.z.boolean(),check_xmin:a.z.boolean(),is_ready:a.z.boolean(),is_live:a.z.boolean(),is_replica_identity:a.z.boolean(),key_attributes:a.z.array(a.z.number()),collation:a.z.array(a.z.number()),class:a.z.array(a.z.number()),options:a.z.array(a.z.number()),index_predicate:a.z.string().nullable(),comment:a.z.string().nullable(),index_definition:a.z.string(),access_method:a.z.string(),index_attributes:a.z.array(a.z.object({attribute_number:a.z.number(),attribute_name:a.z.string(),data_type:a.z.string()}))}),W=a.z.array(P),G=a.z.optional(P),B=`
select
  c.oid::int8 as id,
  n.nspname as schema,
  c.relname as name,
  c.relispopulated as is_populated,
  obj_description(c.oid) as comment
from
  pg_class c
  join pg_namespace n on n.oid = c.relnamespace
where
  c.relkind = 'm'
`,Y=a.z.object({id:a.z.number(),schema:a.z.string(),name:a.z.string(),is_populated:a.z.boolean(),comment:a.z.string().nullable(),columns:p.optional()}),X=a.z.array(Y),J=a.z.optional(Y),Q=({includeColumns:e})=>`
with materialized_views as (${B})
  ${e?`, columns as (${_})`:""}
select
  *
  ${e?`, ${r("columns","columns.table_id = materialized_views.id")}`:""}
from materialized_views`,K=`
select
  pol.oid :: int8 as id,
  n.nspname as schema,
  c.relname as table,
  c.oid :: int8 as table_id,
  pol.polname as name,
  case
    when pol.polpermissive then 'PERMISSIVE'::text
    else 'RESTRICTIVE'::text
  end as action,
  case
    when pol.polroles = '{0}'::oid[] then array_to_json(string_to_array('public'::text, ''::text)::name[])
    else array_to_json(array(
      select pg_roles.rolname
      from pg_roles
      where pg_roles.oid = any(pol.polroles)
      order by pg_roles.rolname
    ))
  end as roles,
  case pol.polcmd
    when 'r'::"char" then 'SELECT'::text
    when 'a'::"char" then 'INSERT'::text
    when 'w'::"char" then 'UPDATE'::text
    when 'd'::"char" then 'DELETE'::text
    when '*'::"char" then 'ALL'::text
    else null::text
  end as command,
  pg_get_expr(pol.polqual, pol.polrelid) as definition,
  pg_get_expr(pol.polwithcheck, pol.polrelid) as check
from
  pg_policy pol
  join pg_class c on c.oid = pol.polrelid
  left join pg_namespace n on n.oid = c.relnamespace
`,V=a.z.object({id:a.z.number(),schema:a.z.string(),table:a.z.string(),table_id:a.z.number(),name:a.z.string(),action:a.z.union([a.z.literal("PERMISSIVE"),a.z.literal("RESTRICTIVE")]),roles:a.z.array(a.z.string()),command:a.z.union([a.z.literal("SELECT"),a.z.literal("INSERT"),a.z.literal("UPDATE"),a.z.literal("DELETE"),a.z.literal("ALL")]),definition:a.z.union([a.z.string(),a.z.null()]),check:a.z.union([a.z.string(),a.z.null()])}),Z=a.z.array(V),ee=a.z.optional(V),et=`
SELECT
  p.oid :: int8 AS id,
  p.pubname AS name,
  p.pubowner::regrole::text AS owner,
  p.pubinsert AS publish_insert,
  p.pubupdate AS publish_update,
  p.pubdelete AS publish_delete,
  p.pubtruncate AS publish_truncate,
  CASE
    WHEN p.puballtables THEN NULL
    ELSE pr.tables
  END AS tables
FROM
  pg_catalog.pg_publication AS p
  LEFT JOIN LATERAL (
    SELECT
      COALESCE(
        array_agg(
          json_build_object(
            'id',
            c.oid :: int8,
            'name',
            c.relname,
            'schema',
            nc.nspname
          )
        ),
        '{}'
      ) AS tables
    FROM
      pg_catalog.pg_publication_rel AS pr
      JOIN pg_class AS c ON pr.prrelid = c.oid
      join pg_namespace as nc on c.relnamespace = nc.oid
    WHERE
      pr.prpubid = p.oid
  ) AS pr ON 1 = 1
`,ea=a.z.object({id:a.z.number().optional(),name:a.z.string(),schema:a.z.string()}),en=a.z.object({id:a.z.number(),name:a.z.string(),owner:a.z.string(),publish_insert:a.z.boolean(),publish_update:a.z.boolean(),publish_delete:a.z.boolean(),publish_truncate:a.z.boolean(),tables:a.z.array(ea).nullable()}),ei=a.z.array(en),er=a.z.optional(en),es=`
-- Can't use pg_authid here since some managed Postgres providers don't expose it
-- https://github.com/supabase/postgres-meta/issues/212

select
  r.oid as id,
  rolname as name,
  rolsuper as "isSuperuser",
  rolcreatedb as "canCreateDb",
  rolcreaterole as "canCreateRole",
  rolinherit as "inheritRole",
  rolcanlogin as "canLogin",
  rolreplication as "isReplicationRole",
  rolbypassrls as "canBypassRls",
  (
    select
      count(*)
    from
      pg_stat_activity
    where
      r.rolname = pg_stat_activity.usename
  ) as "activeConnections",
  case when rolconnlimit = -1 then current_setting('max_connections') :: int8
       else rolconnlimit
  end as "connectionLimit",
  rolvaliduntil as "validUntil",
  coalesce(r_config.role_configs, '{}') as config
from
  pg_roles r
  left join (
    select
      oid,
      jsonb_object_agg(param, value) filter (where param is not null) as role_configs
    from
      (
        select
          oid,
          (string_to_array(unnest(rolconfig), '='))[1] as param,
          (string_to_array(unnest(rolconfig), '='))[2] as value
        from
          pg_roles
      ) as _
    group by
      oid
  ) r_config on r_config.oid = r.oid
`,eo=a.z.object({id:a.z.number(),name:a.z.string(),isSuperuser:a.z.boolean(),canCreateDb:a.z.boolean(),canCreateRole:a.z.boolean(),inheritRole:a.z.boolean(),canLogin:a.z.boolean(),isReplicationRole:a.z.boolean(),canBypassRls:a.z.boolean(),activeConnections:a.z.number(),connectionLimit:a.z.number(),validUntil:a.z.union([a.z.string(),a.z.null()]),config:a.z.record(a.z.string(),a.z.string())}),el=a.z.array(eo),ec=a.z.optional(eo);function ed(e){if("id"in e&&e.id)return`${(0,i.ident)("id")} = ${(0,i.literal)(e.id)}`;if("name"in e&&e.name)return`${(0,i.ident)("name")} = ${(0,i.literal)(e.name)}`;throw Error("Must provide either id or name")}let e_=`
-- Adapted from information_schema.schemata

select
  n.oid as id,
  n.nspname as name,
  u.rolname as owner,
   obj_description(n.oid, 'pg_namespace') AS comment
from
  pg_namespace n,
  pg_roles u
where
  n.nspowner = u.oid
  and (
    pg_has_role(n.nspowner, 'USAGE')
    or has_schema_privilege(n.oid, 'CREATE, USAGE')
  )
  and not pg_catalog.starts_with(n.nspname, 'pg_temp_')
  and not pg_catalog.starts_with(n.nspname, 'pg_toast_temp_')
`,em=a.z.object({id:a.z.number(),name:a.z.string(),owner:a.z.string(),comment:a.z.string().nullable()}),ep=a.z.array(em),eu=a.z.optional(em),eE=`
-- Despite the name \`table_privileges\`, this includes other kinds of relations:
-- views, matviews, etc. "Relation privileges" just doesn't roll off the tongue.
--
-- For each relation, get its relacl in a jsonb format,
-- e.g.
--
-- '{postgres=arwdDxt/postgres}'
--
-- becomes
--
-- [
--   {
--     "grantee": "postgres",
--     "grantor": "postgres",
--     "is_grantable": false,
--     "privilege_type": "INSERT"
--   },
--   ...
-- ]
select
  c.oid as relation_id,
  nc.nspname as schema,
  c.relname as name,
  case
    when c.relkind = 'r' then 'table'
    when c.relkind = 'v' then 'view'
    when c.relkind = 'm' then 'materialized_view'
    when c.relkind = 'f' then 'foreign_table'
    when c.relkind = 'p' then 'partitioned_table'
  end as kind,
  coalesce(
    jsonb_agg(
      jsonb_build_object(
        'grantor', grantor.rolname,
        'grantee', grantee.rolname,
        'privilege_type', _priv.privilege_type,
        'is_grantable', _priv.is_grantable
      )
    ) filter (where _priv is not null),
    '[]'
  ) as privileges
from pg_class c
join pg_namespace as nc
  on nc.oid = c.relnamespace
left join lateral (
  select grantor, grantee, privilege_type, is_grantable
  from aclexplode(coalesce(c.relacl, acldefault('r', c.relowner)))
) as _priv on true
left join pg_roles as grantor
  on grantor.oid = _priv.grantor
left join (
  select
    pg_roles.oid,
    pg_roles.rolname
  from pg_roles
  union all
  select
    (0)::oid as oid, 'PUBLIC'
) as grantee (oid, rolname)
  on grantee.oid = _priv.grantee
where c.relkind in ('r', 'v', 'm', 'f', 'p')
  and not pg_is_other_temp_schema(c.relnamespace)
  and (
    pg_has_role(c.relowner, 'USAGE')
    or has_table_privilege(
      c.oid,
      'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
      || case when current_setting('server_version_num')::int4 >= 170000 then ', MAINTAIN' else '' end
    )
    or has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
  )
group by
  c.oid,
  nc.nspname,
  c.relname,
  c.relkind
`,eg=a.z.object({relation_id:a.z.number(),schema:a.z.string(),name:a.z.string(),kind:a.z.union([a.z.literal("table"),a.z.literal("view"),a.z.literal("materialized_view"),a.z.literal("foreign_table"),a.z.literal("partitioned_table")]),privileges:a.z.array(a.z.object({grantor:a.z.string(),grantee:a.z.string(),privilege_type:a.z.union([a.z.literal("SELECT"),a.z.literal("INSERT"),a.z.literal("UPDATE"),a.z.literal("DELETE"),a.z.literal("TRUNCATE"),a.z.literal("REFERENCES"),a.z.literal("TRIGGER"),a.z.literal("MAINTAIN")]),is_grantable:a.z.boolean()}))}),eb=a.z.array(eg),eh=a.z.optional(eg),ef=`
SELECT
  c.oid :: int8 AS id,
  nc.nspname AS schema,
  c.relname AS name,
  c.relrowsecurity AS rls_enabled,
  c.relforcerowsecurity AS rls_forced,
  CASE
    WHEN c.relreplident = 'd' THEN 'DEFAULT'
    WHEN c.relreplident = 'i' THEN 'INDEX'
    WHEN c.relreplident = 'f' THEN 'FULL'
    ELSE 'NOTHING'
  END AS replica_identity,
  pg_total_relation_size(format('%I.%I', nc.nspname, c.relname)) :: int8 AS bytes,
  pg_size_pretty(
    pg_total_relation_size(format('%I.%I', nc.nspname, c.relname))
  ) AS size,
  pg_stat_get_live_tuples(c.oid) AS live_rows_estimate,
  pg_stat_get_dead_tuples(c.oid) AS dead_rows_estimate,
  obj_description(c.oid) AS comment,
  coalesce(pk.primary_keys, '[]') as primary_keys,
  coalesce(
    jsonb_agg(relationships) filter (where relationships is not null),
    '[]'
  ) as relationships
FROM
  pg_namespace nc
  JOIN pg_class c ON nc.oid = c.relnamespace
  left join (
    select
      c.oid::int8 as table_id,
      jsonb_agg(
        jsonb_build_object(
          'table_id', c.oid::int8,
          'schema', n.nspname,
          'table_name', c.relname,
          'name', a.attname
        )
        order by array_position(i.indkey, a.attnum)
      ) as primary_keys
    from
      pg_index i
      join pg_class c on i.indrelid = c.oid
      join pg_namespace n on c.relnamespace = n.oid
      join pg_attribute a on a.attrelid = c.oid and a.attnum = any(i.indkey)
    where
      i.indisprimary
    group by c.oid
  ) as pk
  on pk.table_id = c.oid
  left join (
    select
      c.oid :: int8 as id,
      c.conname as constraint_name,
      nsa.nspname as source_schema,
      csa.relname as source_table_name,
      sa.attname as source_column_name,
      nta.nspname as target_table_schema,
      cta.relname as target_table_name,
      ta.attname as target_column_name
    from
      pg_constraint c
    join (
      pg_attribute sa
      join pg_class csa on sa.attrelid = csa.oid
      join pg_namespace nsa on csa.relnamespace = nsa.oid
    ) on sa.attrelid = c.conrelid and sa.attnum = any (c.conkey)
    join (
      pg_attribute ta
      join pg_class cta on ta.attrelid = cta.oid
      join pg_namespace nta on cta.relnamespace = nta.oid
    ) on ta.attrelid = c.confrelid and ta.attnum = any (c.confkey)
    where
      c.contype = 'f'
  ) as relationships
  on (relationships.source_schema = nc.nspname and relationships.source_table_name = c.relname)
  or (relationships.target_table_schema = nc.nspname and relationships.target_table_name = c.relname)
WHERE
  c.relkind IN ('r', 'p')
  AND NOT pg_is_other_temp_schema(nc.oid)
  AND (
    pg_has_role(c.relowner, 'USAGE')
    OR has_table_privilege(
      c.oid,
      'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
    )
    OR has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
  )
group by
  c.oid,
  c.relname,
  c.relrowsecurity,
  c.relforcerowsecurity,
  c.relreplident,
  nc.nspname,
  pk.primary_keys
`,eN=a.z.object({table_id:a.z.number(),name:a.z.string(),schema:a.z.string(),table_name:a.z.string()}),ev=a.z.object({id:a.z.number(),constraint_name:a.z.string(),source_schema:a.z.string(),source_table_name:a.z.string(),source_column_name:a.z.string(),target_table_schema:a.z.string(),target_table_name:a.z.string(),target_column_name:a.z.string()}),eT=a.z.object({id:a.z.number(),schema:a.z.string(),name:a.z.string(),rls_enabled:a.z.boolean(),rls_forced:a.z.boolean(),replica_identity:a.z.enum(["DEFAULT","INDEX","FULL","NOTHING"]),bytes:a.z.number(),size:a.z.string(),live_rows_estimate:a.z.number(),dead_rows_estimate:a.z.number(),comment:a.z.string().nullable(),primary_keys:a.z.array(eN),relationships:a.z.array(ev),columns:p.optional()}),e$=a.z.array(eT);function eS({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:a,limit:i,offset:r,includeColumns:o=!0}={}){let l=eR({includeColumns:o}),c=s(t,a,e?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return c&&(l+=` where schema ${c}`),i&&(l+=` limit ${i}`),r&&(l+=` offset ${r}`),{sql:l,zod:e$}}function eI(e){let t=function(e){if("id"in e&&e.id)return`${(0,i.ident)("id")} = ${(0,i.literal)(e.id)}`;if("name"in e&&e.name&&e.schema)return`${(0,i.ident)("name")} = ${(0,i.literal)(e.name)} and ${(0,i.ident)("schema")} = ${(0,i.literal)(e.schema)}`;throw Error("Must provide either id or name and schema")}(e);return{sql:`${eR({includeColumns:!0})} where ${t};`,zod:eT}}function eA(e,{cascade:t=!1}={}){return{sql:`DROP TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.name)} ${t?"CASCADE":"RESTRICT"};`}}let eR=({includeColumns:e})=>`
  with tables as (${ef})
  ${e?`, columns as (${_})`:""}
  select
    *
    ${e?`, ${r("columns","columns.table_id = tables.id")}`:""}
  from tables`;function eL({name:e,schema:t="public",comment:a,no_transaction:n=!1}){let r=`CREATE TABLE ${(0,i.ident)(t)}.${(0,i.ident)(e)} ();`,s=void 0!=a?`COMMENT ON TABLE ${(0,i.ident)(t)}.${(0,i.ident)(e)} IS ${(0,i.literal)(a)};`:"";return n?{sql:`${r} ${s}`}:{sql:`BEGIN; ${r} ${s} COMMIT;`}}function ey(e,{name:t,schema:a,rls_enabled:n,rls_forced:r,replica_identity:s,replica_identity_index:o,primary_keys:l,comment:c}){let d=`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.name)}`,_=void 0===a?"":`${d} SET SCHEMA ${(0,i.ident)(a)};`,m="";if(void 0!==t&&t!==e.name){let n=void 0===a?e.schema:a;m=`ALTER TABLE ${(0,i.ident)(n)}.${(0,i.ident)(e.name)} RENAME TO ${(0,i.ident)(t)};`}let p="";if(void 0!==n){let e=`${d} ENABLE ROW LEVEL SECURITY;`,t=`${d} DISABLE ROW LEVEL SECURITY;`;p=n?e:t}let u="";if(void 0!==r){let e=`${d} FORCE ROW LEVEL SECURITY;`,t=`${d} NO FORCE ROW LEVEL SECURITY;`;u=r?e:t}let E="";void 0===s||(E="INDEX"===s?`${d} REPLICA IDENTITY USING INDEX ${o};`:`${d} REPLICA IDENTITY ${s};`);let g="";void 0===l||(g+=`
DO $$
DECLARE
  r record;
BEGIN
  SELECT conname
    INTO r
    FROM pg_constraint
    WHERE contype = 'p' AND conrelid = ${(0,i.literal)(e.id)};
  IF r IS NOT NULL THEN
    EXECUTE ${(0,i.literal)(`${d} DROP CONSTRAINT `)} || quote_ident(r.conname);
  END IF;
END
$$;
`,0===l.length||(g+=`${d} ADD PRIMARY KEY (${l.map(e=>(0,i.ident)(e.name)).join(",")});`));let b=void 0==c?"":`COMMENT ON TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.name)} IS ${(0,i.literal)(c)};`;return{sql:`
BEGIN;
  ${p}
  ${u}
  ${E}
  ${g}
  ${b}
  ${_}
  ${m}
COMMIT;`}}e.s(["create",()=>eL,"list",()=>eS,"remove",()=>eA,"retrieve",()=>eI,"update",()=>ey],330006);var eO=e.i(330006);let eC=`
SELECT
  pg_t.oid AS id,
  pg_t.tgrelid AS table_id,
  CASE
    WHEN pg_t.tgenabled = 'D' THEN 'DISABLED'
    WHEN pg_t.tgenabled = 'O' THEN 'ORIGIN'
    WHEN pg_t.tgenabled = 'R' THEN 'REPLICA'
    WHEN pg_t.tgenabled = 'A' THEN 'ALWAYS'
  END AS enabled_mode,
  (
    STRING_TO_ARRAY(
      ENCODE(pg_t.tgargs, 'escape'), '\\000'
    )
  )[:pg_t.tgnargs] AS function_args,
  is_t.trigger_name AS name,
  is_t.event_object_table AS table,
  is_t.event_object_schema AS schema,
  is_t.action_condition AS condition,
  is_t.action_orientation AS orientation,
  is_t.action_timing AS activation,
  ARRAY_AGG(is_t.event_manipulation)::text[] AS events,
  pg_p.proname AS function_name,
  pg_n.nspname AS function_schema
FROM
  pg_trigger AS pg_t
JOIN
  pg_class AS pg_c
ON pg_t.tgrelid = pg_c.oid
JOIN information_schema.triggers AS is_t
ON is_t.trigger_name = pg_t.tgname
AND pg_c.relname = is_t.event_object_table
AND pg_c.relnamespace = (quote_ident(is_t.event_object_schema))::regnamespace
JOIN pg_proc AS pg_p
ON pg_t.tgfoid = pg_p.oid
JOIN pg_namespace AS pg_n
ON pg_p.pronamespace = pg_n.oid
GROUP BY
  pg_t.oid,
  pg_t.tgrelid,
  pg_t.tgenabled,
  pg_t.tgargs,
  pg_t.tgnargs,
  is_t.trigger_name,
  is_t.event_object_table,
  is_t.event_object_schema,
  is_t.action_condition,
  is_t.action_orientation,
  is_t.action_timing,
  pg_p.proname,
  pg_n.nspname
`,eD=a.z.object({id:a.z.number(),table_id:a.z.number(),enabled_mode:a.z.enum(["DISABLED","ORIGIN","REPLICA","ALWAYS"]),function_args:a.z.array(a.z.string()),name:a.z.string(),table:a.z.string(),schema:a.z.string(),condition:a.z.string().nullable(),orientation:a.z.string(),activation:a.z.string(),events:a.z.array(a.z.string()),function_name:a.z.string(),function_schema:a.z.string()}),ex=a.z.array(eD),ez=a.z.optional(eD);a.z.object({name:a.z.string(),schema:a.z.string().optional().default("public"),table:a.z.string(),function_schema:a.z.string().optional().default("public"),function_name:a.z.string(),function_args:a.z.array(a.z.string()).optional(),activation:a.z.enum(["BEFORE","AFTER","INSTEAD OF"]),events:a.z.array(a.z.string()),orientation:a.z.enum(["ROW","STATEMENT"]).optional(),condition:a.z.string().optional()}),a.z.object({name:a.z.string().optional(),enabled_mode:a.z.enum(["ORIGIN","REPLICA","ALWAYS","DISABLED"]).optional()});let ew=`
select
  t.oid::int8 as id,
  t.typname as name,
  n.nspname as schema,
  format_type (t.oid, null) as format,
  coalesce(t_enums.enums, '[]') as enums,
  coalesce(t_attributes.attributes, '[]') as attributes,
  obj_description (t.oid, 'pg_type') as comment
from
  pg_type t
  left join pg_namespace n on n.oid = t.typnamespace
  left join (
    select
      enumtypid,
      jsonb_agg(enumlabel order by enumsortorder) as enums
    from
      pg_enum
    group by
      enumtypid
  ) as t_enums on t_enums.enumtypid = t.oid
  left join (
    select
      oid,
      jsonb_agg(
        jsonb_build_object('name', a.attname, 'type_id', a.atttypid::int8)
        order by a.attnum asc
      ) as attributes
    from
      pg_class c
      join pg_attribute a on a.attrelid = c.oid
    where
      c.relkind = 'c' and not a.attisdropped
    group by
      c.oid
  ) as t_attributes on t_attributes.oid = t.typrelid
where
  (
    t.typrelid = 0
    or (
      select
        c.relkind = 'c'
      from
        pg_class c
      where
        c.oid = t.typrelid
    )
  )
`,eF=a.z.object({id:a.z.number(),name:a.z.string(),schema:a.z.string(),format:a.z.string(),enums:a.z.array(a.z.string()),attributes:a.z.array(a.z.object({name:a.z.string(),type_id:a.z.number()})),comment:a.z.string().nullable()}),eH=a.z.array(eF),ej=`
select
  version(),
  current_setting('server_version_num')::int8 as version_number,
  (
    select
      count(*) as active_connections
    from
      pg_stat_activity
  ) as active_connections,
  current_setting('max_connections')::int8 as max_connections
`,eq=a.z.object({version:a.z.string(),version_number:a.z.number(),active_connections:a.z.number(),max_connections:a.z.number()}),eU=`
SELECT
  c.oid :: int8 AS id,
  n.nspname AS schema,
  c.relname AS name,
  (pg_relation_is_updatable(c.oid, false) & 20) = 20 AS is_updatable,
  obj_description(c.oid) AS comment
FROM
  pg_class c
  JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE
  c.relkind = 'v'
`,ek=a.z.object({id:a.z.number(),schema:a.z.string(),name:a.z.string(),is_updatable:a.z.boolean(),comment:a.z.string().nullable(),columns:p.optional()}),eM=a.z.array(ek),eP=a.z.optional(ek),eW=({includeColumns:e})=>`
with views as (${eU})
  ${e?`, columns as (${_})`:""}
select
  *
  ${e?`, ${r("columns","columns.table_id = views.id")}`:""}
from views`;e.i(967533);var eG=e.i(721490),eB=e.i(332357),eY=e.i(193767),eX=e.i(212695),eJ=e.i(29659);e.s(["Query",()=>eG.Query,"QueryAction",()=>eX.QueryAction,"QueryFilter",()=>eY.QueryFilter,"QueryModifier",()=>eJ.QueryModifier,"countQuery",()=>eB.countQuery,"deleteQuery",()=>eB.deleteQuery,"insertQuery",()=>eB.insertQuery,"selectQuery",()=>eB.selectQuery,"truncateQuery",()=>eB.truncateQuery,"updateQuery",()=>eB.updateQuery],377171);var eQ=e.i(377171);function eK(e,t){let a=e.replace(/'/g,"''"),n=t.replace(/'/g,"''"),i=a.toLowerCase().replace(/[.+*?^${}()|[\]\\]/g,"\\$&"),r=n.toLowerCase().replace(/[.+*?^${}()|[\]\\]/g,"\\$&");return`
-- Get top 5 SELECT queries involving this table and run through index_advisor
set search_path to public, extensions;

with top_queries as (
  select
    statements.query,
    statements.calls,
    statements.total_exec_time + statements.total_plan_time as total_time,
    statements.mean_exec_time + statements.mean_plan_time as mean_time
  from pg_stat_statements as statements
    inner join pg_authid as auth on statements.userid = auth.oid
  where
    -- Filter for SELECT queries only (index_advisor only works with SELECT)
    (lower(statements.query) like 'select%' or lower(statements.query) like 'with pgrst%')
    -- Filter for queries involving our table. Use regex word boundaries so that e.g.
    -- looking for table "orders" does not match queries on "orders_items".
    and (
      lower(statements.query) ~ '(^|[^a-z0-9_$])${i}[.]${r}($|[^a-z0-9_$])'
      or lower(statements.query) ~ '(^|[^a-z0-9_$])from[[:space:]]+${r}($|[^a-z0-9_$])'
      or lower(statements.query) ~ '(^|[^a-z0-9_$])join[[:space:]]+${r}($|[^a-z0-9_$])'
    )
    -- Exclude system queries
    and statements.query not like '%pg_catalog%'
    and statements.query not like '%information_schema%'
  order by statements.calls desc
  limit 5
)
select
  tq.query,
  tq.calls,
  tq.total_time,
  tq.mean_time,
  coalesce(ia.index_statements, '{}') as index_statements,
  coalesce((ia.startup_cost_before)::numeric, 0) as startup_cost_before,
  coalesce((ia.startup_cost_after)::numeric, 0) as startup_cost_after,
  coalesce((ia.total_cost_before)::numeric, 0) as total_cost_before,
  coalesce((ia.total_cost_after)::numeric, 0) as total_cost_after
from top_queries tq
left join lateral (
  select * from index_advisor(tq.query)
) ia on true;
`.trim()}e.s(["getTableIndexAdvisorSql",()=>eK],774105);let eV=["idx_users_email","idx_users_created_at_desc","idx_users_last_sign_in_at_desc","idx_users_name","users_phone_key"];function eZ(e,t){let a="00000000-0000-0000-0000-000000000000".split("").map((t,a)=>"-"===t?t:e[a]??t);if(e.length>=a.length)return a.join("");if(e.length&&e.length<15&&(a[14]="4"),e.length&&e.length<20&&(a[19]=t?"b":"8"),t)for(let t=e.length;t<a.length;t+=1)"0"===a[t]&&(a[t]="f");return a.join("")}function e0(e){if(!e)return[e,void 0];let t=e.charCodeAt(e.length-1);if(122===t)return[e,e+"~"];if(t>=126)return[e,e+" "];let a=e.substring(0,e.length-1)+String.fromCharCode(t+1);return[e,a]}e.s(["USER_SEARCH_INDEXES",0,eV,"getIndexStatusesSQL",0,()=>`SELECT c.relname as index_name, i.indisvalid as is_valid, i.indisready as is_ready
    FROM pg_index i
    JOIN pg_class c ON c.oid = i.indexrelid
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE n.nspname = 'auth'
    AND c.relname IN (${eV.map(i.literal).join(", ")});`],822797),e.s(["getIndexWorkerStatusSQL",0,()=>`SELECT EXISTS (
    SELECT 1 FROM pg_locks
    WHERE locktype = 'advisory'
    AND (classid::bigint << 32 | objid::bigint) = hashtext('auth_index_worker')::bigint
  ) as is_in_progress;`],306255),e.s(["getUserSQL",0,e=>`
select
  auth.users.id,
  auth.users.email,
  auth.users.banned_until,
  auth.users.created_at,
  auth.users.confirmed_at,
  auth.users.confirmation_sent_at,
  auth.users.is_anonymous,
  auth.users.is_sso_user,
  auth.users.invited_at,
  auth.users.last_sign_in_at,
  auth.users.phone,
  auth.users.raw_app_meta_data,
  auth.users.raw_user_meta_data,
  auth.users.updated_at,
  coalesce(
    (
      select
        array_agg(distinct i.provider)
      from
        auth.identities i
      where
        i.user_id = users.id
    ),
    '{}'::text[]
  ) as providers
from
  auth.users
where id = '${e}';
`.trim()],100121);let e1=`
CREATE OR REPLACE FUNCTION pg_temp.count_estimate(
    query text
) RETURNS integer LANGUAGE plpgsql AS $$
DECLARE
    plan jsonb;
BEGIN
    EXECUTE 'EXPLAIN (FORMAT JSON)' || query INTO plan;
    RETURN plan->0->'Plan'->'Plan Rows';
END;
$$;
`.trim();e.s(["COUNT_ESTIMATE_SQL",0,e1,"THRESHOLD_COUNT",0,5e4],247309),e.s(["getUsersCountSQL",0,({filter:e,keywords:t,providers:a,forceExactCount:n=!1,column:r})=>{let s=t&&""!==t,o=[],l="select count(*) from auth.users";if(r&&s){if("email"===r){let e=e0(t),a=(0,i.literal)(e[0]),n=e[1]?(0,i.literal)(e[1]):null;o.push(`lower(email) >= ${a}${n?` and lower(email) < ${n}`:""} and instance_id = '00000000-0000-0000-0000-000000000000'::uuid`)}else if("phone"===r){let e=e0(t),a=(0,i.literal)(e[0]),n=e[1]?(0,i.literal)(e[1]):null;o.push(`phone >= ${a}${n?` and phone < ${n}`:""}`)}else if("id"===r){let e=eZ(t,!1);if(e===t)o.push(`id = ${(0,i.literal)(t)}`);else{let a=eZ(t,!0);o.push(`id >= ${(0,i.literal)(e)} and id < ${(0,i.literal)(a)}`)}}}else{if(s){let e=(0,i.literal)(`%${t}%`);o.push(`id::text ilike ${e} or email ilike ${e} or phone ilike ${e}`)}if("verified"===e?o.push("email_confirmed_at IS NOT NULL or phone_confirmed_at IS NOT NULL"):"anonymous"===e?o.push("is_anonymous is true"):"unverified"===e&&o.push("email_confirmed_at IS NULL AND phone_confirmed_at IS NULL"),a&&a.length>0)if(a.includes("saml 2.0")){let e=a.map(e=>"saml 2.0"===e?"sso":e);o.push(`(select jsonb_agg(case when value ~ '^sso' then 'sso' else value end) from jsonb_array_elements_text((raw_app_meta_data ->> 'providers')::jsonb)) ?| array[${(0,i.literal)(e)}]`.trim())}else o.push(`(raw_app_meta_data->>'providers')::jsonb ?| array[${(0,i.literal)(a)}]`)}let c=o.map(e=>`(${e})`).join(" and "),d=o.length>0?` where ${c}`:"";if(n)return`select (${l}${d}), false as is_estimate;`;{let e=`select * from auth.users${d}`,t=`${l}${d}`,a=(0,i.literal)(e);return`
${e1}

with approximation as (select reltuples as estimate from pg_class where oid = 'auth.users'::regclass)
select 
  case 
    when estimate = -1 then (select pg_temp.count_estimate(${a}))::int
    when estimate > 50000 then ${o.length>0?`(select pg_temp.count_estimate(${a}))::int`:"estimate::int"}
    else (${t})
  end as count,
  estimate = -1 or estimate > 50000 as is_estimate
from approximation;
`.trim()}}],640696);let e2=50;e.s(["getPaginatedUsersSQL",0,({page:e=0,verified:t,keywords:a,providers:n,sort:r,order:s,limit:o=e2,column:l,startAt:c,cursor:d,improvedSearchEnabled:_=!1})=>{if(_)return(({column:e,keywords:t,verified:a,providers:n,sort:r,order:s,cursor:o,limit:l=e2})=>{let c=[];if(t&&""!==t){if("email"===e){let e=e0(t);e[1]?c.push(`email >= ${(0,i.literal)(e[0])} AND email < ${(0,i.literal)(e[1])}`):c.push(`email >= ${(0,i.literal)(e[0])}`)}else if("phone"===e){let e=e0(t);e[1]?c.push(`phone >= ${(0,i.literal)(e[0])} AND phone < ${(0,i.literal)(e[1])}`):c.push(`phone >= ${(0,i.literal)(e[0])}`)}else if("id"===e)c.push(`id = ${(0,i.literal)(t)}`);else if("name"===e){let e=e0(t);e[1]?c.push(`raw_user_meta_data->>'name' >= ${(0,i.literal)(e[0])} AND raw_user_meta_data->>'name' < ${(0,i.literal)(e[1])}`):c.push(`raw_user_meta_data->>'name' >= ${(0,i.literal)(e[0])}`)}}"verified"===a?c.push("(email_confirmed_at IS NOT NULL OR phone_confirmed_at IS NOT NULL)"):"anonymous"===a?c.push("is_anonymous IS TRUE"):"unverified"===a&&c.push("(email_confirmed_at IS NULL AND phone_confirmed_at IS NULL)"),n&&n.length>0&&(n.includes("saml 2.0")?c.push(`(SELECT jsonb_agg(CASE WHEN value ~ '^sso' THEN 'sso' ELSE value END) FROM jsonb_array_elements_text((raw_app_meta_data ->> 'providers')::jsonb)) ?| array[${n.map(e=>(0,i.literal)("saml 2.0"===e?"sso":e)).join(", ")}]`):c.push(`(raw_app_meta_data->>'providers')::jsonb ?| array[${n.map(e=>(0,i.literal)(e)).join(", ")}]`));let d=r??"created_at",_=s??"desc";if(o){let e="desc"===_?"<":">";"id"===d?c.push(`id ${e} ${(0,i.literal)(o.id)}::uuid`):c.push(`(${(0,i.ident)(d)}, id) ${e} (${(0,i.literal)(o.sort)}, ${(0,i.literal)(o.id)}::uuid)`)}let m=c.map(e=>`(${e})`).join(" AND "),p=c.length>0?`WHERE ${m}`:"",u="id"===d?`${(0,i.ident)(d)} ${_}`:`${(0,i.ident)(d)} ${_}, id ${_}`,E=`
    SELECT
      auth.users.id,
      auth.users.email,
      auth.users.banned_until,
      auth.users.created_at,
      auth.users.confirmed_at,
      auth.users.confirmation_sent_at,
      auth.users.is_anonymous,
      auth.users.is_sso_user,
      auth.users.invited_at,
      auth.users.last_sign_in_at,
      auth.users.phone,
      auth.users.raw_app_meta_data,
      auth.users.raw_user_meta_data
    FROM
      auth.users
    ${p}
    ORDER BY
      ${u}
    LIMIT
      ${l}`;return`
WITH
  users_data AS (${E})
SELECT
  *,
  COALESCE(
    (
      SELECT
        array_agg(DISTINCT i.provider)
      FROM
        auth.identities i
      WHERE
        i.user_id = users_data.id
    ),
    '{}'::text[]
  ) AS providers
FROM
  users_data;`.trim()})({column:l??"email",keywords:a,verified:t,providers:n,sort:r,order:s,limit:o,cursor:d});let m=e*o,p=[];if(a&&""!==a){let e=`%${a}%`;p.push(`id::text like ${(0,i.literal)(e)} or email like ${(0,i.literal)(e)} or phone like ${(0,i.literal)(e)} or raw_user_meta_data->>'full_name' ilike ${(0,i.literal)(e)} or raw_user_meta_data->>'first_name' ilike ${(0,i.literal)(e)} or raw_user_meta_data->>'last_name' ilike ${(0,i.literal)(e)} or raw_user_meta_data->>'display_name' ilike ${(0,i.literal)(e)}`)}"verified"===t?p.push("email_confirmed_at IS NOT NULL or phone_confirmed_at IS NOT NULL"):"anonymous"===t?p.push("is_anonymous is true"):"unverified"===t&&p.push("email_confirmed_at IS NULL AND phone_confirmed_at IS NULL"),n&&n.length>0&&(n.includes("saml 2.0")?p.push(`(select jsonb_agg(case when value ~ '^sso' then 'sso' else value end) from jsonb_array_elements_text((raw_app_meta_data ->> 'providers')::jsonb)) ?| array[${n.map(e=>(0,i.literal)("saml 2.0"===e?"sso":e)).join(", ")}]`.trim()):p.push(`(raw_app_meta_data->>'providers')::jsonb ?| array[${n.map(e=>(0,i.literal)(e)).join(", ")}]`));let u=p.map(e=>`(${e})`).join(" and "),E=s??"desc",g=`${p.length>0?` where ${u}`:""}
    order by
      ${(0,i.ident)(r??"created_at")} ${E} nulls last
    limit
      ${o}
    offset
      ${m}
  `,b=c?">":">=";if("email"===l){let e=e0(a??"");g=`where lower(email) ${b} ${(0,i.literal)(c||e[0])} ${e[1]?`and lower(email) < ${(0,i.literal)(e[1])}`:""} and instance_id = '00000000-0000-0000-0000-000000000000'::uuid order by instance_id, lower(email) asc limit ${o}`}else if("phone"===l){let e=e0(a??"");g=`where phone ${b} ${(0,i.literal)(c||e[0])} ${e[1]?`and phone < ${(0,i.literal)(e[1])}`:""} order by phone asc limit ${o}`}else"id"===l&&(g=eZ(a??"",!1)===a?`where id = ${(0,i.literal)(a)} order by id asc limit ${o}`:`where id ${b} ${(0,i.literal)(c||eZ(a??"",!1))} and id < ${(0,i.literal)(eZ(a??"",!0))} order by id asc limit ${o}`);let h=`
    select
      auth.users.id,
      auth.users.email,
      auth.users.banned_until,
      auth.users.created_at,
      auth.users.confirmed_at,
      auth.users.confirmation_sent_at,
      auth.users.is_anonymous,
      auth.users.is_sso_user,
      auth.users.invited_at,
      auth.users.last_sign_in_at,
      auth.users.phone,
      auth.users.raw_app_meta_data,
      auth.users.raw_user_meta_data,
      auth.users.updated_at
    from
      auth.users
    ${g}`;return`
with
  users_data as (${h})
select
  *,
  coalesce(
    (
      select
        array_agg(distinct i.provider)
      from
        auth.identities i
      where
        i.user_id = users_data.id
    ),
    '{}'::text[]
  ) as providers
from
  users_data;
  `.trim()}],556955);let e3=`
SELECT id, name, file_size_limit
FROM storage.buckets
WHERE file_size_limit IS NOT NULL
ORDER BY file_size_limit DESC
LIMIT 51;
`.trim();function e8({search:e,ignoredSchemas:t=[]}={}){let a=t.map(e=>`'${e}'`).join(", ");return`
    table_privileges as (
      select
        c.oid::int as id,
        n.nspname as schema_name,
        c.relname as name,
        c.relkind as kind,

        -- Anon Privileges
        bool_or(pr.rolname = 'anon' and acl.privilege_type = 'SELECT') as anon_select,
        bool_or(pr.rolname = 'anon' and acl.privilege_type = 'INSERT') as anon_insert,
        bool_or(pr.rolname = 'anon' and acl.privilege_type = 'UPDATE') as anon_update,
        bool_or(pr.rolname = 'anon' and acl.privilege_type = 'DELETE') as anon_delete,

        -- Authenticated Privileges
        bool_or(pr.rolname = 'authenticated' and acl.privilege_type = 'SELECT') as auth_select,
        bool_or(pr.rolname = 'authenticated' and acl.privilege_type = 'INSERT') as auth_insert,
        bool_or(pr.rolname = 'authenticated' and acl.privilege_type = 'UPDATE') as auth_update,
        bool_or(pr.rolname = 'authenticated' and acl.privilege_type = 'DELETE') as auth_delete,

        -- Service Role Privileges
        bool_or(pr.rolname = 'service_role' and acl.privilege_type = 'SELECT') as srv_select,
        bool_or(pr.rolname = 'service_role' and acl.privilege_type = 'INSERT') as srv_insert,
        bool_or(pr.rolname = 'service_role' and acl.privilege_type = 'UPDATE') as srv_update,
        bool_or(pr.rolname = 'service_role' and acl.privilege_type = 'DELETE') as srv_delete

      from pg_class c
      join pg_namespace n
        on n.oid = c.relnamespace
      left join lateral aclexplode(coalesce(c.relacl, acldefault('r', c.relowner))) as acl
        on true
      left join pg_roles pr
        on pr.oid = acl.grantee
      where c.relkind in ('r', 'p', 'v', 'm', 'f')
        ${a?`and n.nspname not in (${a})`:""}
        ${e?`and (n.nspname || '.' || c.relname) ilike '%${e}%'`:""}
      group by c.oid, n.nspname, c.relname, c.relkind
    ),
    table_grants as (
      select
        id,
        schema_name,
        name,
        kind,
        case
          -- 1. Strict Granted: All 3 roles possess ALL 4 privileges
          when (
            anon_select and anon_insert and anon_update and anon_delete and
            auth_select and auth_insert and auth_update and auth_delete and
            srv_select and srv_insert and srv_update and srv_delete
          ) then 'granted'

          -- 2. Strict Revoked: NO role possesses ANY privilege
          when not (
            anon_select or anon_insert or anon_update or anon_delete or
            auth_select or auth_insert or auth_update or auth_delete or
            srv_select or srv_insert or srv_update or srv_delete
          ) then 'revoked'

          -- 3. Custom: Anything in between
          else 'custom'
        end as status
      from table_privileges
    )
  `}function e7({search:e,offset:t,limit:a,ignoredSchemas:n=[]}){return`
    with ${e8({search:e,ignoredSchemas:n})}
    select
      (select count(*)::int from table_grants) as total_count,
      coalesce(
        (
          select jsonb_agg(
            jsonb_build_object(
              'id', tg.id,
              'schema', tg.schema_name,
              'name', tg.name,
              'status', tg.status
            )
          )
          from (
            select *
            from table_grants
            order by schema_name, name
            offset ${t}
            limit ${a}
          ) tg
        ),
        '[]'::jsonb
      ) as tables;
  `}function e5({selectedSchemas:e,ignoredSchemas:t=[]}){let a=e.length>0?e.map(e=>`'${e}'`).join(", "):"''";return`
    with ${e8({ignoredSchemas:t})}
    select
      count(*)::int as total_count,
      (count(*) filter (where status = 'granted' and schema_name in (${a})))::int as grants_count
    from table_grants
  `}function e6({search:e,ignoredSchemas:t=[]}={}){let a=t.map(e=>`'${e}'`).join(", ");return`
    function_privileges as (
      select
        n.nspname as schema_name,
        p.proname as name,

        -- Aggregate EXECUTE across all overloads + all 3 roles
        bool_or(pr.rolname = 'anon' and acl.privilege_type = 'EXECUTE') as anon_execute,
        bool_or(pr.rolname = 'authenticated' and acl.privilege_type = 'EXECUTE') as auth_execute,
        bool_or(pr.rolname = 'service_role' and acl.privilege_type = 'EXECUTE') as srv_execute

      from pg_proc p
      join pg_namespace n
        on n.oid = p.pronamespace
      left join lateral aclexplode(coalesce(p.proacl, acldefault('f', p.proowner))) as acl
        on true
      left join pg_roles pr
        on pr.oid = acl.grantee
      where p.prokind in ('f', 'w')
        ${a?`and n.nspname not in (${a})`:""}
        ${e?`and (n.nspname || '.' || p.proname) ilike '%${e}%'`:""}
      group by n.nspname, p.proname
    ),
    function_grants as (
      select
        schema_name,
        name,
        case
          when anon_execute and auth_execute and srv_execute then 'granted'
          when not (anon_execute or auth_execute or srv_execute) then 'revoked'
          else 'custom'
        end as status
      from function_privileges
    )
  `}function e4({search:e,offset:t,limit:a,ignoredSchemas:n=[]}){return`
    with ${e6({search:e,ignoredSchemas:n})}
    select
      (select count(*)::int from function_grants) as total_count,
      coalesce(
        (
          select jsonb_agg(
            jsonb_build_object(
              'schema', fg.schema_name,
              'name', fg.name,
              'status', fg.status
            )
          )
          from (
            select *
            from function_grants
            order by schema_name, name
            offset ${t}
            limit ${a}
          ) fg
        ),
        '[]'::jsonb
      ) as functions;
  `}function e9({selectedSchemas:e,ignoredSchemas:t=[]}){let a=e.length>0?e.map(e=>`'${e}'`).join(", "):"''";return`
    with ${e6({ignoredSchemas:t})}
    select
      count(*)::int as total_count,
      (count(*) filter (where status = 'granted' and schema_name in (${a})))::int as grants_count
    from function_grants
  `}function te({schema:e="public"}={}){return`
    select
      count(*)::int as grant_count
    from pg_default_acl d
    join pg_namespace n on n.oid = d.defaclnamespace
    join pg_roles r on r.oid = d.defaclrole
    where n.nspname = '${e}'
      and r.rolname = 'postgres'
      and d.defaclobjtype in ('r', 'f', 'S')
      and exists (
        select 1
        from aclexplode(d.defaclacl) acl
        join pg_roles gr on gr.oid = acl.grantee
        where gr.rolname in ('anon', 'authenticated', 'service_role')
      )
  `}function tt(e){let t=[];for(let a of["anon","authenticated","service_role"])"grant"===e?t.push(`alter default privileges for role postgres in schema public grant select, insert, update, delete on tables to ${a}`,`alter default privileges for role postgres in schema public grant execute on functions to ${a}`,`alter default privileges for role postgres in schema public grant usage, select on sequences to ${a}`):t.push(`alter default privileges for role postgres in schema public revoke select, insert, update, delete on tables from ${a}`,`alter default privileges for role postgres in schema public revoke execute on functions from ${a}`,`alter default privileges for role postgres in schema public revoke usage, select on sequences from ${a}`);return"revoke"===e?t.push("alter default privileges for role postgres in schema public revoke execute on functions from public"):t.push("alter default privileges for role postgres in schema public grant execute on functions to public"),t.join(";\n")+";"}e.s(["LARGEST_SIZE_LIMIT_BUCKETS_COUNT",0,50,"getLargestSizeLimitBucketsSqlUnoptimized",0,e3],517638),e.s(["getTablesWithAnonAuthenticatedAccessSQL",0,({schema:e})=>`
SELECT c.relname AS table_name
FROM pg_catalog.pg_class AS c
JOIN pg_catalog.pg_namespace AS n ON n.oid = c.relnamespace
WHERE n.nspname = '${e}'
  AND c.relkind IN ('r','p')  -- table, partitioned table
  AND EXISTS (
    SELECT 1
    FROM pg_catalog.aclexplode(COALESCE(c.relacl, '{}'::aclitem[])) AS a
    JOIN pg_catalog.pg_roles r ON r.oid = a.grantee
    WHERE r.rolname IN ('anon','authenticated')
  )
;
`.trim()],997780),e.s(["getTableColumnsSql",0,({table:e,schema:t})=>{let a=[];e&&a.push(`tablename = '${e}'`),t&&a.push(`schemaname = '${t}'`);let n=a.length>0?`WHERE ${a.join(" AND ")}`:"";return`
  
  SELECT
    tbl.schemaname,
    tbl.tablename,
    tbl.quoted_name,
    tbl.is_table,
    json_agg(a) as columns
  FROM
    (
      SELECT
        n.nspname as schemaname,
        c.relname as tablename,
        (quote_ident(n.nspname) || '.' || quote_ident(c.relname)) as quoted_name,
        true as is_table
      FROM
        pg_catalog.pg_class c
        JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
      WHERE
        c.relkind = 'r'
        AND n.nspname not in ('information_schema', 'pg_catalog', 'pg_toast')
        AND n.nspname not like 'pg_temp_%'
        AND n.nspname not like 'pg_toast_temp_%'
        AND has_schema_privilege(n.oid, 'USAGE') = true
        AND has_table_privilege(quote_ident(n.nspname) || '.' || quote_ident(c.relname), 'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER') = true
      union all
      SELECT
        n.nspname as schemaname,
        c.relname as tablename,
        (quote_ident(n.nspname) || '.' || quote_ident(c.relname)) as quoted_name,
        false as is_table
      FROM
        pg_catalog.pg_class c
        JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
      WHERE
        c.relkind in ('v', 'm')
        AND n.nspname not in ('information_schema', 'pg_catalog', 'pg_toast')
        AND n.nspname not like 'pg_temp_%'
        AND n.nspname not like 'pg_toast_temp_%'
        AND has_schema_privilege(n.oid, 'USAGE') = true
        AND has_table_privilege(quote_ident(n.nspname) || '.' || quote_ident(c.relname), 'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER') = true
    ) as tbl
    LEFT JOIN (
      SELECT
        attrelid,
        attname,
        format_type(atttypid, atttypmod) as data_type,
        attnum,
        attisdropped
      FROM
        pg_attribute
    ) as a ON (
      a.attrelid = tbl.quoted_name::regclass
      AND a.attnum > 0
      AND NOT a.attisdropped
      AND has_column_privilege(tbl.quoted_name, a.attname, 'SELECT, INSERT, UPDATE, REFERENCES')
    )
  ${n}
  GROUP BY schemaname, tablename, quoted_name, is_table;
`.trim()}],636787),e.s(["getCronJobsMinimalSql",0,({searchTerm:e,page:t,limit:a})=>`
SELECT 
  job.jobid,
  job.jobname,
  job.schedule,
  job.command,
  job.active
FROM 
  cron.job job
${e?`WHERE job.jobname ILIKE ${(0,i.literal)(`%${e}%`)}`:""}
ORDER BY job.jobid
LIMIT ${a}
OFFSET ${t*a};
`.trim(),"getCronJobsSql",0,({searchTerm:e,page:t,limit:a})=>`
WITH latest_runs AS (
  SELECT 
    jobid,
    status,
    MAX(start_time) AS latest_run
  FROM cron.job_run_details
  GROUP BY jobid, status
), most_recent_runs AS (
  SELECT 
    jobid, 
    status, 
    latest_run
  FROM latest_runs lr1
  WHERE latest_run = (
    SELECT MAX(latest_run) 
    FROM latest_runs lr2 
    WHERE lr2.jobid = lr1.jobid
  )
)
SELECT 
  job.jobid,
  job.jobname,
  job.schedule,
  job.command,
  job.active,
  mr.latest_run,
  mr.status
FROM 
  cron.job job
LEFT JOIN most_recent_runs mr ON job.jobid = mr.jobid
${e?`WHERE job.jobname ILIKE ${(0,i.literal)(`%${e}%`)}`:""}
ORDER BY job.jobid
LIMIT ${a}
OFFSET ${t*a};
`.trim(),"getDeleteOldCronJobRunDetailsByCtidSql",0,(e,t,a)=>{let n=(0,i.literal)(`(${t},0)`),r=(0,i.literal)(`(${a},0)`);return`
WITH deleted AS (
  DELETE FROM cron.job_run_details
  WHERE ctid >= ${n}::tid
    AND ctid < ${r}::tid
    AND end_time < now() - interval ${(0,i.literal)(e)}
  RETURNING 1
)
SELECT count(*) as deleted_count FROM deleted;
`.trim()},"getJobRunDetailsPageCountSql",0,()=>`
SELECT pg_relation_size(oid) / current_setting('block_size')::int8 AS num_pages
FROM pg_class
WHERE relname = 'job_run_details'
  AND relnamespace = 'cron'::regnamespace;
`.trim(),"getScheduleDeleteCronJobRunDetailsSql",0,e=>`
SELECT cron.schedule(
  ${(0,i.literal)("delete-job-run-details")},
  ${(0,i.literal)("0 12 * * *")},
  $$DELETE FROM cron.job_run_details WHERE end_time < now() - interval ${(0,i.literal)(e)}$$
);
`.trim()],467394),e.s(["getDatabaseExtensionDefaultSchemaSQL",0,({extension:e})=>`
select name, version, schema from pg_available_extension_versions where name = ${(0,i.literal)(e)} limit 1;
`.trim()],53336),e.s(["getIndexesSQL",0,({schema:e})=>`
SELECT
  n.nspname        AS schema,
  t.relname        AS "table",
  i.relname        AS name,
  pg_get_indexdef(idx.indexrelid) AS definition,
  STRING_AGG(
    COALESCE(a.attname, '(expression)'),
    ', ' ORDER BY k.ord
  ) AS columns
FROM pg_index idx
JOIN pg_class      t ON t.oid = idx.indrelid
JOIN pg_class      i ON i.oid = idx.indexrelid
JOIN pg_namespace  n ON n.oid = t.relnamespace
JOIN LATERAL unnest(idx.indkey) WITH ORDINALITY AS k(attnum, ord) ON TRUE
LEFT JOIN pg_attribute a
  ON a.attrelid = t.oid
 AND a.attnum   = k.attnum
WHERE n.nspname = '${e}'
GROUP BY
  n.nspname,
  t.relname,
  i.relname,
  idx.indexrelid
ORDER BY
  schema, "table", name;
`.trim()],152770),e.s(["getMigrationsSql",0,()=>`
    select
      *
    from supabase_migrations.schema_migrations sm
    order by sm.version desc
  `.trim()],439137),e.s(["getDatabaseSizeSql",0,()=>`
select sum(pg_database_size(pg_database.datname))::bigint as db_size from pg_database;
`.trim(),"getLiveTupleEstimate",0,(e,t="public")=>`
SELECT n_live_tup AS live_tuple_estimate
FROM pg_stat_user_tables
WHERE schemaname = ${(0,i.literal)(t)}
AND relname = ${(0,i.literal)(e)};
`.trim(),"getMaxConnectionsSql",0,()=>"show max_connections","replicationLagSql",0,()=>`
select 
  case
    when (select count(*) from pg_stat_wal_receiver) = 1 and pg_last_wal_receive_lsn() = pg_last_wal_replay_lsn()
    then 0
    else coalesce(extract(epoch from now() - pg_last_xact_replay_timestamp()),0)
  end as physical_replica_lag_second
  `],345942),e.s(["buildDefaultPrivilegesSql",()=>tt,"buildFunctionPrivilegesSql",0,(e,t)=>{if(0===e.length)return"";let a=e.map(e=>{let t=e.indexOf("."),a=e.slice(0,t),n=e.slice(t+1);return`('${a}','${n}')`}).join(", ");return`
    do $$
    declare
      nspname name;
      proname name;
      arg_types text;
    begin
      for nspname, proname, arg_types in
        select n.nspname, p.proname, pg_get_function_identity_arguments(p.oid)
        from pg_proc p
        join pg_namespace n on n.oid = p.pronamespace
        where (n.nspname, p.proname) in (${a})
      loop
        execute format('${"grant"===t?"grant execute on function %I.%I(%s) to anon, authenticated, service_role":"revoke all on function %I.%I(%s) from anon, authenticated, service_role"}', nspname, proname, arg_types);
      end loop;
    end $$;
  `},"buildTablePrivilegesSql",0,(e,t)=>0===e.length?"":`
    do $$
    declare
      nspname name;
      relname name;
    begin
      for nspname, relname in
        select n.nspname, c.relname
        from pg_class c
        join pg_namespace n on n.oid = c.relnamespace
        where c.oid in (${e.join(", ")})
      loop
        execute format('${"grant"===t?"grant select, insert, update, delete on table %I.%I to anon, authenticated, service_role":"revoke all on table %I.%I from anon, authenticated, service_role"}', nspname, relname);
      end loop;
    end $$;
  `,"getDefaultPrivilegesStateSql",()=>te,"getExposedFunctionCountsSql",()=>e9,"getExposedFunctionsSql",()=>e4,"getExposedTableCountsSql",()=>e5,"getExposedTablesSql",()=>e7],757489);let ta="pgmq_public",tn=`
  drop function if exists 
    ${ta}.pop(queue_name text),
    ${ta}.send(queue_name text, message jsonb, sleep_seconds integer),
    ${ta}.send_batch(queue_name text, message jsonb[], sleep_seconds integer),
    ${ta}.archive(queue_name text, message_id bigint),
    ${ta}.delete(queue_name text, message_id bigint),
    ${ta}.read(queue_name text, sleep integer, n integer)
  ;

  -- Revoke execute permissions on inner pgmq functions to roles (inverse of enabling)
  do $$
  begin
      if exists (select 1 from pg_namespace where nspname = 'pgmq') then
          -- Revoke privileges on the schema itself
          revoke all on schema pgmq from anon, authenticated, service_role;
          
          -- Revoke default privileges for future objects
          alter default privileges in schema pgmq revoke all on tables from anon, authenticated, service_role;
          alter default privileges in schema pgmq revoke all on sequences from anon, authenticated, service_role;
          alter default privileges in schema pgmq revoke all on functions from anon, authenticated, service_role;
      end if;
  end $$;

  drop schema if exists ${ta};
`;e.s(["HIDE_QUEUES_FROM_POSTGREST_SQL",0,tn,"QUEUES_SCHEMA",0,ta,"getExposeQueuesSQL",0,({isNewerPgmqversion:e})=>`
  create schema if not exists ${ta};
  grant usage on schema ${ta} to postgres, anon, authenticated, service_role;

  create or replace function ${ta}.pop(
      queue_name text
  )
    returns setof pgmq.message_record
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.pop(
          queue_name := queue_name
      );
  end;
  $$;

  comment on function ${ta}.pop(queue_name text) is 'Retrieves and locks the next message from the specified queue.';


  create or replace function ${ta}.send(
      queue_name text,
      message jsonb,
      sleep_seconds integer default 0  -- renamed from 'delay'
  )
    returns setof bigint
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.send(
          queue_name := queue_name,
          msg := message,
          delay := sleep_seconds
      );
  end;
  $$;

  comment on function ${ta}.send(queue_name text, message jsonb, sleep_seconds integer) is 'Sends a message to the specified queue, optionally delaying its availability by a number of seconds.';


  create or replace function ${ta}.send_batch(
      queue_name text,
      messages jsonb[],
      sleep_seconds integer default 0  -- renamed from 'delay'
  )
    returns setof bigint
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.send_batch(
          queue_name := queue_name,
          msgs := messages,
          delay := sleep_seconds
      );
  end;
  $$;

  comment on function ${ta}.send_batch(queue_name text, messages jsonb[], sleep_seconds integer) is 'Sends a batch of messages to the specified queue, optionally delaying their availability by a number of seconds.';


  create or replace function ${ta}.archive(
      queue_name text,
      message_id bigint
  )
    returns boolean
    language plpgsql
    set search_path = ''
  as $$
  begin
      return
      pgmq.archive(
          queue_name := queue_name,
          msg_id := message_id
      );
  end;
  $$;

  comment on function ${ta}.archive(queue_name text, message_id bigint) is 'Archives a message by moving it from the queue to a permanent archive.';


  create or replace function ${ta}.delete(
      queue_name text,
      message_id bigint
  )
    returns boolean
    language plpgsql
    set search_path = ''
  as $$
  begin
      return
      pgmq.delete(
          queue_name := queue_name,
          msg_id := message_id
      );
  end;
  $$;

  comment on function ${ta}.delete(queue_name text, message_id bigint) is 'Permanently deletes a message from the specified queue.';

  create or replace function ${ta}.read(
      queue_name text,
      sleep_seconds integer,
      n integer
  )
    returns setof pgmq.message_record
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.read(
          queue_name := queue_name,
          vt := sleep_seconds,
          qty := n ${e?", conditional := '{}'::jsonb":""}
      );
  end;
  $$;

  comment on function ${ta}.read(queue_name text, sleep_seconds integer, n integer) is 'Reads up to "n" messages from the specified queue with an optional "sleep_seconds" (visibility timeout).';

  -- Grant execute permissions on wrapper functions to roles
  grant execute on function ${ta}.pop(text) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.pop(text) to postgres, service_role, anon, authenticated;

  grant execute on function ${ta}.send(text, jsonb, integer) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.send(text, jsonb, integer) to postgres, service_role, anon, authenticated;

  grant execute on function ${ta}.send_batch(text, jsonb[], integer) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.send_batch(text, jsonb[], integer) to postgres, service_role, anon, authenticated;

  grant execute on function ${ta}.archive(text, bigint) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.archive(text, bigint) to postgres, service_role, anon, authenticated;

  grant execute on function ${ta}.delete(text, bigint) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.delete(text, bigint) to postgres, service_role, anon, authenticated;

  grant execute on function ${ta}.read(text, integer, integer) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.read(text, integer, integer ${e?", jsonb":""}) to postgres, service_role, anon, authenticated;

  -- For the service role, we want full access
  -- Grant permissions on existing tables
  grant all privileges on all tables in schema pgmq to postgres, service_role;

  -- Ensure service_role has permissions on future tables
  alter default privileges in schema pgmq grant all privileges on tables to postgres, service_role;

  grant usage on schema pgmq to postgres, anon, authenticated, service_role;


  /*
    Grant access to sequences to API roles by default. Existing table permissions
    continue to enforce insert restrictions. This is necessary to accommodate the
    on-backup hook that rebuild queue table primary keys to avoid a pg_dump segfault.
    This can be removed once logical backups are completely retired.
  */
  grant usage, select, update
  on all sequences in schema pgmq
  to anon, authenticated, service_role;

  alter default privileges in schema pgmq
  grant usage, select, update
  on sequences
  to anon, authenticated, service_role;
`.trim(),"getQueuesExposePostgrestStatusSQL",0,()=>`
    SELECT exists (select schema_name FROM information_schema.schemata WHERE schema_name = '${ta}');
  `.trim()],957386),e.s(["getTableRowsCountSql",0,({table:e,filters:t=[],enforceExactCount:a=!1,isUsingReadReplica:n=!1})=>{if(!e)return"";if(a){let a=new eG.Query().from(e.name,e.schema??void 0).count();return t.filter(e=>e.value&&""!==e.value).forEach(e=>{a=a.filter(e.column,e.operator,e.value)}),`select (${a.toSql().slice(0,-1)}), false as is_estimate;`}{let a=new eG.Query().from(e.name,e.schema??void 0).select("*");t.filter(e=>e.value&&""!=e.value).forEach(e=>{a=a.filter(e.column,e.operator,e.value)});let i=a.toSql(),r=new eG.Query().from(e.name,e.schema??void 0).count();t.filter(e=>e.value&&""!=e.value).forEach(e=>{r=r.filter(e.column,e.operator,e.value)});let s=r.toSql().slice(0,-1);return n?`
with approximation as (
    select reltuples as estimate
    from pg_class
    where oid = ${e.id}
)
select 
  case 
    when estimate > 50000 then (select -1)
    else (${s})
  end as count,
  estimate > 50000 as is_estimate
from approximation;
`.trim():`
${e1}

with approximation as (
    select reltuples as estimate
    from pg_class
    where oid = ${e.id}
)
select 
  case 
    when estimate > 50000 then ${t.length>0?`pg_temp.count_estimate('${i.replaceAll("'","''")}')`:"estimate"}
    else (${s})
  end as count,
  estimate > 50000 as is_estimate
from approximation;
`.trim()}}],779262);let ti=`
  DROP TYPE IF EXISTS pg_temp.tabledefs CASCADE;
  CREATE TYPE pg_temp.tabledefs AS ENUM ('PKEY_INTERNAL','PKEY_EXTERNAL','FKEYS_INTERNAL', 'FKEYS_EXTERNAL', 'COMMENTS', 'FKEYS_NONE', 'INCLUDE_TRIGGERS', 'NO_TRIGGERS');

  -- SELECT * FROM pg_temp.pg_get_coldef('sample','orders','id');
  -- DROP FUNCTION pg_temp.pg_get_coldef(text,text,text,boolean);
  CREATE OR REPLACE FUNCTION pg_temp.pg_get_coldef(
    in_schema text,
    in_table  text,
    in_column text,
    oldway    boolean default False
  )
  RETURNS text
  LANGUAGE plpgsql VOLATILE
  AS
  $$
  DECLARE
  v_coldef     text;
  v_dt1        text;
  v_dt2        text;
  v_dt3        text;
  v_nullable   boolean;
  v_position   int;
  v_identity   text;
  v_generated  text;
  v_hasdflt    boolean;
  v_dfltexpr   text;

  BEGIN
    IF oldway THEN
      SELECT pg_catalog.format_type(a.atttypid, a.atttypmod) INTO v_coldef FROM pg_namespace n, pg_class c, pg_attribute a, pg_type t
      WHERE n.nspname = in_schema AND n.oid = c.relnamespace AND c.relname = in_table AND a.attname = in_column and a.attnum > 0 AND a.attrelid = c.oid AND a.atttypid = t.oid ORDER BY a.attnum;
      -- RAISE NOTICE 'DEBUG: oldway=%',v_coldef;
    ELSE
      -- a.attrelid::regclass::text, a.attname
      SELECT CASE WHEN a.atttypid = ANY ('{int,int8,int2}'::regtype[]) AND EXISTS (SELECT FROM pg_attrdef ad WHERE ad.adrelid = a.attrelid AND ad.adnum   = a.attnum AND
      pg_get_expr(ad.adbin, ad.adrelid) = 'nextval(''' || (pg_get_serial_sequence (a.attrelid::regclass::text, a.attname))::regclass || '''::regclass)') THEN CASE a.atttypid
      WHEN 'int'::regtype  THEN 'serial' WHEN 'int8'::regtype THEN 'bigserial' WHEN 'int2'::regtype THEN 'smallserial' END ELSE format_type(a.atttypid, a.atttypmod) END AS data_type
      INTO v_coldef FROM pg_namespace n, pg_class c, pg_attribute a, pg_type t
      WHERE n.nspname = in_schema AND n.oid = c.relnamespace AND c.relname = in_table AND a.attname = in_column and a.attnum > 0 AND a.attrelid = c.oid AND a.atttypid = t.oid ORDER BY a.attnum;
      -- RAISE NOTICE 'DEBUG: newway=%',v_coldef;

      -- Issue#24: not implemented yet
      -- might replace with this below to do more detailed parsing...
      -- SELECT a.atttypid::regtype AS dt1, format_type(a.atttypid, a.atttypmod) as dt2, t.typname as dt3, CASE WHEN not(a.attnotnull) THEN True ELSE False END AS nullable,
      -- a.attnum, a.attidentity, a.attgenerated, a.atthasdef, pg_get_expr(ad.adbin, ad.adrelid) dfltexpr
      -- INTO v_dt1, v_dt2, v_dt3, v_nullable, v_position, v_identity, v_generated, v_hasdflt, v_dfltexpr
      -- FROM pg_attribute a JOIN pg_class c ON (a.attrelid = c.oid) JOIN pg_type t ON (a.atttypid = t.oid) LEFT JOIN pg_attrdef ad ON (a.attrelid = ad.adrelid AND a.attnum = ad.adnum)
      -- WHERE c.relkind in ('r','p') AND a.attnum > 0 AND NOT a.attisdropped AND c.relnamespace::regnamespace::text = in_schema AND c.relname = in_table AND a.attname = in_column;
      -- RAISE NOTICE 'schema=%  table=%  column=%  dt1=%  dt2=%  dt3=%  nullable=%  pos=%  identity=%   generated=%  HasDefault=%  DeftExpr=%', in_schema, in_table, in_column, v_dt1,v_dt2,v_dt3,v_nullable,v_position,v_identity,v_generated,v_hasdflt,v_dfltexpr;
    END IF;
    RETURN v_coldef;
  END;
  $$;

  -- SELECT * FROM pg_temp.pg_get_tabledef('sample', 'address', false);
  DROP FUNCTION IF EXISTS pg_temp.pg_get_tabledef(character varying,character varying,boolean,tabledefs[]);
  CREATE OR REPLACE FUNCTION pg_temp.pg_get_tabledef(
    in_schema varchar,
    in_table varchar,
    _verbose boolean,
    VARIADIC arr pg_temp.tabledefs[] DEFAULT '{}':: pg_temp.tabledefs[]
  )
  RETURNS text
  LANGUAGE plpgsql VOLATILE
  AS
  $$
    DECLARE
      v_qualified text := '';
      v_table_ddl text;
      v_table_oid int;
      v_colrec record;
      v_constraintrec record;
      v_trigrec       record;
      v_indexrec record;
      v_rec           record;
      v_constraint_name text;
      v_constraint_def  text;
      v_pkey_def        text := '';
      v_fkey_def        text := '';
      v_fkey_defs       text := '';
      v_trigger text := '';
      v_partition_key text := '';
      v_partbound text;
      v_parent text;
      v_parent_schema text;
      v_persist text;
      v_temp  text := '';
      v_temp2 text;
      v_relopts text;
      v_tablespace text;
      v_pgversion int;
      bSerial boolean;
      bPartition boolean;
      bInheritance boolean;
      bRelispartition boolean;
      constraintarr text[] := '{}';
      constraintelement text;
      bSkip boolean;
      bVerbose boolean := False;
      v_cnt1   integer;
      v_cnt2   integer;
      search_path_old text := '';
      search_path_new text := '';
      v_partial    boolean;
      v_pos        integer;

      -- assume defaults for ENUMs at the getgo
      pkcnt            int := 0;
      fkcnt            int := 0;
      trigcnt          int := 0;
      cmtcnt           int := 0;
      pktype           pg_temp.tabledefs := 'PKEY_INTERNAL';
      fktype           pg_temp.tabledefs := 'FKEYS_INTERNAL';
      trigtype         pg_temp.tabledefs := 'NO_TRIGGERS';
      arglen           integer;
      vargs            text;
      avarg            pg_temp.tabledefs;

      -- exception variables
      v_ret            text;
      v_diag1          text;
      v_diag2          text;
      v_diag3          text;
      v_diag4          text;
      v_diag5          text;
      v_diag6          text;

    BEGIN
      SET client_min_messages = 'notice';
      IF _verbose THEN bVerbose = True; END IF;

      -- v17 fix: handle case-sensitive
      -- v_qualified = in_schema || '.' || in_table;

      arglen := array_length($4, 1);
      IF arglen IS NULL THEN
          -- nothing to do, so assume defaults
          NULL;
      ELSE
          -- loop thru args
          -- IF 'NO_TRIGGERS' = ANY ($4)
          -- select array_to_string($4, ',', '***') INTO vargs;
          IF bVerbose THEN RAISE NOTICE 'arguments=%', $4; END IF;
          FOREACH avarg IN ARRAY $4 LOOP
              IF bVerbose THEN RAISE NOTICE 'arg=%', avarg; END IF;
              IF avarg = 'FKEYS_INTERNAL' OR avarg = 'FKEYS_EXTERNAL' OR avarg = 'FKEYS_NONE' THEN
                  fkcnt = fkcnt + 1;
                  fktype = avarg;
              ELSEIF avarg = 'INCLUDE_TRIGGERS' OR avarg = 'NO_TRIGGERS' THEN
                  trigcnt = trigcnt + 1;
                  trigtype = avarg;
              ELSEIF avarg = 'PKEY_EXTERNAL' THEN
                  pkcnt = pkcnt + 1;
                  pktype = avarg;
              ELSEIF avarg = 'COMMENTS' THEN
                  cmtcnt = cmtcnt + 1;

              END IF;
          END LOOP;
          IF fkcnt > 1 THEN
              RAISE WARNING 'Only one foreign key option can be provided. You provided %', fkcnt;
              RETURN '';
          ELSEIF trigcnt > 1 THEN
              RAISE WARNING 'Only one trigger option can be provided. You provided %', trigcnt;
              RETURN '';
          ELSEIF pkcnt > 1 THEN
              RAISE WARNING 'Only one pkey option can be provided. You provided %', pkcnt;
              RETURN '';
          ELSEIF cmtcnt > 1 THEN
              RAISE WARNING 'Only one comments option can be provided. You provided %', cmtcnt;
              RETURN '';

          END IF;
      END IF;

      SELECT c.oid, (select setting from pg_settings where name = 'server_version_num') INTO v_table_oid, v_pgversion FROM pg_catalog.pg_class c LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
      WHERE c.relkind in ('r','p') AND c.relname = in_table AND n.nspname = in_schema;

    -- set search_path = public before we do anything to force explicit schema qualification but dont forget to set it back before exiting...
      SELECT setting INTO search_path_old FROM pg_settings WHERE name = 'search_path';

      -- RAISE NOTICE 'DEBUG tableddl: saving old search_path: ***%***', search_path_old;
      EXECUTE 'SET search_path = "public"';
      SELECT setting INTO search_path_new FROM pg_settings WHERE name = 'search_path';
      -- RAISE NOTICE 'DEBUG tableddl: using new search path=***%***', search_path_new;

      -- throw an error if table was not found
      IF (v_table_oid IS NULL) THEN
        RAISE EXCEPTION 'table does not exist';
      END IF;

      -- get user-defined tablespaces if applicable
      SELECT tablespace INTO v_temp FROM pg_tables WHERE schemaname = in_schema and tablename = in_table and tablespace IS NOT NULL;
      IF v_temp IS NULL THEN
        v_tablespace := 'TABLESPACE pg_default';
      ELSE
        v_tablespace := 'TABLESPACE ' || v_temp;
      END IF;

      -- also see if there are any SET commands for this table, ie, autovacuum_enabled=off, fillfactor=70
      WITH relopts AS (SELECT unnest(c.reloptions) relopts FROM pg_class c, pg_namespace n WHERE n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table)
      SELECT string_agg(r.relopts, ', ') as relopts INTO v_temp from relopts r;
      IF v_temp IS NULL THEN
        v_relopts := '';
      ELSE
        v_relopts := ' WITH (' || v_temp || ')';
      END IF;

      -- -----------------------------------------------------------------------------------
      -- Create table defs for partitions/children using inheritance or declarative methods.
      -- inheritance: pg_class.relkind = 'r'   pg_class.relispartition=false   pg_class.relpartbound is NULL
      -- declarative: pg_class.relkind = 'r'   pg_class.relispartition=true    pg_class.relpartbound is NOT NULL
      -- -----------------------------------------------------------------------------------
      v_partbound := '';
      bPartition := False;
      bInheritance := False;
      IF v_pgversion < 100000 THEN
        -- Issue#11: handle parent schema
        SELECT c2.relname parent, c2.relnamespace::regnamespace INTO v_parent, v_parent_schema from pg_class c1, pg_namespace n, pg_inherits i, pg_class c2
        WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.oid = i.inhrelid and i.inhparent = c2.oid and c1.relkind = 'r';
        IF (v_parent IS NOT NULL) THEN
          bPartition   := True;
          bInheritance := True;
        END IF;
      ELSE
        -- Issue#11: handle parent schema
        SELECT c2.relname parent, c1.relispartition, pg_get_expr(c1.relpartbound, c1.oid, true), c2.relnamespace::regnamespace INTO v_parent, bRelispartition, v_partbound, v_parent_schema from pg_class c1, pg_namespace n, pg_inherits i, pg_class c2
        WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.oid = i.inhrelid and i.inhparent = c2.oid and c1.relkind = 'r';
        IF (v_parent IS NOT NULL) THEN
          bPartition   := True;
          IF bRelispartition THEN
            bInheritance := False;
          ELSE
            bInheritance := True;
          END IF;
        END IF;
      END IF;
      IF bPartition THEN
        --Issue#17 fix for case-sensitive tables
        -- SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
        -- WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = quote_ident(in_schema) AND t.table_name = quote_ident(in_table) AND t.table_type = 'BASE TABLE');
        SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
        WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = in_schema AND t.table_name = in_table AND t.table_type = 'BASE TABLE');

        --Issue#19 put double-quotes around SQL keyword column names
        -- Issue#121: fix keyword lookup for table name not column name that does not apply here
        -- SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = v_colrec.column_name AND catcode = 'R';
        SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = in_table AND catcode = 'R';

        IF bInheritance THEN
          -- inheritance-based
          IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
            v_table_ddl := 'CREATE TABLE ' || in_schema || '."' || in_table || '"( '|| E'\\n';
          ELSE
            v_table_ddl := 'CREATE TABLE ' || in_schema || '.' || in_table || '( '|| E'\\n';
          END IF;

          -- Jump to constraints section to add the check constraints
        ELSE
          -- declarative-based
          IF v_relopts <> '' THEN
            IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
              v_table_ddl := 'CREATE TABLE ' || in_schema || '."' || in_table || '" PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || v_relopts || ' ' || v_tablespace || '; ' || E'\\n';
            ELSE
              v_table_ddl := 'CREATE TABLE ' || in_schema || '.' || in_table || ' PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || v_relopts || ' ' || v_tablespace || '; ' || E'\\n';
            END IF;
          ELSE
            IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
              v_table_ddl := 'CREATE TABLE ' || in_schema || '."' || in_table || '" PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || ' ' || v_tablespace || '; ' || E'\\n';
            ELSE
              v_table_ddl := 'CREATE TABLE ' || in_schema || '.' || in_table || ' PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || ' ' || v_tablespace || '; ' || E'\\n';
            END IF;
          END IF;
          -- Jump to constraints and index section to add the check constraints and indexes and perhaps FKeys
        END IF;
      END IF;
      IF bVerbose THEN RAISE NOTICE '(1)tabledef so far: %', v_table_ddl; END IF;

      IF NOT bPartition THEN
        -- see if this is unlogged or temporary table
        select c.relpersistence into v_persist from pg_class c, pg_namespace n where n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table and c.relkind = 'r';
        IF v_persist = 'u' THEN
          v_temp := 'UNLOGGED';
        ELSIF v_persist = 't' THEN
          v_temp := 'TEMPORARY';
        ELSE
          v_temp := '';
        END IF;
      END IF;

      -- start the create definition for regular tables unless we are in progress creating an inheritance-based child table
      IF NOT bPartition THEN
        --Issue#17 fix for case-sensitive tables
        -- SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
        -- WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = quote_ident(in_schema) AND t.table_name = quote_ident(in_table) AND t.table_type = 'BASE TABLE');
        SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
        WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = in_schema AND t.table_name = in_table AND t.table_type = 'BASE TABLE');
        IF v_cnt1 > 0 THEN
          v_table_ddl := 'CREATE ' || v_temp || ' TABLE ' || in_schema || '."' || in_table || '" (' || E'\\n';
        ELSE
          v_table_ddl := 'CREATE ' || v_temp || ' TABLE ' || in_schema || '.' || in_table || ' (' || E'\\n';
        END IF;
      END IF;
      -- RAISE NOTICE 'DEBUG2: tabledef so far: %', v_table_ddl;
      -- define all of the columns in the table unless we are in progress creating an inheritance-based child table
      IF NOT bPartition THEN
        FOR v_colrec IN
          SELECT c.column_name, c.data_type, c.udt_name, c.udt_schema, c.character_maximum_length, c.is_nullable, c.column_default, c.numeric_precision, c.numeric_scale, c.is_identity, c.identity_generation, c.is_generated, c.generation_expression
          FROM information_schema.columns c WHERE (table_schema, table_name) = (in_schema, in_table) ORDER BY ordinal_position
        LOOP
          IF bVerbose THEN RAISE NOTICE '(col loop) name=%  type=%  udt_name=%  default=%  is_generated=%  gen_expr=%', v_colrec.column_name, v_colrec.data_type, v_colrec.udt_name, v_colrec.column_default, v_colrec.is_generated, v_colrec.generation_expression; END IF;

          -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
          -- SELECT CASE WHEN pg_get_serial_sequence(v_qualified, v_colrec.column_name) IS NOT NULL THEN True ELSE False END into bSerial;
          SELECT CASE WHEN pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) IS NOT NULL THEN True ELSE False END into bSerial;
          IF bVerbose THEN
            -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
            -- SELECT pg_get_serial_sequence(v_qualified, v_colrec.column_name) into v_temp;
            SELECT pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) into v_temp;
            IF v_temp IS NULL THEN v_temp = 'NA'; END IF;
            SELECT pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name) INTO v_diag1;
            RAISE NOTICE 'DEBUG table: %  Column: %  datatype: %  Serial=%  serialval=%  coldef=%', v_qualified, v_colrec.column_name, v_colrec.data_type, bSerial, v_temp, v_diag1;
            RAISE NOTICE 'DEBUG tabledef: %', v_table_ddl;
          END IF;

          --Issue#17 put double-quotes around case-sensitive column names
          SELECT COUNT(*) INTO v_cnt1 FROM information_schema.columns t WHERE EXISTS (SELECT REGEXP_MATCHES(s.column_name, '([A-Z]+)','g') FROM information_schema.columns s
          WHERE t.table_schema=s.table_schema and t.table_name=s.table_name and t.column_name=s.column_name AND t.table_schema = quote_ident(in_schema) AND column_name = v_colrec.column_name);

          --Issue#19 put double-quotes around SQL keyword column names
          SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = v_colrec.column_name AND catcode = 'R';

          IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
            v_table_ddl := v_table_ddl || '  "' || v_colrec.column_name || '" ';
          ELSE
            v_table_ddl := v_table_ddl || '  ' || v_colrec.column_name || ' ';
          END IF;

          -- Issue#23: Handle autogenerated columns and rewrite as a simpler IF THEN ELSE branch instead of a much more complex embedded CASE STATEMENT
          IF v_colrec.is_generated = 'ALWAYS' and v_colrec.generation_expression IS NOT NULL THEN
              -- searchable tsvector GENERATED ALWAYS AS (to_tsvector('simple'::regconfig, COALESCE(translate(email, '@.-'::citext, ' '::text), ''::text)) ) STORED
              v_temp = v_colrec.data_type || ' GENERATED ALWAYS AS (' || v_colrec.generation_expression || ') STORED ';
          ELSEIF v_colrec.udt_name in ('geometry', 'box2d', 'box2df', 'box3d', 'geography', 'geometry_dump', 'gidx', 'spheroid', 'valid_detail') THEN
              v_temp = v_colrec.udt_name;
          ELSEIF v_colrec.data_type = 'USER-DEFINED' THEN
              v_temp = v_colrec.udt_schema || '.' || v_colrec.udt_name;
          ELSEIF v_colrec.data_type = 'ARRAY' THEN
                -- Issue#6 fix: handle arrays
              v_temp = pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name);
              -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
              -- WHEN pg_get_serial_sequence(v_qualified, v_colrec.column_name) IS NOT NULL
          ELSEIF pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) IS NOT NULL THEN
              -- Issue#8 fix: handle serial. Note: NOT NULL is implied so no need to declare it explicitly
              v_temp = pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name);
          ELSE
              v_temp = v_colrec.data_type;
          END IF;
          -- RAISE NOTICE 'column def1=%', v_temp;

          -- handle IDENTITY columns
          IF v_colrec.is_identity = 'YES' THEN
              IF v_colrec.identity_generation = 'ALWAYS' THEN
                  v_temp = v_temp || ' GENERATED ALWAYS AS IDENTITY';
              ELSE
                  v_temp = v_temp || ' GENERATED BY DEFAULT AS IDENTITY';
              END IF;
          ELSEIF v_colrec.character_maximum_length IS NOT NULL THEN
              v_temp = v_temp || ('(' || v_colrec.character_maximum_length || ')');
          ELSEIF v_colrec.numeric_precision > 0 AND v_colrec.numeric_scale > 0 THEN
              v_temp = v_temp || '(' || v_colrec.numeric_precision || ',' || v_colrec.numeric_scale || ')';
          END IF;

          -- Handle NULL/NOT NULL
          IF bSerial THEN
              v_temp = v_temp || ' NOT NULL';
          ELSEIF v_colrec.is_nullable = 'NO' THEN
              v_temp = v_temp || ' NOT NULL';
          ELSEIF v_colrec.is_nullable = 'YES' THEN
              v_temp = v_temp || ' NULL';
          END IF;

          -- Handle defaults
          IF v_colrec.column_default IS NOT null AND NOT bSerial THEN
              -- RAISE NOTICE 'Setting default for column, %', v_colrec.column_name;
              v_temp = v_temp || (' DEFAULT ' || v_colrec.column_default);
          END IF;
          v_temp = v_temp || ',' || E'\\n';
          -- RAISE NOTICE 'column def2=%', v_temp;
          v_table_ddl := v_table_ddl || v_temp;
          -- RAISE NOTICE 'tabledef=%', v_table_ddl;

        END LOOP;
      END IF;
      IF bVerbose THEN RAISE NOTICE '(2)tabledef so far: %', v_table_ddl; END IF;

      -- define all the constraints: conparentid does not exist pre PGv11
      IF v_pgversion < 110000 THEN
        FOR v_constraintrec IN
          SELECT con.conname as constraint_name, con.contype as constraint_type,
            CASE
              WHEN con.contype = 'p' THEN 1 -- primary key constraint
              WHEN con.contype = 'u' THEN 2 -- unique constraint
              WHEN con.contype = 'f' THEN 3 -- foreign key constraint
              WHEN con.contype = 'c' THEN 4
              ELSE 5
            END as type_rank,
            pg_get_constraintdef(con.oid) as constraint_definition
          FROM pg_catalog.pg_constraint con JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid JOIN pg_catalog.pg_namespace nsp ON nsp.oid = connamespace
          WHERE nsp.nspname = in_schema AND rel.relname = in_table ORDER BY type_rank
        LOOP
          v_constraint_name := v_constraintrec.constraint_name;
          v_constraint_def  := v_constraintrec.constraint_definition;
          IF v_constraintrec.type_rank = 1 THEN
              IF pkcnt = 0 OR pktype = 'PKEY_INTERNAL' THEN
                  -- internal def
                  v_constraint_name := v_constraintrec.constraint_name;
                  v_constraint_def  := v_constraintrec.constraint_definition;
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || v_constraint_name || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                -- Issue#16 handle external PG def
                SELECT 'ALTER TABLE ONLY ' || in_schema || '.' || c.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_pkey_def
                FROM pg_catalog.pg_constraint r, pg_class c, pg_namespace n where r.conrelid = c.oid and  r.contype = 'p' and n.oid = r.connamespace and n.nspname = in_schema AND c.relname = in_table and r.conname = v_constraint_name;
              END IF;
              IF bPartition THEN
                continue;
              END IF;
          ELSIF v_constraintrec.type_rank = 3 THEN
              -- handle foreign key constraints
              --Issue#22 fix: added FKEY_NONE check
              IF fktype = 'FKEYS_NONE' THEN
                  -- skip
                  continue;
              ELSIF fkcnt = 0 OR fktype = 'FKEYS_INTERNAL' THEN
                  -- internal def
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || v_constraint_name || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                  -- external def
                  SELECT 'ALTER TABLE ONLY ' || n.nspname || '.' || c2.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_fkey_def
                  FROM pg_constraint r, pg_class c1, pg_namespace n, pg_class c2 where r.conrelid = c1.oid and  r.contype = 'f' and n.nspname = in_schema and n.oid = r.connamespace and r.conrelid = c2.oid and c2.relname = in_table;
                  v_fkey_defs = v_fkey_defs || v_fkey_def || E'\\n';
              END IF;
          ELSE
              -- handle all other constraints besides PKEY and FKEYS as internal defs by default
              v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                || 'CONSTRAINT' || ' '
                || v_constraint_name || ' '
                || v_constraint_def
                || ',' || E'\\n';
          END IF;
          if bVerbose THEN RAISE NOTICE 'DEBUG4: constraint name=% constraint_def=%', v_constraint_name,v_constraint_def; END IF;
          constraintarr := constraintarr || v_constraintrec.constraint_name:: text;

        END LOOP;
      ELSE
        -- handle PG versions 11 and up
        -- Issue#20: Fix logic for external PKEY and FKEYS
        FOR v_constraintrec IN
          SELECT con.conname as constraint_name, con.contype as constraint_type,
            CASE
              WHEN con.contype = 'p' THEN 1 -- primary key constraint
              WHEN con.contype = 'u' THEN 2 -- unique constraint
              WHEN con.contype = 'f' THEN 3 -- foreign key constraint
              WHEN con.contype = 'c' THEN 4
              ELSE 5
            END as type_rank,
            pg_get_constraintdef(con.oid) as constraint_definition
          FROM pg_catalog.pg_constraint con JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid JOIN pg_catalog.pg_namespace nsp ON nsp.oid = connamespace
          WHERE nsp.nspname = in_schema AND rel.relname = in_table
                --Issue#13 added this condition:
                AND con.conparentid = 0
                ORDER BY type_rank
        LOOP
          v_constraint_name := v_constraintrec.constraint_name;
          v_constraint_def  := v_constraintrec.constraint_definition;
          IF v_constraintrec.type_rank = 1 THEN
              IF pkcnt = 0 OR pktype = 'PKEY_INTERNAL' THEN
                  -- internal def
                  v_constraint_name := v_constraintrec.constraint_name;
                  v_constraint_def  := v_constraintrec.constraint_definition;
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || v_constraint_name || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                -- Issue#16 handle external PG def
                SELECT 'ALTER TABLE ONLY ' || in_schema || '.' || c.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_pkey_def
                FROM pg_catalog.pg_constraint r, pg_class c, pg_namespace n where r.conrelid = c.oid and  r.contype = 'p' and n.oid = r.connamespace and n.nspname = in_schema AND c.relname = in_table;
              END IF;
              IF bPartition THEN
                continue;
              END IF;
          ELSIF v_constraintrec.type_rank = 3 THEN
              -- handle foreign key constraints
              --Issue#22 fix: added FKEY_NONE check
              IF fktype = 'FKEYS_NONE' THEN
                  -- skip
                  continue;
              ELSIF fkcnt = 0 OR fktype = 'FKEYS_INTERNAL' THEN
                  -- internal def
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || v_constraint_name || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                  -- external def
                  SELECT 'ALTER TABLE ONLY ' || n.nspname || '.' || c2.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_fkey_def
                  FROM pg_constraint r, pg_class c1, pg_namespace n, pg_class c2 where r.conrelid = c1.oid and  r.contype = 'f' and n.nspname = in_schema and n.oid = r.connamespace and r.conrelid = c2.oid and c2.relname = in_table and
                  r.conname = v_constraint_name and r.conparentid = 0;
                  v_fkey_defs = v_fkey_defs || v_fkey_def || E'\\n';
              END IF;
          ELSE
              -- handle all other constraints besides PKEY and FKEYS as internal defs by default
              v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                || 'CONSTRAINT' || ' '
                || v_constraint_name || ' '
                || v_constraint_def
                || ',' || E'\\n';
          END IF;
          if bVerbose THEN RAISE NOTICE 'DEBUG4: constraint name=% constraint_def=%', v_constraint_name,v_constraint_def; END IF;
          constraintarr := constraintarr || v_constraintrec.constraint_name:: text;

        END LOOP;
      END IF;

      -- drop the last comma before ending the create statement, which should be right before the carriage return character
      -- Issue#24: make sure the comma is there before removing it
      select substring(v_table_ddl, length(v_table_ddl) - 1, 1) INTO v_temp;
      IF v_temp = ',' THEN
          v_table_ddl = substr(v_table_ddl, 0, length(v_table_ddl) - 1) || E'\\n';
      END IF;
      IF bVerbose THEN RAISE NOTICE '(3)tabledef so far: %', trim(v_table_ddl); END IF;

      -- ---------------------------------------------------------------------------
      -- at this point we have everything up to the last table-enclosing parenthesis
      -- ---------------------------------------------------------------------------
      IF bVerbose THEN RAISE NOTICE '(4)tabledef so far: %', v_table_ddl; END IF;

      -- See if this is an inheritance-based child table and finish up the table create.
      IF bPartition and bInheritance THEN
        -- Issue#11: handle parent schema
        -- v_table_ddl := v_table_ddl || ') INHERITS (' || in_schema || '.' || v_parent || ') ' || E'\\n' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
        IF v_parent_schema = '' OR v_parent_schema IS NULL THEN v_parent_schema = in_schema; END IF;
        v_table_ddl := v_table_ddl || ') INHERITS (' || v_parent_schema || '.' || v_parent || ') ' || E'\\n' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
      END IF;

      IF v_pgversion >= 100000 AND NOT bPartition and NOT bInheritance THEN
        -- See if this is a partitioned table (pg_class.relkind = 'p') and add the partitioned key
        SELECT pg_get_partkeydef(c1.oid) as partition_key INTO v_partition_key FROM pg_class c1 JOIN pg_namespace n ON (n.oid = c1.relnamespace) LEFT JOIN pg_partitioned_table p ON (c1.oid = p.partrelid)
        WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.relkind = 'p';

        IF v_partition_key IS NOT NULL AND v_partition_key <> '' THEN
          -- add partition clause
          -- NOTE:  cannot specify default tablespace for partitioned relations
          -- v_table_ddl := v_table_ddl || ') PARTITION BY ' || v_partition_key || ' ' || v_tablespace || ';' || E'\\n';
          v_table_ddl := v_table_ddl || ') PARTITION BY ' || v_partition_key || ';' || E'\\n';
        ELSEIF v_relopts <> '' THEN
          v_table_ddl := v_table_ddl || ') ' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
        ELSE
          -- end the create definition
          v_table_ddl := v_table_ddl || ') ' || v_tablespace || ';' || E'\\n';
        END IF;
      END IF;

      IF bVerbose THEN RAISE NOTICE '(5)tabledef so far: %', v_table_ddl; END IF;

      -- Add closing paren for regular tables
      -- IF NOT bPartition THEN
      -- v_table_ddl := v_table_ddl || ') ' || v_relopts || ' ' || v_tablespace || E';\\n';
      -- END IF;
      -- RAISE NOTICE 'ddlsofar3: %', v_table_ddl;

      -- Issue#16 create the external PKEY def if indicated
      IF v_pkey_def <> '' THEN
          v_table_ddl := v_table_ddl || v_pkey_def || E'\\n';
      END IF;

      -- Issue#20
      IF v_fkey_defs <> '' THEN
            v_table_ddl := v_table_ddl || v_fkey_defs || E'\\n';
      END IF;

      IF bVerbose THEN RAISE NOTICE '(6)tabledef so far: %', v_table_ddl; END IF;

      -- create indexes
      FOR v_indexrec IN
        SELECT indexdef, COALESCE(tablespace, 'pg_default') as tablespace, indexname FROM pg_indexes WHERE (schemaname, tablename) = (in_schema, in_table)
      LOOP
        -- RAISE NOTICE 'DEBUG6: indexname=%  indexdef=%', v_indexrec.indexname, v_indexrec.indexdef;
        -- loop through constraints and skip ones already defined
        bSkip = False;
        FOREACH constraintelement IN ARRAY constraintarr
        LOOP
          IF constraintelement = v_indexrec.indexname THEN
              -- RAISE NOTICE 'DEBUG7: skipping index, %', v_indexrec.indexname;
              bSkip = True;
              EXIT;
          END IF;
        END LOOP;
        if bSkip THEN CONTINUE; END IF;

        -- Add IF NOT EXISTS clause so partition index additions will not be created if declarative partition in effect and index already created on parent
        v_indexrec.indexdef := REPLACE(v_indexrec.indexdef, 'CREATE INDEX', 'CREATE INDEX IF NOT EXISTS');
        -- Fix Issue#26: do it for unique/primary key indexes as well
        v_indexrec.indexdef := REPLACE(v_indexrec.indexdef, 'CREATE UNIQUE INDEX', 'CREATE UNIQUE INDEX IF NOT EXISTS');
        -- RAISE NOTICE 'DEBUG8: adding index, %', v_indexrec.indexname;

        -- NOTE:  cannot specify default tablespace for partitioned relations
        IF v_partition_key IS NOT NULL AND v_partition_key <> '' THEN
            v_table_ddl := v_table_ddl || v_indexrec.indexdef || ';' || E'\\n';
        ELSE
            -- Issue#25: see if partial index or not
            select CASE WHEN i.indpred IS NOT NULL THEN True ELSE False END INTO v_partial
            FROM pg_index i JOIN pg_class c1 ON (i.indexrelid = c1.oid) JOIN pg_class c2 ON (i.indrelid = c2.oid)
            WHERE c1.relnamespace::regnamespace::text = in_schema AND c2.relnamespace::regnamespace::text = in_schema AND c2.relname = in_table AND c1.relname = v_indexrec.indexname;
            IF v_partial THEN
                -- Put tablespace def before WHERE CLAUSE
                v_temp = v_indexrec.indexdef;
                v_pos = POSITION(' WHERE ' IN v_temp);
                v_temp2 = SUBSTRING(v_temp, v_pos);
                v_temp  = SUBSTRING(v_temp, 1, v_pos);
                v_table_ddl := v_table_ddl || v_temp || ' TABLESPACE ' || v_indexrec.tablespace || v_temp2 || ';' || E'\\n';
            ELSE
                v_table_ddl := v_table_ddl || v_indexrec.indexdef || ' TABLESPACE ' || v_indexrec.tablespace || ';' || E'\\n';
            END IF;
        END IF;

      END LOOP;
      IF bVerbose THEN RAISE NOTICE '(7)tabledef so far: %', v_table_ddl; END IF;

      -- Issue#20: added logic for table and column comments
      IF  cmtcnt > 0 THEN
          FOR v_rec IN
            SELECT c.relname, 'COMMENT ON ' || CASE WHEN c.relkind in ('r','p') AND a.attname IS NULL THEN 'TABLE ' WHEN c.relkind in ('r','p') AND a.attname IS NOT NULL THEN 'COLUMN ' WHEN c.relkind = 'f' THEN 'FOREIGN TABLE '
                  WHEN c.relkind = 'm' THEN 'MATERIALIZED VIEW ' WHEN c.relkind = 'v' THEN 'VIEW ' WHEN c.relkind = 'i' THEN 'INDEX ' WHEN c.relkind = 'S' THEN 'SEQUENCE ' ELSE 'XX' END || n.nspname || '.' ||
                  CASE WHEN c.relkind in ('r','p') AND a.attname IS NOT NULL THEN quote_ident(c.relname) || '.' || a.attname ELSE quote_ident(c.relname) END || ' IS '   || quote_literal(d.description) || ';' as ddl
            FROM pg_class c JOIN pg_namespace n ON (n.oid = c.relnamespace) LEFT JOIN pg_description d ON (c.oid = d.objoid) LEFT JOIN pg_attribute a ON (c.oid = a.attrelid AND a.attnum > 0 and a.attnum = d.objsubid)
            WHERE d.description IS NOT NULL AND n.nspname = in_schema AND c.relname = in_table ORDER BY 2 desc, ddl
          LOOP
              --RAISE NOTICE 'comments:%', v_rec.ddl;
              v_table_ddl = v_table_ddl || v_rec.ddl || E'\\n';
          END LOOP;
      END IF;
      IF bVerbose THEN RAISE NOTICE '(8)tabledef so far: %', v_table_ddl; END IF;

      IF trigtype = 'INCLUDE_TRIGGERS' THEN
        -- Issue#14: handle multiple triggers for a table
        FOR v_trigrec IN
            select pg_get_triggerdef(t.oid, True) || ';' as triggerdef FROM pg_trigger t, pg_class c, pg_namespace n
            WHERE n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table and c.relkind = 'r' and t.tgrelid = c.oid and NOT t.tgisinternal
        LOOP
            v_table_ddl := v_table_ddl || v_trigrec.triggerdef;
            v_table_ddl := v_table_ddl || E'\\n';
            IF bVerbose THEN RAISE NOTICE 'triggerdef = %', v_trigrec.triggerdef; END IF;
        END LOOP;
      END IF;

      IF bVerbose THEN RAISE NOTICE '(9)tabledef so far: %', v_table_ddl; END IF;
      -- add empty line
      v_table_ddl := v_table_ddl || E'\\n';
      IF bVerbose THEN RAISE NOTICE '(10)tabledef so far: %', v_table_ddl; END IF;

      -- reset search_path back to what it was
      IF search_path_old = '' THEN
        SELECT set_config('search_path', '', false) into v_temp;
      ELSE
        EXECUTE 'SET search_path = ' || search_path_old;
      END IF;

      RETURN v_table_ddl;

      EXCEPTION
      WHEN others THEN
      BEGIN
        GET STACKED DIAGNOSTICS v_diag1 = MESSAGE_TEXT, v_diag2 = PG_EXCEPTION_DETAIL, v_diag3 = PG_EXCEPTION_HINT, v_diag4 = RETURNED_SQLSTATE, v_diag5 = PG_CONTEXT, v_diag6 = PG_EXCEPTION_CONTEXT;
        -- v_ret := 'line=' || v_diag6 || '. '|| v_diag4 || '. ' || v_diag1 || ' .' || v_diag2 || ' .' || v_diag3;
        v_ret := 'line=' || v_diag6 || '. '|| v_diag4 || '. ' || v_diag1;
        RAISE EXCEPTION '%', v_ret;
        -- put additional coding here if necessarY
        RETURN '';
      END;

    END;
  $$;`.trim();function tr({originalTrigger:e,updatedTrigger:t}){let{name:a,activation:n,events:r,schema:s,table:o,function_schema:l,function_name:c,function_args:d}=t;return`
BEGIN;
DROP TRIGGER "${e.name}" ON "${e.schema}"."${e.table}";
CREATE TRIGGER "${a}" ${n} ${r.join(" OR ")} ON "${s}"."${o}" 
  FOR EACH ROW EXECUTE FUNCTION 
  "${l}"."${c}"(${d?.map(i.ident).join(",")??""});
COMMIT;
`.trim()}e.s(["getTableDefinitionSql",0,({id:e})=>`
    ${ti}

    with table_info as (
      select 
        n.nspname::text as schema,
        c.relname::text as name
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where c.oid = ${e}
    )
    select pg_temp.pg_get_tabledef (
      t.schema,
      t.name,
      false,
      'FKEYS_INTERNAL',
      'INCLUDE_TRIGGERS'
    ) as definition
    from table_info t;
  `.trim()],538892),e.s(["getDatabaseTriggerUpdateSQL",()=>tr],85205),e.s(["getViewDefinitionSql",0,({id:e})=>{if(!e)throw Error("id is required");return`
    with table_info as (
      select 
        n.nspname::text as schema,
        c.relname::text as name,
        to_regclass(concat('"', n.nspname, '"."', c.relname, '"')) as regclass
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where c.oid = ${e}
    )
    select pg_get_viewdef(t.regclass, true) as definition
    from table_info t
  `.trim()}],864748),e.s(["getDropConstraintSQL",0,({schema:e,table:t,name:a})=>`ALTER TABLE ${(0,i.ident)(e)}.${(0,i.ident)(t)} DROP CONSTRAINT ${(0,i.ident)(a)}`,"getTableConstraintsSql",0,({id:e})=>`
  with table_info as (
    select 
      n.nspname::text as schema,
      c.relname::text as name,
      to_regclass(concat('"', n.nspname, '"."', c.relname, '"')) as regclass
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where c.oid = ${e}
)
select 
    con.oid as id,
    con.conname as name,
    con.contype as type
from pg_catalog.pg_constraint con
inner join pg_catalog.pg_class rel
        on rel.oid = con.conrelid
inner join pg_catalog.pg_namespace nsp
        on nsp.oid = connamespace
inner join table_info ti
        on ti.schema = nsp.nspname 
        and ti.name = rel.relname;
`.trim()],45160),e.s(["getDuplicateIdentitySequenceSQL",0,({columnName:e,duplicatedTableName:t,sourceTableName:a,sourceTableSchema:n})=>`SELECT setval('${(0,i.ident)(n)}.${(0,i.ident)(`${t}_${e}_seq`)}', (SELECT COALESCE(MAX(${(0,i.ident)(e)}), 1) FROM ${(0,i.ident)(n)}.${(0,i.ident)(a)}));`,"getUpdateIdentitySequenceSQL",0,({schema:e,table:t,column:a})=>`SELECT setval('${(0,i.ident)(e)}.${(0,i.ident)(`${t}_${a}_seq`)}', (SELECT COALESCE(MAX(${(0,i.ident)(a)}), 1) FROM ${(0,i.ident)(e)}.${(0,i.ident)(t)}))`],261126);var ts=((t={}).NO_ACTION="a",t.RESTRICT="r",t.CASCADE="c",t.SET_NULL="n",t.SET_DEFAULT="d",t);e.s(["FOREIGN_KEY_CASCADE_ACTION",()=>ts,"getAddForeignKeySQL",0,({table:e,foreignKeys:t})=>t.map(t=>{let{deletionAction:a,updateAction:n}=t;return`
      ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.name)}
      ADD FOREIGN KEY (${t.columns.map(e=>(0,i.ident)(e.source)).join(", ")})
      REFERENCES ${(0,i.ident)(t.schema)}.${(0,i.ident)(t.table)} (${t.columns.map(e=>(0,i.ident)(e.target)).join(", ")})
      ${"c"===n?"ON UPDATE CASCADE":"r"===n?"ON UPDATE RESTRICT":""}
      ${"c"===a?"ON DELETE CASCADE":"r"===a?"ON DELETE RESTRICT":"d"===a?"ON DELETE SET DEFAULT":"n"===a?"ON DELETE SET NULL":""}
    `.replace(/\s+/g," ").trim()}).join(";")+";","getForeignKeyConstraintsSql",0,({schema:e})=>{if(!e)throw Error("schema is required");return`
SELECT 
  con.oid as id, 
  con.conname as constraint_name, 
  con.confdeltype as deletion_action,
  con.confupdtype as update_action,
  rel.oid as source_id,
  nsp.nspname as source_schema, 
  rel.relname as source_table, 
  (
    SELECT 
      array_agg(
        att.attname 
        ORDER BY 
          un.ord
      ) 
    FROM 
      unnest(con.conkey) WITH ORDINALITY un (attnum, ord) 
      INNER JOIN pg_attribute att ON att.attnum = un.attnum 
    WHERE 
      att.attrelid = rel.oid
  ) source_columns, 
  frel.oid as target_id,
  fnsp.nspname as target_schema, 
  frel.relname as target_table, 
  (
    SELECT 
      array_agg(
        att.attname 
        ORDER BY 
          un.ord
      ) 
    FROM 
      unnest(con.confkey) WITH ORDINALITY un (attnum, ord) 
      INNER JOIN pg_attribute att ON att.attnum = un.attnum 
    WHERE 
      att.attrelid = frel.oid
  ) target_columns 
FROM 
  pg_constraint con 
  INNER JOIN pg_class rel ON rel.oid = con.conrelid 
  INNER JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace 
  INNER JOIN pg_class frel ON frel.oid = con.confrelid 
  INNER JOIN pg_namespace fnsp ON fnsp.oid = frel.relnamespace 
WHERE 
  con.contype = 'f'
  AND nsp.nspname = '${e}'
`.trim()},"getRemoveForeignKeySQL",0,({table:e,foreignKeys:t})=>t.map(t=>`
ALTER TABLE IF EXISTS ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.name)}
DROP CONSTRAINT IF EXISTS ${(0,i.ident)(t.name)}
`.replace(/\s+/g," ").trim()).join(";")+";"],788035),e.s(["getAddPrimaryKeySQL",0,({schema:e,table:t,columns:a})=>{let n=a.map(e=>(0,i.ident)(e)).join(", ");return`ALTER TABLE ${(0,i.ident)(e)}.${(0,i.ident)(t)} ADD PRIMARY KEY (${n})`}],71859),e.s(["getEnableRLSSQL",0,({schema:e,table:t})=>`ALTER TABLE ${(0,i.ident)(e)}.${(0,i.ident)(t)} ENABLE ROW LEVEL SECURITY`],332108),e.s(["getDuplicateRowsSQL",0,({duplicatedTableName:e,sourceTableName:t,sourceTableSchema:a})=>`INSERT INTO ${(0,i.ident)(a)}.${(0,i.ident)(e)} SELECT * FROM ${(0,i.ident)(a)}.${(0,i.ident)(t)};`,"getDuplicateTableSQL",0,({comment:e,duplicatedTableName:t,sourceTableName:a,sourceTableSchema:n})=>[`CREATE TABLE ${(0,i.ident)(n)}.${(0,i.ident)(t)} (LIKE ${(0,i.ident)(n)}.${(0,i.ident)(a)} INCLUDING ALL);`,void 0!=e?`comment on table ${(0,i.ident)(n)}.${(0,i.ident)(t)} is ${(0,i.literal)(e)};`:""].join("\n")],664304),e.s(["getEntityTypesSQL",0,({schemas:e,search:t,sort:a,filterTypes:n,limit:i,page:r})=>`
    with records as (
      select
        c.oid::int8 as "id",
        nc.nspname as "schema",
        c.relname as "name",
        c.relkind as "type",
        case c.relkind
          when 'r' then 1
          when 'v' then 2
          when 'm' then 3
          when 'f' then 4
          when 'p' then 5
        end as "type_sort",
        obj_description(c.oid) as "comment",
        count(*) over() as "count",
        c.relrowsecurity as "rls_enabled"
      from
        pg_namespace nc
        join pg_class c on nc.oid = c.relnamespace
      where
        c.relkind in (${n.map(e=>`'${e}'`).join(", ")})
        and not pg_is_other_temp_schema(nc.oid)
        and (
          pg_has_role(c.relowner, 'USAGE')
          or has_table_privilege(
            c.oid,
            'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
          )
          or has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
        )
        and nc.nspname in (${e.map(e=>`'${e}'`)})
        ${t?`and c.relname ilike '%${t}%'`:""}
      order by ${"alphabetical"===a?"c.relname asc":'"type_sort" asc, c.relname asc'}
      limit ${i}
      offset ${r*i}
    )
    select
      jsonb_build_object(
        'entities', coalesce(jsonb_agg(
          jsonb_build_object(
            'id', r.id,
            'schema', r.schema,
            'name', r.name,
            'type', r.type,
            'comment', r.comment,
            'rls_enabled', r.rls_enabled
          )
          order by ${"alphabetical"===a?"r.name asc":"r.type_sort asc, r.name asc"}
        ), '[]'::jsonb),
        'count', coalesce(min(r.count), 0)
      ) "data"
    from records r;
  `.trim()],46166),e.s(["getAbortQuerySQL",0,({pid:e})=>`select pg_terminate_backend(${e})`.trim()],158161),e.s(["getKeywordsSql",0,()=>`
SELECT word FROM pg_get_keywords();
`.trim()],420732),e.s(["getOngoingQueriesSql",0,()=>`
select pid, query, query_start from pg_stat_activity where state = 'active' and datname = 'postgres';
`.trim()],392286),e.s(["default",0,{roles:{list:function({includeDefaultRoles:e=!1,limit:t,offset:a}={}){let n=`
with
  roles as (${es})
select
  *
from
  roles
where
  true
`;return e||(n+=" and not pg_catalog.starts_with(name, 'pg_')"),t&&(n+=` limit ${t}`),a&&(n+=` offset ${a}`),{sql:n,zod:el}},retrieve:function(e){return{sql:`with roles as (${es}) select * from roles where ${ed(e)};`,zod:ec}},create:function({name:e,isSuperuser:t=!1,canCreateDb:a=!1,canCreateRole:n=!1,inheritRole:r=!0,canLogin:s=!1,isReplicationRole:o=!1,canBypassRls:l=!1,connectionLimit:c=-1,password:d,validUntil:_,memberOf:m=[],members:p=[],admins:u=[],config:E={}}){return{sql:`
create role ${(0,i.ident)(e)}
  ${t?"superuser":""}
  ${a?"createdb":""}
  ${n?"createrole":""}
  ${r?"":"noinherit"}
  ${s?"login":""}
  ${o?"replication":""}
  ${l?"bypassrls":""}
  connection limit ${c}
  ${void 0===d?"":`password ${(0,i.literal)(d)}`}
  ${void 0===_?"":`valid until ${(0,i.literal)(_)}`}
  ${0===m.length?"":`in role ${m.map(i.ident).join(",")}`}
  ${0===p.length?"":`role ${p.map(i.ident).join(",")}`}
  ${0===u.length?"":`admin ${u.map(i.ident).join(",")}`}
  ;
${Object.entries(E).map(([t,a])=>`alter role ${(0,i.ident)(e)} set ${(0,i.ident)(t)} = ${(0,i.literal)(a)};`).join("\n")}
`}},update:function(e,t){let{name:a,isSuperuser:n,canCreateDb:r,canCreateRole:s,inheritRole:o,canLogin:l,isReplicationRole:c,canBypassRls:d,connectionLimit:_,password:m,validUntil:p}=t;return{sql:`
do $$
declare
  old record;
begin
  with roles as (${es})
  select * into old from roles where ${ed(e)};
  if old is null then
    raise exception 'Cannot find role with id %', id;
  end if;

  execute(format('alter role %I
    ${void 0===n?"":n?"superuser":"nosuperuser"}
    ${void 0===r?"":r?"createdb":"nocreatedb"}
    ${void 0===s?"":s?"createrole":"nocreaterole"}
    ${void 0===o?"":o?"inherit":"noinherit"}
    ${void 0===l?"":l?"login":"nologin"}
    ${void 0===c?"":c?"replication":"noreplication"}
    ${void 0===d?"":d?"bypassrls":"nobypassrls"}
    ${void 0===_?"":`connection limit ${_}`}
    ${void 0===m?"":`password ${(0,i.literal)(m)}`}
    ${void 0===p?"":"valid until %L"}
  ', old.name${void 0===p?"":`, ${(0,i.literal)(p)}`}));

  ${void 0===a?"":`
  -- Using the same name in the rename clause gives an error, so only do it if the new name is different.
  if ${(0,i.literal)(a)} != old.name then
    execute(format('alter role %I rename to %I;', old.name, ${(0,i.literal)(a)}));
  end if;
  `}
end
$$;
`}},remove:function(e,{ifExists:t=!1}={}){return{sql:`
do $$
declare
  old record;
begin
  with roles as (${es})
  select * into old from roles where ${ed(e)};
  if old is null then
    raise exception 'Cannot find role with id %', id;
  end if;

  execute(format('drop role ${t?"if exists":""} %I;', old.name));
end
$$;
`}},zod:eo},columns:{list:function({tableId:e,includeSystemSchemas:t=!1,includedSchemas:a,excludedSchemas:r,limit:o,offset:l}={}){let c=`
with
  columns as (${_})
select
  *
from
  columns
where
 true
`,d=s(a,r,t?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return d&&(c+=` and schema ${d}`),void 0!==e&&(c+=` and table_id = ${(0,i.literal)(e)} `),o&&(c=`${c} limit ${o}`),l&&(c=`${c} offset ${l}`),{sql:c,zod:p}},retrieve:function(e){return{sql:`WITH columns AS (${_}) SELECT * FROM columns WHERE ${function(e){if("id"in e&&e.id)return`${(0,i.ident)("id")} = ${(0,i.literal)(e.id)}`;if("name"in e&&e.name&&e.schema&&e.table)return`schema = ${(0,i.literal)(e.schema)} AND ${(0,i.ident)("table")} = ${(0,i.literal)(e.table)} AND name = ${(0,i.literal)(e.name)}`;throw Error("Must provide either id or schema, name and table")}(e)};`,zod:u}},create:function({schema:e,table:t,name:a,type:n,default_value:r,default_value_format:s="literal",is_identity:o=!1,identity_generation:l="BY DEFAULT",is_nullable:c,is_primary_key:d=!1,is_unique:_=!1,comment:m,check:p,no_transaction:u=!1}){let g="";if(o){if(void 0!==r)throw Error("Columns cannot both be identity and have a default value");g=`GENERATED ${l} AS IDENTITY`}else void 0===r||(g="expression"===s?`DEFAULT ${r}`:`DEFAULT ${(0,i.literal)(r)}`);let b="";void 0!==c&&(b=c?"NULL":"NOT NULL");let h=void 0===p?"":`CHECK (${p})`,f=void 0===m?"":`COMMENT ON COLUMN ${(0,i.ident)(e)}.${(0,i.ident)(t)}.${(0,i.ident)(a)} IS ${(0,i.literal)(m)}`,N=`
  ALTER TABLE ${(0,i.ident)(e)}.${(0,i.ident)(t)} ADD COLUMN ${(0,i.ident)(a)} ${E(n)}
    ${g}
    ${b}
    ${d?"PRIMARY KEY":""}
    ${_?"UNIQUE":""}
    ${h};
  ${f};`;return u?{sql:N}:{sql:`
  BEGIN;
    ${N};
  COMMIT;`}},update:function(e,{name:t,type:a,drop_default:n=!1,default_value:r,default_value_format:s="literal",is_identity:o,identity_generation:l="BY DEFAULT",is_nullable:c,is_unique:d,comment:_,check:m}){let p,u,g=void 0===t||t===e.name?"":`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} RENAME COLUMN ${(0,i.ident)(e.name)} TO ${(0,i.ident)(t)};`,b=void 0===a?"":`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} ALTER COLUMN ${(0,i.ident)(e.name)} SET DATA TYPE ${E(a)} USING ${(0,i.ident)(e.name)}::${E(a)};`;if(n)p=`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} ALTER COLUMN ${(0,i.ident)(e.name)} DROP DEFAULT;`;else if(void 0===r)p="";else{let t="expression"===s?r:(0,i.literal)(r);p=`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} ALTER COLUMN ${(0,i.ident)(e.name)} SET DEFAULT ${t};`}let h=`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} ALTER COLUMN ${(0,i.ident)(e.name)}`;!1===o?h+=" DROP IDENTITY IF EXISTS;":!0===e.is_identity?void 0===l?h="":h+=` SET GENERATED ${l};`:void 0===o?h="":h+=` ADD GENERATED ${l} AS IDENTITY;`,u=void 0===c?"":c?`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} ALTER COLUMN ${(0,i.ident)(e.name)} DROP NOT NULL;`:`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} ALTER COLUMN ${(0,i.ident)(e.name)} SET NOT NULL;`;let f="";!0===e.is_unique&&!1===d?f=`
DO $$
DECLARE
  r record;
BEGIN
  FOR r IN
    SELECT conname FROM pg_constraint WHERE
      contype = 'u'
      AND cardinality(conkey) = 1
      AND conrelid = ${(0,i.literal)(e.table_id)}
      AND conkey[1] = ${(0,i.literal)(e.ordinal_position)}
  LOOP
    EXECUTE ${(0,i.literal)(`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} DROP CONSTRAINT `)} || quote_ident(r.conname);
  END LOOP;
END
$$;
`:!1===e.is_unique&&!0===d&&(f=`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} ADD UNIQUE (${(0,i.ident)(e.name)});`);let N=void 0===_?"":`COMMENT ON COLUMN ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)}.${(0,i.ident)(e.name)} IS ${(0,i.literal)(_)};`,v=void 0===m?"":`
DO $$
DECLARE
  v_conname name;
  v_conkey int2[];
BEGIN
  SELECT conname into v_conname FROM pg_constraint WHERE
    contype = 'c'
    AND cardinality(conkey) = 1
    AND conrelid = ${(0,i.literal)(e.table_id)}
    AND conkey[1] = ${(0,i.literal)(e.ordinal_position)}
    ORDER BY oid asc
    LIMIT 1;

  IF v_conname IS NOT NULL THEN
    EXECUTE format('ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} DROP CONSTRAINT %I', v_conname);
  END IF;

  ${null!==m?`
  ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} ADD CONSTRAINT ${(0,i.ident)(`${e.table}_${e.name}_check`)} CHECK (${m});

  SELECT conkey into v_conkey FROM pg_constraint WHERE conname = ${(0,i.literal)(`${e.table}_${e.name}_check`)};

  ASSERT v_conkey IS NOT NULL, 'error creating column constraint: check condition must refer to this column';
  ASSERT cardinality(v_conkey) = 1, 'error creating column constraint: check condition cannot refer to multiple columns';
  ASSERT v_conkey[1] = ${(0,i.literal)(e.ordinal_position)}, 'error creating column constraint: check condition cannot refer to other columns';
`:""}
END
$$;
`;return{sql:`
BEGIN;
  ${u}
  ${b}
  ${p}
  ${h}
  ${f}
  ${N}
  ${v}
  ${g}
COMMIT;`}},remove:function(e,{cascade:t=!1}={}){return{sql:`ALTER TABLE ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)} DROP COLUMN ${(0,i.ident)(e.name)} ${t?"CASCADE":"RESTRICT"};`}},zod:m},schemas:{list:function({includeSystemSchemas:e=!1,limit:t,offset:a}={}){let r=e_;return e||(r=`${r} and not (n.nspname in (${n.DEFAULT_SYSTEM_SCHEMAS.map(i.literal).join(",")}))`),t&&(r=`${r} limit ${t}`),a&&(r=`${r} offset ${a}`),{sql:r,zod:ep}},retrieve:function({id:e,name:t}){return e?{sql:`${e_} and n.oid = ${(0,i.literal)(e)};`,zod:eu}:{sql:`${e_} and n.nspname = ${(0,i.literal)(t)};`,zod:eu}},create:function({name:e,owner:t}){return{sql:`create schema ${(0,i.ident)(e)}
  ${void 0===t?"":`authorization ${(0,i.ident)(t)}`};
`}},update:function({id:e,name:t},{name:a,owner:n}){return{sql:`
do $$
declare
  id oid := ${void 0===e?`${(0,i.literal)(t)}::regnamespace`:(0,i.literal)(e)};
  old record;
  new_name text := ${void 0===a?null:(0,i.literal)(a)};
  new_owner text := ${void 0===n?null:(0,i.literal)(n)};
begin
  select * into old from pg_namespace where oid = id;
  if old is null then
    raise exception 'Cannot find schema with id %', id;
  end if;

  if new_owner is not null then
    execute(format('alter schema %I owner to %I;', old.nspname, new_owner));
  end if;

  -- Using the same name in the rename clause gives an error, so only do it if the new name is different.
  if new_name is not null and new_name != old.nspname then
    execute(format('alter schema %I rename to %I;', old.nspname, new_name));
  end if;
end
$$;
`}},remove:function({id:e,name:t},{cascade:a=!1}={}){return{sql:`
do $$
declare
  id oid := ${void 0===e?`${(0,i.literal)(t)}::regnamespace`:(0,i.literal)(e)};
  old record;
  cascade bool := ${(0,i.literal)(a)};
begin
  select * into old from pg_namespace where oid = id;
  if old is null then
    raise exception 'Cannot find schema with id %', id;
  end if;

  execute(format('drop schema %I %s;', old.nspname, case when cascade then 'cascade' else 'restrict' end));
end
$$;
`}},zod:em},tables:eO,functions:k,tablePrivileges:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:a,limit:i,offset:r}={}){let o=`
with table_privileges as (${eE})
select *
from table_privileges
`,l=s(t,a,e?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return l&&(o+=` where schema ${l}`),i&&(o+=` limit ${i}`),r&&(o+=` offset ${r}`),{sql:o,zod:eb}},retrieve:function({id:e,name:t,schema:a="public"}){return e?{sql:`
with table_privileges as (${eE})
select *
from table_privileges
where table_privileges.relation_id = ${(0,i.literal)(e)};`,zod:eh}:{sql:`
with table_privileges as (${eE})
select *
from table_privileges
where table_privileges.schema = ${(0,i.literal)(a)}
  and table_privileges.name = ${(0,i.literal)(t)}
`,zod:eh}},grant:function(e){return{sql:`
do $$
begin
${e.map(({privilegeType:e,relationId:t,grantee:a,isGrantable:n})=>`execute format('grant ${e} on table %s to ${"public"===a.toLowerCase()?"public":(0,i.ident)(a)} ${n?"with grant option":""}', ${t}::regclass);`).join("\n")}
end $$;
`}},revoke:function(e){return{sql:`
do $$
begin
${e.map(({privilegeType:e,relationId:t,grantee:a})=>`execute format('revoke ${e} on table %s from ${"public"===a.toLowerCase()?"public":(0,i.ident)(a)}', ${t}::regclass);`).join("\n")}
end $$;
`}},zod:eg},publications:{list:function({limit:e,offset:t}={}){let a=`with publications as (${et}) select * from publications`;return e&&(a+=` limit ${e}`),t&&(a+=` offset ${t}`),{sql:a,zod:ei}},retrieve:function(e){return{sql:`with publications as (${et}) select * from publications where ${function(e){if("id"in e&&e.id)return`${(0,i.ident)("id")} = ${(0,i.literal)(e.id)}`;if("name"in e&&e.name)return`${(0,i.ident)("name")} = ${(0,i.literal)(e.name)}`;throw Error("Must provide either id or name")}(e)};`,zod:er}},create:function({name:e,publish_insert:t=!1,publish_update:a=!1,publish_delete:n=!1,publish_truncate:r=!1,tables:s=null}){let o;o=null==s?"FOR ALL TABLES":0===s.length?"":`FOR TABLE ${s.map(e=>{if(!e.includes("."))return(0,i.ident)(e);let[t,...a]=e.split("."),n=a.join(".");return`${(0,i.ident)(t)}.${(0,i.ident)(n)}`}).join(",")}`;let l=[];return t&&l.push("insert"),a&&l.push("update"),n&&l.push("delete"),r&&l.push("truncate"),{sql:`
CREATE PUBLICATION ${(0,i.ident)(e)} ${o}
  WITH (publish = '${l.join(",")}');`}},update:function(e,{name:t,owner:a,publish_insert:n,publish_update:r,publish_delete:s,publish_truncate:o,tables:l}){return{sql:`
do $$
declare
  id oid := ${(0,i.literal)(e)};
  old record;
  new_name text := ${void 0===t?null:(0,i.literal)(t)};
  new_owner text := ${void 0===a?null:(0,i.literal)(a)};
  new_publish_insert bool := ${n??null};
  new_publish_update bool := ${r??null};
  new_publish_delete bool := ${s??null};
  new_publish_truncate bool := ${o??null};
  new_tables text := ${void 0===l?null:(0,i.literal)(null===l?"all tables":l.map(e=>{if(!e.includes("."))return(0,i.ident)(e);let[t,...a]=e.split("."),n=a.join(".");return`${(0,i.ident)(t)}.${(0,i.ident)(n)}`}).join(","))};
begin
  select * into old from pg_publication where oid = id;
  if old is null then
    raise exception 'Cannot find publication with id %', id;
  end if;

  if new_tables is null then
    null;
  elsif new_tables = 'all tables' then
    if old.puballtables then
      null;
    else
      -- Need to recreate because going from list of tables <-> all tables with alter is not possible.
      execute(format('drop publication %1$I; create publication %1$I for all tables;', old.pubname));
    end if;
  else
    if old.puballtables then
      -- Need to recreate because going from list of tables <-> all tables with alter is not possible.
      execute(format('drop publication %1$I; create publication %1$I;', old.pubname));
    elsif exists(select from pg_publication_rel where prpubid = id) then
      execute(
        format(
          'alter publication %I drop table %s',
          old.pubname,
          (select string_agg(prrelid::regclass::text, ', ') from pg_publication_rel where prpubid = id)
        )
      );
    end if;

    -- At this point the publication must have no tables.

    if new_tables != '' then
      execute(format('alter publication %I add table %s', old.pubname, new_tables));
    end if;
  end if;

  execute(
    format(
      'alter publication %I set (publish = %L);',
      old.pubname,
      concat_ws(
        ', ',
        case when coalesce(new_publish_insert, old.pubinsert) then 'insert' end,
        case when coalesce(new_publish_update, old.pubupdate) then 'update' end,
        case when coalesce(new_publish_delete, old.pubdelete) then 'delete' end,
        case when coalesce(new_publish_truncate, old.pubtruncate) then 'truncate' end
      )
    )
  );

  execute(format('alter publication %I owner to %I;', old.pubname, coalesce(new_owner, old.pubowner::regrole::name)));

  -- Using the same name in the rename clause gives an error, so only do it if the new name is different.
  if new_name is not null and new_name != old.pubname then
    execute(format('alter publication %I rename to %I;', old.pubname, coalesce(new_name, old.pubname)));
  end if;

  -- We need to retrieve the publication later, so we need a way to uniquely identify which publication this is.
  -- We can't rely on id because it gets changed if it got recreated.
  -- We use a temp table to store the unique name - DO blocks can't return a value.
  create temp table pg_meta_publication_tmp (name) on commit drop as values (coalesce(new_name, old.pubname));
end $$;
`}},remove:function(e){return{sql:`DROP PUBLICATION IF EXISTS ${(0,i.ident)(e.name)};`}},zod:en},extensions:{list:function({limit:e,offset:t}={}){let a=f;return e&&(a=`${a} LIMIT ${e}`),t&&(a=`${a} OFFSET ${t}`),{sql:a,zod:v}},retrieve:function({name:e}){return{sql:`${f} WHERE name = ${(0,i.literal)(e)};`,zod:T}},create:function({name:e,schema:t,version:a,cascade:n=!1}){return{sql:`
CREATE EXTENSION ${(0,i.ident)(e)}
  ${void 0===t?"":`SCHEMA ${(0,i.ident)(t)}`}
  ${void 0===a?"":`VERSION ${(0,i.literal)(a)}`}
  ${n?"CASCADE":""};`}},update:function(e,{update:t=!1,version:a,schema:n}){let r="";t&&(r=`ALTER EXTENSION ${(0,i.ident)(e)} UPDATE ${void 0===a?"":`TO ${(0,i.literal)(a)}`};`);let s=void 0===n?"":`ALTER EXTENSION ${(0,i.ident)(e)} SET SCHEMA ${(0,i.ident)(n)};`;return{sql:`BEGIN; ${r} ${s} COMMIT;`}},remove:function(e,{cascade:t=!1}={}){return{sql:`DROP EXTENSION ${(0,i.ident)(e)} ${t?"CASCADE":"RESTRICT"};`}},zod:N},config:{list:function({limit:e,offset:t}={}){let a=g;return e&&(a+=` LIMIT ${e}`),t&&(a+=` OFFSET ${t}`),{sql:a,zod:h}},zod:b},materializedViews:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:a,limit:i,offset:r,includeColumns:o=!0}={}){let l=Q({includeColumns:o}),c=s(t,a,e?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return c&&(l+=` where schema ${c}`),i&&(l+=` limit ${i}`),r&&(l+=` offset ${r}`),{sql:l,zod:X}},retrieve:function(e){let t=function(e){if("id"in e&&e.id)return`${(0,i.ident)("id")} = ${(0,i.literal)(e.id)}`;if("name"in e&&e.name&&e.schema)return`${(0,i.ident)("name")} = ${(0,i.literal)(e.name)} and ${(0,i.ident)("schema")} = ${(0,i.literal)(e.schema)}`;throw Error("Must provide either id or name and schema")}(e);return{sql:`${Q({includeColumns:!0})} where ${t};`,zod:J}},zod:Y},foreignTables:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:a,limit:i,offset:r,includeColumns:o=!0}={}){let l=R({includeColumns:o}),c=s(t,a,e?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return c&&(l+=` where schema ${c}`),i&&(l+=` limit ${i}`),r&&(l+=` offset ${r}`),{sql:l,zod:I}},retrieve:function(e){return{sql:`${R({includeColumns:!0})} where ${function(e){if("id"in e&&e.id)return`${(0,i.ident)("id")} = ${(0,i.literal)(e.id)}`;if("name"in e&&e.name&&e.schema)return`${(0,i.ident)("name")} = ${(0,i.literal)(e.name)} and ${(0,i.ident)("schema")} = ${(0,i.literal)(e.schema)}`;throw Error("Must provide either id or name and schema")}(e)};`,zod:A}},zod:S},views:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:a,limit:i,offset:r,includeColumns:o=!0}={}){let l=eW({includeColumns:o}),c=s(t,a,e?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return c&&(l+=` where schema ${c}`),i&&(l+=` limit ${i}`),r&&(l+=` offset ${r}`),{sql:l,zod:eM}},retrieve:function(e){let t=function(e){if("id"in e&&e.id)return`${(0,i.ident)("id")} = ${(0,i.literal)(e.id)}`;if("name"in e&&e.name&&e.schema)return`${(0,i.ident)("name")} = ${(0,i.literal)(e.name)} and ${(0,i.ident)("schema")} = ${(0,i.literal)(e.schema)}`;throw Error("Must provide either id or name and schema")}(e);return{sql:`${eW({includeColumns:!0})} where ${t};`,zod:eP}},zod:ek},policies:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:a,limit:i,offset:r}={}){let o=`
    with policies as (${K})
    select *
    from policies
    `,l=s(t,a,e?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return l&&(o+=`where schema ${l}`),i&&(o+=` limit ${i}`),r&&(o+=` offset ${r}`),{sql:o,zod:Z}},retrieve:function(e){return{sql:`with policies as (${K}) select * from policies where ${function(e){if("id"in e&&e.id)return`id = ${(0,i.literal)(e.id)}`;if("name"in e&&e.name&&e.schema&&e.table)return`name = ${(0,i.literal)(e.name)} AND schema = ${(0,i.literal)(e.schema)} AND table = ${(0,i.literal)(e.table)}`;throw Error("Must provide either id or name, schema and table")}(e)};`,zod:ee}},create:function({name:e,schema:t="public",table:a,definition:n,check:r,action:s="PERMISSIVE",command:o="ALL",roles:l=["public"]}){return{sql:`
create policy ${(0,i.ident)(e)} on ${(0,i.ident)(t)}.${(0,i.ident)(a)}
  as ${s}
  for ${o}
  to ${l.map(i.ident).join(",")}
  ${n?`using (${n})`:""}
  ${r?`with check (${r})`:""};`}},update:function(e,t){let{name:a,definition:n,check:r,roles:s}=t,o=`ALTER POLICY ${(0,i.ident)(e.name)} ON ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)}`,l=void 0===a?"":`${o} RENAME TO ${(0,i.ident)(a)};`,c=void 0===n?"":`${o} USING (${n});`,d=void 0===r?"":`${o} WITH CHECK (${r});`,_=void 0===s?"":`${o} TO ${s.map(i.ident).join(",")};`;return{sql:`BEGIN; ${c} ${d} ${_} ${l} COMMIT;`}},remove:function(e){return{sql:`DROP POLICY ${(0,i.ident)(e.name)} ON ${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)};`}},zod:V},triggers:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:a,limit:i,offset:r}={}){let o=`with triggers as (${eC}) select * from triggers`,l=s(t,a,e?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return l&&(o+=` where schema ${l}`),i&&(o+=` limit ${i}`),r&&(o+=` offset ${r}`),{sql:o,zod:ex}},retrieve:function(e){let t=function(e){if("id"in e&&e.id)return`${(0,i.ident)("id")} = ${(0,i.literal)(e.id)}`;if("name"in e&&e.name&&e.table&&e.schema)return`${(0,i.ident)("name")} = ${(0,i.literal)(e.name)} and ${(0,i.ident)("schema")} = ${(0,i.literal)(e.schema)} and ${(0,i.ident)("table")} = ${(0,i.literal)(e.table)}`;throw Error("Must provide either id or name, schema and table")}(e);return{sql:`with triggers as (${eC}) select * from triggers where ${t};`,zod:ez}},create:function({name:e,schema:t="public",table:n,function_schema:r="public",function_name:s,function_args:o=[],activation:l,events:c,orientation:d,condition:_}){let m=`${(0,i.ident)(t)}.${(0,i.ident)(n)}`,p=`${(0,i.ident)(r)}.${(0,i.ident)(s)}`,u=c.join(" or "),E=d?`for each ${d}`:"",g=_?`when (${_})`:"",b=o.map(i.literal).join(",");return{sql:`create trigger ${(0,i.ident)(e)} ${l} ${u} on ${m} ${E} ${g} execute function ${p}(${b});`,zod:a.z.void()}},update:function(e,t){let n=`${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)}`,r="";switch(t.enabled_mode){case"ORIGIN":r=`alter table ${n} enable trigger ${(0,i.ident)(e.name)};`;break;case"DISABLED":r=`alter table ${n} disable trigger ${(0,i.ident)(e.name)};`;break;case"REPLICA":case"ALWAYS":r=`alter table ${n} enable ${t.enabled_mode} trigger ${(0,i.ident)(e.name)};`}let s=t.name&&t.name!==e.name?`alter trigger ${(0,i.ident)(e.name)} on ${n} rename to ${(0,i.ident)(t.name)};`:"";return{sql:`begin; ${r}; ${s}; commit;`,zod:a.z.void()}},remove:function(e,{cascade:t=!1}={}){let n=`${(0,i.ident)(e.schema)}.${(0,i.ident)(e.table)}`;return{sql:`drop trigger ${(0,i.ident)(e.name)} on ${n} ${t?"cascade":""};`,zod:a.z.void()}},zod:eD},types:{list:function({includeArrayTypes:e=!1,includeSystemSchemas:t=!1,includedSchemas:a,excludedSchemas:i,limit:r,offset:o}={}){let l=ew;e||(l+=` and not exists (
      select from pg_type el
      where el.oid = t.typelem
        and el.typarray = t.oid
    )`);let c=s(a,i,t?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return c&&(l+=` and n.nspname ${c}`),r&&(l+=` limit ${r}`),o&&(l+=` offset ${o}`),{sql:l,zod:eH}},zod:eF},version:{retrieve:function(){return{sql:ej,zod:eq}},zod:eq},indexes:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:a,limit:i,offset:r}={}){let o=`
    with indexes as (${M})
    select *
    from indexes
  `,l=s(t,a,e?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return l&&(o+=` where schema ${l}`),i&&(o+=` limit ${i}`),r&&(o+=` offset ${r}`),{sql:o,zod:W}},retrieve:function({id:e}){return{sql:`
    with indexes as (${M})
    select *
    from indexes
    where id = ${(0,i.literal)(e)};
  `,zod:G}},zod:P},columnPrivileges:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:a,columnIds:r,limit:l,offset:c}={}){let _=`
  with column_privileges as (${o})
  select *
  from column_privileges
  `,m=[],p=s(t,a,e?void 0:n.DEFAULT_SYSTEM_SCHEMAS);return p&&m.push(`relation_schema ${p}`),r?.length&&m.push(`column_id in (${r.map(i.literal).join(",")})`),m.length>0&&(_+=` where ${m.join(" and ")}`),l&&(_+=` limit ${l}`),c&&(_+=` offset ${c}`),{sql:_,zod:d}},grant:function(e){return{sql:`
do $$
declare
  col record;
begin
${e.map(({privilegeType:e,columnId:t,grantee:a,isGrantable:n})=>{let[r,s]=t.split(".");return`
select *
from pg_attribute a
where a.attrelid = ${(0,i.literal)(r)}
  and a.attnum = ${(0,i.literal)(s)}
into col;
execute format(
  'grant ${e} (%I) on %s to ${"public"===a.toLowerCase()?"public":(0,i.ident)(a)} ${n?"with grant option":""}',
  col.attname,
  col.attrelid::regclass
);`}).join("\n")}
end $$;
`}},revoke:function(e){return{sql:`
do $$
declare
  col record;
begin
${e.map(({privilegeType:e,columnId:t,grantee:a})=>{let[n,r]=t.split(".");return`
select *
from pg_attribute a
where a.attrelid = ${(0,i.literal)(n)}
  and a.attnum = ${(0,i.literal)(r)}
into col;
execute format(
  'revoke ${e} (%I) on %s from ${"public"===a.toLowerCase()?"public":(0,i.ident)(a)}',
  col.attname,
  col.attrelid::regclass
);`}).join("\n")}
end $$;
`}},zod:c},query:eQ}],850036)}]);

//# debugId=f8d09e9c-d80a-aa0a-e88b-1262e4089847
//# sourceMappingURL=667108a7d01cb64e.js.map