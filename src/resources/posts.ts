// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Posts extends APIResource {
  /**
   * Retrieve posts for a creator or profile with engagement metrics and media data.
   *
   * **Query options:**
   *
   * - By creator: Use `creator_id` to get posts across all their profiles
   * - By profile: Use `platform` + `username` for a specific profile's posts
   *
   * **Sort options:**
   *
   * - `recent`: Most recent posts first (default)
   * - `top_engagement`: Highest engagement rate first
   * - `most_likes`: Most likes first
   * - `most_views`: Most views first (video content)
   * - `most_comments`: Most comments first
   *
   * **Pricing**: $0.005 per post returned
   */
  list(
    query: PostListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostListResponse> {
    return this._client.get('/v1/posts', { query, ...options });
  }
}

export interface PostListResponse {
  data: Array<PostListResponse.Data>;

  /**
   * Cursor-based pagination metadata
   */
  pagination: PostListResponse.Pagination;
}

export namespace PostListResponse {
  /**
   * Full post details
   */
  export interface Data {
    /**
     * Post unique identifier
     */
    id: string;

    /**
     * Post caption
     */
    caption: string | null;

    /**
     * Hashtags used in the post
     */
    hashtags: Array<string>;

    /**
     * Post location information
     */
    location: Data.Location | null;

    /**
     * Post media information
     */
    media: Data.Media;

    /**
     * Usernames mentioned in the post
     */
    mentions: Array<string>;

    /**
     * Post engagement metrics
     */
    metrics: Data.Metrics;

    /**
     * Social media platform
     */
    platform: 'instagram';

    /**
     * Platform-specific post ID
     */
    platform_id: string;

    /**
     * Post timestamp
     */
    posted_at: string;

    /**
     * Profile unique identifier
     */
    profile_id: string;

    /**
     * Type of post
     */
    type: 'image' | 'video' | 'carousel' | 'reel' | 'story';

    /**
     * Post URL
     */
    url: string;
  }

  export namespace Data {
    /**
     * Post location information
     */
    export interface Location {
      /**
       * Location name
       */
      name: string | null;
    }

    /**
     * Post media information
     */
    export interface Media {
      /**
       * Video duration in seconds
       */
      duration_seconds: number | null;

      /**
       * Thumbnail URL
       */
      thumbnail_url: string | null;

      /**
       * Media URL
       */
      url: string | null;

      /**
       * Video URL (for video content)
       */
      video_url: string | null;
    }

    /**
     * Post engagement metrics
     */
    export interface Metrics {
      /**
       * Comment count
       */
      comments: number | null;

      /**
       * Engagement rate for this post
       */
      engagement_rate: number | null;

      /**
       * Like count
       */
      likes: number | null;

      /**
       * Share count
       */
      shares: number | null;

      /**
       * View count (for video content)
       */
      views: number | null;
    }
  }

  /**
   * Cursor-based pagination metadata
   */
  export interface Pagination {
    /**
     * Whether more results are available
     */
    has_more: boolean;

    /**
     * Cursor for the next page of results
     */
    next_cursor?: string;

    /**
     * Total number of results (if available)
     */
    total?: number;
  }
}

export interface PostListParams {
  /**
   * Creator ID (use this OR platform+username)
   */
  creator_id?: string;

  /**
   * Pagination cursor for next page
   */
  cursor?: string;

  /**
   * Maximum posts to return
   */
  limit?: string;

  /**
   * Platform (required with username)
   */
  platform?: 'instagram';

  /**
   * Sort order
   */
  sort?: 'recent' | 'top_engagement' | 'most_likes' | 'most_views' | 'most_comments';

  /**
   * Username (required with platform)
   */
  username?: string;
}

export declare namespace Posts {
  export { type PostListResponse as PostListResponse, type PostListParams as PostListParams };
}
