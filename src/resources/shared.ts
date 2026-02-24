// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
