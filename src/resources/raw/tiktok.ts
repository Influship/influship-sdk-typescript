// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TiktokAPI from './tiktok';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Fetch fresh data directly from social platforms in real-time. Use when you need the most current information or data for profiles not yet in our database.
 */
export class Tiktok extends APIResource {
  /**
   * Fetch a normalized TikTok profile with current identity, biography,
   * verification, and audience metrics.
   *
   * **Pricing**: 0.5 credits per profile scraped ($0.005)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.getProfile(
   *   'creator',
   * );
   * ```
   */
  getProfile(username: string, options?: RequestOptions): APIPromise<TiktokGetProfileResponse> {
    return this._client.get(path`/v1/raw/tiktok/profile/${username}`, options);
  }

  /**
   * Fetch normalized details and current engagement metrics for a TikTok video URL.
   * Signed media URLs are temporary and should be downloaded promptly.
   *
   * **Pricing**: 0.5 credits per video scraped ($0.005)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.getVideo({
   *   url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
   * });
   * ```
   */
  getVideo(query: TiktokGetVideoParams, options?: RequestOptions): APIPromise<TiktokGetVideoResponse> {
    return this._client.get('/v1/raw/tiktok/video', { query, ...options });
  }

  /**
   * Fetch or generate a normalized TikTok transcript with plain text and timestamped
   * segments. The detected-language transcript is reused on later requests.
   *
   * **Pricing**: 5 credits per transcript ($0.05)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.getVideoTranscript(
   *   {
   *     url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
   *   },
   * );
   * ```
   */
  getVideoTranscript(
    query: TiktokGetVideoTranscriptParams,
    options?: RequestOptions,
  ): APIPromise<TiktokGetVideoTranscriptResponse> {
    return this._client.get('/v1/raw/tiktok/video/transcript', { query, ...options });
  }

  /**
   * Fetch one cursor-paginated page of normalized TikTok videos. Signed media URLs
   * are temporary and should be downloaded promptly.
   *
   * **Pricing**: 0.5 credits per video page scraped ($0.005)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.listProfileVideos(
   *   'creator',
   * );
   * ```
   */
  listProfileVideos(
    username: string,
    query: TiktokListProfileVideosParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TiktokListProfileVideosResponse> {
    return this._client.get(path`/v1/raw/tiktok/profile/${username}/videos`, { query, ...options });
  }

  /**
   * Fetch one cursor-paginated page of normalized comments for a TikTok video URL.
   *
   * **Pricing**: 0.5 credits per comment page scraped ($0.005)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.listVideoComments({
   *   url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
   * });
   * ```
   */
  listVideoComments(
    query: TiktokListVideoCommentsParams,
    options?: RequestOptions,
  ): APIPromise<TiktokListVideoCommentsResponse> {
    return this._client.get('/v1/raw/tiktok/video/comments', { query, ...options });
  }
}

export interface Profile {
  avatar_url: string | null;

  biography: string;

  display_name: string;

  external_url: string | null;

  follower_count: number;

  following_count: number;

  is_business: boolean;

  is_private: boolean;

  is_verified: boolean;

  like_count: number;

  profile_url: string;

  scraped_at: string;

  user_id: string;

  username: string;

  video_count: number;
}

export interface Transcript {
  duration_seconds: number | null;

  full_text: string;

  language: string;

  scraped_at: string;

  segments: Array<Transcript.Segment>;

  source: 'captions' | 'generated';

  transcript: string;

  url: string;

  video_id: string;

  word_count: number;
}

export namespace Transcript {
  export interface Segment {
    end_ms: number;

    start_ms: number;

    text: string;
  }
}

export interface Video {
  author: Video.Author;

  comment_count: number;

  created_at: string | null;

  description: string;

  duration_seconds: number | null;

  has_watermark: boolean | null;

  hashtags: Array<string>;

  images: Array<string>;

  is_pinned: boolean;

  like_count: number;

  media_type: 'video' | 'slideshow';

  music: Video.Music | null;

  save_count: number;

  share_count: number;

  thumbnail_url: string | null;

  url: string;

  video_id: string;

  video_url: string | null;

  view_count: number;
}

export namespace Video {
  export interface Author {
    avatar_url: string | null;

    display_name: string;

    is_verified: boolean;

    user_id: string;

    username: string;
  }

  export interface Music {
    author: string | null;

    duration_seconds: number | null;

    music_id: string | null;

    title: string | null;
  }
}

export interface TiktokGetProfileResponse {
  data: Profile;
}

export interface TiktokGetVideoResponse {
  data: TiktokGetVideoResponse.Data;
}

export namespace TiktokGetVideoResponse {
  export interface Data {
    scraped_at: string;

    video: TiktokAPI.Video;
  }
}

export interface TiktokGetVideoTranscriptResponse {
  data: Transcript;
}

export interface TiktokListProfileVideosResponse {
  data: TiktokListProfileVideosResponse.Data;
}

export namespace TiktokListProfileVideosResponse {
  export interface Data {
    has_more: boolean;

    next_cursor: string | null;

    scraped_at: string;

    username: string;

    videos: Array<TiktokAPI.Video>;
  }
}

export interface TiktokListVideoCommentsResponse {
  data: TiktokListVideoCommentsResponse.Data;
}

export namespace TiktokListVideoCommentsResponse {
  export interface Data {
    comments: Array<Data.Comment>;

    has_more: boolean;

    next_cursor: string | null;

    scraped_at: string;

    total: number | null;

    video_id: string | null;
  }

  export namespace Data {
    export interface Comment {
      author: Comment.Author;

      comment_id: string;

      created_at: string | null;

      is_pinned: boolean;

      like_count: number;

      reply_count: number;

      text: string;

      video_id: string;
    }

    export namespace Comment {
      export interface Author {
        avatar_url: string | null;

        display_name: string;

        is_verified: boolean;

        user_id: string;

        username: string;
      }
    }
  }
}

export interface TiktokGetVideoParams {
  /**
   * HTTPS TikTok video or share URL
   */
  url: string;

  /**
   * TikTok resolution region (US only)
   */
  region?: 'US';
}

export interface TiktokGetVideoTranscriptParams {
  /**
   * HTTPS TikTok video or share URL
   */
  url: string;
}

export interface TiktokListProfileVideosParams {
  /**
   * Opaque cursor from the previous response
   */
  cursor?: string;

  /**
   * TikTok resolution region (US only)
   */
  region?: 'US';

  /**
   * Video ordering
   */
  sort_by?: 'latest' | 'popular';
}

export interface TiktokListVideoCommentsParams {
  /**
   * HTTPS TikTok video or share URL
   */
  url: string;

  /**
   * Opaque cursor from the previous response
   */
  cursor?: string;
}

export declare namespace Tiktok {
  export {
    type Profile as Profile,
    type Transcript as Transcript,
    type Video as Video,
    type TiktokGetProfileResponse as TiktokGetProfileResponse,
    type TiktokGetVideoResponse as TiktokGetVideoResponse,
    type TiktokGetVideoTranscriptResponse as TiktokGetVideoTranscriptResponse,
    type TiktokListProfileVideosResponse as TiktokListProfileVideosResponse,
    type TiktokListVideoCommentsResponse as TiktokListVideoCommentsResponse,
    type TiktokGetVideoParams as TiktokGetVideoParams,
    type TiktokGetVideoTranscriptParams as TiktokGetVideoTranscriptParams,
    type TiktokListProfileVideosParams as TiktokListProfileVideosParams,
    type TiktokListVideoCommentsParams as TiktokListVideoCommentsParams,
  };
}
