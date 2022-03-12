/**
 * It takes a base class name and an optional class name and returns a cleaned concatenated version.
 * @param {string} base - The base class name.
 * @param {string} [className] - The class name to be added to the base class.
 * @returns {string} A string.
 */
export function formatClassNames(base: string, className?: string): string {
  return `${base} ${className || ''}`.trimEnd()
}