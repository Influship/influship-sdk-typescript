// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Influship from 'influship';

const client = new Influship({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource creators', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.creators.retrieve('123e4567-e89b-12d3-a456-426614174000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.creators.retrieve(
        '123e4567-e89b-12d3-a456-426614174000',
        { include: 'profiles' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Influship.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('autocomplete: only required params', async () => {
    const responsePromise = client.creators.autocomplete({ q: 'fitness' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('autocomplete: required and optional params', async () => {
    const response = await client.creators.autocomplete({
      q: 'fitness',
      limit: '5',
      platform: 'instagram',
      scope: 'all_platforms',
    });
  });

  // Mock server tests are disabled
  test.skip('lookalike: only required params', async () => {
    const responsePromise = client.creators.lookalike({ seeds: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('lookalike: required and optional params', async () => {
    const response = await client.creators.lookalike({
      seeds: [
        {
          creator_id: '123e4567-e89b-12d3-a456-426614174000',
          platform: 'instagram',
          username: 'fitness_coach_jane',
          weight: 1,
        },
      ],
      cursor: 'cursor',
      filters: {
        engagement_rate: { max: 10, min: 1.5 },
        followers: { max: 500000, min: 10000 },
        verified: true,
      },
      limit: 25,
    });
  });

  // Mock server tests are disabled
  test.skip('match: only required params', async () => {
    const responsePromise = client.creators.match({
      creators: [{}],
      intent: { query: 'Looking for fitness influencers to promote our new protein bar' },
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
  test.skip('match: required and optional params', async () => {
    const response = await client.creators.match({
      creators: [
        {
          creator_id: '123e4567-e89b-12d3-a456-426614174000',
          platform: 'instagram',
          username: 'fitness_coach_jane',
        },
      ],
      intent: {
        query: 'Looking for fitness influencers to promote our new protein bar',
        context: 'Target audience is health-conscious millennials',
      },
    });
  });
});
