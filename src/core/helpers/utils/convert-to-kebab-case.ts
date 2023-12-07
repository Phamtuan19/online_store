/**
 * Converts a string to kebab case.
 *
 * @param text - The string to convert.
 * @returns The kebab case version of the input string.
 */
const convertToKebabCase = (text: string) => text.replace(/\s+/g, '-').toLowerCase();

export default convertToKebabCase;
