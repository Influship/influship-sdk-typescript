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

      thumbnail_url?: string;

      video_url?: string;

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
