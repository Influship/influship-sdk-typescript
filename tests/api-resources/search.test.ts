// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import InflushipAPI from 'influship';

const client = new InflushipAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // Prism tests are disabled
  test.skip('findCreators: only required params', async () => {
    const responsePromise = client.search.findCreators({
      query: 'fitness influencers with 100k+ followers who post workout content',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('findCreators: required and optional params', async () => {
    const response = await client.search.findCreators({
      query: 'fitness influencers with 100k+ followers who post workout content',
      cursor: 'eyJpZCI6MjUsInNjb3JlIjowLjg1fQ==',
      limit: 1,
      filters: {
        platform_filters: [
          {
            platform: 'instagram',
            max_engagement_rate: 0,
            max_followers: 0,
            min_engagement_rate: 0,
            min_followers: 0,
            verified_only: true,
          },
        ],
        platform_logic: 'AND',
      },
      include_platforms: ['instagram', 'tiktok'],
      mode: 'lite',
    });
  });
});
