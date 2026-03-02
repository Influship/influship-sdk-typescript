// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Instagram extends APIResource {
  /**
   * Fetch fresh Instagram profile data directly from Instagram in real-time. Use
   * this when you need the most current follower counts, bio, or recent activity.
   *
   * **When to use live scraping:**
   *
   * - Profile not found in our database
   * - Need real-time follower/engagement data
   * - Verifying current profile status before campaign
   *
   * **Note:** Live scraping is slower than cached data (2-5 seconds) and costs more.
   * Use cached endpoints when freshness isn't critical.
   *
   * **Pricing**: 0.5 credits per profile scraped ($0.005)
   */
  getProfile(
    username: string,
    query: InstagramGetProfileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstagramGetProfileResponse> {
    return this._client.get(path`/v1/raw/instagram/profile/${username}`, { query, ...options });
  }
}

export interface InstagramGetProfileResponse {
  /**
   * Live scraped profile data
   */
  data: InstagramGetProfileResponse.Data;
}

export namespace InstagramGetProfileResponse {
  /**
   * Live scraped profile data
   */
  export interface Data {
    /**
     * Profile unique identifier
     */
    id: string;

    activity: Data.Activity;

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
     * External website URL
     */
    external_url: string | null;

    growth: Data.Growth;

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

    metrics: Data.Metrics;

    /**
     * Social media platform
     */
    platform: 'instagram';

    /**
     * Listed pronouns
     */
    pronouns: Array<string> | null;

    /**
     * When this data was scraped
     */
    scraped_at: string;

    /**
     * Profile URL
     */
    url: string;

    /**
     * Profile username
     */
    username: string;

    /**
     * Recent posts (only included when include_posts=true)
     */
    posts?: Array<Data.Post>;
  }

  export namespace Data {
    export interface Activity {
      /**
       * Timestamp of last post
       */
      last_post_at: string | null;
    }

    export interface Growth {
      /**
       * Follower growth percentage over 30 days (e.g. 2.5 means +2.5%)
       */
      followers_30d_pct: number;
    }

    export interface Metrics {
      /**
       * Average comments on recent posts
       */
      avg_comments_recent: number;

      /**
       * Average likes on recent posts
       */
      avg_likes_recent: number;

      /**
       * Average views on recent posts
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
     * Simplified post from live scrape
     */
    export interface Post {
      /**
       * Post unique identifier
       */
      id: string;

      /**
       * Post caption
       */
      caption: string | null;

      /**
       * Comment count
       */
      comments_count: number | null;

      /**
       * Like count
       */
      likes_count: number | null;

      /**
       * Primary media URL
       */
      media_url: string | null;

      /**
       * Platform-specific post ID
       */
      platform_id: string;

      /**
       * Post timestamp
       */
      posted_at: string;

      /**
       * Type of post
       */
      type: 'image' | 'video' | 'carousel' | 'reel' | 'story';

      /**
       * Post URL
       */
      url: string;
    }
  }
}

export interface InstagramGetProfileParams {
  /**
   * Include recent posts in response
   */
  include_posts?: boolean;

  /**
   * Number of posts to include
   */
  post_limit?: number;
}

export declare namespace Instagram {
  export {
    type InstagramGetProfileResponse as InstagramGetProfileResponse,
    type InstagramGetProfileParams as InstagramGetProfileParams,
  };
}
