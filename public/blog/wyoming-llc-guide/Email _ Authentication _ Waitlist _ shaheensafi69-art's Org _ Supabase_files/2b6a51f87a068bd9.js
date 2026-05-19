;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="53af6bf5-645c-d892-39df-78c40063f811")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,276245,(t,e,r)=>{var n;"u">typeof __nccwpck_require__&&(__nccwpck_require__.ab="/ROOT/node_modules/.pnpm/next@16.1.7_@babel+core@7.29.0_supports-color@8.1.1__@opentelemetry+api@1.9.0_@playwrig_c2cc1b18713b30a1df4528ad7af2b196/node_modules/next/dist/compiled/os-browserify/"),(n={}).endianness=function(){return"LE"},n.hostname=function(){return"u">typeof location?location.hostname:""},n.loadavg=function(){return[]},n.uptime=function(){return 0},n.freemem=function(){return Number.MAX_VALUE},n.totalmem=function(){return Number.MAX_VALUE},n.cpus=function(){return[]},n.type=function(){return"Browser"},n.release=function(){return"u">typeof navigator?navigator.appVersion:""},n.networkInterfaces=n.getNetworkInterfaces=function(){return{}},n.arch=function(){return"javascript"},n.platform=function(){return"browser"},n.tmpdir=n.tmpDir=function(){return"/tmp"},n.EOL="\n",n.homedir=function(){return"/"},e.exports=n},822067,(t,e,r)=>{var n=t.i(561116),o=t.i(840758),i={8992:function(t){t.exports=function(t,r,n){if(t.filter)return t.filter(r,n);if(null==t||"function"!=typeof r)throw TypeError();for(var o=[],i=0;i<t.length;i++)if(e.call(t,i)){var a=t[i];r.call(n,a,i,t)&&o.push(a)}return o};var e=Object.prototype.hasOwnProperty},5555:function(t,e,r){"use strict";var n=r(1212),o=r(1909),i=r(8737);t.exports=r(8772)||n.call(i,o)},9905:function(t,e,r){"use strict";var n=r(1212),o=r(1909),i=r(5555);t.exports=function(){return i(n,o,arguments)}},1909:function(t){"use strict";t.exports=Function.prototype.apply},8737:function(t){"use strict";t.exports=Function.prototype.call},7152:function(t,e,r){"use strict";var n=r(1212),o=r(8202),i=r(8737),a=r(5555);t.exports=function(t){if(t.length<1||"function"!=typeof t[0])throw new o("a function is required");return a(n,i,t)}},8772:function(t){"use strict";t.exports="u">typeof Reflect&&Reflect&&Reflect.apply},516:function(t,e,r){"use strict";var n=r(3197),o=r(9042),i=o(n("String.prototype.indexOf"));t.exports=function(t,e){var r=n(t,!!e);return"function"==typeof r&&i(t,".prototype.")>-1?o(r):r}},9042:function(t,e,r){"use strict";var n=r(3143),o=r(446),i=r(7152),a=r(9905);t.exports=function(t){var e=i(arguments),r=t.length-(arguments.length-1);return n(e,1+(r>0?r:0),!0)},o?o(t.exports,"apply",{value:a}):t.exports.apply=a},819:function(t,e,r){"use strict";var n=r(446),o=r(5182),i=r(8202),a=r(3990);t.exports=function(t,e,r){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new i("`obj` must be an object or a function`");if("string"!=typeof e&&"symbol"!=typeof e)throw new i("`property` must be a string or a symbol`");if(arguments.length>3&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new i("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new i("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new i("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&"boolean"!=typeof arguments[6])throw new i("`loose`, if provided, must be a boolean");var c=arguments.length>3?arguments[3]:null,s=arguments.length>4?arguments[4]:null,u=arguments.length>5?arguments[5]:null,p=arguments.length>6&&arguments[6],l=!!a&&a(t,e);if(n)n(t,e,{configurable:null===u&&l?l.configurable:!u,enumerable:null===c&&l?l.enumerable:!c,value:r,writable:null===s&&l?l.writable:!s});else if(!p&&(c||s||u))throw new o("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");else t[e]=r}},6211:function(t,e,r){"use strict";var n,o=r(7152),i=r(3990);try{n=[].__proto__===Array.prototype}catch(t){if(!t||"object"!=typeof t||!("code"in t)||"ERR_PROTO_ACCESS"!==t.code)throw t}var a=!!n&&i&&i(Object.prototype,"__proto__"),c=Object,s=c.getPrototypeOf;t.exports=a&&"function"==typeof a.get?o([a.get]):"function"==typeof s&&function(t){return s(null==t?t:c(t))}},446:function(t){"use strict";var e=Object.defineProperty||!1;if(e)try{e({},"a",{value:1})}catch(t){e=!1}t.exports=e},7181:function(t){"use strict";t.exports=EvalError},1545:function(t){"use strict";t.exports=Error},22:function(t){"use strict";t.exports=RangeError},2803:function(t){"use strict";t.exports=ReferenceError},5182:function(t){"use strict";t.exports=SyntaxError},8202:function(t){"use strict";t.exports=TypeError},3284:function(t){"use strict";t.exports=URIError},2811:function(t){"use strict";t.exports=Object},6144:function(t){var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString;t.exports=function(t,n,o){if("[object Function]"!==r.call(n))throw TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var a=0;a<i;a++)n.call(o,t[a],a,t);else for(var c in t)e.call(t,c)&&n.call(o,t[c],c,t)}},3136:function(t){"use strict";var e=Object.prototype.toString,r=Math.max,n=function(t,e){for(var r=[],n=0;n<t.length;n+=1)r[n]=t[n];for(var o=0;o<e.length;o+=1)r[o+t.length]=e[o];return r},o=function(t,e){for(var r=[],n=e||0,o=0;n<t.length;n+=1,o+=1)r[o]=t[n];return r},i=function(t,e){for(var r="",n=0;n<t.length;n+=1)r+=t[n],n+1<t.length&&(r+=e);return r};t.exports=function(t){var a,c=this;if("function"!=typeof c||"[object Function]"!==e.apply(c))throw TypeError("Function.prototype.bind called on incompatible "+c);for(var s=o(arguments,1),u=r(0,c.length-s.length),p=[],l=0;l<u;l++)p[l]="$"+l;if(a=Function("binder","return function ("+i(p,",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof a){var e=c.apply(this,n(s,arguments));return Object(e)===e?e:this}return c.apply(t,n(s,arguments))}),c.prototype){var f=function(){};f.prototype=c.prototype,a.prototype=new f,f.prototype=null}return a}},1212:function(t,e,r){"use strict";var n=r(3136);t.exports=Function.prototype.bind||n},3197:function(t,e,r){"use strict";var n,o=r(2811),i=r(1545),a=r(7181),c=r(22),s=r(2803),u=r(5182),p=r(8202),l=r(3284),f=r(7173),y=r(847),d=r(2916),b=r(9882),m=r(3291),g=r(553),h=r(8629),_=Function,w=function(t){try{return _('"use strict"; return ('+t+").constructor;")()}catch(t){}},v=r(3990),j=r(446),A=function(){throw new p},S=v?function(){try{return arguments.callee,A}catch(t){try{return v(arguments,"callee").get}catch(t){return A}}}():A,O=r(4871)(),x=r(699),E=r(7823),P=r(7904),k=r(1909),I=r(8737),F={},U="u">typeof Uint8Array&&x?x(Uint8Array):n,R={__proto__:null,"%AggregateError%":"u"<typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"u"<typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":O&&x?x([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":F,"%AsyncGenerator%":F,"%AsyncGeneratorFunction%":F,"%AsyncIteratorPrototype%":F,"%Atomics%":"u"<typeof Atomics?n:Atomics,"%BigInt%":"u"<typeof BigInt?n:BigInt,"%BigInt64Array%":"u"<typeof BigInt64Array?n:BigInt64Array,"%BigUint64Array%":"u"<typeof BigUint64Array?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"u"<typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":i,"%eval%":eval,"%EvalError%":a,"%Float16Array%":"u"<typeof Float16Array?n:Float16Array,"%Float32Array%":"u"<typeof Float32Array?n:Float32Array,"%Float64Array%":"u"<typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"u"<typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":_,"%GeneratorFunction%":F,"%Int8Array%":"u"<typeof Int8Array?n:Int8Array,"%Int16Array%":"u"<typeof Int16Array?n:Int16Array,"%Int32Array%":"u"<typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":O&&x?x(x([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"u"<typeof Map?n:Map,"%MapIteratorPrototype%":"u">typeof Map&&O&&x?x((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":o,"%Object.getOwnPropertyDescriptor%":v,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"u"<typeof Promise?n:Promise,"%Proxy%":"u"<typeof Proxy?n:Proxy,"%RangeError%":c,"%ReferenceError%":s,"%Reflect%":"u"<typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"u"<typeof Set?n:Set,"%SetIteratorPrototype%":"u">typeof Set&&O&&x?x((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"u"<typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":O&&x?x(""[Symbol.iterator]()):n,"%Symbol%":O?Symbol:n,"%SyntaxError%":u,"%ThrowTypeError%":S,"%TypedArray%":U,"%TypeError%":p,"%Uint8Array%":"u"<typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"u"<typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"u"<typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"u"<typeof Uint32Array?n:Uint32Array,"%URIError%":l,"%WeakMap%":"u"<typeof WeakMap?n:WeakMap,"%WeakRef%":"u"<typeof WeakRef?n:WeakRef,"%WeakSet%":"u"<typeof WeakSet?n:WeakSet,"%Function.prototype.call%":I,"%Function.prototype.apply%":k,"%Object.defineProperty%":j,"%Object.getPrototypeOf%":E,"%Math.abs%":f,"%Math.floor%":y,"%Math.max%":d,"%Math.min%":b,"%Math.pow%":m,"%Math.round%":g,"%Math.sign%":h,"%Reflect.getPrototypeOf%":P};if(x)try{null.error}catch(t){var T=x(x(t));R["%Error.prototype%"]=T}var B=function t(e){var r;if("%AsyncFunction%"===e)r=w("async function () {}");else if("%GeneratorFunction%"===e)r=w("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=w("async function* () {}");else if("%AsyncGenerator%"===e){var n=t("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===e){var o=t("%AsyncGenerator%");o&&x&&(r=x(o.prototype))}return R[e]=r,r},M={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},N=r(1212),D=r(3270),C=N.call(I,Array.prototype.concat),z=N.call(k,Array.prototype.splice),G=N.call(I,String.prototype.replace),W=N.call(I,String.prototype.slice),$=N.call(I,RegExp.prototype.exec),q=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,L=/\\(\\)?/g,V=function(t){var e=W(t,0,1),r=W(t,-1);if("%"===e&&"%"!==r)throw new u("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new u("invalid intrinsic syntax, expected opening `%`");var n=[];return G(t,q,function(t,e,r,o){n[n.length]=r?G(o,L,"$1"):e||t}),n},Q=function(t,e){var r,n=t;if(D(M,n)&&(n="%"+(r=M[n])[0]+"%"),D(R,n)){var o=R[n];if(o===F&&(o=B(n)),void 0===o&&!e)throw new p("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:o}}throw new u("intrinsic "+t+" does not exist!")};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new p("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new p('"allowMissing" argument must be a boolean');if(null===$(/^%?[^%]*%?$/,t))throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=V(t),n=r.length>0?r[0]:"",o=Q("%"+n+"%",e),i=o.name,a=o.value,c=!1,s=o.alias;s&&(n=s[0],z(r,C([0,1],s)));for(var l=1,f=!0;l<r.length;l+=1){var y=r[l],d=W(y,0,1),b=W(y,-1);if(('"'===d||"'"===d||"`"===d||'"'===b||"'"===b||"`"===b)&&d!==b)throw new u("property names with quotes must have matching quotes");if("constructor"!==y&&f||(c=!0),n+="."+y,D(R,i="%"+n+"%"))a=R[i];else if(null!=a){if(!(y in a)){if(!e)throw new p("base intrinsic for "+t+" exists, but the property is not available.");return}if(v&&l+1>=r.length){var m=v(a,y);a=(f=!!m)&&"get"in m&&!("originalValue"in m.get)?m.get:a[y]}else f=D(a,y),a=a[y];f&&!c&&(R[i]=a)}}return a}},7823:function(t,e,r){"use strict";t.exports=r(2811).getPrototypeOf||null},7904:function(t){"use strict";t.exports="u">typeof Reflect&&Reflect.getPrototypeOf||null},699:function(t,e,r){"use strict";var n=r(7904),o=r(7823),i=r(6211);t.exports=n?function(t){return n(t)}:o?function(t){if(!t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("getProto: not an object");return o(t)}:i?function(t){return i(t)}:null},4596:function(t){"use strict";t.exports=Object.getOwnPropertyDescriptor},3990:function(t,e,r){"use strict";var n=r(4596);if(n)try{n([],"length")}catch(t){n=null}t.exports=n},7122:function(t,e,r){"use strict";var n=r(446),o=function(){return!!n};o.hasArrayLengthDefineBug=function(){if(!n)return null;try{return 1!==n([],"length",{value:1}).length}catch(t){return!0}},t.exports=o},9942:function(t,e,r){"use strict";var n="u">typeof Symbol&&Symbol,o=r(3773);t.exports=function(){return"function"==typeof n&&"function"==typeof Symbol&&"symbol"==typeof n("foo")&&"symbol"==typeof Symbol("bar")&&o()}},3773:function(t){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e||"[object Symbol]"!==Object.prototype.toString.call(e)||"[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var n=Object.getOwnPropertySymbols(t);if(1!==n.length||n[0]!==e||!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(t,e);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},4871:function(t,e,r){"use strict";var n="u">typeof Symbol&&Symbol,o=r(5960);t.exports=function(){return"function"==typeof n&&"function"==typeof Symbol&&"symbol"==typeof n("foo")&&"symbol"==typeof Symbol("bar")&&o()}},5960:function(t){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e||"[object Symbol]"!==Object.prototype.toString.call(e)||"[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(var n in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e||!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,e);if(42!==i.value||!0!==i.enumerable)return!1}return!0}},3270:function(t,e,r){"use strict";var n=Function.prototype.call,o=Object.prototype.hasOwnProperty;t.exports=r(1212).call(n,o)},3782:function(t){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},5157:function(t){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,r=Object.prototype.toString,n=function(t){return(!e||!t||"object"!=typeof t||!(Symbol.toStringTag in t))&&"[object Arguments]"===r.call(t)},o=function(t){return!!n(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==r.call(t)&&"[object Function]"===r.call(t.callee)},i=function(){return n(arguments)}();n.isLegacyArguments=o,t.exports=i?n:o},3391:function(t){"use strict";var e=Object.prototype.toString,r=Function.prototype.toString,n=/^\s*(?:function)?\*/,o="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,i=Object.getPrototypeOf,a=function(){if(!o)return!1;try{return Function("return function*() {}")()}catch(t){}}(),c=a?i(a):{};t.exports=function(t){return"function"==typeof t&&(!!n.test(r.call(t))||(o?i(t)===c:"[object GeneratorFunction]"===e.call(t)))}},994:function(e,r,n){"use strict";var o=n(6144),i=n(1349),a=n(516),c=a("Object.prototype.toString"),s=n(9942)()&&"symbol"==typeof Symbol.toStringTag,u=i(),p=a("Array.prototype.indexOf",!0)||function(t,e){for(var r=0;r<t.length;r+=1)if(t[r]===e)return r;return -1},l=a("String.prototype.slice"),f={},y=n(2154),d=Object.getPrototypeOf;s&&y&&d&&o(u,function(e){var r=new t.g[e];if(!(Symbol.toStringTag in r))throw EvalError("this engine has support for Symbol.toStringTag, but "+e+" does not have the property! Please report this.");var n=d(r),o=y(n,Symbol.toStringTag);o||(o=y(d(n),Symbol.toStringTag)),f[e]=o.get});var b=function(t){var e=!1;return o(f,function(r,n){if(!e)try{e=r.call(t)===n}catch(t){}}),e};e.exports=function(t){return!!t&&"object"==typeof t&&(s?!!y&&b(t):p(u,l(c(t),8,-1))>-1)}},7173:function(t){"use strict";t.exports=Math.abs},847:function(t){"use strict";t.exports=Math.floor},219:function(t){"use strict";t.exports=Number.isNaN||function(t){return t!=t}},2916:function(t){"use strict";t.exports=Math.max},9882:function(t){"use strict";t.exports=Math.min},3291:function(t){"use strict";t.exports=Math.pow},553:function(t){"use strict";t.exports=Math.round},8629:function(t,e,r){"use strict";var n=r(219);t.exports=function(t){return n(t)||0===t?t:t<0?-1:1}},3143:function(t,e,r){"use strict";var n=r(3197),o=r(819),i=r(7122)(),a=r(3990),c=r(8202),s=n("%Math.floor%");t.exports=function(t,e){if("function"!=typeof t)throw new c("`fn` is not a function");if("number"!=typeof e||e<0||e>0xffffffff||s(e)!==e)throw new c("`length` must be a positive 32-bit integer");var r=arguments.length>2&&!!arguments[2],n=!0,u=!0;if("length"in t&&a){var p=a(t,"length");p&&!p.configurable&&(n=!1),p&&!p.writable&&(u=!1)}return(n||u||!r)&&(i?o(t,"length",e,!0,!0):o(t,"length",e)),t}},2369:function(t){t.exports=function(t){return t instanceof n.Buffer}},5584:function(t,e,r){"use strict";var n=r(5157),o=r(3391),i=r(1490),a=r(994);function c(t){return t.call.bind(t)}var s="u">typeof BigInt,u="u">typeof Symbol,p=c(Object.prototype.toString),l=c(Number.prototype.valueOf),f=c(String.prototype.valueOf),y=c(Boolean.prototype.valueOf);if(s)var d=c(BigInt.prototype.valueOf);if(u)var b=c(Symbol.prototype.valueOf);function m(t,e){if("object"!=typeof t)return!1;try{return e(t),!0}catch(t){return!1}}function g(t){return"[object Map]"===p(t)}function h(t){return"[object Set]"===p(t)}function _(t){return"[object WeakMap]"===p(t)}function w(t){return"[object WeakSet]"===p(t)}function v(t){return"[object ArrayBuffer]"===p(t)}function j(t){return!("u"<typeof ArrayBuffer)&&(v.working?v(t):t instanceof ArrayBuffer)}function A(t){return"[object DataView]"===p(t)}function S(t){return!("u"<typeof DataView)&&(A.working?A(t):t instanceof DataView)}e.isArgumentsObject=n,e.isGeneratorFunction=o,e.isTypedArray=a,e.isPromise=function(t){return"u">typeof Promise&&t instanceof Promise||null!==t&&"object"==typeof t&&"function"==typeof t.then&&"function"==typeof t.catch},e.isArrayBufferView=function(t){return"u">typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):a(t)||S(t)},e.isUint8Array=function(t){return"Uint8Array"===i(t)},e.isUint8ClampedArray=function(t){return"Uint8ClampedArray"===i(t)},e.isUint16Array=function(t){return"Uint16Array"===i(t)},e.isUint32Array=function(t){return"Uint32Array"===i(t)},e.isInt8Array=function(t){return"Int8Array"===i(t)},e.isInt16Array=function(t){return"Int16Array"===i(t)},e.isInt32Array=function(t){return"Int32Array"===i(t)},e.isFloat32Array=function(t){return"Float32Array"===i(t)},e.isFloat64Array=function(t){return"Float64Array"===i(t)},e.isBigInt64Array=function(t){return"BigInt64Array"===i(t)},e.isBigUint64Array=function(t){return"BigUint64Array"===i(t)},g.working="u">typeof Map&&g(new Map),e.isMap=function(t){return!("u"<typeof Map)&&(g.working?g(t):t instanceof Map)},h.working="u">typeof Set&&h(new Set),e.isSet=function(t){return!("u"<typeof Set)&&(h.working?h(t):t instanceof Set)},_.working="u">typeof WeakMap&&_(new WeakMap),e.isWeakMap=function(t){return!("u"<typeof WeakMap)&&(_.working?_(t):t instanceof WeakMap)},w.working="u">typeof WeakSet&&w(new WeakSet),e.isWeakSet=function(t){return w(t)},v.working="u">typeof ArrayBuffer&&v(new ArrayBuffer),e.isArrayBuffer=j,A.working="u">typeof ArrayBuffer&&"u">typeof DataView&&A(new DataView(new ArrayBuffer(1),0,1)),e.isDataView=S;var O="u">typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function x(t){return"[object SharedArrayBuffer]"===p(t)}function E(t){return void 0!==O&&(void 0===x.working&&(x.working=x(new O)),x.working?x(t):t instanceof O)}function P(t){return m(t,l)}function k(t){return m(t,f)}function I(t){return m(t,y)}function F(t){return s&&m(t,d)}function U(t){return u&&m(t,b)}e.isSharedArrayBuffer=E,e.isAsyncFunction=function(t){return"[object AsyncFunction]"===p(t)},e.isMapIterator=function(t){return"[object Map Iterator]"===p(t)},e.isSetIterator=function(t){return"[object Set Iterator]"===p(t)},e.isGeneratorObject=function(t){return"[object Generator]"===p(t)},e.isWebAssemblyCompiledModule=function(t){return"[object WebAssembly.Module]"===p(t)},e.isNumberObject=P,e.isStringObject=k,e.isBooleanObject=I,e.isBigIntObject=F,e.isSymbolObject=U,e.isBoxedPrimitive=function(t){return P(t)||k(t)||I(t)||F(t)||U(t)},e.isAnyArrayBuffer=function(t){return"u">typeof Uint8Array&&(j(t)||E(t))},["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(t){Object.defineProperty(e,t,{enumerable:!1,value:function(){throw Error(t+" is not supported in userland")}})})},8177:function(t,e,r){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},i=/%[sdj%]/g;e.format=function(t){if(!_(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(u(arguments[r]));return e.join(" ")}for(var r=1,n=arguments,o=n.length,a=String(t).replace(i,function(t){if("%%"===t)return"%";if(r>=o)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}}),c=n[r];r<o;c=n[++r])g(c)||!j(c)?a+=" "+c:a+=" "+u(c);return a},e.deprecate=function(t,r){if(void 0!==o.default&&!0===o.default.noDeprecation)return t;if(void 0===o.default)return function(){return e.deprecate(t,r).apply(this,arguments)};var n=!1;return function(){if(!n){if(o.default.throwDeprecation)throw Error(r);o.default.traceDeprecation?console.trace(r):console.error(r),n=!0}return t.apply(this,arguments)}};var a={},c=/^$/;if(o.default.env.NODE_DEBUG){var s=o.default.env.NODE_DEBUG;c=RegExp("^"+(s=s.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase())+"$","i")}function u(t,r){var n={seen:[],stylize:l};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),m(r)?n.showHidden=r:r&&e._extend(n,r),w(n.showHidden)&&(n.showHidden=!1),w(n.depth)&&(n.depth=2),w(n.colors)&&(n.colors=!1),w(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=p),f(n,t,n.depth)}function p(t,e){var r=u.styles[e];return r?"\x1b["+u.colors[r][0]+"m"+t+"\x1b["+u.colors[r][1]+"m":t}function l(t,e){return t}function f(t,r,n){if(t.customInspect&&r&&O(r.inspect)&&r.inspect!==e.inspect&&!(r.constructor&&r.constructor.prototype===r)){var o,i,a,c,s,u,p=r.inspect(n,t);return _(p)||(p=f(t,p,n)),p}var l=function(t,e){if(w(e))return t.stylize("undefined","undefined");if(_(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return h(e)?t.stylize(""+e,"number"):m(e)?t.stylize(""+e,"boolean"):g(e)?t.stylize("null","null"):void 0}(t,r);if(l)return l;var j=Object.keys(r),x=(s={},j.forEach(function(t,e){s[t]=!0}),s);if(t.showHidden&&(j=Object.getOwnPropertyNames(r)),S(r)&&(j.indexOf("message")>=0||j.indexOf("description")>=0))return y(r);if(0===j.length){if(O(r)){var E=r.name?": "+r.name:"";return t.stylize("[Function"+E+"]","special")}if(v(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(A(r))return t.stylize(Date.prototype.toString.call(r),"date");if(S(r))return y(r)}var P="",I=!1,F=["{","}"];if(b(r)&&(I=!0,F=["[","]"]),O(r)&&(P=" [Function"+(r.name?": "+r.name:"")+"]"),v(r)&&(P=" "+RegExp.prototype.toString.call(r)),A(r)&&(P=" "+Date.prototype.toUTCString.call(r)),S(r)&&(P=" "+y(r)),0===j.length&&(!I||0==r.length))return F[0]+P+F[1];if(n<0)if(v(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");else return t.stylize("[Object]","special");return t.seen.push(r),u=I?function(t,e,r,n,o){for(var i=[],a=0,c=e.length;a<c;++a)k(e,String(a))?i.push(d(t,e,r,n,String(a),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(d(t,e,r,n,o,!0))}),i}(t,r,n,x,j):j.map(function(e){return d(t,r,n,x,e,I)}),t.seen.pop(),o=u,i=P,a=F,c=0,o.reduce(function(t,e){return c++,e.indexOf("\n")>=0&&c++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?a[0]+(""===i?"":i+"\n ")+" "+o.join(",\n  ")+" "+a[1]:a[0]+i+" "+o.join(", ")+" "+a[1]}function y(t){return"["+Error.prototype.toString.call(t)+"]"}function d(t,e,r,n,o,i){var a,c,s;if((s=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?c=s.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):s.set&&(c=t.stylize("[Setter]","special")),k(n,o)||(a="["+o+"]"),!c&&(0>t.seen.indexOf(s.value)?(c=g(r)?f(t,s.value,null):f(t,s.value,r-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n")):c=t.stylize("[Circular]","special")),w(a)){if(i&&o.match(/^\d+$/))return c;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+c}function b(t){return Array.isArray(t)}function m(t){return"boolean"==typeof t}function g(t){return null===t}function h(t){return"number"==typeof t}function _(t){return"string"==typeof t}function w(t){return void 0===t}function v(t){return j(t)&&"[object RegExp]"===x(t)}function j(t){return"object"==typeof t&&null!==t}function A(t){return j(t)&&"[object Date]"===x(t)}function S(t){return j(t)&&("[object Error]"===x(t)||t instanceof Error)}function O(t){return"function"==typeof t}function x(t){return Object.prototype.toString.call(t)}function E(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(!a[t=t.toUpperCase()])if(c.test(t)){var r=o.default.pid;a[t]=function(){var n=e.format.apply(e,arguments);console.error("%s %d: %s",t,r,n)}}else a[t]=function(){};return a[t]},e.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.types=r(5584),e.isArray=b,e.isBoolean=m,e.isNull=g,e.isNullOrUndefined=function(t){return null==t},e.isNumber=h,e.isString=_,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=w,e.isRegExp=v,e.types.isRegExp=v,e.isObject=j,e.isDate=A,e.types.isDate=A,e.isError=S,e.types.isNativeError=S,e.isFunction=O,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=r(2369);var P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,r;console.log("%s - %s",(r=[E((t=new Date).getHours()),E(t.getMinutes()),E(t.getSeconds())].join(":"),[t.getDate(),P[t.getMonth()],r].join(" ")),e.format.apply(e,arguments))},e.inherits=r(3782),e._extend=function(t,e){if(!e||!j(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t};var I="u">typeof Symbol?Symbol("util.promisify.custom"):void 0;function F(t,e){if(!t){var r=Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw TypeError('The "original" argument must be of type Function');if(I&&t[I]){var e=t[I];if("function"!=typeof e)throw TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,I,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise(function(t,n){e=t,r=n}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(t,n){t?r(t):e(n)});try{t.apply(this,o)}catch(t){r(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),I&&Object.defineProperty(e,I,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=I,e.callbackify=function(t){if("function"!=typeof t)throw TypeError('The "original" argument must be of type Function');function e(){for(var e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);var n=e.pop();if("function"!=typeof n)throw TypeError("The last argument must be of type Function");var i=this,a=function(){return n.apply(i,arguments)};t.apply(this,e).then(function(t){o.default.nextTick(a.bind(null,null,t))},function(t){o.default.nextTick(F.bind(null,t,a))})}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),Object.defineProperties(e,n(t)),e}},1490:function(e,r,n){"use strict";var o=n(6144),i=n(1349),a=n(516),c=a("Object.prototype.toString"),s=n(9942)()&&"symbol"==typeof Symbol.toStringTag,u=i(),p=a("String.prototype.slice"),l={},f=n(2154),y=Object.getPrototypeOf;s&&f&&y&&o(u,function(e){if("function"==typeof t.g[e]){var r=new t.g[e];if(!(Symbol.toStringTag in r))throw EvalError("this engine has support for Symbol.toStringTag, but "+e+" does not have the property! Please report this.");var n=y(r),o=f(n,Symbol.toStringTag);o||(o=f(y(n),Symbol.toStringTag)),l[e]=o.get}});var d=function(t){var e=!1;return o(l,function(r,n){if(!e)try{var o=r.call(t);o===n&&(e=o)}catch(t){}}),e},b=n(994);e.exports=function(t){return!!b(t)&&(s?d(t):p(c(t),8,-1))}},1349:function(e,r,n){"use strict";var o=n(8992);e.exports=function(){return o(["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],function(e){return"function"==typeof t.g[e]})}},2154:function(t,e,r){"use strict";t.exports=r(3990)}},a={};function c(t){var e=a[t];if(void 0!==e)return e.exports;var r=a[t]={exports:{}},n=!0;try{i[t](r,r.exports,c),n=!1}finally{n&&delete a[t]}return r.exports}c.ab="/ROOT/node_modules/.pnpm/next@16.1.7_@babel+core@7.29.0_supports-color@8.1.1__@opentelemetry+api@1.9.0_@playwrig_c2cc1b18713b30a1df4528ad7af2b196/node_modules/next/dist/compiled/util/",e.exports=c(8177)},167345,(t,e,r)=>{let{inspect:n}=t.r(822067);e.exports={getIndexPos:function(t,e){let r=0,n=e,o=0;do{if(-1===(o=t.indexOf("\n",o))||e<o+1)break;r++,n=e-++o}while(o<e)return{line:r+1,column:n+1}},messageGap:function(t){return" ".repeat(4*t)},addInspection:function(t,e){t[n.custom]=e}}},190948,(t,e,r)=>{let{EOL:n}=t.r(276245),{addInspection:o,messageGap:i}=t.r(167345),a={unclosedMLC:0,unclosedText:1,unclosedQI:2,multiLineQI:3};Object.freeze(a);let c=[{name:"unclosedMLC",message:"Unclosed multi-line comment."},{name:"unclosedText",message:"Unclosed text block."},{name:"unclosedQI",message:"Unclosed quoted identifier."},{name:"multiLineQI",message:"Multi-line quoted identifiers are not supported."}];class s extends Error{constructor(t,e){const r=c[t].message;super(`Error parsing SQL at {line:${e.line},col:${e.column}}: ${r}`),this.name=this.constructor.name,this.error=r,this.code=t,this.position=e,Error.captureStackTrace(this,this.constructor)}}s.prototype.toString=function(t){let e=i((t=t>0?parseInt(t):0)+1);return["SQLParsingError {",`${e}code: parsingErrorCode.${c[this.code].name}`,`${e}error: "${this.error}"`,`${e}position: {line: ${this.position.line}, col: ${this.position.column}}`,`${i(t)}}`].join(n)},o(s.prototype,function(){return this.toString()}),e.exports={SQLParsingError:s,parsingErrorCode:a}},15568,(t,e,r)=>{let{parsingErrorCode:n,SQLParsingError:o}=t.r(190948),{getIndexPos:i}=t.r(167345),a=".,;:()[]=<>+-*/|!?@#";function c(t){return" "===t||"	"===t||"\r"===t||"\n"===t}e.exports=function(t,e){if("string"!=typeof t)throw TypeError("Input SQL must be a text string.");if(!t.length)return"";t=t.replace(/\r\n/g,"\n"),e=e||{};let r=0,s="",u=!1,p=t.length;do{let o,i,d=t[r],b=t[r+1];if(c(d)){for(;++r<p&&c(t[r]););r<p&&(u=!0),r--;continue}if("-"===d&&"-"===b){let e=t.indexOf("\n",r+2);if(e<0)break;r=e-1,l();continue}if("/"===d&&"*"===b){let o=r+1,i=0,a=0,c,d;for(;++o<p-1&&a<=i;)"/"===t[o]&&"*"===t[o+1]?(c=o,i++,o++):"*"===t[o]&&"/"===t[o+1]&&(d=o,a++,o++);a<=i&&(r=c,y(n.unclosedMLC)),"!"!==t[r+2]||e.removeAll||(e.compress&&(u=!1),f(),s+=t.substring(r,d+2).replace(/\n/g,"\r\n")),r=d+1,l();continue}if('"'===d){(o=t.indexOf('"',r+1))<0&&y(n.unclosedQI),(i=t.substring(r,o+1)).indexOf("\n")>0&&y(n.multiLineQI),e.compress&&(u=!1),f(),s+=i,r=o,l();continue}if("'"===d){o=r;do if((o=t.indexOf("'",o+1))>0){let e=o;for(;"\\"===t[--e];);if((o-e)%2){let e=o;for(;++e<p&&"'"===t[e];);if((e-o)%2){o=e-1;break}o=e===p?-1:e}}while(o>0)o<0&&y(n.unclosedText),e.compress&&(u=!1),f();let c=(i=t.substring(r,o+1)).indexOf("\n")>0;c&&(i=i.split("\n").map(t=>t.replace(/^\s+|\s+$/g,"")).join("\\n"));let d=i.indexOf("	")>0;if(c||d){let e=r?t[r-1]:"";if("E"!==e&&"e"!==e){let t=s?s[s.length-1]:"";t&&" "!==t&&0>a.indexOf(t)&&(s+=" "),s+="E"}d&&(i=i.replace(/\t/g,"\\t"))}s+=i,r=o,l();continue}e.compress&&a.indexOf(d)>=0&&(u=!1,l()),f(),s+=d}while(++r<p)return s;function l(){if(e.compress)for(;r<p-1&&c(t[r+1])&&r++;);}function f(){u&&(s.length&&(s+=" "),u=!1)}function y(e){throw new o(e,i(t,r))}}},305015,(t,e,r)=>{let n=t.r(15568),o=t.r(190948);n.SQLParsingError=o.SQLParsingError,n.parsingErrorCode=o.parsingErrorCode,e.exports=n},415190,t=>{"use strict";var e=t.i(180141),r=t.i(242882),n=t.i(714403),o=t.i(938343),i=t.i(305015);async function a({projectRef:t,connectionString:e,id:r},o){if(!r)throw Error("id is required");let a=r?(0,i.default)(`
    with base_table_info as (
        select
            c.oid::int8 as id,
            nc.nspname as schema,
            c.relname as name,
            c.relkind,
            c.relrowsecurity as rls_enabled,
            c.relforcerowsecurity as rls_forced,
            c.relreplident,
            c.relowner,
            obj_description(c.oid) as comment,
            fs.srvname as foreign_server_name,
            fdw.fdwname as foreign_data_wrapper_name,
            fdw_handler.proname as foreign_data_wrapper_handler
        from pg_class c
        join pg_namespace nc on nc.oid = c.relnamespace
        left join pg_foreign_table ft on ft.ftrelid = c.oid
        left join pg_foreign_server fs on fs.oid = ft.ftserver
        left join pg_foreign_data_wrapper fdw on fdw.oid = fs.srvfdw
        left join pg_proc fdw_handler on fdw.fdwhandler = fdw_handler.oid
        where c.oid = ${r}
            and not pg_is_other_temp_schema(nc.oid)
            and (
                pg_has_role(c.relowner, 'USAGE')
                or has_table_privilege(
                    c.oid,
                    'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
                )
                or has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
            )
    ),
    table_stats as (
        select
            b.id,
            case
                when b.relreplident = 'd' then 'DEFAULT'
                when b.relreplident = 'i' then 'INDEX'
                when b.relreplident = 'f' then 'FULL'
                else 'NOTHING'
            end as replica_identity,
            pg_total_relation_size(format('%I.%I', b.schema, b.name))::int8 as bytes,
            pg_size_pretty(pg_total_relation_size(format('%I.%I', b.schema, b.name))) as size,
            pg_stat_get_live_tuples(b.id) as live_rows_estimate,
            pg_stat_get_dead_tuples(b.id) as dead_rows_estimate
        from base_table_info b
        where b.relkind in ('r', 'p')
    ),
    primary_keys as (
        select
            i.indrelid as table_id,
            jsonb_agg(
                jsonb_build_object(
                    'schema', n.nspname,
                    'table_name', c.relname,
                    'table_id', i.indrelid::int8,
                    'name', a.attname
                )
                order by array_position(i.indkey, a.attnum)
            ) as primary_keys
        from pg_index i
        join pg_class c on i.indrelid = c.oid
        join pg_namespace n on c.relnamespace = n.oid
		join pg_attribute a on a.attrelid = c.oid and a.attnum = any(i.indkey)
        where i.indisprimary
        group by i.indrelid
    ),
    index_cols as (
        select
            i.indrelid as table_id,
            i.indkey,
            array_agg(
                a.attname
                order by array_position(i.indkey, a.attnum)
            ) as columns
        from pg_index i
        join pg_class c on i.indrelid = c.oid
        join pg_attribute a on a.attrelid = c.oid
            and a.attnum = any(i.indkey)
        where i.indisunique
            and i.indisprimary = false
        group by i.indrelid, i.indkey
    ),
    unique_indexes as (
        select
            ic.table_id,
            jsonb_agg(
                jsonb_build_object(
                    'schema', n.nspname,
                    'table_name', c.relname,
                    'table_id', ic.table_id::int8,
                    'columns', ic.columns
                )
            ) as unique_indexes
        from index_cols ic
        join pg_class c on c.oid = ic.table_id
        join pg_namespace n on n.oid = c.relnamespace
        group by ic.table_id
    ),
    relationships as (
        select
            c.conrelid as source_id,
            c.confrelid as target_id,
            jsonb_build_object(
                'id', c.oid::int8,
                'constraint_name', c.conname,
                'deletion_action', c.confdeltype,
                'update_action', c.confupdtype,
                'source_schema', nsa.nspname,
                'source_table_name', csa.relname,
                'source_column_name', sa.attname,
                'target_table_schema', nta.nspname,
                'target_table_name', cta.relname,
                'target_column_name', ta.attname
            ) as rel_info
        from pg_constraint c
        join pg_class csa on c.conrelid = csa.oid
        join pg_namespace nsa on csa.relnamespace = nsa.oid
        join pg_attribute sa on (sa.attrelid = c.conrelid and sa.attnum = any(c.conkey))
        join pg_class cta on c.confrelid = cta.oid
        join pg_namespace nta on cta.relnamespace = nta.oid
        join pg_attribute ta on (ta.attrelid = c.confrelid and ta.attnum = any(c.confkey))
        where c.contype = 'f'
    ),
    columns as (
        select
            a.attrelid as table_id,
            jsonb_agg(jsonb_build_object(
                'id', (a.attrelid || '.' || a.attnum),
                'table_id', c.oid::int8,
                'schema', nc.nspname,
                'table', c.relname,
                'ordinal_position', a.attnum,
                'name', a.attname,
                'default_value', case
                    when a.atthasdef then pg_get_expr(ad.adbin, ad.adrelid)
                    else null
                end,
                'data_type', case
                    when t.typtype = 'd' then
                        case
                            when bt.typelem <> 0::oid and bt.typlen = -1 then 'ARRAY'
                            when nbt.nspname = 'pg_catalog' then format_type(t.typbasetype, null)
                            else 'USER-DEFINED'
                        end
                    else
                        case
                            when t.typelem <> 0::oid and t.typlen = -1 then 'ARRAY'
                            when nt.nspname = 'pg_catalog' then format_type(a.atttypid, null)
                            else 'USER-DEFINED'
                        end
                end,
                'format', case
                    when t.typtype = 'e' then
                        case
                            when nt.nspname <> 'public' then concat(nt.nspname, '.', coalesce(bt.typname, t.typname))
                            else coalesce(bt.typname, t.typname)
                        end
                    else
                        coalesce(bt.typname, t.typname)
                end,
                'is_identity', a.attidentity in ('a', 'd'),
                'identity_generation', case a.attidentity
                    when 'a' then 'ALWAYS'
                    when 'd' then 'BY DEFAULT'
                    else null
                end,
                'is_generated', a.attgenerated in ('s'),
                'is_nullable', not (a.attnotnull or t.typtype = 'd' and t.typnotnull),
                'is_updatable', (
                    b.relkind in ('r', 'p') or
                    (b.relkind in ('v', 'f') and pg_column_is_updatable(b.id, a.attnum, false))
                ),
                'is_unique', uniques.table_id is not null,
                'check', check_constraints.definition,
                'comment', col_description(c.oid, a.attnum),
                'enums', coalesce(
                    (
                        select jsonb_agg(e.enumlabel order by e.enumsortorder)
                        from pg_catalog.pg_enum e
                        where e.enumtypid = coalesce(bt.oid, t.oid)
                            or e.enumtypid = coalesce(bt.typelem, t.typelem)
                    ),
                    '[]'::jsonb
                )
            ) order by a.attnum) as columns
        from pg_attribute a
        join base_table_info b on a.attrelid = b.id
        join pg_class c on a.attrelid = c.oid
        join pg_namespace nc on c.relnamespace = nc.oid
        left join pg_attrdef ad on (a.attrelid = ad.adrelid and a.attnum = ad.adnum)
        join pg_type t on a.atttypid = t.oid
        join pg_namespace nt on t.typnamespace = nt.oid
        left join pg_type bt on (t.typtype = 'd' and t.typbasetype = bt.oid)
        left join pg_namespace nbt on bt.typnamespace = nbt.oid
        left join (
            select
                conrelid as table_id,
                conkey[1] as ordinal_position
            from pg_catalog.pg_constraint
            where contype = 'u' and cardinality(conkey) = 1
            group by conrelid, conkey[1]
        ) as uniques on uniques.table_id = a.attrelid and uniques.ordinal_position = a.attnum
        left join (
            select distinct on (conrelid, conkey[1])
                conrelid as table_id,
                conkey[1] as ordinal_position,
                substring(
                    pg_get_constraintdef(oid, true),
                    8,
                    length(pg_get_constraintdef(oid, true)) - 8
                ) as definition
            from pg_constraint
            where contype = 'c' and cardinality(conkey) = 1
            order by conrelid, conkey[1], oid asc
        ) as check_constraints on check_constraints.table_id = a.attrelid
                            and check_constraints.ordinal_position = a.attnum
        where a.attnum > 0
        and not a.attisdropped
        group by a.attrelid
    )
    select
        case b.relkind
            when 'r' then jsonb_build_object(
                'entity_type', b.relkind,
                'id', b.id,
                'schema', b.schema,
                'name', b.name,
                'rls_enabled', b.rls_enabled,
                'rls_forced', b.rls_forced,
                'replica_identity', ts.replica_identity,
                'bytes', ts.bytes,
                'size', ts.size,
                'live_rows_estimate', ts.live_rows_estimate,
                'dead_rows_estimate', ts.dead_rows_estimate,
                'comment', b.comment,
                'primary_keys', coalesce(pk.primary_keys, '[]'::jsonb),
                'unique_indexes', coalesce(ui.unique_indexes, '[]'::jsonb),
                'relationships', coalesce(
                    (select jsonb_agg(r.rel_info)
                    from relationships r
                    where r.source_id = b.id or r.target_id = b.id),
                    '[]'::jsonb
                ),
                'columns', coalesce(c.columns, '[]'::jsonb)
            )
            when 'p' then jsonb_build_object(
                'entity_type', b.relkind,
                'id', b.id,
                'schema', b.schema,
                'name', b.name,
                'rls_enabled', b.rls_enabled,
                'rls_forced', b.rls_forced,
                'replica_identity', ts.replica_identity,
                'bytes', ts.bytes,
                'size', ts.size,
                'live_rows_estimate', ts.live_rows_estimate,
                'dead_rows_estimate', ts.dead_rows_estimate,
                'comment', b.comment,
                'primary_keys', coalesce(pk.primary_keys, '[]'::jsonb),
                'unique_indexes', coalesce(ui.unique_indexes, '[]'::jsonb),
                'relationships', coalesce(
                    (select jsonb_agg(r.rel_info)
                    from relationships r
                    where r.source_id = b.id or r.target_id = b.id),
                    '[]'::jsonb
                ),
                'columns', coalesce(c.columns, '[]'::jsonb)
            )
            when 'v' then jsonb_build_object(
                'entity_type', b.relkind,
                'id', b.id,
                'schema', b.schema,
                'name', b.name,
                'is_updatable', (pg_relation_is_updatable(b.id, false) & 20) = 20,
                'comment', b.comment,
                'columns', coalesce(c.columns, '[]'::jsonb)
            )
            when 'm' then jsonb_build_object(
                'entity_type', b.relkind,
                'id', b.id,
                'schema', b.schema,
                'name', b.name,
                'is_populated', true,
                'comment', b.comment,
                'columns', coalesce(c.columns, '[]'::jsonb)
            )
            when 'f' then jsonb_build_object(
                'entity_type', b.relkind,
                'id', b.id,
                'schema', b.schema,
                'name', b.name,
                'comment', b.comment,
                'foreign_server_name', b.foreign_server_name,
                'foreign_data_wrapper_name', b.foreign_data_wrapper_name,
                'foreign_data_wrapper_handler', b.foreign_data_wrapper_handler,
                'columns', coalesce(c.columns, '[]'::jsonb)
            )
        end as entity
    from base_table_info b
    left join table_stats ts on b.id = ts.id
    left join primary_keys pk on b.id = pk.table_id
    left join unique_indexes ui on b.id = ui.table_id
    left join columns c on b.id = c.table_id;
  `):"",{result:c}=await (0,n.executeSql)({projectRef:t,connectionString:e,sql:a,queryKey:["table-editor",r]},o);return c[0]?.entity??null}function c(t,{projectRef:e,connectionString:r,id:n}){return t.fetchQuery(s({projectRef:e,connectionString:r,id:n}))}let s=({projectRef:t,connectionString:r,id:n})=>(0,e.queryOptions)({queryKey:o.tableEditorKeys.tableEditor(t,n),queryFn:({signal:e})=>a({projectRef:t,connectionString:r,id:n},e)});t.s(["getTableEditor",()=>a,"prefetchTableEditor",()=>c,"tableEditorQueryOptions",0,s,"useTableEditorQuery",0,({projectRef:t,connectionString:e,id:n},{enabled:o=!0,...i}={})=>(0,r.useQuery)({...s({projectRef:t,connectionString:e,id:n}),enabled:o&&void 0!==t&&void 0!==n&&!isNaN(n),refetchOnWindowFocus:!1,refetchOnMount:!1,staleTime:3e5,...i})],415190)}]);

//# debugId=53af6bf5-645c-d892-39df-78c40063f811
//# sourceMappingURL=33dd75663a2e0696.js.map