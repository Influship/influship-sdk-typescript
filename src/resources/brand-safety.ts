// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PostsAPI from './posts';
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
  analysis: PostsAPI.BrandSafetyAnalysis;
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
    type BrandSafetyResult as BrandSafetyResult,
    type BrandSafetyAnalyzeCreatorsResponse as BrandSafetyAnalyzeCreatorsResponse,
    type BrandSafetyAnalyzePostsResponse as BrandSafetyAnalyzePostsResponse,
    type BrandSafetyAnalyzeProfilesResponse as BrandSafetyAnalyzeProfilesResponse,
    type BrandSafetyAnalyzeCreatorsParams as BrandSafetyAnalyzeCreatorsParams,
    type BrandSafetyAnalyzePostsParams as BrandSafetyAnalyzePostsParams,
    type BrandSafetyAnalyzeProfilesParams as BrandSafetyAnalyzeProfilesParams,
  };
}
