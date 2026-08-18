// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Influship from 'influship';

const client = new Influship({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tiktok', () => {
  // Mock server tests are disabled
  test.skip('getProfile', async () => {
    const responsePromise = client.raw.tiktok.getProfile('creator');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getVideo: only required params', async () => {
    const responsePromise = client.raw.tiktok.getVideo({
      url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
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
  test.skip('getVideo: required and optional params', async () => {
    const response = await client.raw.tiktok.getVideo({
      url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
      region: 'US',
    });
  });

  // Mock server tests are disabled
  test.skip('getVideoTranscript: only required params', async () => {
    const responsePromise = client.raw.tiktok.getVideoTranscript({
      url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
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
  test.skip('getVideoTranscript: required and optional params', async () => {
    const response = await client.raw.tiktok.getVideoTranscript({
      url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
    });
  });

  // Mock server tests are disabled
  test.skip('listProfileVideos', async () => {
    const responsePromise = client.raw.tiktok.listProfileVideos('creator');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listProfileVideos: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.raw.tiktok.listProfileVideos(
        'creator',
        {
          cursor: 'x',
          region: 'US',
          sort_by: 'latest',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Influship.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listVideoComments: only required params', async () => {
    const responsePromise = client.raw.tiktok.listVideoComments({
      url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
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
  test.skip('listVideoComments: required and optional params', async () => {
    const response = await client.raw.tiktok.listVideoComments({
      url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
      cursor: 'x',
    });
  });
});
