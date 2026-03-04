// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Fetch fresh data directly from social platforms in real-time. Use when you need the most current information or data for profiles not yet in our database.
 */
export class Youtube extends APIResource {
  /**
   * Fetch fresh YouTube channel data including subscriber count, video count, and
   * total views.
   *
   * **Pricing**: 0.5 credits per channel scraped ($0.005)
   */
  getChannel(
    handle: string,
    query: YoutubeGetChannelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<YoutubeGetChannelResponse> {
    return this._client.get(path`/v1/raw/youtube/channel/${handle}`, { query, ...options });
  }

  /**
   * Fetch transcripts for multiple videos from a YouTube channel. Videos can be
   * sorted by popularity, newest, or oldest before selection.
   *
   * **Features:**
   *
   * - Fetches up to 20 video transcripts per request
   * - Sort by popular (most views), newest, or oldest
   * - Partial success — individual video failures don't block the response
   * - Optional timestamped segments for each transcript
   *
   * **Pricing**: 0.5 credits per transcript fetched ($0.005)
   */
  getChannelTranscripts(
    handle: string,
    query: YoutubeGetChannelTranscriptsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<YoutubeGetChannelTranscriptsResponse> {
    return this._client.get(path`/v1/raw/youtube/channel-transcripts/${handle}`, { query, ...options });
  }

  /**
   * Fetch YouTube video transcript/captions. Returns timestamped segments and full
   * text. Useful for content analysis.
   *
   * **Supported sources:**
   *
   * - Manual captions (highest quality)
   * - Auto-generated captions
   * - Multiple language tracks
   *
   * **Pricing**: 0.5 credits per transcript ($0.005)
   */
  getTranscript(
    videoID: string,
    query: YoutubeGetTranscriptParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<YoutubeGetTranscriptResponse> {
    return this._client.get(path`/v1/raw/youtube/transcript/${videoID}`, { query, ...options });
  }

  /**
   * Search YouTube videos and channels.
   *
   * **Pricing**: 0.5 credits per result returned ($0.005)
   */
  search(query: YoutubeSearchParams, options?: RequestOptions): APIPromise<YoutubeSearchResponse> {
    return this._client.get('/v1/raw/youtube/search', { query, ...options });
  }
}

export interface YoutubeGetChannelResponse {
  data: YoutubeGetChannelResponse.Data;
}

export namespace YoutubeGetChannelResponse {
  export interface Data {
    /**
     * Channel avatar URL
     */
    avatar_url: string | null;

    /**
     * Channel description
     */
    description: string | null;

    /**
     * Channel handle
     */
    handle: string;

    /**
     * Channel name
     */
    name: string;

    /**
     * When this data was scraped
     */
    scraped_at: string;

    /**
     * Subscriber count
     */
    subscribers: number;

    /**
     * Total video count
     */
    videos_count: number;

    /**
     * Total view count
     */
    views_total: number;

    /**
     * Recent videos (only included when include_videos=true)
     */
    videos?: Array<Data.Video>;
  }

  export namespace Data {
    export interface Video {
      /**
       * Video ID
       */
      id: string;

      /**
       * Comment count
       */
      comments: number | null;

      /**
       * Video duration in seconds
       */
      duration_seconds: number | null;

      /**
       * Like count
       */
      likes: number | null;

      /**
       * Publish timestamp
       */
      published_at: string;

      /**
       * Thumbnail URL
       */
      thumbnail_url: string | null;

      /**
       * Video title
       */
      title: string;

      /**
       * Video URL
       */
      url: string;

      /**
       * View count
       */
      views: number | null;
    }
  }
}

export interface YoutubeGetChannelTranscriptsResponse {
  data: YoutubeGetChannelTranscriptsResponse.Data;
}

export namespace YoutubeGetChannelTranscriptsResponse {
  export interface Data {
    /**
     * YouTube channel ID
     */
    channel_id: string;

    /**
     * Channel name
     */
    channel_name: string;

    /**
     * Channel handle
     */
    handle: string;

    /**
     * Per-video transcript results
     */
    items: Array<Data.Item>;

    /**
     * When this data was scraped
     */
    scraped_at: string;

    /**
     * Number of transcripts that failed to fetch
     */
    transcripts_failed: number;

    /**
     * Number of transcripts successfully fetched
     */
    transcripts_fetched: number;

    /**
     * Total videos found on channel
     */
    videos_found: number;
  }

  export namespace Data {
    export interface Item {
      /**
       * Error message if transcript fetch failed for this video
       */
      error: string | null;

      /**
       * Full transcript as plain text
       */
      full_text: string | null;

      /**
       * Transcript language code
       */
      language: string | null;

      /**
       * Relative publish time
       */
      published_text: string | null;

      /**
       * Caption source type
       */
      source: 'manual' | 'auto_generated' | null;

      /**
       * Video title
       */
      title: string;

      /**
       * Timestamped segments (only if include_segments=true)
       */
      transcript: Array<Item.Transcript> | null;

      /**
       * Video URL
       */
      url: string;

      /**
       * YouTube video ID
       */
      video_id: string;

      /**
       * View count
       */
      view_count: number | null;

      /**
       * Word count of transcript
       */
      word_count: number | null;
    }

    export namespace Item {
      export interface Transcript {
        /**
         * Duration in seconds
         */
        duration: number;

        /**
         * Start time in seconds
         */
        start: number;

        /**
         * Segment text
         */
        text: string;
      }
    }
  }
}

export interface YoutubeGetTranscriptResponse {
  data: YoutubeGetTranscriptResponse.Data;
}

export namespace YoutubeGetTranscriptResponse {
  export interface Data {
    /**
     * Available transcript languages
     */
    available_languages: Array<string>;

    /**
     * Full transcript as plain text
     */
    full_text: string;

    /**
     * Transcript language code
     */
    language: string;

    /**
     * Video title
     */
    title: string;

    /**
     * Transcript segments
     */
    transcript: Array<Data.Transcript>;

    /**
     * Video URL
     */
    url: string;

    /**
     * Video ID
     */
    video_id: string;

    /**
     * Total word count
     */
    word_count: number;
  }

  export namespace Data {
    export interface Transcript {
      /**
       * Duration in seconds
       */
      duration: number;

      /**
       * Start time in seconds
       */
      start: number;

      /**
       * Segment text
       */
      text: string;
    }
  }
}

export interface YoutubeSearchResponse {
  data: YoutubeSearchResponse.Data;
}

export namespace YoutubeSearchResponse {
  export interface Data {
    /**
     * Estimated total results count
     */
    estimated_results: number | null;

    /**
     * The search query
     */
    query: string;

    /**
     * Search results (videos and channels)
     */
    results: Array<Data.YouTubeSearchVideoResult | Data.YouTubeSearchChannelResult>;

    /**
     * When this search was performed
     */
    scraped_at: string;
  }

  export namespace Data {
    export interface YouTubeSearchVideoResult {
      /**
       * Channel handle (e.g., @username)
       */
      channel_handle: string | null;

      /**
       * Channel ID
       */
      channel_id: string;

      /**
       * Channel name
       */
      channel_name: string;

      /**
       * Whether channel is verified
       */
      channel_verified: boolean;

      /**
       * Video description snippet
       */
      description: string | null;

      /**
       * Video duration in seconds
       */
      duration_seconds: number | null;

      /**
       * Video duration text (e.g., "12:34")
       */
      duration_text: string | null;

      /**
       * Approximate publish timestamp
       */
      published_at: string | null;

      /**
       * Relative publish time (e.g., "2 days ago")
       */
      published_text: string | null;

      /**
       * Video thumbnail URL
       */
      thumbnail_url: string | null;

      /**
       * Video title
       */
      title: string;

      type: 'video';

      /**
       * Full YouTube video URL
       */
      url: string;

      /**
       * YouTube video ID
       */
      video_id: string;

      /**
       * Number of views
       */
      view_count: number | null;

      /**
       * View count text (e.g., "1.2M views")
       */
      view_count_text: string | null;
    }

    export interface YouTubeSearchChannelResult {
      /**
       * Channel handle (e.g., @username)
       */
      channel_handle: string | null;

      /**
       * Channel ID
       */
      channel_id: string;

      /**
       * Channel name
       */
      channel_name: string;

      /**
       * Whether channel is verified
       */
      channel_verified: boolean;

      /**
       * Channel description snippet
       */
      description: string | null;

      /**
       * Subscriber count
       */
      subscriber_count: number | null;

      /**
       * Channel avatar URL
       */
      thumbnail_url: string | null;

      type: 'channel';

      /**
       * Full YouTube channel URL
       */
      url: string;

      /**
       * Number of videos on the channel
       */
      video_count: number | null;
    }
  }
}

export interface YoutubeGetChannelParams {
  /**
   * Include recent videos in response
   */
  include_videos?: boolean;

  /**
   * Number of videos to include
   */
  video_limit?: number;
}

export interface YoutubeGetChannelTranscriptsParams {
  /**
   * Include timestamped transcript segments in response
   */
  include_segments?: boolean;

  /**
   * Language code for transcripts
   */
  language?: string;

  /**
   * How to sort channel videos before selecting
   */
  sort_by?: 'popular' | 'newest' | 'oldest';

  /**
   * Number of videos to fetch transcripts for (max 20)
   */
  video_limit?: number;
}

export interface YoutubeGetTranscriptParams {
  /**
   * Language code or "auto" for automatic detection
   */
  language?: string;
}

export interface YoutubeSearchParams {
  /**
   * Search query
   */
  q: string;

  /**
   * Country code for localized results (ISO 3166-1 alpha-2)
   */
  country_code?: string;

  /**
   * Language code for results
   */
  language_code?: string;

  /**
   * Maximum number of results to return
   */
  limit?: number;
}

export declare namespace Youtube {
  export {
    type YoutubeGetChannelResponse as YoutubeGetChannelResponse,
    type YoutubeGetChannelTranscriptsResponse as YoutubeGetChannelTranscriptsResponse,
    type YoutubeGetTranscriptResponse as YoutubeGetTranscriptResponse,
    type YoutubeSearchResponse as YoutubeSearchResponse,
    type YoutubeGetChannelParams as YoutubeGetChannelParams,
    type YoutubeGetChannelTranscriptsParams as YoutubeGetChannelTranscriptsParams,
    type YoutubeGetTranscriptParams as YoutubeGetTranscriptParams,
    type YoutubeSearchParams as YoutubeSearchParams,
  };
}
