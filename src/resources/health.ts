// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * API health and status endpoints
 */
export class Health extends APIResource {
  /**
   * Check API health status. No authentication required.
   */
  check(options?: RequestOptions): APIPromise<HealthCheckResponse> {
    return this._client.get('/health', options);
  }
}

/**
 * Health check response
 */
export interface HealthCheckResponse {
  /**
   * Service health status
   */
  ok: boolean;

  /**
   * Current server timestamp
   */
  timestamp: string;
}

export declare namespace Health {
  export { type HealthCheckResponse as HealthCheckResponse };
}
