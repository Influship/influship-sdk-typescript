// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Influship from 'influship';

const client = new Influship({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource youtube', () => {
  // Mock server tests are disabled
  test.skip('getChannel', async () => {
    const responsePromise = client.raw.youtube.getChannel('@techreviews');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getChannel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.raw.youtube.getChannel(
        '@techreviews',
        { include_videos: true, video_limit: 12 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Influship.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getChannelTranscripts', async () => {
    const responsePromise = client.raw.youtube.getChannelTranscripts('@techreviews');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getChannelTranscripts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.raw.youtube.getChannelTranscripts(
        '@techreviews',
        {
          include_segments: false,
          language: 'en',
          sort_by: 'newest',
          video_limit: 5,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Influship.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getTranscript', async () => {
    const responsePromise = client.raw.youtube.getTranscript('dQw4w9WgXcQ');
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
      client.raw.youtube.getTranscript(
        'dQw4w9WgXcQ',
        { language: 'en' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Influship.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.raw.youtube.search({ q: 'fitness workout' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.raw.youtube.search({
      q: 'fitness workout',
      country_code: 'US',
      language_code: 'en',
      limit: 20,
    });
  });
});
