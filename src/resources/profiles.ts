// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Access individual social media profiles with detailed metrics, growth data, and activity information. Profiles are platform-specific accounts linked to creators.
 */
export class Profiles extends APIResource {
  /**
   * Retrieve detailed profile data including metrics, growth statistics, and
   * activity information from our database.
   *
   * **Response includes:**
   *
   * - Basic info (bio, avatar, verification status)
   * - Performance metrics (followers, engagement rate, avg likes/comments)
   * - Growth data (30-day follower growth, monthly rate)
   * - Activity data (last post date, posting frequency)
   *
   * Also callable as the `get_profile` MCP tool — see
   * [the MCP server guide](/guides/mcp-server) for setup.
   *
   * **Pricing**: 0.1 credits per request ($0.001)
   *
   * @example
   * ```ts
   * const profile = await client.profiles.get(
   *   'fitness_coach_jane',
   *   { platform: 'instagram' },
   * );
   * ```
   */
  get(username: string, params: ProfileGetParams, options?: RequestOptions): APIPromise<ProfileGetResponse> {
    const { platform } = params;
    return this._client.get(path`/v1/profiles/${platform}/${username}`, options);
  }

  /**
   * Look up multiple profiles in a single request. Efficiently retrieve data for up
   * to 100 profiles at once.
   *
   * **Response includes:**
   *
   * - `found`: Array of profiles that exist in our database
   * - `not_found`: Array of profiles that weren't found (consider live scraping
   *   these)
   *
   * Also callable as the `lookup_profiles` MCP tool — see
   * [the MCP server guide](/guides/mcp-server) for setup.
   *
   * **Pricing**: 0.1 credits per profile ($0.001)
   *
   * @example
   * ```ts
   * const response = await client.profiles.lookup({
   *   profiles: [
   *     {
   *       platform: 'instagram',
   *       username: 'fitness_coach_jane',
   *     },
   *     { platform: 'instagram', username: 'wellness_guru' },
   *     {
   *       platform: 'instagram',
   *       username: 'healthy_eating_tips',
   *     },
   *   ],
   * });
   * ```
   */
  lookup(body: ProfileLookupParams, options?: RequestOptions): APIPromise<ProfileLookupResponse> {
    return this._client.post('/v1/profiles/lookup', { body, ...options });
  }
}

/**
 * Profile activity information
 */
export interface ProfileActivity {
  /**
   * Timestamp of last post
   */
  last_post_at: string | null;
}

/**
 * Profile growth statistics
 */
export interface ProfileGrowth {
  /**
   * Follower growth percentage over 30 days (e.g. 2.5 means +2.5%)
   */
  followers_30d_pct: number;
}

/**
 * Profile performance metrics
 */
export interface ProfileMetrics {
  /**
   * Average comments on recent posts
   */
  avg_comments_recent: number;

  /**
   * Average likes on recent posts
   */
  avg_likes_recent: number;

  /**
   * Average views on recent posts (for video content)
   */
  avg_views_recent: number | null;

  /**
   * Engagement rate as a percentage (e.g. 3.5 means 3.5%)
   */
  engagement_rate: number;

  /**
   * Follower count
   */
  followers: number;

  /**
   * Following count
   */
  following: number;

  /**
   * Total post count
   */
  posts: number;

  /**
   * Posts in the last 30 days
   */
  posts_last_30d: number;

  /**
   * Average posts per week
   */
  posts_per_week: number;
}

/**
 * Full profile details
 */
export interface ProfileResponseData {
  /**
   * Profile unique identifier
   */
  id: string;

  /**
   * Profile activity information
   */
  activity: ProfileActivity;

  /**
   * Avatar URL
   */
  avatar_url: string | null;

  /**
   * Profile bio
   */
  bio: string | null;

  /**
   * Account category
   */
  category: string | null;

  /**
   * Creator unique identifier
   */
  creator_id: string;

  /**
   * Last data refresh timestamp
   */
  data_updated_at: string | null;

  /**
   * Display name
   */
  display_name: string | null;

  /**
   * External website URL from bio
   */
  external_url: string | null;

  /**
   * Profile growth statistics
   */
  growth: ProfileGrowth;

  /**
   * Whether this is a business account
   */
  is_business: boolean;

  /**
   * Whether the account is private
   */
  is_private: boolean;

  /**
   * Whether the account is verified
   */
  is_verified: boolean;

  /**
   * Profile performance metrics
   */
  metrics: ProfileMetrics;

  /**
   * Social media platform
   */
  platform: 'instagram';

  /**
   * Listed pronouns
   */
  pronouns: Array<string> | null;

  /**
   * Profile URL
   */
  url: string;

  /**
   * Profile username
   */
  username: string;
}

export interface ProfileGetResponse {
  /**
   * Full profile details
   */
  data: ProfileResponseData;

  /**
   * Present when partial results were returned because profile metrics/data were
   * skipped due to integrity issues.
   */
  warning?: string;
}

export interface ProfileLookupResponse {
  /**
   * Profiles that were found
   */
  data: Array<ProfileResponseData>;

  /**
   * Profiles that were not found
   */
  not_found: Array<ProfileLookupResponse.NotFound>;
}

export namespace ProfileLookupResponse {
  export interface NotFound {
    /**
     * Social media platform
     */
    platform: 'instagram';

    username: string;
  }
}

export interface ProfileGetParams {
  /**
   * Platform name
   */
  platform: string;
}

export interface ProfileLookupParams {
  /**
   * Profiles to lookup
   */
  profiles: Array<ProfileLookupParams.Profile>;
}

export namespace ProfileLookupParams {
  export interface Profile {
    /**
     * Social media platform
     */
    platform: 'instagram';

    /**
     * Username to lookup
     */
    username: string;
  }
}

export declare namespace Profiles {
  export {
    type ProfileActivity as ProfileActivity,
    type ProfileGrowth as ProfileGrowth,
    type ProfileMetrics as ProfileMetrics,
    type ProfileResponseData as ProfileResponseData,
    type ProfileGetResponse as ProfileGetResponse,
    type ProfileLookupResponse as ProfileLookupResponse,
    type ProfileGetParams as ProfileGetParams,
    type ProfileLookupParams as ProfileLookupParams,
  };
}
