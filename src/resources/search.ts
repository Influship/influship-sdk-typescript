// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { PagePromise, QueryCursor, type QueryCursorParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * AI-powered semantic search to find creators using natural language queries. Understands intent and context to match creators based on content themes, audience, and style.
 */
export class Search extends APIResource {
  /**
   * Search for creators using natural language queries. The AI understands intent
   * and context to match creators based on content themes, audience demographics,
   * and style.
   *
   * The response includes a `search_id` that can be used with `GET /v1/search/{id}`
   * to paginate through results for free.
   *
   * **Use cases:**
   *
   * - Find creators in a specific niche ("vegan food bloggers in LA")
   * - Discover creators with specific audience characteristics ("fitness influencers
   *   with millennial audience")
   * - Search by content style ("creators who post cinematic travel videos")
   *
   * **Pricing**: 25 credits base + 2 credits per creator returned
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

  /**
   * Paginate through results from a previous search. Use the `search_id` returned by
   * `POST /v1/search` to fetch additional pages.
   *
   * Search sessions expire after 1 hour. After expiry, a new search must be run.
   *
   * **Pricing**: 0 credits (included with initial search)
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const searchRetrieveResponse of client.search.retrieve(
   *   '123e4567-e89b-12d3-a456-426614174000',
   * )) {
   *   // ...
   * }
   * ```
   */
  retrieve(
    id: string,
    query: SearchRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SearchRetrieveResponsesQueryCursor, SearchRetrieveResponse> {
    return this._client.getAPIList(path`/v1/search/${id}`, QueryCursor<SearchRetrieveResponse>, {
      query,
      ...options,
    });
  }
}

export type SearchRetrieveResponsesQueryCursor = QueryCursor<SearchRetrieveResponse>;

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

  /**
   * Search ID. Use with GET /v1/search/{id} for free pagination.
   */
  search_id: string;

  /**
   * Total number of results across all pages
   */
  total: number;
}

export namespace SearchCreateResponse {
  export interface Data {
    /**
     * Basic creator information
     */
    creator: Shared.CreatorBasic;

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

export interface SearchRetrieveResponse {
  /**
   * Basic creator information
   */
  creator: Shared.CreatorBasic;

  /**
   * Search match information
   */
  match: SearchRetrieveResponse.Match;

  /**
   * Abbreviated profile information
   */
  primary_profile: Shared.ProfileSummary | null;

  /**
   * Abbreviated profile information
   */
  relevant_profile: Shared.ProfileSummary | null;
}

export namespace SearchRetrieveResponse {
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

export interface SearchCreateParams {
  /**
   * Natural language search query
   */
  query: string;

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

export interface SearchRetrieveParams extends QueryCursorParams {}

export declare namespace Search {
  export {
    type SearchCreateResponse as SearchCreateResponse,
    type SearchRetrieveResponse as SearchRetrieveResponse,
    type SearchRetrieveResponsesQueryCursor as SearchRetrieveResponsesQueryCursor,
    type SearchCreateParams as SearchCreateParams,
    type SearchRetrieveParams as SearchRetrieveParams,
  };
}
