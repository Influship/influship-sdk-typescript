// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { InflushipAPI } from '../client';

export abstract class APIResource {
  protected _client: InflushipAPI;

  constructor(client: InflushipAPI) {
    this._client = client;
  }
}
