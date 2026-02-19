// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Influship from 'influship';

const client = new Influship({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource brandSafety', () => {
  // Mock server tests are disabled
  test.skip('analyzeCreators: only required params', async () => {
    const responsePromise = client.brandSafety.analyzeCreators({ creators: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('analyzeCreators: required and optional params', async () => {
    const response = await client.brandSafety.analyzeCreators({
      creators: [
        {
          creator_id: '123e4567-e89b-12d3-a456-426614174000',
          platform: 'instagram',
          username: 'fitness_coach_jane',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('analyzePosts: only required params', async () => {
    const responsePromise = client.brandSafety.analyzePosts({ posts: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('analyzePosts: required and optional params', async () => {
    const response = await client.brandSafety.analyzePosts({
      posts: [
        {
          platform: 'instagram',
          platform_id: 'CxYz123ABC',
          post_id: '123e4567-e89b-12d3-a456-426614174000',
          url: 'https://www.instagram.com/p/CxYz123ABC',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('analyzeProfiles: only required params', async () => {
    const responsePromise = client.brandSafety.analyzeProfiles({
      profiles: [{ platform: 'instagram', username: 'fitness_coach_jane' }],
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
  test.skip('analyzeProfiles: required and optional params', async () => {
    const response = await client.brandSafety.analyzeProfiles({
      profiles: [{ platform: 'instagram', username: 'fitness_coach_jane' }],
    });
  });
});
