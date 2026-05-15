// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Fetch fresh data directly from social platforms in real-time. Use when you need the most current information or data for profiles not yet in our database.
 */
export class Instagram extends APIResource {
  /**
   * Fetch fresh Instagram post-page data by shortcode. This raw endpoint includes
   * rich post-page fields like coauthors, tagged users, paid partnership metadata,
   * product mentions, music attribution, location, display resources, and video
   * versions.
   *
   * **Note:** These fields are only guaranteed on this raw single-post lookup for
   * now. Regular cached post-list endpoints may not include them yet.
   *
   * **Pricing**: 1 credit per post scraped ($0.01)
   *
   * @example
   * ```ts
   * const response = await client.raw.instagram.getPost(
   *   'C0ABC123xyz',
   * );
   * ```
   */
  getPost(shortcode: string, options?: RequestOptions): APIPromise<InstagramGetPostResponse> {
    return this._client.get(path`/v1/raw/instagram/post/${shortcode}`, options);
  }

  /**
   * Fetch fresh Instagram post-page data for a bounded list of shortcodes. This
   * returns one item per requested shortcode with per-item success or error details.
   *
   * **Note:** Batch post lookup is capped at 20 shortcodes per request and is
   * charged for every requested shortcode.
   *
   * **Pricing**: 1 credit per post scraped ($0.01)
   *
   * @example
   * ```ts
   * const response = await client.raw.instagram.getPosts({
   *   shortcodes: ['C0ABC123xyz', 'D1DEF456uvw'],
   * });
   * ```
   */
  getPosts(body: InstagramGetPostsParams, options?: RequestOptions): APIPromise<InstagramGetPostsResponse> {
    return this._client.post('/v1/raw/instagram/posts', { body, ...options });
  }

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
   *
   * @example
   * ```ts
   * const response = await client.raw.instagram.getProfile(
   *   'fitness_coach_jane',
   * );
   * ```
   */
  getProfile(
    username: string,
    query: InstagramGetProfileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstagramGetProfileResponse> {
    return this._client.get(path`/v1/raw/instagram/profile/${username}`, { query, ...options });
  }

  /**
   * Transcribe an Instagram video post by shortcode and return the raw post-page
   * data used for transcription. For now this raw endpoint retranscribes every
   * request and piggybacks the post plus transcript into our database when the owner
   * account exists.
   *
   * **Note:** Cached transcript reads are a planned follow-up; public pricing stays
   * the same for live and cached transcript delivery.
   *
   * **Pricing**: 5 credits per transcript ($0.05)
   *
   * @example
   * ```ts
   * const response = await client.raw.instagram.getTranscript(
   *   'C0ABC123xyz',
   * );
   * ```
   */
  getTranscript(
    shortcode: string,
    query: InstagramGetTranscriptParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstagramGetTranscriptResponse> {
    return this._client.get(path`/v1/raw/instagram/transcript/${shortcode}`, { query, ...options });
  }

  /**
   * Transcribe a bounded list of Instagram video posts by shortcode and return one
   * item per requested shortcode with per-item success or error details. Successful
   * items include the raw post-page data used for transcription.
   *
   * **Note:** Batch transcription is capped at 10 shortcodes per request,
   * retranscribes every request for now, and is charged for every requested
   * shortcode. Cached transcript reads are a planned follow-up; public pricing stays
   * the same for live and cached transcript delivery.
   *
   * **Pricing**: 5 credits per transcript ($0.05)
   *
   * @example
   * ```ts
   * const response = await client.raw.instagram.getTranscripts({
   *   shortcodes: ['C0ABC123xyz', 'D1DEF456uvw'],
   * });
   * ```
   */
  getTranscripts(
    body: InstagramGetTranscriptsParams,
    options?: RequestOptions,
  ): APIPromise<InstagramGetTranscriptsResponse> {
    return this._client.post('/v1/raw/instagram/transcripts', { body, ...options });
  }
}

export interface InstagramGetPostResponse {
  data: InstagramGetPostResponse.Data;
}

export namespace InstagramGetPostResponse {
  export interface Data {
    post: Data.Post;

    scraped_at: string;
  }

  export namespace Data {
    export interface Post {
      id: string;

      caption: string | null;

      comment_count: number;

      display_url: string;

      is_video: boolean;

      like_count: number;

      post_type: 'image' | 'video' | 'carousel';

      shortcode: string;

      taken_at: number | null;

      accessibility_caption?: string | null;

      carousel_items?: Array<Post.CarouselItem>;

      coauthor_usernames?: Array<string>;

      display_resources?: Array<Post.DisplayResource>;

      engagement_visibility?: Post.EngagementVisibility | null;

      is_paid_partnership?: boolean | null;

      is_pinned?: boolean | null;

      location?: Post.Location | null;

      music_attribution?: Post.MusicAttribution | null;

      owner_username?: string;

      product_mentions?: Array<Post.ProductMention>;

      sponsor_usernames?: Array<string>;

      tagged_usernames?: Array<string>;

      thumbnail_url?: string;

      video_url?: string;

      video_versions?: Array<Post.VideoVersion>;

      view_count?: number;
    }

    export namespace Post {
      export interface CarouselItem {
        display_url: string;

        index: number;

        is_video: boolean;

        thumbnail_url?: string;

        video_url?: string;
      }

      export interface DisplayResource {
        config_height: number;

        config_width: number;

        src: string;
      }

      export interface EngagementVisibility {
        comments_disabled?: boolean | null;

        like_and_view_counts_disabled?: boolean | null;

        viewer_can_reshare?: boolean | null;
      }

      export interface Location {
        id?: string | null;

        address_json?: unknown;

        has_public_page?: boolean | null;

        lat?: number | null;

        lng?: number | null;

        name?: string | null;

        slug?: string | null;
      }

      export interface MusicAttribution {
        artist_name?: string | null;

        audio_id?: string | null;

        should_mute_audio?: boolean | null;

        song_name?: string | null;

        uses_original_audio?: boolean | null;
      }

      export interface ProductMention {
        merchant_username?: string | null;

        product_id?: string | null;

        product_name?: string | null;
      }

      export interface VideoVersion {
        url: string;

        id?: string;

        height?: number;

        type?: number;

        width?: number;
      }
    }
  }
}

export interface InstagramGetPostsResponse {
  data: InstagramGetPostsResponse.Data;
}

export namespace InstagramGetPostsResponse {
  export interface Data {
    failed: number;

    items: Array<Data.InstagramPostBatchSuccessItem | Data.InstagramPostBatchErrorItem>;

    requested: number;

    scraped_at: string;

    succeeded: number;
  }

  export namespace Data {
    export interface InstagramPostBatchSuccessItem {
      data: InstagramPostBatchSuccessItem.Data;

      shortcode: string;

      success: true;
    }

    export namespace InstagramPostBatchSuccessItem {
      export interface Data {
        post: Data.Post;

        scraped_at: string;
      }

      export namespace Data {
        export interface Post {
          id: string;

          caption: string | null;

          comment_count: number;

          display_url: string;

          is_video: boolean;

          like_count: number;

          post_type: 'image' | 'video' | 'carousel';

          shortcode: string;

          taken_at: number | null;

          accessibility_caption?: string | null;

          carousel_items?: Array<Post.CarouselItem>;

          coauthor_usernames?: Array<string>;

          display_resources?: Array<Post.DisplayResource>;

          engagement_visibility?: Post.EngagementVisibility | null;

          is_paid_partnership?: boolean | null;

          is_pinned?: boolean | null;

          location?: Post.Location | null;

          music_attribution?: Post.MusicAttribution | null;

          owner_username?: string;

          product_mentions?: Array<Post.ProductMention>;

          sponsor_usernames?: Array<string>;

          tagged_usernames?: Array<string>;

          thumbnail_url?: string;

          video_url?: string;

          video_versions?: Array<Post.VideoVersion>;

          view_count?: number;
        }

        export namespace Post {
          export interface CarouselItem {
            display_url: string;

            index: number;

            is_video: boolean;

            thumbnail_url?: string;

            video_url?: string;
          }

          export interface DisplayResource {
            config_height: number;

            config_width: number;

            src: string;
          }

          export interface EngagementVisibility {
            comments_disabled?: boolean | null;

            like_and_view_counts_disabled?: boolean | null;

            viewer_can_reshare?: boolean | null;
          }

          export interface Location {
            id?: string | null;

            address_json?: unknown;

            has_public_page?: boolean | null;

            lat?: number | null;

            lng?: number | null;

            name?: string | null;

            slug?: string | null;
          }

          export interface MusicAttribution {
            artist_name?: string | null;

            audio_id?: string | null;

            should_mute_audio?: boolean | null;

            song_name?: string | null;

            uses_original_audio?: boolean | null;
          }

          export interface ProductMention {
            merchant_username?: string | null;

            product_id?: string | null;

            product_name?: string | null;
          }

          export interface VideoVersion {
            url: string;

            id?: string;

            height?: number;

            type?: number;

            width?: number;
          }
        }
      }
    }

    export interface InstagramPostBatchErrorItem {
      error: InstagramPostBatchErrorItem.Error;

      shortcode: string;

      status: number;

      success: false;
    }

    export namespace InstagramPostBatchErrorItem {
      export interface Error {
        error: 'not_found' | 'private' | 'rate_limited' | 'blocked' | 'invalid_input' | 'timeout' | 'unknown';

        message: string;

        retry_after?: number;

        username?: string;
      }
    }
  }
}

export interface InstagramGetProfileResponse {
  data: InstagramGetProfileResponse.Data;
}

export namespace InstagramGetProfileResponse {
  export interface Data {
    bio_links: Array<Data.BioLink>;

    biography: string;

    category_name: string | null;

    engagement_rate: number;

    external_url: string | null;

    follower_count: number;

    following_count: number;

    full_name: string;

    highlight_reel_count: number;

    is_business: boolean;

    is_private: boolean;

    is_professional: boolean;

    is_verified: boolean;

    media_count: number;

    posts: Array<Data.Post>;

    profile_pic_url: string;

    pronouns: Array<string>;

    related_profiles: Array<Data.RelatedProfile>;

    scraped_at: string;

    user_id: string;

    username: string;

    profile_pic_url_hd?: string;
  }

  export namespace Data {
    export interface BioLink {
      title: string;

      url: string;

      link_type?: string;
    }

    export interface Post {
      id: string;

      caption: string | null;

      comment_count: number;

      display_url: string;

      is_video: boolean;

      like_count: number;

      post_type: 'image' | 'video' | 'carousel';

      shortcode: string;

      taken_at: number | null;

      accessibility_caption?: string | null;

      carousel_items?: Array<Post.CarouselItem>;

      coauthor_usernames?: Array<string>;

      display_resources?: Array<Post.DisplayResource>;

      engagement_visibility?: Post.EngagementVisibility | null;

      is_paid_partnership?: boolean | null;

      is_pinned?: boolean | null;

      location?: Post.Location | null;

      music_attribution?: Post.MusicAttribution | null;

      owner_username?: string;

      product_mentions?: Array<Post.ProductMention>;

      sponsor_usernames?: Array<string>;

      tagged_usernames?: Array<string>;

      thumbnail_url?: string;

      video_url?: string;

      video_versions?: Array<Post.VideoVersion>;

      view_count?: number;
    }

    export namespace Post {
      export interface CarouselItem {
        display_url: string;

        index: number;

        is_video: boolean;

        thumbnail_url?: string;

        video_url?: string;
      }

      export interface DisplayResource {
        config_height: number;

        config_width: number;

        src: string;
      }

      export interface EngagementVisibility {
        comments_disabled?: boolean | null;

        like_and_view_counts_disabled?: boolean | null;

        viewer_can_reshare?: boolean | null;
      }

      export interface Location {
        id?: string | null;

        address_json?: unknown;

        has_public_page?: boolean | null;

        lat?: number | null;

        lng?: number | null;

        name?: string | null;

        slug?: string | null;
      }

      export interface MusicAttribution {
        artist_name?: string | null;

        audio_id?: string | null;

        should_mute_audio?: boolean | null;

        song_name?: string | null;

        uses_original_audio?: boolean | null;
      }

      export interface ProductMention {
        merchant_username?: string | null;

        product_id?: string | null;

        product_name?: string | null;
      }

      export interface VideoVersion {
        url: string;

        id?: string;

        height?: number;

        type?: number;

        width?: number;
      }
    }

    export interface RelatedProfile {
      full_name: string | null;

      is_private: boolean;

      is_verified: boolean;

      profile_pic_url: string | null;

      username: string;
    }
  }
}

export interface InstagramGetTranscriptResponse {
  data: InstagramGetTranscriptResponse.Data;
}

export namespace InstagramGetTranscriptResponse {
  export interface Data {
    full_text: string;

    language: string;

    post: Data.Post;

    scraped_at: string;

    shortcode: string;

    transcript: string;

    word_count: number;

    duration_seconds?: number;
  }

  export namespace Data {
    export interface Post {
      id: string;

      caption: string | null;

      comment_count: number;

      display_url: string;

      is_video: boolean;

      like_count: number;

      post_type: 'image' | 'video' | 'carousel';

      shortcode: string;

      taken_at: number | null;

      accessibility_caption?: string | null;

      carousel_items?: Array<Post.CarouselItem>;

      coauthor_usernames?: Array<string>;

      display_resources?: Array<Post.DisplayResource>;

      engagement_visibility?: Post.EngagementVisibility | null;

      is_paid_partnership?: boolean | null;

      is_pinned?: boolean | null;

      location?: Post.Location | null;

      music_attribution?: Post.MusicAttribution | null;

      owner_username?: string;

      product_mentions?: Array<Post.ProductMention>;

      sponsor_usernames?: Array<string>;

      tagged_usernames?: Array<string>;

      thumbnail_url?: string;

      video_url?: string;

      video_versions?: Array<Post.VideoVersion>;

      view_count?: number;
    }

    export namespace Post {
      export interface CarouselItem {
        display_url: string;

        index: number;

        is_video: boolean;

        thumbnail_url?: string;

        video_url?: string;
      }

      export interface DisplayResource {
        config_height: number;

        config_width: number;

        src: string;
      }

      export interface EngagementVisibility {
        comments_disabled?: boolean | null;

        like_and_view_counts_disabled?: boolean | null;

        viewer_can_reshare?: boolean | null;
      }

      export interface Location {
        id?: string | null;

        address_json?: unknown;

        has_public_page?: boolean | null;

        lat?: number | null;

        lng?: number | null;

        name?: string | null;

        slug?: string | null;
      }

      export interface MusicAttribution {
        artist_name?: string | null;

        audio_id?: string | null;

        should_mute_audio?: boolean | null;

        song_name?: string | null;

        uses_original_audio?: boolean | null;
      }

      export interface ProductMention {
        merchant_username?: string | null;

        product_id?: string | null;

        product_name?: string | null;
      }

      export interface VideoVersion {
        url: string;

        id?: string;

        height?: number;

        type?: number;

        width?: number;
      }
    }
  }
}

export interface InstagramGetTranscriptsResponse {
  data: InstagramGetTranscriptsResponse.Data;
}

export namespace InstagramGetTranscriptsResponse {
  export interface Data {
    failed: number;

    items: Array<Data.InstagramTranscriptBatchSuccessItem | Data.InstagramTranscriptBatchErrorItem>;

    requested: number;

    scraped_at: string;

    succeeded: number;
  }

  export namespace Data {
    export interface InstagramTranscriptBatchSuccessItem {
      data: InstagramTranscriptBatchSuccessItem.Data;

      shortcode: string;

      success: true;
    }

    export namespace InstagramTranscriptBatchSuccessItem {
      export interface Data {
        full_text: string;

        language: string;

        post: Data.Post;

        scraped_at: string;

        shortcode: string;

        transcript: string;

        word_count: number;

        duration_seconds?: number;
      }

      export namespace Data {
        export interface Post {
          id: string;

          caption: string | null;

          comment_count: number;

          display_url: string;

          is_video: boolean;

          like_count: number;

          post_type: 'image' | 'video' | 'carousel';

          shortcode: string;

          taken_at: number | null;

          accessibility_caption?: string | null;

          carousel_items?: Array<Post.CarouselItem>;

          coauthor_usernames?: Array<string>;

          display_resources?: Array<Post.DisplayResource>;

          engagement_visibility?: Post.EngagementVisibility | null;

          is_paid_partnership?: boolean | null;

          is_pinned?: boolean | null;

          location?: Post.Location | null;

          music_attribution?: Post.MusicAttribution | null;

          owner_username?: string;

          product_mentions?: Array<Post.ProductMention>;

          sponsor_usernames?: Array<string>;

          tagged_usernames?: Array<string>;

          thumbnail_url?: string;

          video_url?: string;

          video_versions?: Array<Post.VideoVersion>;

          view_count?: number;
        }

        export namespace Post {
          export interface CarouselItem {
            display_url: string;

            index: number;

            is_video: boolean;

            thumbnail_url?: string;

            video_url?: string;
          }

          export interface DisplayResource {
            config_height: number;

            config_width: number;

            src: string;
          }

          export interface EngagementVisibility {
            comments_disabled?: boolean | null;

            like_and_view_counts_disabled?: boolean | null;

            viewer_can_reshare?: boolean | null;
          }

          export interface Location {
            id?: string | null;

            address_json?: unknown;

            has_public_page?: boolean | null;

            lat?: number | null;

            lng?: number | null;

            name?: string | null;

            slug?: string | null;
          }

          export interface MusicAttribution {
            artist_name?: string | null;

            audio_id?: string | null;

            should_mute_audio?: boolean | null;

            song_name?: string | null;

            uses_original_audio?: boolean | null;
          }

          export interface ProductMention {
            merchant_username?: string | null;

            product_id?: string | null;

            product_name?: string | null;
          }

          export interface VideoVersion {
            url: string;

            id?: string;

            height?: number;

            type?: number;

            width?: number;
          }
        }
      }
    }

    export interface InstagramTranscriptBatchErrorItem {
      error: InstagramTranscriptBatchErrorItem.Error;

      shortcode: string;

      status: number;

      success: false;
    }

    export namespace InstagramTranscriptBatchErrorItem {
      export interface Error {
        error: 'not_found' | 'private' | 'rate_limited' | 'blocked' | 'invalid_input' | 'timeout' | 'unknown';

        message: string;

        retry_after?: number;

        username?: string;
      }
    }
  }
}

export interface InstagramGetPostsParams {
  /**
   * Instagram post shortcodes from /p/, /reel/, or /tv/ URLs
   */
  shortcodes: Array<string>;
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

export interface InstagramGetTranscriptParams {
  /**
   * Optional language code for transcription. Omit to auto-detect.
   */
  language?: string;
}

export interface InstagramGetTranscriptsParams {
  /**
   * Instagram video post shortcodes from /p/, /reel/, or /tv/ URLs
   */
  shortcodes: Array<string>;

  /**
   * Optional language code for transcription. Omit to auto-detect.
   */
  language?: string;
}

export declare namespace Instagram {
  export {
    type InstagramGetPostResponse as InstagramGetPostResponse,
    type InstagramGetPostsResponse as InstagramGetPostsResponse,
    type InstagramGetProfileResponse as InstagramGetProfileResponse,
    type InstagramGetTranscriptResponse as InstagramGetTranscriptResponse,
    type InstagramGetTranscriptsResponse as InstagramGetTranscriptsResponse,
    type InstagramGetPostsParams as InstagramGetPostsParams,
    type InstagramGetProfileParams as InstagramGetProfileParams,
    type InstagramGetTranscriptParams as InstagramGetTranscriptParams,
    type InstagramGetTranscriptsParams as InstagramGetTranscriptsParams,
  };
}
