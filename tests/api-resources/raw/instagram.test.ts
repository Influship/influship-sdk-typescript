// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Influship from 'influship';

const client = new Influship({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource instagram', () => {
  // Mock server tests are disabled
  test.skip('getPost', async () => {
    const responsePromise = client.raw.instagram.getPost('C0ABC123xyz');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPosts: only required params', async () => {
    const responsePromise = client.raw.instagram.getPosts({ shortcodes: ['C0ABC123xyz', 'D1DEF456uvw'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPosts: required and optional params', async () => {
    const response = await client.raw.instagram.getPosts({ shortcodes: ['C0ABC123xyz', 'D1DEF456uvw'] });
  });

  // Mock server tests are disabled
  test.skip('getProfile', async () => {
    const responsePromise = client.raw.instagram.getProfile('fitness_coach_jane');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getProfile: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.raw.instagram.getProfile(
        'fitness_coach_jane',
        { include_posts: true, post_limit: 12 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Influship.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getTranscript', async () => {
    const responsePromise = client.raw.instagram.getTranscript('C0ABC123xyz');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTranscript: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.raw.instagram.getTranscript(
        'C0ABC123xyz',
        { language: 'en' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Influship.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getTranscripts: only required params', async () => {
    const responsePromise = client.raw.instagram.getTranscripts({
      shortcodes: ['C0ABC123xyz', 'D1DEF456uvw'],
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
  test.skip('getTranscripts: required and optional params', async () => {
    const response = await client.raw.instagram.getTranscripts({
      shortcodes: ['C0ABC123xyz', 'D1DEF456uvw'],
      language: 'en',
    });
  });
});
