// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Influship from 'influship';

const client = new Influship({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tiktok', () => {
  // Mock server tests are disabled
  test.skip('getMusic: only required params', async () => {
    const responsePromise = client.raw.tiktok.getMusic({ music_id: '496' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getMusic: required and optional params', async () => {
    const response = await client.raw.tiktok.getMusic({ music_id: '496' });
  });

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
  test.skip('getVideoCaptions: only required params', async () => {
    const responsePromise = client.raw.tiktok.getVideoCaptions({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getVideoCaptions: required and optional params', async () => {
    const response = await client.raw.tiktok.getVideoCaptions({ url: 'https://example.com' });
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
  test.skip('getVideoTranscripts: only required params', async () => {
    const responsePromise = client.raw.tiktok.getVideoTranscripts({ urls: ['https://example.com'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getVideoTranscripts: required and optional params', async () => {
    const response = await client.raw.tiktok.getVideoTranscripts({
      urls: ['https://example.com'],
      mode: 'auto',
    });
  });

  // Mock server tests are disabled
  test.skip('getVideos: only required params', async () => {
    const responsePromise = client.raw.tiktok.getVideos({ urls: ['https://example.com'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getVideos: required and optional params', async () => {
    const response = await client.raw.tiktok.getVideos({ urls: ['https://example.com'] });
  });

  // Mock server tests are disabled
  test.skip('listCommentReplies: only required params', async () => {
    const responsePromise = client.raw.tiktok.listCommentReplies({
      comment_id: '7517114944362499343',
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
  test.skip('listCommentReplies: required and optional params', async () => {
    const response = await client.raw.tiktok.listCommentReplies({
      comment_id: '7517114944362499343',
      url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
      cursor: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('listHashtagVideos: only required params', async () => {
    const responsePromise = client.raw.tiktok.listHashtagVideos({ hashtag: 'hashtag' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listHashtagVideos: required and optional params', async () => {
    const response = await client.raw.tiktok.listHashtagVideos({ hashtag: 'hashtag', cursor: 'x' });
  });

  // Mock server tests are disabled
  test.skip('listMusicVideos: only required params', async () => {
    const responsePromise = client.raw.tiktok.listMusicVideos({ music_id: '496' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listMusicVideos: required and optional params', async () => {
    const response = await client.raw.tiktok.listMusicVideos({ music_id: '496', cursor: 'x' });
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

  // Mock server tests are disabled
  test.skip('searchUsers: only required params', async () => {
    const responsePromise = client.raw.tiktok.searchUsers({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('searchUsers: required and optional params', async () => {
    const response = await client.raw.tiktok.searchUsers({ query: 'query', cursor: 'x' });
  });

  // Mock server tests are disabled
  test.skip('searchVideos: only required params', async () => {
    const responsePromise = client.raw.tiktok.searchVideos({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('searchVideos: required and optional params', async () => {
    const response = await client.raw.tiktok.searchVideos({ query: 'query', cursor: 'x' });
  });
});
