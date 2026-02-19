// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Influship from 'influship';

const client = new Influship({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // Mock server tests are disabled
  test.skip('query: only required params', async () => {
    const responsePromise = client.search.query({
      query: 'fitness influencers with 100k+ followers who post workout videos',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('query: required and optional params', async () => {
    const response = await client.search.query({
      query: 'fitness influencers with 100k+ followers who post workout videos',
      cursor: 'cursor',
      filters: {
        engagement_rate: { max: 10, min: 1.5 },
        followers: { max: 500000, min: 10000 },
        verified: true,
      },
      limit: 25,
      platforms: ['instagram'],
    });
  });
});
