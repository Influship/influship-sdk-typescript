/** Preserve the nullable raw profile total in embedded documentation snippets. */
export function correctInstagramProfileDocs<
  T extends { endpoint: string; response?: string; markdown?: string },
>(entry: T): T {
  if (entry.endpoint !== '/v1/raw/instagram/profile/{username}') return entry;

  // The generator renders nullable numeric properties as plain numbers in
  // search snippets, although the SDK type itself correctly retains `| null`.
  const correct = (text: string | undefined) =>
    text?.replaceAll('media_count: number;', 'media_count: number | null;');
  return { ...entry, response: correct(entry.response), markdown: correct(entry.markdown) };
}
