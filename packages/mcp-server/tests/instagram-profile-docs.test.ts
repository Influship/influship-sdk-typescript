import { correctInstagramProfileDocs } from '../src/instagram-profile-docs';
import { LocalDocsSearch } from '../src/local-docs-search';

describe('raw Instagram profile documentation', () => {
  it('corrects compact and verbose snippets idempotently', () => {
    const entry = {
      endpoint: '/v1/raw/instagram/profile/{username}',
      response: 'media_count: number;',
      markdown: 'media_count: number; media_count: number;',
    };
    const corrected = correctInstagramProfileDocs(entry);
    expect(corrected.response).toBe('media_count: number | null;');
    expect(corrected.markdown).toBe('media_count: number | null; media_count: number | null;');
    expect(correctInstagramProfileDocs(corrected)).toEqual(corrected);
    expect(entry.response).toBe('media_count: number;');
  });

  it('leaves other profile contracts untouched', () => {
    const entry = { endpoint: '/v1/profiles/{platform}/{username}', response: 'media_count: number;' };
    expect(correctInstagramProfileDocs(entry)).toBe(entry);
  });

  it.each(['default', 'verbose'])('serves the released contract at %s detail', async (detail) => {
    const docs = await LocalDocsSearch.create();
    const results = docs.search({ query: 'client.raw.instagram.getProfile', detail, maxResults: 1 });
    const output = JSON.stringify(results);
    expect(output).toContain('media_count: number | null;');
    expect(output).not.toMatch(/highlight_reel_count|is_business|is_professional/);
  });
});
