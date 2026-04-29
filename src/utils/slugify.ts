/**
 * Converts a title string to a URL-safe kebab-case slug.
 * Handles accented characters by normalizing to ASCII.
 *
 * @param title - Non-empty string to slugify
 * @returns Lowercase kebab-case string matching /^[a-z0-9-]+$/
 */
export function slugify(title: string): string {
  return title
    .normalize('NFD')                    // decompose accented chars
    .replace(/[\u0300-\u036f]/g, '')     // remove diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')       // remove non-alphanumeric (except spaces/hyphens)
    .replace(/\s+/g, '-')               // spaces → hyphens
    .replace(/-+/g, '-')                // collapse multiple hyphens
    .replace(/^-|-$/g, '')              // trim leading/trailing hyphens
}
