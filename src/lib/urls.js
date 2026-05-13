// src/lib/urls.js
const BASE = import.meta.env.BASE_URL;

// Joins BASE + path, handling slashes correctly
export function url(path) {
  // strip leading slash from path, ensure BASE ends with one
  const cleanBase = BASE.endsWith('/') ? BASE : `${BASE}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}