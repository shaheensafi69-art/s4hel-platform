import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async (params) => {
  // گرفتن زبان از پارامترها به صورت ایمن
  const locale = (await params.requestLocale) ?? 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});