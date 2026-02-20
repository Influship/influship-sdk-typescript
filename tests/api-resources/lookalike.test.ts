// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import InflushipAPI from 'influship';

const client = new InflushipAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lookalike', () => {
  // Prism tests are disabled
  test.skip('findSimilarCreators: only required params', async () => {
    const responsePromise = client.lookalike.findSimilarCreators({
      seeds: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
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
  test.skip('findSimilarCreators: required and optional params', async () => {
    const response = await client.lookalike.findSimilarCreators({
      seeds: [{ weight: 0, id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', platform: 'instagram' }],
      cursor: 'eyJpZCI6MjUsInNjb3JlIjowLjg1fQ==',
      limit: 1,
      filters: {
        audience_size: { max: 0, min: 0 },
        engagement_rate: { max: 0, min: 0 },
        platform: ['string'],
        verified: true,
      },
      mode: 'lite',
      profile_platforms: ['instagram'],
    });
  });
});
