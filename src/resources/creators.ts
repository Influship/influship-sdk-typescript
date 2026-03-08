// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { BodyCursor, type BodyCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Retrieve creator profiles and discover new creators through search, autocomplete, and lookalike matching. Creators are cross-platform entities that may have profiles on multiple social networks.
 */
export class Creators extends APIResource {
  /**
   * Retrieve a creator's profile including AI-generated summary, content themes, and
   * optionally their linked social profiles.
   *
   * **What is a Creator?** A creator is a cross-platform entity representing a
   * person or brand. They may have profiles on multiple social networks (Instagram,
   * YouTube, TikTok, etc.) that are linked together.
   *
   * **Include options:**
   *
   * - `profiles`: Include all linked social profiles with metrics
   *
   * **Pricing**: 0.1 credits per request ($0.001)
   *
   * @example
   * ```ts
   * const creator = await client.creators.retrieve(
   *   '123e4567-e89b-12d3-a456-426614174000',
   *   { include: ['profiles'] },
   * );
   * ```
   */
  retrieve(
    id: string,
    query: CreatorRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CreatorRetrieveResponse> {
    return this._client.get(path`/v1/creators/${id}`, { query, ...options });
  }

  /**
   * Fast typeahead search for creators by name or username. Optimized for
   * search-as-you-type UIs with sub-100ms response times.
   *
   * **Matching behavior:**
   *
   * - Matches against creator name, username, and display name
   * - Results include which field matched and the matching value
   * - Prefix matching (e.g., "fit" matches "fitness_coach")
   *
   * **Scope options:**
   *
   * - `creator_only`: Return only the creator entity
   * - `matched_platforms`: Return only profiles that matched the query
   * - `all_platforms`: Return all linked profiles (default)
   *
   * **Pricing**: 0.05 credits per request ($0.0005)
   *
   * @example
   * ```ts
   * const response = await client.creators.autocomplete({
   *   q: 'fitness',
   * });
   * ```
   */
  autocomplete(
    query: CreatorAutocompleteParams,
    options?: RequestOptions,
  ): APIPromise<CreatorAutocompleteResponse> {
    return this._client.get('/v1/creators/autocomplete', { query, ...options });
  }

  /**
   * Find creators similar to provided seed creators using AI-powered similarity
   * matching. Analyzes content themes, audience overlap, posting style, and
   * engagement patterns.
   *
   * **Use cases:**
   *
   * - Expand campaigns with creators similar to proven performers
   * - Find alternatives when preferred creators are unavailable
   * - Discover emerging creators in the same niche
   *
   * **How it works:**
   *
   * 1. Provide 1-10 seed creators (by ID or platform/username)
   * 2. Optionally weight seeds to prioritize certain creators
   * 3. Get ranked results with similarity scores and shared traits
   *
   * **Pricing**: 1.5 credits per creator returned ($0.015)
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const creatorLookalikeResponse of client.creators.lookalike(
   *   { seeds: [{}] },
   * )) {
   *   // ...
   * }
   * ```
   */
  lookalike(
    body: CreatorLookalikeParams,
    options?: RequestOptions,
  ): PagePromise<CreatorLookalikeResponsesBodyCursor, CreatorLookalikeResponse> {
    return this._client.getAPIList('/v1/creators/lookalike', BodyCursor<CreatorLookalikeResponse>, {
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Evaluate how well creators match a specific campaign using AI analysis. Returns
   * a fit score (0-1), decision recommendation (good/neutral/avoid), and
   * evidence-based explanations.
   *
   * **Use cases:**
   *
   * - Vet shortlisted creators before outreach
   * - Rank candidates for a specific campaign
   * - Get AI-generated talking points for why a creator fits
   *
   * **How it works:**
   *
   * 1. Describe your campaign intent and target audience
   * 2. Provide up to 100 creators to evaluate
   * 3. Get detailed scores with explanations and evidence
   *
   * **Pricing**: 1 credit per creator scored ($0.01)
   *
   * @example
   * ```ts
   * const response = await client.creators.match({
   *   creators: [{}],
   *   intent: {
   *     query:
   *       'Looking for fitness influencers to promote our new protein bar',
   *   },
   * });
   * ```
   */
  match(body: CreatorMatchParams, options?: RequestOptions): APIPromise<CreatorMatchResponse> {
    return this._client.post('/v1/creators/match', { body, ...options });
  }
}

export type CreatorLookalikeResponsesBodyCursor = BodyCursor<CreatorLookalikeResponse>;

export interface CreatorRetrieveResponse {
  /**
   * Full creator details
   */
  data: CreatorRetrieveResponse.Data;

  /**
   * Present when partial results were returned because one or more linked profiles
   * were skipped for data integrity reasons.
   */
  warning?: string;
}

export namespace CreatorRetrieveResponse {
  /**
   * Full creator details
   */
  export interface Data {
    /**
     * Creator unique identifier
     */
    id: string;

    /**
     * AI-generated summary of the creator
     */
    ai_summary: string | null;

    /**
     * Avatar URL
     */
    avatar_url: string | null;

    /**
     * Creator bio
     */
    bio: string | null;

    /**
     * Content themes/topics
     */
    content_themes: Array<string>;

    /**
     * Creator display name
     */
    name: string;

    /**
     * Social profiles (only included when include=profiles)
     */
    profiles?: Array<Shared.ProfileSummary>;
  }
}

export interface CreatorAutocompleteResponse {
  /**
   * Autocomplete results
   */
  data: Array<CreatorAutocompleteResponse.Data>;
}

export namespace CreatorAutocompleteResponse {
  export interface Data {
    /**
     * Creator ID
     */
    id: string;

    /**
     * Avatar URL
     */
    avatar: string | null;

    /**
     * Creator name
     */
    name: string;

    /**
     * Matching platforms
     */
    platforms: Array<Data.Platform>;
  }

  export namespace Data {
    export interface Platform {
      display_name: string | null;

      /**
       * The field value that matched
       */
      match_field: string;

      /**
       * How the query matched this profile
       */
      match_type: 'name' | 'username' | 'display_name';

      /**
       * Social media platform
       */
      platform: 'instagram';

      username: string;
    }
  }
}

export interface CreatorLookalikeResponse {
  /**
   * Basic creator information
   */
  creator: Shared.CreatorBasic;

  /**
   * Abbreviated profile information
   */
  primary_profile: Shared.ProfileSummary | null;

  /**
   * Similarity information for lookalike match
   */
  similarity: CreatorLookalikeResponse.Similarity;
}

export namespace CreatorLookalikeResponse {
  /**
   * Similarity information for lookalike match
   */
  export interface Similarity {
    /**
     * Similarity score (0-1)
     */
    score: number;

    /**
     * Shared traits with seed creators
     */
    shared_traits: Array<string>;
  }
}

export interface CreatorMatchResponse {
  data: Array<CreatorMatchResponse.Data>;
}

export namespace CreatorMatchResponse {
  export interface Data {
    creator: Data.Creator;

    input: Data.Input;

    match: Data.Match;
  }

  export namespace Data {
    export interface Creator {
      id: string;

      avatar_url: string | null;

      name: string;
    }

    export interface Input {
      creator_id?: string;

      /**
       * Social media platform
       */
      platform?: 'instagram';

      username?: string;
    }

    export interface Match {
      /**
       * Match decision recommendation
       */
      decision: 'good' | 'neutral' | 'avoid';

      /**
       * Structured reasons supporting the decision
       */
      reasons: Array<Match.Reason>;

      /**
       * Match score (0-1)
       */
      score: number;
    }

    export namespace Match {
      export interface Reason {
        /**
         * Human-readable reason for the match
         */
        text: string;

        /**
         * ID of the supporting fact, if applicable
         */
        fact_id?: string;

        /**
         * ID of the source post, if applicable
         */
        source_post_id?: string;
      }
    }
  }
}

export interface CreatorRetrieveParams {
  /**
   * Additional data to include in response
   */
  include: Array<'profiles'>;
}

export interface CreatorAutocompleteParams {
  /**
   * Search query (min 2 characters)
   */
  q: string;

  /**
   * Maximum results to return
   */
  limit?: number;

  /**
   * Filter by platform
   */
  platform?: 'instagram';

  /**
   * Which platforms to include in results
   */
  scope?: 'creator_only' | 'matched_platforms' | 'all_platforms';
}

export interface CreatorLookalikeParams extends BodyCursorParams {
  /**
   * Seed creators to find similar creators for
   */
  seeds: Array<CreatorLookalikeParams.Seed>;

  /**
   * Additional filters
   */
  filters?: CreatorLookalikeParams.Filters;
}

export namespace CreatorLookalikeParams {
  /**
   * Seed creator for lookalike search
   */
  export interface Seed {
    /**
     * Creator ID (use this OR platform+username)
     */
    creator_id?: string;

    /**
     * Platform (required with username)
     */
    platform?: 'instagram';

    /**
     * Username (required with platform)
     */
    username?: string;

    /**
     * Weight for this seed (0-1)
     */
    weight?: number;
  }

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

export interface CreatorMatchParams {
  /**
   * Creators to evaluate
   */
  creators: Array<CreatorMatchParams.Creator>;

  /**
   * Campaign intent for creator matching
   */
  intent: CreatorMatchParams.Intent;
}

export namespace CreatorMatchParams {
  /**
   * Creator identifier for match endpoint
   */
  export interface Creator {
    /**
     * Creator ID (use this OR platform+username)
     */
    creator_id?: string;

    /**
     * Platform (required with username)
     */
    platform?: 'instagram';

    /**
     * Username (required with platform)
     */
    username?: string;
  }

  /**
   * Campaign intent for creator matching
   */
  export interface Intent {
    /**
     * Campaign description
     */
    query: string;

    /**
     * Additional context about the campaign
     */
    context?: string;
  }
}

export declare namespace Creators {
  export {
    type CreatorRetrieveResponse as CreatorRetrieveResponse,
    type CreatorAutocompleteResponse as CreatorAutocompleteResponse,
    type CreatorLookalikeResponse as CreatorLookalikeResponse,
    type CreatorMatchResponse as CreatorMatchResponse,
    type CreatorLookalikeResponsesBodyCursor as CreatorLookalikeResponsesBodyCursor,
    type CreatorRetrieveParams as CreatorRetrieveParams,
    type CreatorAutocompleteParams as CreatorAutocompleteParams,
    type CreatorLookalikeParams as CreatorLookalikeParams,
    type CreatorMatchParams as CreatorMatchParams,
  };
}
