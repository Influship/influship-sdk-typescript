// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProfilesAPI from './profiles';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BrandSafety extends APIResource {
  /**
   * Analyze creators for brand safety risks using AI-powered content analysis.
   *
   * This endpoint evaluates creators for potential brand safety issues including
   * controversial content, inappropriate associations, and reputation risks.
   *
   * **Pricing**: 2.0 credits per creator analyzed
   *
   * @example
   * ```ts
   * const response = await client.brandSafety.analyzeCreators({
   *   creator_ids: [
   *     '123e4567-e89b-12d3-a456-426614174000',
   *     '987fcdeb-51a2-43d1-9f12-345678901234',
   *   ],
   * });
   * ```
   */
  analyzeCreators(
    body: BrandSafetyAnalyzeCreatorsParams,
    options?: RequestOptions,
  ): APIPromise<BrandSafetyAnalyzeCreatorsResponse> {
    return this._client.post('/v1/brand-safety/creators', { body, ...options });
  }

  /**
   * Analyze individual posts for brand safety risks.
   *
   * This endpoint evaluates specific posts for potential brand safety issues.
   *
   * **Pricing**: 0.5 credits per post analyzed
   *
   * @example
   * ```ts
   * const response = await client.brandSafety.analyzePosts({
   *   posts: [
   *     {
   *       platform: 'instagram',
   *       url: 'https://www.instagram.com/p/Cx123Sample/',
   *     },
   *     {
   *       platform: 'instagram',
   *       post_id: '9876543210987654321',
   *     },
   *   ],
   * });
   * ```
   */
  analyzePosts(
    body: BrandSafetyAnalyzePostsParams,
    options?: RequestOptions,
  ): APIPromise<BrandSafetyAnalyzePostsResponse> {
    return this._client.post('/v1/brand-safety/posts', { body, ...options });
  }

  /**
   * Analyze social media profiles for brand safety risks.
   *
   * This endpoint evaluates profiles by username for potential brand safety issues.
   *
   * **Pricing**: 2.0 credits per profile analyzed
   *
   * @example
   * ```ts
   * const response = await client.brandSafety.analyzeProfiles({
   *   profiles: [
   *     { platform: 'instagram', username: 'wellnessdaily' },
   *   ],
   * });
   * ```
   */
  analyzeProfiles(
    body: BrandSafetyAnalyzeProfilesParams,
    options?: RequestOptions,
  ): APIPromise<BrandSafetyAnalyzeProfilesResponse> {
    return this._client.post('/v1/brand-safety/profiles', { body, ...options });
  }
}

/**
 * Brand safety analysis results
 */
export interface BrandSafetyAnalysis {
  /**
   * Specific safety concerns detected. Empty array = no issues found.
   */
  flags: Array<BrandSafetyFlag>;

  metadata: BrandSafetyAnalysis.Metadata;

  /**
   * Whether the analysis completed successfully
   */
  ok: boolean;

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
       * Number of posts analyzed (for profile/creator analysis)
       */
      posts_count?: number;

      /**
       * Length of text content analyzed
       */
      text_length?: number;
    }
  }
}

/**
 * Individual brand safety flag with detailed information
 */
export interface BrandSafetyFlag {
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

/**
 * Result of brand safety analysis
 */
export interface BrandSafetyResult {
  /**
   * Unique identifier for the analysis result
   */
  id: string;

  /**
   * Brand safety analysis results
   */
  analysis: BrandSafetyAnalysis;
}

export interface BrandSafetyAnalyzeCreatorsResponse {
  results?: Array<BrandSafetyResult>;
}

export interface BrandSafetyAnalyzePostsResponse {
  results?: Array<BrandSafetyResult>;
}

export interface BrandSafetyAnalyzeProfilesResponse {
  results?: Array<BrandSafetyResult>;
}

export interface BrandSafetyAnalyzeCreatorsParams {
  /**
   * Creator IDs to analyze
   */
  creator_ids: Array<string>;
}

export interface BrandSafetyAnalyzePostsParams {
  posts: Array<
    BrandSafetyAnalyzePostsParams.BrandSafetyPostByURL | BrandSafetyAnalyzePostsParams.BrandSafetyPostByID
  >;
}

export namespace BrandSafetyAnalyzePostsParams {
  export interface BrandSafetyPostByURL {
    /**
     * Social media platform hosting the post
     */
    platform: 'instagram';

    /**
     * URL of the post to scan
     */
    url: string;
  }

  export interface BrandSafetyPostByID {
    /**
     * Social media platform hosting the post
     */
    platform: 'instagram';

    /**
     * Platform-specific post identifier
     */
    post_id: string;
  }
}

export interface BrandSafetyAnalyzeProfilesParams {
  profiles: Array<ProfilesAPI.CreatorReferenceByHandle>;
}

export declare namespace BrandSafety {
  export {
    type BrandSafetyAnalysis as BrandSafetyAnalysis,
    type BrandSafetyFlag as BrandSafetyFlag,
    type BrandSafetyResult as BrandSafetyResult,
    type BrandSafetyAnalyzeCreatorsResponse as BrandSafetyAnalyzeCreatorsResponse,
    type BrandSafetyAnalyzePostsResponse as BrandSafetyAnalyzePostsResponse,
    type BrandSafetyAnalyzeProfilesResponse as BrandSafetyAnalyzeProfilesResponse,
    type BrandSafetyAnalyzeCreatorsParams as BrandSafetyAnalyzeCreatorsParams,
    type BrandSafetyAnalyzePostsParams as BrandSafetyAnalyzePostsParams,
    type BrandSafetyAnalyzeProfilesParams as BrandSafetyAnalyzeProfilesParams,
  };
}
