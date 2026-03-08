// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Basic creator information
 */
export interface CreatorBasic {
  /**
   * Creator unique identifier
   */
  id: string;

  /**
   * Avatar URL
   */
  avatar_url: string | null;

  /**
   * Creator bio
   */
  bio: string | null;

  /**
   * Creator display name
   */
  name: string;
}

/**
 * Abbreviated profile information
 */
export interface ProfileSummary {
  /**
   * Profile unique identifier
   */
  id: string;

  /**
   * Engagement rate as a percentage, null if unknown (e.g. 3.5 means 3.5%)
   */
  engagement_rate: number | null;

  /**
   * Follower count (null if unknown)
   */
  followers: number | null;

  /**
   * Whether the account is verified
   */
  is_verified: boolean;

  /**
   * Social media platform
   */
  platform: 'instagram';

  /**
   * Profile URL
   */
  url: string;

  /**
   * Profile username
   */
  username: string;
}
