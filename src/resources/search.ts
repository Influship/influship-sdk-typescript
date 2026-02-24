// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Search for creators using natural language queries. The AI understands intent
   * and context to match creators based on content themes, audience demographics,
   * and style.
   *
   * **Use cases:**
   *
   * - Find creators in a specific niche ("vegan food bloggers in LA")
   * - Discover creators with specific audience characteristics ("fitness influencers
   *   with millennial audience")
   * - Search by content style ("creators who post cinematic travel videos")
   *
   * **Pricing**: $0.01 per creator returned
   *
   * @example
   * ```ts
   * const search = await client.search.create({
   *   query:
   *     'fitness influencers with 100k+ followers who post workout videos',
   * });
   * ```
   */
  create(body: SearchCreateParams, options?: RequestOptions): APIPromise<SearchCreateResponse> {
    return this._client.post('/v1/search', { body, ...options });
  }
}

export interface SearchCreateResponse {
  data: Array<SearchCreateResponse.Data>;

  /**
   * Whether more results are available
   */
  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export namespace SearchCreateResponse {
  export interface Data {
    /**
     * Basic creator information
     */
    creator: Data.Creator;

    /**
     * Search match information
     */
    match: Data.Match;

    /**
     * Abbreviated profile information
     */
    primary_profile: Shared.ProfileSummary | null;

    /**
     * Abbreviated profile information
     */
    relevant_profile: Shared.ProfileSummary | null;
  }

  export namespace Data {
    /**
     * Basic creator information
     */
    export interface Creator {
      /**
       * Creator unique identifier
       */
      id: string;

      /**
       * Avatar URL
       */
      avatar_url: string | null;

      /**
       * Creator bio
       */
      bio: string | null;

      /**
       * Creator display name
       */
      name: string;
    }

    /**
     * Search match information
     */
    export interface Match {
      /**
       * Human-readable match reasons
       */
      reasons: Array<string>;

      /**
       * Match relevance score (0-1)
       */
      score: number;
    }
  }
}

export interface SearchCreateParams {
  /**
   * Natural language search query
   */
  query: string;

  /**
   * Pagination cursor for next page
   */
  cursor?: string;

  /**
   * Additional filters
   */
  filters?: SearchCreateParams.Filters;

  /**
   * Maximum results to return
   */
  limit?: number;

  /**
   * Filter results to specific platforms
   */
  platforms?: Array<'instagram'>;
}

export namespace SearchCreateParams {
  /**
   * Additional filters
   */
  export interface Filters {
    /**
     * Filter by engagement rate
     */
    engagement_rate?: Filters.EngagementRate;

    /**
     * Filter by follower count
     */
    followers?: Filters.Followers;

    /**
     * Filter by verified status
     */
    verified?: boolean;
  }

  export namespace Filters {
    /**
     * Filter by engagement rate
     */
    export interface EngagementRate {
      /**
       * Maximum engagement rate (%)
       */
      max?: number;

      /**
       * Minimum engagement rate (%)
       */
      min?: number;
    }

    /**
     * Filter by follower count
     */
    export interface Followers {
      /**
       * Maximum follower count
       */
      max?: number;

      /**
       * Minimum follower count
       */
      min?: number;
    }
  }
}

export declare namespace Search {
  export { type SearchCreateResponse as SearchCreateResponse, type SearchCreateParams as SearchCreateParams };
}
