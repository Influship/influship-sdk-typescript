// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Posts extends APIResource {
  /**
   * Analyze a social media post for engagement metrics, content insights, and brand
   * safety.
   *
   * Provide post via URL or post_id+platform. Optionally include AI analysis and/or
   * brand safety features.
   *
   * **Pricing**:
   *
   * - Base: 1.0 credit per post
   * - AI Analysis feature: +0.5 credits (includes summary and transcript)
   * - Brand Safety feature: +0.5 credits (includes rating and risk flags)
   * - **Example**: 1 post with both features = 1.0 + 0.5 + 0.5 = 2.0 credits
   */
  analyze(body: PostAnalyzeParams, options?: RequestOptions): APIPromise<PostAnalysis> {
    return this._client.post('/v1/posts/analyze', { body, ...options });
  }

  /**
   * Retrieve posts for a specific creator using cursor-based pagination.
   *
   * This endpoint allows you to fetch posts from a creator's social media accounts
   * with optional analysis features and date filtering.
   *
   * **Pricing**:
   *
   * - Base: 0.01 credits per post returned
   * - The more posts you request, the more you pay
   * - Use the `limit` parameter to control costs
   * - **Example**: 25 posts = 0.25 credits
   * - **Example**: 100 posts = 1.0 credit
   */
  listByCreator(
    query: PostListByCreatorParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostListByCreatorResponse> {
    return this._client.get('/v1/posts/by-creator', { query, ...options });
  }
}

/**
 * Brand safety analysis results
 */
export interface BrandSafetyAnalysis {
  /**
   * Specific safety concerns detected. Empty array = no issues found.
   */
  flags: Array<BrandSafetyAnalysis.Flag>;

  metadata: BrandSafetyAnalysis.Metadata;

  /**
   * Confidence score (0-1) for the rating. >0.8 = high confidence.
   */
  overall_confidence: number;

  /**
   * Brand safety rating. A = safe (no risks), B = moderate concerns, C = significant
   * risks.
   */
  rating: 'A' | 'B' | 'C';

  /**
   * Detailed reasoning explaining the analysis result. Includes context about
   * content analyzed and decision factors.
   */
  reasoning: string;

  /**
   * Human-readable summary of the assessment.
   */
  summary: string;
}

export namespace BrandSafetyAnalysis {
  /**
   * Individual brand safety flag with detailed information
   */
  export interface Flag {
    /**
     * Confidence score for this specific flag (0-1). Higher values indicate greater
     * certainty about this concern.
     */
    confidence: number;

    /**
     * Human-readable description explaining the concern. Provides context about what
     * was detected.
     */
    description: string;

    /**
     * Severity level of the concern:
     *
     * - `low`: Minor issue, may be acceptable for some brands
     * - `medium`: Moderate concern, evaluate based on brand guidelines
     * - `high`: Significant risk, likely unsuitable for most brands
     */
    severity: 'low' | 'medium' | 'high';

    /**
     * Category of brand safety concern detected:
     *
     * - `adult_sexual_content`: Sexually explicit or suggestive content
     * - `profanity_strong_language`: Profanity or offensive language
     * - `drugs_alcohol_tobacco`: Drug, alcohol, or tobacco-related content
     * - `violence_weapons`: Violent content or weapon references
     * - `hate_discrimination`: Hate speech or discriminatory content
     * - `political_social_issues`: Politically divisive or controversial topics
     * - `misinformation_conspiracy`: Misinformation or conspiracy theories
     * - `misc`: Other brand safety concerns
     */
    type:
      | 'adult_sexual_content'
      | 'profanity_strong_language'
      | 'drugs_alcohol_tobacco'
      | 'violence_weapons'
      | 'hate_discrimination'
      | 'political_social_issues'
      | 'misinformation_conspiracy'
      | 'misc';

    /**
     * Specific examples or evidence that triggered this flag. May include post
     * excerpts or contextual information.
     */
    evidence?: Array<string>;
  }

  export interface Metadata {
    /**
     * When the analysis was performed
     */
    analysis_date: string;

    /**
     * Information about the content that was analyzed
     */
    content_analyzed: Metadata.ContentAnalyzed;

    /**
     * Version of the AI model used for analysis
     */
    model_version: string;

    /**
     * Processing time in milliseconds
     */
    processing_time_ms: number;
  }

  export namespace Metadata {
    /**
     * Information about the content that was analyzed
     */
    export interface ContentAnalyzed {
      /**
       * Number of media items analyzed
       */
      media_count?: number;

      /**
       * Length of text content analyzed
       */
      text_length?: number;
    }
  }
}

/**
 * Analysis result for a single social media post
 */
export interface PostAnalysis {
  /**
   * Internal post ID
   */
  id: string;

  /**
   * Creator information for a post
   */
  creator: PostAnalysis.Creator;

  /**
   * Whether this post contains video content. true for video posts and reels, false
   * for photo posts.
   */
  is_video: boolean;

  /**
   * URL of the primary media file (image or video). For carousel posts, this is the
   * first item.
   */
  media_url: string;

  /**
   * Social media platform
   */
  platform: 'instagram' | 'tiktok';

  /**
   * Platform-specific unique identifier for this post. Format varies by platform
   * (Instagram: numeric ID, TikTok: alphanumeric).
   */
  platform_post_id: string;

  /**
   * ISO 8601 timestamp when the post was originally published.
   */
  posted_at: string;

  /**
   * Alt text or accessibility caption describing the media. Useful for understanding
   * image content. null if unavailable.
   */
  accessibility_caption?: string | null;

  /**
   * AI-powered content analysis. Only present when `ai_analysis` feature is
   * requested.
   */
  ai_analysis?: PostAnalysis.AIAnalysis;

  /**
   * Brand safety analysis results
   */
  brand_safety?: BrandSafetyAnalysis;

  /**
   * Post caption text written by the creator. null if no caption was provided.
   */
  caption?: string | null;

  /**
   * Total comments on post. null if unavailable.
   */
  comment_count?: number | null;

  /**
   * Total likes on post. null if platform hides like counts or data unavailable.
   */
  likes_count?: number | null;

  /**
   * Array of all media URLs in this post. Contains multiple items for carousel
   * posts, single item for regular posts.
   */
  media_urls?: Array<string>;

  /**
   * ISO 8601 timestamp when we last scraped/updated this post's data. Metrics are
   * accurate as of this time.
   */
  scraped_at?: string;

  /**
   * Instagram shortcode used in post URLs (instagram.com/p/{shortcode}). Only
   * present for Instagram posts, null for other platforms.
   */
  shortcode?: string | null;

  /**
   * Thumbnail image URL for video posts. Only present when is_video is true, null
   * for photo posts.
   */
  thumbnail_url?: string | null;

  /**
   * Video length in seconds. null for photo posts.
   */
  video_duration_seconds?: number | null;

  /**
   * Video view count. null for photo posts or if unavailable.
   */
  video_view_count?: number | null;
}

export namespace PostAnalysis {
  /**
   * Creator information for a post
   */
  export interface Creator {
    /**
     * Creator UUID
     */
    id: string;

    /**
     * Social media platform
     */
    platform: 'instagram' | 'tiktok';

    /**
     * Social media username
     */
    username: string;
  }

  /**
   * AI-powered content analysis. Only present when `ai_analysis` feature is
   * requested.
   */
  export interface AIAnalysis {
    /**
     * AI-generated summary describing key themes, topics, and messaging.
     */
    summary: string;

    /**
     * Transcription of spoken words in video. null for photo posts or videos without
     * speech.
     */
    transcript?: string | null;
  }
}

/**
 * Response for getting posts by creator
 */
export interface PostListByCreatorResponse {
  /**
   * Cursor-based pagination metadata. Use this to navigate through paginated results
   * efficiently.
   */
  pagination: PostListByCreatorResponse.Pagination;

  /**
   * Array of posts
   */
  posts: Array<PostAnalysis>;
}

export namespace PostListByCreatorResponse {
  /**
   * Cursor-based pagination metadata. Use this to navigate through paginated results
   * efficiently.
   */
  export interface Pagination {
    /**
     * Indicates whether more results are available.
     *
     * - `true`: Additional pages exist, use the `cursor` to fetch them
     * - `false`: This is the last page of results
     */
    has_more: boolean;

    /**
     * Opaque base64-encoded cursor string for fetching the next page. Pass this value
     * as the `cursor` query parameter in your next request. null when `has_more` is
     * false (no more pages available). Do not attempt to decode or construct cursor
     * values manually.
     */
    cursor?: string | null;
  }
}

export interface PostAnalyzeParams {
  /**
   * Analysis features to include
   */
  features?: Array<'ai_analysis' | 'brand_safety'>;

  /**
   * Social media platform (required when using post_id)
   */
  platform?: 'instagram' | 'tiktok';

  /**
   * Platform-specific post ID
   */
  post_id?: string;

  /**
   * Public URL of the post to analyze
   */
  url?: string;
}

export interface PostListByCreatorParams {
  /**
   * Creator UUID
   */
  creator_id?: string;

  /**
   * Opaque pagination cursor from previous response. Do not construct manually.
   */
  cursor?: string;

  /**
   * Start date for filtering posts (ISO 8601)
   */
  date_from?: string;

  /**
   * End date for filtering posts (ISO 8601)
   */
  date_to?: string;

  /**
   * Optional analysis features. `ai_analysis` adds summary/transcript.
   * `brand_safety` adds rating/flags. Each feature has additional cost.
   */
  features?: Array<'ai_analysis' | 'brand_safety'>;

  /**
   * Number of posts per page. Min 1, max 100, default 25.
   */
  limit?: number;

  /**
   * Social media platform
   */
  platform?: 'instagram' | 'tiktok';

  /**
   * Social media username
   */
  username?: string;
}

export declare namespace Posts {
  export {
    type BrandSafetyAnalysis as BrandSafetyAnalysis,
    type PostAnalysis as PostAnalysis,
    type PostListByCreatorResponse as PostListByCreatorResponse,
    type PostAnalyzeParams as PostAnalyzeParams,
    type PostListByCreatorParams as PostListByCreatorParams,
  };
}
