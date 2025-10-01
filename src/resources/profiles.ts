// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CreatorsAPI from './creators';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Profiles extends APIResource {
  /**
   * **DISCOVERY ENDPOINT**: Look up social account data when you know a username and
   * platform.
   *
   * **🎯 When to use this endpoint:**
   *
   * - ✅ You have a username and platform (e.g., @fitness_guru on Instagram)
   * - ✅ You want to discover who a social account belongs to
   * - ✅ You need to look up specific social accounts by username
   * - ✅ You want to get social account metrics for known usernames
   *
   * **❌ When NOT to use this endpoint:**
   *
   * - ❌ You already have a creator UUID (use `/v1/creators/{id}/profiles` instead)
   * - ❌ You want to get all accounts for a creator (use
   *   `/v1/creators/{id}/profiles` instead)
   *
   * **📊 Response Format:** Returns `SocialAccountLite` or `SocialAccountDetailed`
   * objects with identical structure to `/v1/creators/{id}/profiles`. Both endpoints
   * return the same data structure for consistency.
   *
   * **🔗 Data Relationships:**
   *
   * - Use the `creator_profile_id` field to fetch creator-level data via
   *   `/v1/creators`
   * - Use the `creator_profile_id` to get all social accounts via
   *   `/v1/creators/{id}/profiles`
   * - Creator-level data includes: name, bio, avatar, ai_one_line_bio
   * - Social account data includes: follower_count, engagement_rate, verified,
   *   platform-specific metrics
   *
   * **🔄 Typical Workflow:**
   *
   * 1. **Discovery**: Call `/v1/profiles` with username+platform → get social
   *    account data + creator_profile_id
   * 2. **Creator Data**: Call `/v1/creators` with creator_profile_id → get
   *    creator-level data
   * 3. **All Accounts**: Call `/v1/creators/{id}/profiles` with creator_profile_id →
   *    get all social accounts for that creator
   *
   * **⚙️ Parameters:**
   *
   * - `mode`: `lite` (default) or `detailed` - controls response detail level
   * - `platforms`: Array of platform names to filter results (e.g.,
   *   `["instagram", "tiktok"]`) **Pricing**: 0.01-0.05 credits per profile
   *   (lite/detailed mode)
   *
   * @example
   * ```ts
   * const profile = await client.profiles.create({
   *   profiles: [
   *     { platform: 'instagram', username: 'fitness_guru' },
   *     { platform: 'tiktok', username: 'fitness_guru' },
   *   ],
   * });
   * ```
   */
  create(body: ProfileCreateParams, options?: RequestOptions): APIPromise<ProfileCreateResponse> {
    return this._client.post('/v1/profiles', { body, ...options });
  }
}

export interface CreatorReferenceByHandle {
  /**
   * Social platform where the creator exists
   */
  platform: 'instagram' | 'tiktok';

  /**
   * Username on the platform
   */
  username: string;
}

export interface ProfileCreateResponse {
  /**
   * Array of social account objects. The structure depends on the `mode` parameter:
   *
   * - If `mode: "lite"`: Returns SocialAccountLite objects
   * - If `mode: "detailed"`: Returns SocialAccountDetailed objects with additional
   *   fields
   */
  profiles?: Array<CreatorsAPI.SocialAccountLite | CreatorsAPI.SocialAccountDetailed>;
}

export interface ProfileCreateParams {
  profiles: Array<CreatorReferenceByHandle>;

  /**
   * Response detail level - lite for basic fields, detailed for additional metrics
   */
  mode?: 'lite' | 'detailed';

  /**
   * Filter results to only include these platforms
   */
  platforms?: Array<'instagram' | 'tiktok'>;
}

export declare namespace Profiles {
  export {
    type CreatorReferenceByHandle as CreatorReferenceByHandle,
    type ProfileCreateResponse as ProfileCreateResponse,
    type ProfileCreateParams as ProfileCreateParams,
  };
}
