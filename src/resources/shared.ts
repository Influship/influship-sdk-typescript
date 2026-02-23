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
   * Engagement rate as percentage
   */
  engagement_rate: number;

  /**
   * Follower count
   */
  followers: number;

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
