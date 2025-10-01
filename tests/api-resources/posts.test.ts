// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import InflushipAPI from 'influship-api';

const client = new InflushipAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource posts', () => {
  // Prism tests are disabled
  test.skip('analyze', async () => {
    const responsePromise = client.posts.analyze({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listByCreator', async () => {
    const responsePromise = client.posts.listByCreator();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listByCreator: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.posts.listByCreator(
        {
          creator_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          cursor: 'eyJpZCI6MTIzfQ==',
          date_from: '2019-12-27T18:11:19.117Z',
          date_to: '2019-12-27T18:11:19.117Z',
          features: ['ai_analysis'],
          limit: 1,
          platform: 'instagram',
          username: 'username',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(InflushipAPI.NotFoundError);
  });
});
