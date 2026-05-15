export const DEFAULT_SITE_URL = 'https://profgordonslater.com.au';

export const normalizeSiteOrigin = (value?: string): string => {
  const raw = value?.trim() || DEFAULT_SITE_URL;

  try {
    return new URL(raw).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
};

const runtimeEnv =
  typeof import.meta !== 'undefined'
    ? ((import.meta as ImportMeta & { env?: ImportMetaEnv }).env?.VITE_SITE_URL)
    : undefined;

export const SITE_ORIGIN = normalizeSiteOrigin(runtimeEnv);

export const siteUrl = (path = '/'): string => {
  if (path === '') return SITE_ORIGIN;
  return new URL(path, `${SITE_ORIGIN}/`).toString();
};
