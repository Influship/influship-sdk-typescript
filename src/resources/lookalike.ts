// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LookalikeAPI from './lookalike';
import * as MatchAPI from './match';
import * as ProfilesAPI from './profiles';
import * as SearchAPI from './search';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Lookalike extends APIResource {
  /**
   * Find creators similar to your seed creators using AI-powered similarity
   * analysis.
   *
   * This endpoint analyzes your seed creators and finds similar influencers based on
   * audience demographics, content style, and engagement patterns.
   *
   * **Pricing**:
   *
   * - Base: 1.0 credit per creator returned
   * - Detailed mode: Additional 0.05 credits per social account profile
   * - **Example**: 25 lookalike creators in lite mode = 25 credits
   * - **Example**: 25 creators with avg 3 profiles each in detailed mode = 25 + (25
   *   × 3 × 0.05) = 28.75 credits
   */
  findSimilarCreators(
    params: LookalikeFindSimilarCreatorsParams,
    options?: RequestOptions,
  ): APIPromise<LookalikeFindSimilarCreatorsResponse> {
    const { cursor, limit, ...body } = params;
    return this._client.post('/v1/lookalike', { query: { cursor, limit }, body, ...options });
  }
}

export interface LookalikeSeedBase {
  /**
   * Weight for this seed in similarity calculation
   */
  weight?: number;
}

export interface LookalikeFindSimilarCreatorsResponse {
  /**
   * Current billing plan
   */
  billing_plan?: string;

  /**
   * Credits consumed for this request
   */
  credits_charged?: number;

  /**
   * Features used in this request
   */
  features?: Array<string>;

  /**
   * Total number of results after filtering
   */
  filtered_total?: number;

  /**
   * Whether there are more results available
   */
  has_more?: boolean;

  items?: Array<SearchAPI.SearchItem>;

  /**
   * Cursor for next page of results
   */
  next_cursor?: string;

  rate_limit?: LookalikeFindSimilarCreatorsResponse.RateLimit;
}

export namespace LookalikeFindSimilarCreatorsResponse {
  export interface RateLimit {
    /**
     * Rate limit for this endpoint
     */
    limit?: number;

    /**
     * Remaining requests in current window
     */
    remaining?: number;

    /**
     * Unix timestamp when rate limit resets
     */
    reset?: number;
  }
}

export interface LookalikeFindSimilarCreatorsParams {
  /**
   * Body param: Seed creators to find lookalikes for. Max 10 seeds, each with
   * optional weight (0-10, default 1).
   */
  seeds: Array<
    | LookalikeFindSimilarCreatorsParams.LookalikeSeedByID
    | LookalikeFindSimilarCreatorsParams.LookalikeSeedByHandle
  >;

  /**
   * Query param: Opaque pagination cursor from previous response's `next_cursor`. Do
   * not construct manually.
   */
  cursor?: string;

  /**
   * Query param: Maximum number of results to return
   */
  limit?: number;

  /**
   * Body param:
   */
  filters?: LookalikeFindSimilarCreatorsParams.Filters;

  /**
   * Body param: Response detail level
   */
  mode?: 'lite' | 'detailed';

  /**
   * Body param: Filter which social media profiles to include in the response for
   * each creator.
   *
   * - If not specified, all profiles for each creator are returned
   * - If specified, only profiles from these platforms are included
   * - This allows you to control which platforms you want to see results from
   * - Independent of your seed creators' platforms - you can mix seed types freely
   *   Example: ["instagram"] to only see instagram profiles, ["instagram", "tiktok"]
   *   for both
   * - This allows you to get cross-platform creators but only show specific platform
   *   profiles
   */
  profile_platforms?: Array<'instagram' | 'tiktok'>;
}

export namespace LookalikeFindSimilarCreatorsParams {
  export interface LookalikeSeedByID extends LookalikeAPI.LookalikeSeedBase, MatchAPI.CreatorReferenceByID {}

  export interface LookalikeSeedByHandle
    extends LookalikeAPI.LookalikeSeedBase,
      ProfilesAPI.CreatorReferenceByHandle {}

  export interface Filters {
    audience_size?: Filters.AudienceSize;

    engagement_rate?: Filters.EngagementRate;

    /**
     * Filter by platforms
     */
    platform?: Array<string>;

    verified?: boolean;
  }

  export namespace Filters {
    export interface AudienceSize {
      max?: number;

      min?: number;
    }

    export interface EngagementRate {
      max?: number;

      min?: number;
    }
  }
}

export declare namespace Lookalike {
  export {
    type LookalikeSeedBase as LookalikeSeedBase,
    type LookalikeFindSimilarCreatorsResponse as LookalikeFindSimilarCreatorsResponse,
    type LookalikeFindSimilarCreatorsParams as LookalikeFindSimilarCreatorsParams,
  };
}
