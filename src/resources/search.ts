// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
   * const response = await client.search.query({
   *   query:
   *     'fitness influencers with 100k+ followers who post workout videos',
   * });
   * ```
   */
  query(body: SearchQueryParams, options?: RequestOptions): APIPromise<SearchQueryResponse> {
    return this._client.post('/v1/search', { body, ...options });
  }
}

export interface SearchQueryResponse {
  data: Array<SearchQueryResponse.Data>;

  pagination: SearchQueryResponse.Pagination;
}

export namespace SearchQueryResponse {
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
     * Primary profile (largest audience)
     */
    primary_profile: Data.PrimaryProfile;

    /**
     * Most relevant profile based on search query
     */
    relevant_profile: Data.RelevantProfile;
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

    /**
     * Primary profile (largest audience)
     */
    export interface PrimaryProfile {
      /**
       * Profile unique identifier
       */
      id: string;

      /**
       * Engagement rate as percentage
       */
      engagement_rate: number;

      /**
       * Follower count
       */
      followers: number;

      /**
       * Whether the account is verified
       */
      is_verified: boolean;

      /**
       * Social media platform
       */
      platform: 'instagram';

      /**
       * Profile URL
       */
      url: string;

      /**
       * Profile username
       */
      username: string;
    }

    /**
     * Most relevant profile based on search query
     */
    export interface RelevantProfile {
      /**
       * Profile unique identifier
       */
      id: string;

      /**
       * Engagement rate as percentage
       */
      engagement_rate: number;

      /**
       * Follower count
       */
      followers: number;

      /**
       * Whether the account is verified
       */
      is_verified: boolean;

      /**
       * Social media platform
       */
      platform: 'instagram';

      /**
       * Profile URL
       */
      url: string;

      /**
       * Profile username
       */
      username: string;
    }
  }

  export interface Pagination {
    /**
     * Whether more results are available
     */
    has_more: boolean;

    /**
     * Cursor for the next page
     */
    next_cursor?: string;

    /**
     * Total number of results
     */
    total?: number;
  }
}

export interface SearchQueryParams {
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
  filters?: SearchQueryParams.Filters;

  /**
   * Maximum results to return
   */
  limit?: number;

  /**
   * Filter results to specific platforms
   */
  platforms?: Array<'instagram'>;
}

export namespace SearchQueryParams {
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
  export { type SearchQueryResponse as SearchQueryResponse, type SearchQueryParams as SearchQueryParams };
}
