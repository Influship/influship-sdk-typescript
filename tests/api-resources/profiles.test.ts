// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import InflushipAPI from 'influship-api';

const client = new InflushipAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profiles', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.profiles.create({
      profiles: [
        { platform: 'instagram', username: 'fitness_guru' },
        { platform: 'tiktok', username: 'fitness_guru' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.profiles.create({
      profiles: [
        { platform: 'instagram', username: 'fitness_guru' },
        { platform: 'tiktok', username: 'fitness_guru' },
      ],
      mode: 'lite',
      platforms: ['instagram', 'tiktok'],
    });
  });
});
