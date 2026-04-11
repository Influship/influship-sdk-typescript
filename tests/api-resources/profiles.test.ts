// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Influship from 'influship';

const client = new Influship({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profiles', () => {
  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.profiles.get('fitness_coach_jane', { platform: 'instagram' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.profiles.get('fitness_coach_jane', { platform: 'instagram' });
  });

  // Mock server tests are disabled
  test.skip('lookup: only required params', async () => {
    const responsePromise = client.profiles.lookup({
      profiles: [
        { platform: 'instagram', username: 'fitness_coach_jane' },
        { platform: 'instagram', username: 'wellness_guru' },
        { platform: 'instagram', username: 'healthy_eating_tips' },
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

  // Mock server tests are disabled
  test.skip('lookup: required and optional params', async () => {
    const response = await client.profiles.lookup({
      profiles: [
        { platform: 'instagram', username: 'fitness_coach_jane' },
        { platform: 'instagram', username: 'wellness_guru' },
        { platform: 'instagram', username: 'healthy_eating_tips' },
      ],
    });
  });
});
