/** Prefix a path with the Astro base URL. Works in both dev and production. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  const full = `${base}${clean}`;
  // Add trailing slash for page routes (not files with extensions)
  const hasExtension = /\.\w+$/.test(full);
  const hasQuery = full.includes('?');
  if (!hasExtension && !hasQuery && !full.endsWith('/')) {
    return `${full}/`;
  }
  return full;
}
