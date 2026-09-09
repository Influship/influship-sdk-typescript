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
   * Fetch metadata for a TikTok sound clip by music_id. Unknown fields are null.
   * Audio and cover URLs are temporary upstream links, not durable downloads.
   *
   * **Pricing**: 0.2 credits per sound lookup ($0.002)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.getMusic({
   *   music_id: '496',
   * });
   * ```
   */
  getMusic(query: TiktokGetMusicParams, options?: RequestOptions): APIPromise<TiktokGetMusicResponse> {
    return this._client.get('/v1/raw/tiktok/music', { query, ...options });
  }

  /**
   * Fetch a normalized TikTok profile with current identity, biography,
   * verification, and audience metrics.
   *
   * **Pricing**: 0.2 credits per profile scraped ($0.002)
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
   * **Pricing**: 0.2 credits per video scraped ($0.002)
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
   * Return available TikTok captions without generating a transcript. Returns
   * transcript_not_available when captions are unavailable. Successful cached
   * results are charged at the ordinary rate.
   *
   * **Pricing**: 0.2 credits per successful caption response ($0.002)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.getVideoCaptions({
   *   url: 'https://example.com',
   * });
   * ```
   */
  getVideoCaptions(
    query: TiktokGetVideoCaptionsParams,
    options?: RequestOptions,
  ): APIPromise<TiktokGetVideoCaptionsResponse> {
    return this._client.get('/v1/raw/tiktok/video/captions', { query, ...options });
  }

  /**
   * Fetch or generate a normalized TikTok transcript with plain text and timestamped
   * segments. The detected-language transcript is reused on later requests.
   *
   * **Pricing**: 2.5 credits per transcript ($0.025)
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
   * Process up to 10 video URLs with ordered per-item results. Choose auto (default,
   * $0.025 per item) or captions ($0.002 per item, never generates). Account credits
   * charge successful items only. Premium payments quote all requested items and are
   * nonrefundable once settled, including partial or failed items in a completed
   * batch.
   *
   * @example
   * ```ts
   * const response =
   *   await client.raw.tiktok.getVideoTranscripts({
   *     urls: ['https://example.com'],
   *   });
   * ```
   */
  getVideoTranscripts(
    body: TiktokGetVideoTranscriptsParams,
    options?: RequestOptions,
  ): APIPromise<TiktokGetVideoTranscriptsResponse> {
    return this._client.post('/v1/raw/tiktok/video/transcripts', { body, ...options });
  }

  /**
   * Fetch up to 20 video URLs with ordered per-item results. Duplicate entries
   * remain distinct requested items. Account credits charge successful items only at
   * $0.002 each. Premium payments quote all requested items and are nonrefundable
   * once settled, including partial or failed items in a completed batch.
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.getVideos({
   *   urls: ['https://example.com'],
   * });
   * ```
   */
  getVideos(body: TiktokGetVideosParams, options?: RequestOptions): APIPromise<TiktokGetVideosResponse> {
    return this._client.post('/v1/raw/tiktok/videos', { body, ...options });
  }

  /**
   * Fetch one cursor-paginated page of replies to a numeric parent comment ID. Keep
   * the same video URL and parent comment ID when continuing with next_cursor.
   *
   * **Pricing**: 0.2 credits per reply page scraped ($0.002)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.listCommentReplies(
   *   {
   *     comment_id: '7517114944362499343',
   *     url: 'https://www.tiktok.com/@creator/video/7517114944362499342',
   *   },
   * );
   * ```
   */
  listCommentReplies(
    query: TiktokListCommentRepliesParams,
    options?: RequestOptions,
  ): APIPromise<TiktokListCommentRepliesResponse> {
    return this._client.get('/v1/raw/tiktok/video/comment/replies', { query, ...options });
  }

  /**
   * Fetch one page of videos under a hashtag, supplied without #. Continue with
   * next_cursor and the same hashtag; cursors are opaque. Duplicate results are
   * preserved. Each successful page, including an empty page, is charged once. Media
   * links are temporary.
   *
   * **Pricing**: 0.2 credits per hashtag video page ($0.002)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.listHashtagVideos({
   *   hashtag: 'hashtag',
   * });
   * ```
   */
  listHashtagVideos(
    query: TiktokListHashtagVideosParams,
    options?: RequestOptions,
  ): APIPromise<TiktokListHashtagVideosResponse> {
    return this._client.get('/v1/raw/tiktok/hashtag/videos', { query, ...options });
  }

  /**
   * Fetch one page of TikTok videos using a sound clip, identified by music_id.
   * Continue with next_cursor and the same music_id; cursors are opaque. Duplicate
   * results are preserved. Each successful page, including an empty page, is charged
   * once. Media links are temporary.
   *
   * **Pricing**: 0.2 credits per music video page ($0.002)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.listMusicVideos({
   *   music_id: '496',
   * });
   * ```
   */
  listMusicVideos(
    query: TiktokListMusicVideosParams,
    options?: RequestOptions,
  ): APIPromise<TiktokListMusicVideosResponse> {
    return this._client.get('/v1/raw/tiktok/music/videos', { query, ...options });
  }

  /**
   * Fetch one cursor-paginated page of normalized TikTok videos. Signed media URLs
   * are temporary and should be downloaded promptly.
   *
   * **Pricing**: 0.2 credits per video page scraped ($0.002)
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
   * **Pricing**: 0.2 credits per comment page scraped ($0.002)
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

  /**
   * Fetch one page of TikTok user search results. Unknown profile fields are null.
   * Continue with next_cursor and the same query; treat cursors as opaque. A
   * successful page is charged once, including an empty page.
   *
   * **Pricing**: 0.2 credits per user search page ($0.002)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.searchUsers({
   *   query: 'query',
   * });
   * ```
   */
  searchUsers(
    query: TiktokSearchUsersParams,
    options?: RequestOptions,
  ): APIPromise<TiktokSearchUsersResponse> {
    return this._client.get('/v1/raw/tiktok/search/users', { query, ...options });
  }

  /**
   * Fetch one relevance-ordered page of TikTok videos matching a query. Continue
   * with next_cursor and the same query; cursors are opaque. Duplicate results are
   * preserved. Each successful page, including an empty page, is charged once. Media
   * links are temporary.
   *
   * **Pricing**: 0.2 credits per video search page ($0.002)
   *
   * @example
   * ```ts
   * const response = await client.raw.tiktok.searchVideos({
   *   query: 'query',
   * });
   * ```
   */
  searchVideos(
    query: TiktokSearchVideosParams,
    options?: RequestOptions,
  ): APIPromise<TiktokSearchVideosResponse> {
    return this._client.get('/v1/raw/tiktok/search/videos', { query, ...options });
  }
}

export interface BatchFailure {
  error: BatchFailure.Error;

  status: number;

  success: false;

  url: string;
}

export namespace BatchFailure {
  export interface Error {
    code: string;

    message: string;
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

export interface TranscriptBatchSuccess {
  data: Transcript;

  success: true;

  url: string;
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

export interface VideoBatchSuccess {
  data: VideoResponse;

  success: true;

  url: string;
}

export interface VideoResponse {
  scraped_at: string;

  video: Video;
}

export interface TiktokGetMusicResponse {
  data: TiktokGetMusicResponse.Data;
}

export namespace TiktokGetMusicResponse {
  export interface Data {
    album: string | null;

    author: string | null;

    /**
     * Temporary upstream cover URL; availability and expiry are not guaranteed
     */
    cover_url: string | null;

    duration_seconds: number | null;

    music_id: string;

    /**
     * Temporary upstream audio URL; not a durable download or a usage licence
     */
    play_url: string | null;

    scraped_at: string;

    title: string | null;

    /**
     * Observed number of videos using this sound; null when unavailable
     */
    video_count: number | null;
  }
}

export interface TiktokGetProfileResponse {
  data: Profile;
}

export interface TiktokGetVideoResponse {
  data: VideoResponse;
}

export interface TiktokGetVideoCaptionsResponse {
  data: TiktokGetVideoCaptionsResponse.Data;
}

export namespace TiktokGetVideoCaptionsResponse {
  export interface Data {
    duration_seconds: number | null;

    full_text: string;

    language: string;

    scraped_at: string;

    segments: Array<Data.Segment>;

    source: 'captions';

    transcript: string;

    url: string;

    video_id: string;

    word_count: number;
  }

  export namespace Data {
    export interface Segment {
      end_ms: number;

      start_ms: number;

      text: string;
    }
  }
}

export interface TiktokGetVideoTranscriptResponse {
  data: Transcript;
}

export interface TiktokGetVideoTranscriptsResponse {
  data: TiktokGetVideoTranscriptsResponse.Data;
}

export namespace TiktokGetVideoTranscriptsResponse {
  export interface Data {
    failed: number;

    items: Array<TiktokAPI.TranscriptBatchSuccess | TiktokAPI.BatchFailure>;

    mode: 'auto' | 'captions';

    requested: number;

    scraped_at: string;

    succeeded: number;
  }
}

export interface TiktokGetVideosResponse {
  data: TiktokGetVideosResponse.Data;
}

export namespace TiktokGetVideosResponse {
  export interface Data {
    failed: number;

    items: Array<TiktokAPI.VideoBatchSuccess | TiktokAPI.BatchFailure>;

    requested: number;

    scraped_at: string;

    succeeded: number;
  }
}

export interface TiktokListCommentRepliesResponse {
  data: TiktokListCommentRepliesResponse.Data;
}

export namespace TiktokListCommentRepliesResponse {
  export interface Data {
    comments: Array<Data.Comment>;

    has_more: boolean;

    next_cursor: string | null;

    parent_comment_id: string;

    scraped_at: string;

    total: number | null;

    video_id: string;
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

export interface TiktokListHashtagVideosResponse {
  data: TiktokListHashtagVideosResponse.Data;
}

export namespace TiktokListHashtagVideosResponse {
  export interface Data {
    has_more: boolean;

    hashtag: string;

    next_cursor: string | null;

    scraped_at: string;

    videos: Array<TiktokAPI.Video>;
  }
}

export interface TiktokListMusicVideosResponse {
  data: TiktokListMusicVideosResponse.Data;
}

export namespace TiktokListMusicVideosResponse {
  export interface Data {
    has_more: boolean;

    music_id: string;

    next_cursor: string | null;

    scraped_at: string;

    videos: Array<TiktokAPI.Video>;
  }
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

export interface TiktokSearchUsersResponse {
  data: TiktokSearchUsersResponse.Data;
}

export namespace TiktokSearchUsersResponse {
  export interface Data {
    has_more: boolean;

    next_cursor: string | null;

    query: string;

    scraped_at: string;

    users: Array<Data.User>;
  }

  export namespace Data {
    export interface User {
      avatar_url: string | null;

      biography: string | null;

      display_name: string | null;

      follower_count: number | null;

      following_count: number | null;

      is_verified: boolean | null;

      user_id: string;

      username: string;

      video_count: number | null;
    }
  }
}

export interface TiktokSearchVideosResponse {
  data: TiktokSearchVideosResponse.Data;
}

export namespace TiktokSearchVideosResponse {
  export interface Data {
    has_more: boolean;

    next_cursor: string | null;

    query: string;

    scraped_at: string;

    videos: Array<TiktokAPI.Video>;
  }
}

export interface TiktokGetMusicParams {
  /**
   * TikTok sound clip ID, not a recording or album ID
   */
  music_id: string;
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

export interface TiktokGetVideoCaptionsParams {
  url: string;
}

export interface TiktokGetVideoTranscriptParams {
  /**
   * HTTPS TikTok video or share URL
   */
  url: string;
}

export interface TiktokGetVideoTranscriptsParams {
  urls: Array<string>;

  mode?: 'auto' | 'captions';
}

export interface TiktokGetVideosParams {
  urls: Array<string>;
}

export interface TiktokListCommentRepliesParams {
  /**
   * Numeric ID of the parent comment
   */
  comment_id: string;

  /**
   * HTTPS TikTok video or share URL
   */
  url: string;

  /**
   * Opaque cursor from the previous response
   */
  cursor?: string;
}

export interface TiktokListHashtagVideosParams {
  hashtag: string;

  cursor?: string;
}

export interface TiktokListMusicVideosParams {
  /**
   * TikTok sound clip ID, not a recording or album ID
   */
  music_id: string;

  cursor?: string;
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

export interface TiktokSearchUsersParams {
  query: string;

  cursor?: string;
}

export interface TiktokSearchVideosParams {
  query: string;

  cursor?: string;
}

export declare namespace Tiktok {
  export {
    type BatchFailure as BatchFailure,
    type Profile as Profile,
    type Transcript as Transcript,
    type TranscriptBatchSuccess as TranscriptBatchSuccess,
    type Video as Video,
    type VideoBatchSuccess as VideoBatchSuccess,
    type VideoResponse as VideoResponse,
    type TiktokGetMusicResponse as TiktokGetMusicResponse,
    type TiktokGetProfileResponse as TiktokGetProfileResponse,
    type TiktokGetVideoResponse as TiktokGetVideoResponse,
    type TiktokGetVideoCaptionsResponse as TiktokGetVideoCaptionsResponse,
    type TiktokGetVideoTranscriptResponse as TiktokGetVideoTranscriptResponse,
    type TiktokGetVideoTranscriptsResponse as TiktokGetVideoTranscriptsResponse,
    type TiktokGetVideosResponse as TiktokGetVideosResponse,
    type TiktokListCommentRepliesResponse as TiktokListCommentRepliesResponse,
    type TiktokListHashtagVideosResponse as TiktokListHashtagVideosResponse,
    type TiktokListMusicVideosResponse as TiktokListMusicVideosResponse,
    type TiktokListProfileVideosResponse as TiktokListProfileVideosResponse,
    type TiktokListVideoCommentsResponse as TiktokListVideoCommentsResponse,
    type TiktokSearchUsersResponse as TiktokSearchUsersResponse,
    type TiktokSearchVideosResponse as TiktokSearchVideosResponse,
    type TiktokGetMusicParams as TiktokGetMusicParams,
    type TiktokGetVideoParams as TiktokGetVideoParams,
    type TiktokGetVideoCaptionsParams as TiktokGetVideoCaptionsParams,
    type TiktokGetVideoTranscriptParams as TiktokGetVideoTranscriptParams,
    type TiktokGetVideoTranscriptsParams as TiktokGetVideoTranscriptsParams,
    type TiktokGetVideosParams as TiktokGetVideosParams,
    type TiktokListCommentRepliesParams as TiktokListCommentRepliesParams,
    type TiktokListHashtagVideosParams as TiktokListHashtagVideosParams,
    type TiktokListMusicVideosParams as TiktokListMusicVideosParams,
    type TiktokListProfileVideosParams as TiktokListProfileVideosParams,
    type TiktokListVideoCommentsParams as TiktokListVideoCommentsParams,
    type TiktokSearchUsersParams as TiktokSearchUsersParams,
    type TiktokSearchVideosParams as TiktokSearchVideosParams,
  };
}
