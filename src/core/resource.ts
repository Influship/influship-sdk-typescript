// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Influship } from '../client';

export abstract class APIResource {
  protected _client: Influship;

  constructor(client: Influship) {
    this._client = client;
  }
}
