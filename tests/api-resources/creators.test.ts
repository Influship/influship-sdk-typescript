// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import InflushipAPI from 'influship-api';

const client = new InflushipAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource creators', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.creators.list({ creator_ids: 'creator_ids' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.creators.list({
      creator_ids: 'creator_ids',
      include_profiles: true,
      profile_mode: 'lite',
      profile_platforms: 'profile_platforms',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('autocomplete: required and optional params', async () => {
    const response = await client.creators.autocomplete({
      q: 'fitness',
      limit: 1,
      platform: 'instagram',
      scope: 'creator_only',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveProfiles', async () => {
    const responsePromise = client.creators.retrieveProfiles('123e4567-e89b-12d3-a456-426614174000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveProfiles: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.creators.retrieveProfiles(
        '123e4567-e89b-12d3-a456-426614174000',
        { mode: 'lite', platforms: 'platforms' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(InflushipAPI.NotFoundError);
  });
});
