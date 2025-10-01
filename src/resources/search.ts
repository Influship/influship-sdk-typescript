// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CreatorsAPI from './creators';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Find influencers using AI-powered search with natural language queries and
   * optional filters.
   *
   * **Pricing**:
   *
   * - Base: 2.0 credits per creator returned
   * - Detailed mode: Additional 0.05 credits per social account profile
   * - **Example**: 10 creators in lite mode = 20 credits
   * - **Example**: 10 creators with avg 2 profiles each in detailed mode = 20 + (10
   *   × 2 × 0.05) = 21 credits
   *
   * @example
   * ```ts
   * const response = await client.search.findCreators({
   *   query:
   *     'fitness influencers with 100k+ followers who post workout content',
   * });
   * ```
   */
  findCreators(
    params: SearchFindCreatorsParams,
    options?: RequestOptions,
  ): APIPromise<SearchFindCreatorsResponse> {
    const { cursor, limit, ...body } = params;
    return this._client.post('/v1/search', { query: { cursor, limit }, body, ...options });
  }
}

/**
 * Search result item containing creator information and all social media profiles
 */
export interface SearchItem {
  /**
   * Unique creator identifier (UUID v4)
   */
  id: string;

  /**
   * AI-powered recommendation analysis explaining why this creator matches your
   * query
   */
  ai_recommendation: SearchItem.AIRecommendation;

  /**
   * Creator's display name or full name
   */
  name: string;

  /**
   * Array of ALL social media profiles for this creator
   */
  profiles: Array<CreatorsAPI.SocialAccountLite | CreatorsAPI.SocialAccountDetailed>;

  /**
   * Profile picture URL. null if no avatar is available. URLs are typically valid
   * for 24 hours.
   */
  avatar_url?: string | null;

  /**
   * Creator's biography or description text. May be aggregated from multiple
   * platforms. null if unavailable.
   */
  bio?: string | null;
}

export namespace SearchItem {
  /**
   * AI-powered recommendation analysis explaining why this creator matches your
   * query
   */
  export interface AIRecommendation {
    /**
     * Human-readable explanation of why this creator was recommended. Highlights key
     * matching factors from the query.
     */
    explanation: string;

    /**
     * Relevance score from 0 to 1, where 1 is a perfect match. Scores above 0.7
     * indicate strong relevance.
     */
    score: number;
  }
}

export interface SearchFindCreatorsResponse {
  /**
   * Total number of matching results in the database before pagination. Use this
   * with `has_more` to display "Showing 25 of 1,247 results" in your UI.
   */
  filtered_total?: number;

  /**
   * Whether there are more results available for pagination. If true, use the
   * `next_cursor` value in your next request.
   */
  has_more?: boolean;

  items?: Array<SearchItem>;

  /**
   * Opaque cursor for fetching the next page of results. Pass this value as the
   * `cursor` query parameter. Only present when `has_more` is true.
   */
  next_cursor?: string;
}

export interface SearchFindCreatorsParams {
  /**
   * Body param: Natural language search query
   */
  query: string;

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
  filters?: SearchFindCreatorsParams.Filters;

  /**
   * Body param: Filter social accounts to only these platforms. Reduces payload
   * size. Does not affect search results or costs.
   */
  include_platforms?: Array<'instagram' | 'tiktok'>;

  /**
   * Body param: Response detail level. `lite` returns basic fields (username,
   * follower_count, engagement_rate). `detailed` adds avg_comments_recent,
   * avg_video_views_recent, follower_change_rate, etc. Detailed mode costs 5x more
   * (0.05 vs 0.01 credits per profile).
   */
  mode?: 'lite' | 'detailed';
}

export namespace SearchFindCreatorsParams {
  export interface Filters {
    /**
     * Per-platform filter definitions
     */
    platform_filters?: Array<Filters.PlatformFilter>;

    /**
     * How to combine platform_filters. `OR` = creator matches ANY platform filter.
     * `AND` = creator must match ALL platform filters. Default: OR.
     */
    platform_logic?: 'AND' | 'OR';
  }

  export namespace Filters {
    export interface PlatformFilter {
      platform: 'instagram' | 'tiktok';

      max_engagement_rate?: number;

      max_followers?: number;

      min_engagement_rate?: number;

      min_followers?: number;

      verified_only?: boolean;
    }
  }
}

export declare namespace Search {
  export {
    type SearchItem as SearchItem,
    type SearchFindCreatorsResponse as SearchFindCreatorsResponse,
    type SearchFindCreatorsParams as SearchFindCreatorsParams,
  };
}
