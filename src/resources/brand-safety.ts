// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BrandSafety extends APIResource {
  /**
   * Analyze creators for brand safety risks across all their content and profiles.
   * Reviews recent posts, bio content, and historical patterns to identify potential
   * issues.
   *
   * **Risk categories detected:**
   *
   * - Profanity and strong language
   * - Adult/sexual content
   * - Drugs, alcohol, and tobacco references
   * - Violence and weapons
   * - Hate speech and discrimination
   * - Political and controversial topics
   * - Misinformation and conspiracy content
   *
   * **Ratings:**
   *
   * - **A** - Brand safe, no significant concerns
   * - **B** - Caution advised, minor or occasional issues
   * - **C** - Avoid, significant brand safety risks
   *
   * **Pricing**: $0.10 per creator analyzed
   *
   * @example
   * ```ts
   * const response = await client.brandSafety.analyzeCreators({
   *   creators: [{}],
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
   * Analyze specific posts for brand safety risks. Useful for vetting individual
   * pieces of sponsored content before approval.
   *
   * **Pricing**: $0.02 per post analyzed
   *
   * @example
   * ```ts
   * const response = await client.brandSafety.analyzePosts({
   *   posts: [{}],
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
   * Analyze specific social media profiles for brand safety risks. Focuses on a
   * single platform's content rather than cross-platform analysis.
   *
   * **Pricing**: $0.08 per profile analyzed
   *
   * @example
   * ```ts
   * const response = await client.brandSafety.analyzeProfiles({
   *   profiles: [
   *     {
   *       platform: 'instagram',
   *       username: 'fitness_coach_jane',
   *     },
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

export interface BrandSafetyAnalyzeCreatorsResponse {
  data: Array<BrandSafetyAnalyzeCreatorsResponse.Data>;
}

export namespace BrandSafetyAnalyzeCreatorsResponse {
  export interface Data {
    /**
     * Analysis timestamp
     */
    analyzed_at: string;

    creator: Data.Creator;

    input: Data.Input;

    /**
     * Brand safety analysis result
     */
    safety: Data.Safety;
  }

  export namespace Data {
    export interface Creator {
      id: string;

      name: string;
    }

    export interface Input {
      creator_id?: string;

      /**
       * Social media platform
       */
      platform?: 'instagram';

      username?: string;
    }

    /**
     * Brand safety analysis result
     */
    export interface Safety {
      /**
       * Confidence in the rating
       */
      confidence: number;

      /**
       * List of brand safety flags
       */
      flags: Array<Safety.Flag>;

      /**
       * Brand safety rating (A=safe, B=caution, C=avoid)
       */
      rating: 'A' | 'B' | 'C';

      /**
       * Human-readable summary
       */
      summary: string;
    }

    export namespace Safety {
      /**
       * Individual brand safety flag
       */
      export interface Flag {
        /**
         * Confidence score (0-1)
         */
        confidence: number;

        /**
         * Description of the flag
         */
        description: string;

        /**
         * Severity of the brand safety flag
         */
        severity: 'low' | 'medium' | 'high';

        /**
         * Type of brand safety flag
         */
        type:
          | 'profanity'
          | 'adult_content'
          | 'drugs_alcohol'
          | 'violence'
          | 'hate_speech'
          | 'political'
          | 'misinformation'
          | 'adult_sexual_content'
          | 'profanity_strong_language'
          | 'drugs_alcohol_tobacco'
          | 'violence_weapons'
          | 'hate_discrimination'
          | 'political_social_issues'
          | 'misinformation_conspiracy'
          | 'misc';

        /**
         * Evidence supporting this flag
         */
        evidence?: Array<string>;

        /**
         * Example content that triggered this flag
         */
        examples?: Array<string>;
      }
    }
  }
}

export interface BrandSafetyAnalyzePostsResponse {
  data: Array<BrandSafetyAnalyzePostsResponse.Data>;
}

export namespace BrandSafetyAnalyzePostsResponse {
  export interface Data {
    /**
     * Analysis timestamp
     */
    analyzed_at: string;

    input: Data.Input;

    post: Data.Post;

    /**
     * Brand safety analysis result
     */
    safety: Data.Safety;
  }

  export namespace Data {
    export interface Input {
      /**
       * Social media platform
       */
      platform?: 'instagram';

      platform_id?: string;

      post_id?: string;

      url?: string;
    }

    export interface Post {
      id: string;

      /**
       * Social media platform
       */
      platform: 'instagram';

      url: string;
    }

    /**
     * Brand safety analysis result
     */
    export interface Safety {
      /**
       * Confidence in the rating
       */
      confidence: number;

      /**
       * List of brand safety flags
       */
      flags: Array<Safety.Flag>;

      /**
       * Brand safety rating (A=safe, B=caution, C=avoid)
       */
      rating: 'A' | 'B' | 'C';

      /**
       * Human-readable summary
       */
      summary: string;
    }

    export namespace Safety {
      /**
       * Individual brand safety flag
       */
      export interface Flag {
        /**
         * Confidence score (0-1)
         */
        confidence: number;

        /**
         * Description of the flag
         */
        description: string;

        /**
         * Severity of the brand safety flag
         */
        severity: 'low' | 'medium' | 'high';

        /**
         * Type of brand safety flag
         */
        type:
          | 'profanity'
          | 'adult_content'
          | 'drugs_alcohol'
          | 'violence'
          | 'hate_speech'
          | 'political'
          | 'misinformation'
          | 'adult_sexual_content'
          | 'profanity_strong_language'
          | 'drugs_alcohol_tobacco'
          | 'violence_weapons'
          | 'hate_discrimination'
          | 'political_social_issues'
          | 'misinformation_conspiracy'
          | 'misc';

        /**
         * Evidence supporting this flag
         */
        evidence?: Array<string>;

        /**
         * Example content that triggered this flag
         */
        examples?: Array<string>;
      }
    }
  }
}

export interface BrandSafetyAnalyzeProfilesResponse {
  data: Array<BrandSafetyAnalyzeProfilesResponse.Data>;
}

export namespace BrandSafetyAnalyzeProfilesResponse {
  export interface Data {
    /**
     * Analysis timestamp
     */
    analyzed_at: string;

    profile: Data.Profile;

    /**
     * Brand safety analysis result
     */
    safety: Data.Safety;
  }

  export namespace Data {
    export interface Profile {
      id: string;

      /**
       * Social media platform
       */
      platform: 'instagram';

      username: string;
    }

    /**
     * Brand safety analysis result
     */
    export interface Safety {
      /**
       * Confidence in the rating
       */
      confidence: number;

      /**
       * List of brand safety flags
       */
      flags: Array<Safety.Flag>;

      /**
       * Brand safety rating (A=safe, B=caution, C=avoid)
       */
      rating: 'A' | 'B' | 'C';

      /**
       * Human-readable summary
       */
      summary: string;
    }

    export namespace Safety {
      /**
       * Individual brand safety flag
       */
      export interface Flag {
        /**
         * Confidence score (0-1)
         */
        confidence: number;

        /**
         * Description of the flag
         */
        description: string;

        /**
         * Severity of the brand safety flag
         */
        severity: 'low' | 'medium' | 'high';

        /**
         * Type of brand safety flag
         */
        type:
          | 'profanity'
          | 'adult_content'
          | 'drugs_alcohol'
          | 'violence'
          | 'hate_speech'
          | 'political'
          | 'misinformation'
          | 'adult_sexual_content'
          | 'profanity_strong_language'
          | 'drugs_alcohol_tobacco'
          | 'violence_weapons'
          | 'hate_discrimination'
          | 'political_social_issues'
          | 'misinformation_conspiracy'
          | 'misc';

        /**
         * Evidence supporting this flag
         */
        evidence?: Array<string>;

        /**
         * Example content that triggered this flag
         */
        examples?: Array<string>;
      }
    }
  }
}

export interface BrandSafetyAnalyzeCreatorsParams {
  /**
   * Creators to analyze
   */
  creators: Array<BrandSafetyAnalyzeCreatorsParams.Creator>;
}

export namespace BrandSafetyAnalyzeCreatorsParams {
  export interface Creator {
    /**
     * Creator ID (use this OR platform+username)
     */
    creator_id?: string;

    /**
     * Platform (required with username)
     */
    platform?: 'instagram';

    /**
     * Username (required with platform)
     */
    username?: string;
  }
}

export interface BrandSafetyAnalyzePostsParams {
  /**
   * Posts to analyze
   */
  posts: Array<BrandSafetyAnalyzePostsParams.Post>;
}

export namespace BrandSafetyAnalyzePostsParams {
  export interface Post {
    /**
     * Platform (required with platform_id)
     */
    platform?: 'instagram';

    /**
     * Platform-specific post ID
     */
    platform_id?: string;

    /**
     * Internal post ID
     */
    post_id?: string;

    /**
     * Post URL
     */
    url?: string;
  }
}

export interface BrandSafetyAnalyzeProfilesParams {
  /**
   * Profiles to analyze
   */
  profiles: Array<BrandSafetyAnalyzeProfilesParams.Profile>;
}

export namespace BrandSafetyAnalyzeProfilesParams {
  export interface Profile {
    /**
     * Social media platform
     */
    platform: 'instagram';

    /**
     * Username
     */
    username: string;
  }
}

export declare namespace BrandSafety {
  export {
    type BrandSafetyAnalyzeCreatorsResponse as BrandSafetyAnalyzeCreatorsResponse,
    type BrandSafetyAnalyzePostsResponse as BrandSafetyAnalyzePostsResponse,
    type BrandSafetyAnalyzeProfilesResponse as BrandSafetyAnalyzeProfilesResponse,
    type BrandSafetyAnalyzeCreatorsParams as BrandSafetyAnalyzeCreatorsParams,
    type BrandSafetyAnalyzePostsParams as BrandSafetyAnalyzePostsParams,
    type BrandSafetyAnalyzeProfilesParams as BrandSafetyAnalyzeProfilesParams,
  };
}
