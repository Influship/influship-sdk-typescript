// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProfilesAPI from './profiles';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Match extends APIResource {
  /**
   * Evaluate how well creators align with campaign requirements using AI-powered
   * analysis.
   *
   * Provide creator references and campaign description to receive match scores
   * (0-100), AI decisions (good/neutral/avoid), explanations, and supporting
   * evidence.
   *
   * **Pricing**: 0.1 credits per creator analyzed
   */
  analyze(body: MatchAnalyzeParams, options?: RequestOptions): APIPromise<MatchAnalyzeResponse> {
    return this._client.post('/v1/match', { body, ...options });
  }
}

export interface CreatorReferenceByID {
  /**
   * Unique creator identifier
   */
  id: string;

  /**
   * Platform name (optional when using the ID)
   */
  platform?: 'instagram';
}

export interface MatchResult {
  creator?: MatchResult.Creator;

  /**
   * AI recommendation decision:
   *
   * - `good`: Strong fit for the campaign, recommended
   * - `neutral`: Acceptable fit, evaluate based on other factors
   * - `avoid`: Not recommended for this campaign
   */
  decision?: 'good' | 'neutral' | 'avoid';

  /**
   * Array of specific evidence supporting the match decision. Includes relevant
   * content examples and audience insights.
   */
  evidence?: Array<string>;

  /**
   * Human-readable explanation of the match assessment. Summarizes why this creator
   * fits or doesn't fit the campaign.
   */
  explanation?: string;

  /**
   * Match score from 0 to 100 indicating campaign fit.
   *
   * - 80-100: Excellent match
   * - 60-79: Good match
   * - 40-59: Moderate match
   * - 0-39: Poor match
   */
  match_score?: number;
}

export namespace MatchResult {
  export interface Creator {
    id?: string;

    platform?: 'instagram';

    username?: string;
  }
}

export interface MatchAnalyzeResponse {
  items?: Array<MatchResult>;
}

export interface MatchAnalyzeParams {
  /**
   * Creators to match against campaign. Max 100 creators per request.
   */
  creators: Array<CreatorReferenceByID | ProfilesAPI.CreatorReferenceByHandle>;

  search_intent: MatchAnalyzeParams.SearchIntent;
}

export namespace MatchAnalyzeParams {
  export interface SearchIntent {
    /**
     * Campaign search intent
     */
    query: string;

    /**
     * Additional context for matching
     */
    context?: string;
  }
}

export declare namespace Match {
  export {
    type CreatorReferenceByID as CreatorReferenceByID,
    type MatchResult as MatchResult,
    type MatchAnalyzeResponse as MatchAnalyzeResponse,
    type MatchAnalyzeParams as MatchAnalyzeParams,
  };
}
