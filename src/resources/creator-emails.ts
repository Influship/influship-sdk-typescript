// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Look up known creator email addresses by creator ID or social username. Empty or unresolved results are not billable.
 */
export class CreatorEmails extends APIResource {
  /**
   * Look up known email addresses for creators by creator ID or social username.
   *
   * **Billing behavior:**
   *
   * - Charged only for unique resolved creators with at least one returned email
   * - Empty and unresolved results are not billable
   * - Returns validation status so unvalidated emails are explicit
   *
   * **Pricing**: 5 credits per creator with at least one returned email ($0.05)
   */
  lookup(body: CreatorEmailLookupParams, options?: RequestOptions): APIPromise<CreatorEmailLookupResponse> {
    return this._client.post('/v1/creator-emails/lookup', { body, ...options });
  }
}

/**
 * Creator email lookup response
 */
export interface CreatorEmailLookupResponse {
  data: CreatorEmailLookupResponse.Data;
}

export namespace CreatorEmailLookupResponse {
  export interface Data {
    /**
     * Creator email lookup billing summary
     */
    billing: Data.Billing;

    results: Array<Data.Result>;
  }

  export namespace Data {
    /**
     * Creator email lookup billing summary
     */
    export interface Billing {
      /**
       * Unique resolved creators with at least one returned email
       */
      billable_results: number;

      /**
       * Preview of credits charged for this lookup
       */
      credits_charged: number;
    }

    /**
     * Creator email lookup result
     */
    export interface Result {
      /**
       * Resolved creator ID, or null when the input could not be resolved
       */
      creator_id: string | null;

      /**
       * API-visible emails for the resolved creator. Empty results are not billable.
       */
      emails: Array<Result.Email>;

      /**
       * Creator email lookup input by creator ID or social handle
       */
      input: Result.CreatorEmailLookupByIDOutput | Result.CreatorEmailLookupByHandleOutput;

      /**
       * Whether the lookup resolved to a creator profile
       */
      resolved: boolean;
    }

    export namespace Result {
      /**
       * API-visible creator email
       */
      export interface Email {
        /**
         * Nullable confidence score for the email
         */
        confidence: number | null;

        /**
         * Email address as stored, preserving original casing
         */
        email: string;

        /**
         * When Influship first observed this email
         */
        first_seen_at: string;

        /**
         * Whether this is the primary email for the creator
         */
        is_primary: boolean;

        /**
         * When Influship most recently observed this email
         */
        last_seen_at: string;

        /**
         * API-visible email validation status
         */
        status: 'unvalidated' | 'valid' | 'risky' | 'creator_verified';

        /**
         * When the email was last validated, if known
         */
        validated_at: string | null;
      }

      /**
       * Creator email lookup input by creator ID
       */
      export interface CreatorEmailLookupByIDOutput {
        /**
         * Creator profile ID to look up directly
         */
        creator_id: string;
      }

      /**
       * Creator email lookup input by social handle
       */
      export interface CreatorEmailLookupByHandleOutput {
        /**
         * Social platform for handle-based lookup
         */
        platform: 'instagram';

        /**
         * Social username for handle-based lookup
         */
        username: string;
      }
    }
  }
}

export interface CreatorEmailLookupParams {
  /**
   * Creator lookups to resolve. Response rows preserve this input order.
   */
  creators: Array<
    CreatorEmailLookupParams.CreatorEmailLookupByID | CreatorEmailLookupParams.CreatorEmailLookupByHandle
  >;
}

export namespace CreatorEmailLookupParams {
  /**
   * Creator email lookup input by creator ID
   */
  export interface CreatorEmailLookupByID {
    /**
     * Creator profile ID to look up directly
     */
    creator_id: string;
  }

  /**
   * Creator email lookup input by social handle
   */
  export interface CreatorEmailLookupByHandle {
    /**
     * Social platform for handle-based lookup
     */
    platform: 'instagram';

    /**
     * Social username for handle-based lookup
     */
    username: string;
  }
}

export declare namespace CreatorEmails {
  export {
    type CreatorEmailLookupResponse as CreatorEmailLookupResponse,
    type CreatorEmailLookupParams as CreatorEmailLookupParams,
  };
}
