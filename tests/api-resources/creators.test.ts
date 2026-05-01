// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Influship from 'influship';

const client = new Influship({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource creators', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.creators.retrieve('123e4567-e89b-12d3-a456-426614174000', {
      include: ['profiles'],
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.creators.retrieve('123e4567-e89b-12d3-a456-426614174000', {
      include: ['profiles'],
    });
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
      limit: 5,
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
        followers: { max: 500000, min: 25000 },
        verified: true,
      },
      limit: 20,
    });
  });

  // Mock server tests are disabled
  test.skip('match: only required params', async () => {
    const responsePromise = client.creators.match({
      creators: [{}, {}],
      intent: { query: 'Promote our new plant-based protein powder' },
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
        {
          creator_id: '123e4567-e89b-12d3-a456-426614174000',
          platform: 'instagram',
          username: 'fitness_coach_jane',
        },
      ],
      intent: {
        query: 'Promote our new plant-based protein powder',
        context: 'Target audience is health-conscious millennials interested in sustainable fitness',
      },
    });
  });
});
