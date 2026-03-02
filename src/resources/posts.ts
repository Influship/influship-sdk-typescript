// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
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
   * **Pricing**: 0.05 credits per post returned ($0.0005)
   */
  list(
    query: PostListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PostListResponsesCursor, PostListResponse> {
    return this._client.getAPIList('/v1/posts', Cursor<PostListResponse>, { query, ...options });
  }
}

export type PostListResponsesCursor = Cursor<PostListResponse>;

/**
 * Full post details
 */
export interface PostListResponse {
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
  location: PostListResponse.Location | null;

  /**
   * Post media information
   */
  media: PostListResponse.Media;

  /**
   * Usernames mentioned in the post
   */
  mentions: Array<string>;

  /**
   * Post engagement metrics
   */
  metrics: PostListResponse.Metrics;

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

export namespace PostListResponse {
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
     * Engagement rate for this post as a percentage (e.g. 3.8 means 3.8%)
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

export interface PostListParams extends CursorParams {
  /**
   * Creator ID (use this OR platform+username)
   */
  creator_id?: string;

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
  export {
    type PostListResponse as PostListResponse,
    type PostListResponsesCursor as PostListResponsesCursor,
    type PostListParams as PostListParams,
  };
}
