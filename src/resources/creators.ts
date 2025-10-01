// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CreatorsAPI from './creators';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Creators extends APIResource {
  /**
   * Get creator-level information (person data) for one or multiple creators by
   * their IDs.
   *
   * This endpoint returns basic creator profile data including name, bio, avatar,
   * and status information. For platform-specific data (follower counts, engagement
   * rates, etc.), use the `/v1/creators/{id}/profiles` endpoint.
   *
   * **Creator vs Profile Data:**
   *
   * - **Creator data**: Person-level information (name, bio, avatar, status)
   * - **Profile data**: Platform-specific data (follower counts, engagement,
   *   metrics)
   *
   * **Pricing**: 0.1 credits per creator profile returned
   *
   * @example
   * ```ts
   * const creator = await client.creators.retrieve({
   *   creator_ids: 'creator_ids',
   * });
   * ```
   */
  retrieve(query: CreatorRetrieveParams, options?: RequestOptions): APIPromise<CreatorRetrieveResponse> {
    return this._client.get('/v1/creators', { query, ...options });
  }

  /**
   * Search creators by partial name or on-platform username for autocomplete
   * suggestions.
   *
   * This endpoint searches across both global creator names and platform-specific
   * usernames/display names from all platforms. Use the platform parameter to filter
   * results to only show creators that have profiles on the specified platform.
   *
   * Use the scope parameter to control response granularity:
   *
   * - `creator_only`: Returns only creator profile data (id, name, avatar)
   * - `matched_platforms`: Returns creator data + only the social accounts that
   *   matched the search
   * - `all_platforms`: Returns creator data + all social accounts (default)
   *
   * This endpoint is optimized for fast autocomplete functionality and returns
   * lightweight results suitable for dropdown suggestions.
   *
   * **Pricing**: 0.001 credits per request
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
   * **EXPLORATION ENDPOINT**: Get all social account data when you know a creator
   * UUID.
   *
   * **🎯 When to use this endpoint:**
   *
   * - ✅ You have a creator UUID (from `/v1/creators` or `/v1/profiles` response)
   * - ✅ You want to see all social accounts for a creator (Instagram, TikTok, etc.)
   * - ✅ You need comprehensive social account data for a creator
   * - ✅ You want to explore all platforms a creator is on
   *
   * **❌ When NOT to use this endpoint:**
   *
   * - ❌ You only have a username and platform (use `/v1/profiles` instead)
   * - ❌ You don't have a creator UUID (use `/v1/profiles` to discover first)
   *
   * **📊 Response Format:** Returns `SocialAccountLite` or `SocialAccountDetailed`
   * objects with identical structure to `/v1/profiles`. Both endpoints return the
   * same data structure for consistency.
   *
   * **🔗 Data Relationships:**
   *
   * - This endpoint requires a creator UUID (not a social account ID)
   * - Use `creator_profile_id` from `/v1/profiles` response as the `{id}` parameter
   * - Returns all social accounts associated with that creator
   * - Filter by platform using the `platforms` query parameter
   *
   * **🔄 Typical Workflow:**
   *
   * 1. **Discovery**: Call `/v1/profiles` with username+platform → get social
   *    account data + creator_profile_id
   * 2. **All Accounts**: Call `/v1/creators/{creator_profile_id}/profiles` → get all
   *    social accounts for that creator
   * 3. **Creator Data**: Call `/v1/creators` with creator_profile_id → get
   *    creator-level data
   *
   * **⚙️ Parameters:**
   *
   * - `mode`: `lite` (default) or `detailed` - controls response detail level
   * - `platforms`: Comma-separated list of platforms to filter (e.g.,
   *   `instagram,tiktok`) **Pricing**: 0.01-0.05 credits per social account
   *   (lite/detailed mode)
   *
   * @example
   * ```ts
   * const response = await client.creators.listProfiles(
   *   '123e4567-e89b-12d3-a456-426614174000',
   * );
   * ```
   */
  listProfiles(
    id: string,
    query: CreatorListProfilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CreatorListProfilesResponse> {
    return this._client.get(path`/v1/creators/${id}/profiles`, { query, ...options });
  }
}

/**
 * Basic creator information
 */
export interface Creator {
  /**
   * Unique creator identifier
   */
  id?: string;

  /**
   * Creator's avatar URL
   */
  avatar?: string | null;

  /**
   * Creator's bio text
   */
  bio?: string | null;

  /**
   * Creator's display name
   */
  name?: string | null;
}

/**
 * Creator autocomplete result
 */
export interface CreatorAutocomplete {
  /**
   * Unique creator identifier
   */
  id: string;

  /**
   * Creator's avatar URL
   */
  avatar: string;

  /**
   * Creator's display name
   */
  name: string;

  /**
   * Matching social media platforms
   */
  platforms: Array<CreatorAutocomplete.Platform>;
}

export namespace CreatorAutocomplete {
  export interface Platform {
    /**
     * Display name on the platform
     */
    display_name: string;

    /**
     * Field that matched the search
     */
    match_field: string;

    /**
     * Type of match found
     */
    match_type: 'name' | 'username' | 'display_name';

    /**
     * Social media platform
     */
    platform: 'instagram' | 'tiktok';

    /**
     * Username on the platform
     */
    username: string;
  }
}

/**
 * Extended social account information with detailed metrics
 */
export interface SocialAccountDetailed extends SocialAccountLite {
  /**
   * Average comments per post from last 12 posts. null if account has <3 posts or is
   * private.
   */
  avg_comments_recent?: number | null;

  /**
   * Average views per video post from recent content. null if no video posts or data
   * unavailable.
   */
  avg_video_views_recent?: number | null;

  /**
   * Monthly follower growth rate (percentage). Positive = growth, negative =
   * decline. null if account is <30 days old or insufficient data.
   */
  follower_change_rate_monthly_approx?: number | null;

  /**
   * Number of accounts this user follows. null if account is private.
   */
  following_count?: number | null;

  /**
   * Number of Instagram Story highlights. Instagram only. null for other platforms.
   */
  highlight_reel_count?: number | null;

  /**
   * Total posts published (photos, videos, carousels). null if unavailable.
   */
  media_count?: number | null;

  /**
   * Platform-assigned category (e.g., "Health & Fitness"). null if not set or
   * platform doesn't provide categories.
   */
  platform_category_name?: string | null;
}

/**
 * Basic social account information returned in lite mode
 */
export interface SocialAccountLite {
  /**
   * Unique social account identifier
   */
  id: string;

  /**
   * Account bio
   */
  bio: string | null;

  /**
   * Creator UUID this social account belongs to. Use with `/v1/creators` for
   * person-level data (name, bio, avatar) or `/v1/creators/{id}/profiles` for all
   * social accounts.
   */
  creator_profile_id: string;

  /**
   * Display name on the platform
   */
  display_name: string;

  /**
   * Social media platform
   */
  platform: 'instagram' | 'tiktok';

  /**
   * Username on the platform
   */
  username: string;

  /**
   * Whether the account has platform verification (blue checkmark).
   */
  verified: boolean;

  /**
   * Profile picture URL
   */
  avatar_url?: string | null;

  /**
   * Engagement rate percentage (0-100). Formula: (avg_likes + avg_comments) /
   * follower_count × 100. Based on last 12 posts. null if account is private or has
   * <3 posts.
   */
  engagement_rate?: number | null;

  /**
   * External website URL
   */
  external_url?: string | null;

  /**
   * Total number of followers on this platform. null if data is unavailable or
   * account is private.
   */
  follower_count?: number | null;
}

export interface CreatorRetrieveResponse {
  creators?: Array<CreatorRetrieveResponse.CreatorWithProfiles | Creator>;
}

export namespace CreatorRetrieveResponse {
  /**
   * Creator with embedded social account profiles
   */
  export interface CreatorWithProfiles extends CreatorsAPI.Creator {
    /**
     * Social account profiles for this creator
     */
    profiles: Array<CreatorsAPI.SocialAccountLite | CreatorsAPI.SocialAccountDetailed>;
  }
}

export interface CreatorAutocompleteResponse {
  count?: number;

  ok?: boolean;

  results?: Array<CreatorAutocompleteResponse.Result>;
}

export namespace CreatorAutocompleteResponse {
  export interface Result {
    id?: string;

    avatar?: string;

    name?: string;

    platforms?: Array<Result.Platform>;
  }

  export namespace Result {
    export interface Platform {
      display_name?: string;

      match_field?: string;

      match_type?: 'name' | 'username' | 'display_name';

      platform?: string;

      username?: string;
    }
  }
}

export interface CreatorListProfilesResponse {
  /**
   * Array of social account objects. The structure depends on the `mode` parameter:
   *
   * - If `mode: "lite"`: Returns SocialAccountLite objects
   * - If `mode: "detailed"`: Returns SocialAccountDetailed objects with additional
   *   fields
   */
  profiles?: Array<SocialAccountLite | SocialAccountDetailed>;
}

export interface CreatorRetrieveParams {
  /**
   * Comma-separated list of creator UUIDs
   */
  creator_ids: string;

  /**
   * Whether to include social account profiles for each creator
   */
  include_profiles?: boolean;

  /**
   * Detail level for included profiles (only used when include_profiles=true)
   */
  profile_mode?: 'lite' | 'detailed';

  /**
   * Comma-separated list of platforms to include (instagram, tiktok). Only used when
   * include_profiles=true
   */
  profile_platforms?: string;
}

export interface CreatorAutocompleteParams {
  /**
   * Search query text (partial name/username)
   */
  q: string;

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Filter results to only show creators that have profiles on this specific
   * platform. If not provided, returns creators from all platforms.
   */
  platform?: 'instagram' | 'tiktok';

  /**
   * Control the granularity of returned data
   */
  scope?: 'creator_only' | 'matched_platforms' | 'all_platforms';
}

export interface CreatorListProfilesParams {
  /**
   * Response detail level
   */
  mode?: 'lite' | 'detailed';

  /**
   * Comma-separated list of platforms to include (instagram, tiktok)
   */
  platforms?: string;
}

export declare namespace Creators {
  export {
    type Creator as Creator,
    type CreatorAutocomplete as CreatorAutocomplete,
    type SocialAccountDetailed as SocialAccountDetailed,
    type SocialAccountLite as SocialAccountLite,
    type CreatorRetrieveResponse as CreatorRetrieveResponse,
    type CreatorAutocompleteResponse as CreatorAutocompleteResponse,
    type CreatorListProfilesResponse as CreatorListProfilesResponse,
    type CreatorRetrieveParams as CreatorRetrieveParams,
    type CreatorAutocompleteParams as CreatorAutocompleteParams,
    type CreatorListProfilesParams as CreatorListProfilesParams,
  };
}
