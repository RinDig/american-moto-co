/** Prefix a path with the Astro base URL. Works in both dev and production. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  // Ensure path starts with /
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
