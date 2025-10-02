// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import InflushipAPI from 'influship';

const client = new InflushipAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource brandSafety', () => {
  // Prism tests are disabled
  test.skip('analyzeCreators: only required params', async () => {
    const responsePromise = client.brandSafety.analyzeCreators({
      creator_ids: ['123e4567-e89b-12d3-a456-426614174000', '987fcdeb-51a2-43d1-9f12-345678901234'],
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
  test.skip('analyzeCreators: required and optional params', async () => {
    const response = await client.brandSafety.analyzeCreators({
      creator_ids: ['123e4567-e89b-12d3-a456-426614174000', '987fcdeb-51a2-43d1-9f12-345678901234'],
    });
  });

  // Prism tests are disabled
  test.skip('analyzePosts: only required params', async () => {
    const responsePromise = client.brandSafety.analyzePosts({
      posts: [
        { platform: 'instagram', url: 'https://www.instagram.com/p/Cx123Sample/' },
        { platform: 'instagram', post_id: '9876543210987654321' },
      ],
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
  test.skip('analyzePosts: required and optional params', async () => {
    const response = await client.brandSafety.analyzePosts({
      posts: [
        { platform: 'instagram', url: 'https://www.instagram.com/p/Cx123Sample/' },
        { platform: 'instagram', post_id: '9876543210987654321' },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('analyzeProfiles: only required params', async () => {
    const responsePromise = client.brandSafety.analyzeProfiles({
      profiles: [{ platform: 'instagram', username: 'wellnessdaily' }],
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
  test.skip('analyzeProfiles: required and optional params', async () => {
    const response = await client.brandSafety.analyzeProfiles({
      profiles: [{ platform: 'instagram', username: 'wellnessdaily' }],
    });
  });
});
