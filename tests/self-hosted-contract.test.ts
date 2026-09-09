import Influship from 'influship';

describe('self-hosted SDK request compatibility', () => {
  it('preserves false query parameters, encoded paths, and API-key auth', async () => {
    const requests: Request[] = [];
    const client = new Influship({
      apiKey: 'test-key',
      baseURL: 'https://sdk-test.invalid',
      fetch: async (input, init) => {
        requests.push(new Request(input, init));
        return Response.json({ data: { username: 'a b', posts: [] } });
      },
    });
    await client.raw.instagram.getProfile('a b', { include_posts: false });
    expect(requests).toHaveLength(1);
    expect(requests[0]!.method).toBe('GET');
    expect(new URL(requests[0]!.url).pathname).toBe('/v1/raw/instagram/profile/a%20b');
    expect(new URL(requests[0]!.url).searchParams.get('include_posts')).toBe('false');
    expect(requests[0]!.headers.get('x-api-key')).toBe('test-key');
  });

  it('preserves typed 503 errors without calling a live endpoint', async () => {
    const client = new Influship({
      apiKey: 'test-key',
      baseURL: 'https://sdk-test.invalid',
      maxRetries: 0,
      fetch: async () => Response.json({ error: 'temporarily_unavailable' }, { status: 503 }),
    });
    await expect(client.raw.instagram.getProfile('instagram')).rejects.toMatchObject({ status: 503 });
  });
});
