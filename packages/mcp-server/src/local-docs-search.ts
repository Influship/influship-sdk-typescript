// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'check',
    endpoint: '/health',
    httpMethod: 'get',
    summary: 'Health Check',
    description: 'Check API health status. No authentication required.',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    response: '{ ok: boolean; timestamp: string; }',
    markdown:
      "## check\n\n`client.health.check(): { ok: boolean; timestamp: string; }`\n\n**get** `/health`\n\nCheck API health status. No authentication required.\n\n### Returns\n\n- `{ ok: boolean; timestamp: string; }`\n  Health check response\n\n  - `ok: boolean`\n  - `timestamp: string`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst response = await client.health.check();\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/creators/{id}',
    httpMethod: 'get',
    summary: 'Get Creator by ID',
    description:
      "Retrieve a creator's profile including AI-generated summary, content themes, and optionally their linked social profiles.\n\n**What is a Creator?**\nA creator is a cross-platform entity representing a person or brand. They may have profiles on multiple social networks (Instagram, YouTube, TikTok, etc.) that are linked together.\n\n**Include options:**\n- `profiles`: Include all linked social profiles with metrics\n\n**Pricing**: 0.1 credits per request ($0.001)",
    stainlessPath: '(resource) creators > (method) retrieve',
    qualified: 'client.creators.retrieve',
    params: ['id: string;', "include: 'profiles'[];"],
    response:
      '{ data: { id: string; ai_summary: string; avatar_url: string; bio: string; content_themes: string[]; name: string; profiles?: object[]; }; warning?: string; }',
    markdown:
      "## retrieve\n\n`client.creators.retrieve(id: string, include: 'profiles'[]): { data: object; warning?: string; }`\n\n**get** `/v1/creators/{id}`\n\nRetrieve a creator's profile including AI-generated summary, content themes, and optionally their linked social profiles.\n\n**What is a Creator?**\nA creator is a cross-platform entity representing a person or brand. They may have profiles on multiple social networks (Instagram, YouTube, TikTok, etc.) that are linked together.\n\n**Include options:**\n- `profiles`: Include all linked social profiles with metrics\n\n**Pricing**: 0.1 credits per request ($0.001)\n\n### Parameters\n\n- `id: string`\n  Creator unique identifier\n\n- `include: 'profiles'[]`\n  Additional data to include in response\n\n### Returns\n\n- `{ data: { id: string; ai_summary: string; avatar_url: string; bio: string; content_themes: string[]; name: string; profiles?: object[]; }; warning?: string; }`\n\n  - `data: { id: string; ai_summary: string; avatar_url: string; bio: string; content_themes: string[]; name: string; profiles?: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }[]; }`\n  - `warning?: string`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst creator = await client.creators.retrieve('123e4567-e89b-12d3-a456-426614174000', { include: ['profiles'] });\n\nconsole.log(creator);\n```",
  },
  {
    name: 'autocomplete',
    endpoint: '/v1/creators/autocomplete',
    httpMethod: 'get',
    summary: 'Autocomplete Search',
    description:
      'Fast typeahead search for creators by name or username. Optimized for search-as-you-type UIs with sub-100ms response times.\n\n**Matching behavior:**\n- Matches against creator name, username, and display name\n- Results include which field matched and the matching value\n- Prefix matching (e.g., "fit" matches "fitness_coach")\n\n**Scope options:**\n- `creator_only`: Return only the creator entity\n- `matched_platforms`: Return only profiles that matched the query\n- `all_platforms`: Return all linked profiles (default)\n\n**Pricing**: 0.05 credits per request ($0.0005)',
    stainlessPath: '(resource) creators > (method) autocomplete',
    qualified: 'client.creators.autocomplete',
    params: [
      'q: string;',
      'limit?: number;',
      "platform?: 'instagram';",
      "scope?: 'creator_only' | 'matched_platforms' | 'all_platforms';",
    ],
    response:
      "{ data: { id: string; avatar: string; name: string; platforms: { display_name: string; match_field: string; match_type: 'name' | 'username' | 'display_name'; platform: 'instagram'; username: string; }[]; }[]; }",
    markdown:
      "## autocomplete\n\n`client.creators.autocomplete(q: string, limit?: number, platform?: 'instagram', scope?: 'creator_only' | 'matched_platforms' | 'all_platforms'): { data: object[]; }`\n\n**get** `/v1/creators/autocomplete`\n\nFast typeahead search for creators by name or username. Optimized for search-as-you-type UIs with sub-100ms response times.\n\n**Matching behavior:**\n- Matches against creator name, username, and display name\n- Results include which field matched and the matching value\n- Prefix matching (e.g., \"fit\" matches \"fitness_coach\")\n\n**Scope options:**\n- `creator_only`: Return only the creator entity\n- `matched_platforms`: Return only profiles that matched the query\n- `all_platforms`: Return all linked profiles (default)\n\n**Pricing**: 0.05 credits per request ($0.0005)\n\n### Parameters\n\n- `q: string`\n  Search query (min 2 characters)\n\n- `limit?: number`\n  Maximum results to return\n\n- `platform?: 'instagram'`\n  Filter by platform\n\n- `scope?: 'creator_only' | 'matched_platforms' | 'all_platforms'`\n  Which platforms to include in results\n\n### Returns\n\n- `{ data: { id: string; avatar: string; name: string; platforms: { display_name: string; match_field: string; match_type: 'name' | 'username' | 'display_name'; platform: 'instagram'; username: string; }[]; }[]; }`\n\n  - `data: { id: string; avatar: string; name: string; platforms: { display_name: string; match_field: string; match_type: 'name' | 'username' | 'display_name'; platform: 'instagram'; username: string; }[]; }[]`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst response = await client.creators.autocomplete({ q: 'fitness' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'lookalike',
    endpoint: '/v1/creators/lookalike',
    httpMethod: 'post',
    summary: 'Find Similar Creators',
    description:
      'Find creators similar to provided seed creators using AI-powered similarity matching. Analyzes content themes, audience overlap, posting style, and engagement patterns.\n\n**Use cases:**\n- Expand campaigns with creators similar to proven performers\n- Find alternatives when preferred creators are unavailable\n- Discover emerging creators in the same niche\n\n**How it works:**\n1. Provide 1-10 seed creators (by ID or platform/username)\n2. Optionally weight seeds to prioritize certain creators\n3. Get ranked results with similarity scores and shared traits\n\n**Pricing**: 1.5 credits per creator returned ($0.015)',
    stainlessPath: '(resource) creators > (method) lookalike',
    qualified: 'client.creators.lookalike',
    params: [
      "seeds: { creator_id?: string; platform?: 'instagram'; username?: string; weight?: number; }[];",
      'cursor?: string;',
      'filters?: { engagement_rate?: { max?: number; min?: number; }; followers?: { max?: number; min?: number; }; verified?: boolean; };',
      'limit?: number;',
    ],
    response:
      "{ creator: { id: string; avatar_url: string; bio: string; name: string; }; primary_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }; similarity: { score: number; shared_traits: string[]; }; }",
    markdown:
      "## lookalike\n\n`client.creators.lookalike(seeds: { creator_id?: string; platform?: 'instagram'; username?: string; weight?: number; }[], cursor?: string, filters?: { engagement_rate?: { max?: number; min?: number; }; followers?: { max?: number; min?: number; }; verified?: boolean; }, limit?: number): { creator: creator_basic; primary_profile: profile_summary; similarity: object; }`\n\n**post** `/v1/creators/lookalike`\n\nFind creators similar to provided seed creators using AI-powered similarity matching. Analyzes content themes, audience overlap, posting style, and engagement patterns.\n\n**Use cases:**\n- Expand campaigns with creators similar to proven performers\n- Find alternatives when preferred creators are unavailable\n- Discover emerging creators in the same niche\n\n**How it works:**\n1. Provide 1-10 seed creators (by ID or platform/username)\n2. Optionally weight seeds to prioritize certain creators\n3. Get ranked results with similarity scores and shared traits\n\n**Pricing**: 1.5 credits per creator returned ($0.015)\n\n### Parameters\n\n- `seeds: { creator_id?: string; platform?: 'instagram'; username?: string; weight?: number; }[]`\n  Seed creators to find similar creators for\n\n- `cursor?: string`\n  Pagination cursor for next page\n\n- `filters?: { engagement_rate?: { max?: number; min?: number; }; followers?: { max?: number; min?: number; }; verified?: boolean; }`\n  Additional filters\n  - `engagement_rate?: { max?: number; min?: number; }`\n    Filter by engagement rate\n  - `followers?: { max?: number; min?: number; }`\n    Filter by follower count\n  - `verified?: boolean`\n    Filter by verified status\n\n- `limit?: number`\n  Maximum results to return\n\n### Returns\n\n- `{ creator: { id: string; avatar_url: string; bio: string; name: string; }; primary_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }; similarity: { score: number; shared_traits: string[]; }; }`\n\n  - `creator: { id: string; avatar_url: string; bio: string; name: string; }`\n  - `primary_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }`\n  - `similarity: { score: number; shared_traits: string[]; }`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\n// Automatically fetches more pages as needed.\nfor await (const creatorLookalikeResponse of client.creators.lookalike({ seeds: [{}] })) {\n  console.log(creatorLookalikeResponse);\n}\n```",
  },
  {
    name: 'match',
    endpoint: '/v1/creators/match',
    httpMethod: 'post',
    summary: 'Score Campaign Fit',
    description:
      'Evaluate how well creators match a specific campaign using AI analysis. Returns a fit score (0-1), decision recommendation (good/neutral/avoid), and evidence-based explanations.\n\n**Use cases:**\n- Vet shortlisted creators before outreach\n- Rank candidates for a specific campaign\n- Get AI-generated talking points for why a creator fits\n\n**How it works:**\n1. Describe your campaign intent and target audience\n2. Provide up to 100 creators to evaluate\n3. Get detailed scores with explanations and evidence\n\n**Pricing**: 1 credit per creator scored ($0.01)',
    stainlessPath: '(resource) creators > (method) match',
    qualified: 'client.creators.match',
    params: [
      "creators: { creator_id?: string; platform?: 'instagram'; username?: string; }[];",
      'intent: { query: string; context?: string; };',
    ],
    response:
      "{ data: { creator: { id: string; avatar_url: string; name: string; }; input: { creator_id?: string; platform?: 'instagram'; username?: string; }; match: { decision: 'good' | 'neutral' | 'avoid'; reasons: object[]; score: number; }; }[]; }",
    markdown:
      "## match\n\n`client.creators.match(creators: { creator_id?: string; platform?: 'instagram'; username?: string; }[], intent: { query: string; context?: string; }): { data: object[]; }`\n\n**post** `/v1/creators/match`\n\nEvaluate how well creators match a specific campaign using AI analysis. Returns a fit score (0-1), decision recommendation (good/neutral/avoid), and evidence-based explanations.\n\n**Use cases:**\n- Vet shortlisted creators before outreach\n- Rank candidates for a specific campaign\n- Get AI-generated talking points for why a creator fits\n\n**How it works:**\n1. Describe your campaign intent and target audience\n2. Provide up to 100 creators to evaluate\n3. Get detailed scores with explanations and evidence\n\n**Pricing**: 1 credit per creator scored ($0.01)\n\n### Parameters\n\n- `creators: { creator_id?: string; platform?: 'instagram'; username?: string; }[]`\n  Creators to evaluate\n\n- `intent: { query: string; context?: string; }`\n  Campaign intent for creator matching\n  - `query: string`\n    Campaign description\n  - `context?: string`\n    Additional context about the campaign\n\n### Returns\n\n- `{ data: { creator: { id: string; avatar_url: string; name: string; }; input: { creator_id?: string; platform?: 'instagram'; username?: string; }; match: { decision: 'good' | 'neutral' | 'avoid'; reasons: object[]; score: number; }; }[]; }`\n\n  - `data: { creator: { id: string; avatar_url: string; name: string; }; input: { creator_id?: string; platform?: 'instagram'; username?: string; }; match: { decision: 'good' | 'neutral' | 'avoid'; reasons: { text: string; fact_id?: string; source_post_id?: string; }[]; score: number; }; }[]`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst response = await client.creators.match({\n  creators: [{}],\n  intent: { query: 'Looking for fitness influencers to promote our new protein bar' },\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/search',
    httpMethod: 'post',
    summary: 'AI-Powered Creator Search',
    description:
      'Search for creators using natural language queries. The AI understands intent and context to match creators based on content themes, audience demographics, and style.\n\nThe response includes a `search_id` that can be used with `GET /v1/search/{id}` to paginate through results for free.\n\n**Use cases:**\n- Find creators in a specific niche ("vegan food bloggers in LA")\n- Discover creators with specific audience characteristics ("fitness influencers with millennial audience")\n- Search by content style ("creators who post cinematic travel videos")\n\n**Pricing**: 25 credits base + 2 credits per creator returned',
    stainlessPath: '(resource) search > (method) create',
    qualified: 'client.search.create',
    params: [
      'query: string;',
      'filters?: { engagement_rate?: { max?: number; min?: number; }; followers?: { max?: number; min?: number; }; verified?: boolean; };',
      'limit?: number;',
      "platforms?: 'instagram'[];",
    ],
    response:
      '{ data: { creator: object; match: object; primary_profile: object; relevant_profile: object; }[]; has_more: boolean; next_cursor: string; search_id: string; total: number; }',
    markdown:
      "## create\n\n`client.search.create(query: string, filters?: { engagement_rate?: { max?: number; min?: number; }; followers?: { max?: number; min?: number; }; verified?: boolean; }, limit?: number, platforms?: 'instagram'[]): { data: object[]; has_more: boolean; next_cursor: string; search_id: string; total: number; }`\n\n**post** `/v1/search`\n\nSearch for creators using natural language queries. The AI understands intent and context to match creators based on content themes, audience demographics, and style.\n\nThe response includes a `search_id` that can be used with `GET /v1/search/{id}` to paginate through results for free.\n\n**Use cases:**\n- Find creators in a specific niche (\"vegan food bloggers in LA\")\n- Discover creators with specific audience characteristics (\"fitness influencers with millennial audience\")\n- Search by content style (\"creators who post cinematic travel videos\")\n\n**Pricing**: 25 credits base + 2 credits per creator returned\n\n### Parameters\n\n- `query: string`\n  Natural language search query\n\n- `filters?: { engagement_rate?: { max?: number; min?: number; }; followers?: { max?: number; min?: number; }; verified?: boolean; }`\n  Additional filters\n  - `engagement_rate?: { max?: number; min?: number; }`\n    Filter by engagement rate\n  - `followers?: { max?: number; min?: number; }`\n    Filter by follower count\n  - `verified?: boolean`\n    Filter by verified status\n\n- `limit?: number`\n  Maximum results to return\n\n- `platforms?: 'instagram'[]`\n  Filter results to specific platforms\n\n### Returns\n\n- `{ data: { creator: object; match: object; primary_profile: object; relevant_profile: object; }[]; has_more: boolean; next_cursor: string; search_id: string; total: number; }`\n\n  - `data: { creator: { id: string; avatar_url: string; bio: string; name: string; }; match: { reasons: string[]; score: number; }; primary_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }; relevant_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n  - `search_id: string`\n  - `total: number`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst search = await client.search.create({ query: 'fitness influencers with 100k+ followers who post workout videos' });\n\nconsole.log(search);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/search/{id}',
    httpMethod: 'get',
    summary: 'Get Search Results Page',
    description:
      'Paginate through results from a previous search. Use the `search_id` returned by `POST /v1/search` to fetch additional pages.\n\nSearch sessions expire after 1 hour. After expiry, a new search must be run.\n\n**Pricing**: 0 credits (included with initial search)',
    stainlessPath: '(resource) search > (method) retrieve',
    qualified: 'client.search.retrieve',
    params: ['id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ creator: { id: string; avatar_url: string; bio: string; name: string; }; match: { reasons: string[]; score: number; }; primary_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }; relevant_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }; }",
    markdown:
      "## retrieve\n\n`client.search.retrieve(id: string, cursor?: string, limit?: number): { creator: creator_basic; match: match_info; primary_profile: profile_summary; relevant_profile: profile_summary; }`\n\n**get** `/v1/search/{id}`\n\nPaginate through results from a previous search. Use the `search_id` returned by `POST /v1/search` to fetch additional pages.\n\nSearch sessions expire after 1 hour. After expiry, a new search must be run.\n\n**Pricing**: 0 credits (included with initial search)\n\n### Parameters\n\n- `id: string`\n  Search ID returned from POST /v1/search\n\n- `cursor?: string`\n  Pagination cursor for next page\n\n- `limit?: number`\n  Maximum results to return\n\n### Returns\n\n- `{ creator: { id: string; avatar_url: string; bio: string; name: string; }; match: { reasons: string[]; score: number; }; primary_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }; relevant_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }; }`\n\n  - `creator: { id: string; avatar_url: string; bio: string; name: string; }`\n  - `match: { reasons: string[]; score: number; }`\n  - `primary_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }`\n  - `relevant_profile: { id: string; engagement_rate: number; followers: number; is_verified: boolean; platform: 'instagram'; url: string; username: string; }`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\n// Automatically fetches more pages as needed.\nfor await (const searchRetrieveResponse of client.search.retrieve('123e4567-e89b-12d3-a456-426614174000')) {\n  console.log(searchRetrieveResponse);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/profiles/{platform}/{username}',
    httpMethod: 'get',
    summary: 'Get Profile by Platform and Username',
    description:
      'Retrieve detailed profile data including metrics, growth statistics, and activity information from our database.\n\n**Response includes:**\n- Basic info (bio, avatar, verification status)\n- Performance metrics (followers, engagement rate, avg likes/comments)\n- Growth data (30-day follower growth, monthly rate)\n- Activity data (last post date, posting frequency)\n\n**Pricing**: 0.1 credits per request ($0.001)',
    stainlessPath: '(resource) profiles > (method) get',
    qualified: 'client.profiles.get',
    params: ['platform: string;', 'username: string;'],
    response:
      "{ data: { id: string; activity: profile_activity; avatar_url: string; bio: string; category: string; creator_id: string; data_updated_at: string; display_name: string; external_url: string; growth: profile_growth; is_business: boolean; is_private: boolean; is_verified: boolean; metrics: profile_metrics; platform: 'instagram'; pronouns: string[]; url: string; username: string; }; warning?: string; }",
    markdown:
      "## get\n\n`client.profiles.get(platform: string, username: string): { data: profile_response_data; warning?: string; }`\n\n**get** `/v1/profiles/{platform}/{username}`\n\nRetrieve detailed profile data including metrics, growth statistics, and activity information from our database.\n\n**Response includes:**\n- Basic info (bio, avatar, verification status)\n- Performance metrics (followers, engagement rate, avg likes/comments)\n- Growth data (30-day follower growth, monthly rate)\n- Activity data (last post date, posting frequency)\n\n**Pricing**: 0.1 credits per request ($0.001)\n\n### Parameters\n\n- `platform: string`\n  Platform name\n\n- `username: string`\n  Username on the platform\n\n### Returns\n\n- `{ data: { id: string; activity: profile_activity; avatar_url: string; bio: string; category: string; creator_id: string; data_updated_at: string; display_name: string; external_url: string; growth: profile_growth; is_business: boolean; is_private: boolean; is_verified: boolean; metrics: profile_metrics; platform: 'instagram'; pronouns: string[]; url: string; username: string; }; warning?: string; }`\n\n  - `data: { id: string; activity: { last_post_at: string; }; avatar_url: string; bio: string; category: string; creator_id: string; data_updated_at: string; display_name: string; external_url: string; growth: { followers_30d_pct: number; }; is_business: boolean; is_private: boolean; is_verified: boolean; metrics: { avg_comments_recent: number; avg_likes_recent: number; avg_views_recent: number; engagement_rate: number; followers: number; following: number; posts: number; posts_last_30d: number; posts_per_week: number; }; platform: 'instagram'; pronouns: string[]; url: string; username: string; }`\n  - `warning?: string`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst profile = await client.profiles.get('fitness_coach_jane', { platform: 'instagram' });\n\nconsole.log(profile);\n```",
  },
  {
    name: 'lookup',
    endpoint: '/v1/profiles/lookup',
    httpMethod: 'post',
    summary: 'Batch Lookup Profiles',
    description:
      "Look up multiple profiles in a single request. Efficiently retrieve data for up to 100 profiles at once.\n\n**Response includes:**\n- `found`: Array of profiles that exist in our database\n- `not_found`: Array of profiles that weren't found (consider live scraping these)\n\n**Pricing**: 0.1 credits per profile ($0.001)",
    stainlessPath: '(resource) profiles > (method) lookup',
    qualified: 'client.profiles.lookup',
    params: ["profiles: { platform: 'instagram'; username: string; }[];"],
    response:
      "{ data: { id: string; activity: profile_activity; avatar_url: string; bio: string; category: string; creator_id: string; data_updated_at: string; display_name: string; external_url: string; growth: profile_growth; is_business: boolean; is_private: boolean; is_verified: boolean; metrics: profile_metrics; platform: 'instagram'; pronouns: string[]; url: string; username: string; }[]; not_found: { platform: 'instagram'; username: string; }[]; }",
    markdown:
      "## lookup\n\n`client.profiles.lookup(profiles: { platform: 'instagram'; username: string; }[]): { data: profile_response_data[]; not_found: object[]; }`\n\n**post** `/v1/profiles/lookup`\n\nLook up multiple profiles in a single request. Efficiently retrieve data for up to 100 profiles at once.\n\n**Response includes:**\n- `found`: Array of profiles that exist in our database\n- `not_found`: Array of profiles that weren't found (consider live scraping these)\n\n**Pricing**: 0.1 credits per profile ($0.001)\n\n### Parameters\n\n- `profiles: { platform: 'instagram'; username: string; }[]`\n  Profiles to lookup\n\n### Returns\n\n- `{ data: { id: string; activity: profile_activity; avatar_url: string; bio: string; category: string; creator_id: string; data_updated_at: string; display_name: string; external_url: string; growth: profile_growth; is_business: boolean; is_private: boolean; is_verified: boolean; metrics: profile_metrics; platform: 'instagram'; pronouns: string[]; url: string; username: string; }[]; not_found: { platform: 'instagram'; username: string; }[]; }`\n\n  - `data: { id: string; activity: { last_post_at: string; }; avatar_url: string; bio: string; category: string; creator_id: string; data_updated_at: string; display_name: string; external_url: string; growth: { followers_30d_pct: number; }; is_business: boolean; is_private: boolean; is_verified: boolean; metrics: { avg_comments_recent: number; avg_likes_recent: number; avg_views_recent: number; engagement_rate: number; followers: number; following: number; posts: number; posts_last_30d: number; posts_per_week: number; }; platform: 'instagram'; pronouns: string[]; url: string; username: string; }[]`\n  - `not_found: { platform: 'instagram'; username: string; }[]`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst response = await client.profiles.lookup({ profiles: [{ platform: 'instagram', username: 'fitness_coach_jane' }] });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/posts',
    httpMethod: 'get',
    summary: 'Get Posts',
    description:
      "Retrieve posts for a creator or profile with engagement metrics and media data.\n\n**Query options:**\n- By creator: Use `creator_id` to get posts across all their profiles\n- By profile: Use `platform` + `username` for a specific profile's posts\n\n**Sort options:**\n- `recent`: Most recent posts first (default)\n- `top_engagement`: Highest engagement rate first\n- `most_likes`: Most likes first\n- `most_views`: Most views first (video content)\n- `most_comments`: Most comments first\n\n**Pricing**: 0.05 credits per post returned ($0.0005)",
    stainlessPath: '(resource) posts > (method) list',
    qualified: 'client.posts.list',
    params: [
      'creator_id?: string;',
      'cursor?: string;',
      'limit?: number;',
      "platform?: 'instagram';",
      "sort?: 'recent' | 'top_engagement' | 'most_likes' | 'most_views' | 'most_comments';",
      'username?: string;',
    ],
    response:
      "{ id: string; caption: string; hashtags: string[]; location: { name: string; }; media: { duration_seconds: number; thumbnail_url: string; url: string; video_url: string; }; mentions: string[]; metrics: { comments: number; engagement_rate: number; likes: number; shares: number; views: number; }; platform: 'instagram'; platform_id: string; posted_at: string; profile_id: string; type: 'image' | 'video' | 'carousel' | 'reel' | 'story'; url: string; }",
    markdown:
      "## list\n\n`client.posts.list(creator_id?: string, cursor?: string, limit?: number, platform?: 'instagram', sort?: 'recent' | 'top_engagement' | 'most_likes' | 'most_views' | 'most_comments', username?: string): { id: string; caption: string; hashtags: string[]; location: object; media: object; mentions: string[]; metrics: object; platform: 'instagram'; platform_id: string; posted_at: string; profile_id: string; type: 'image' | 'video' | 'carousel' | 'reel' | 'story'; url: string; }`\n\n**get** `/v1/posts`\n\nRetrieve posts for a creator or profile with engagement metrics and media data.\n\n**Query options:**\n- By creator: Use `creator_id` to get posts across all their profiles\n- By profile: Use `platform` + `username` for a specific profile's posts\n\n**Sort options:**\n- `recent`: Most recent posts first (default)\n- `top_engagement`: Highest engagement rate first\n- `most_likes`: Most likes first\n- `most_views`: Most views first (video content)\n- `most_comments`: Most comments first\n\n**Pricing**: 0.05 credits per post returned ($0.0005)\n\n### Parameters\n\n- `creator_id?: string`\n  Creator ID (use this OR platform+username)\n\n- `cursor?: string`\n  Pagination cursor for next page\n\n- `limit?: number`\n  Maximum posts to return\n\n- `platform?: 'instagram'`\n  Platform (required with username)\n\n- `sort?: 'recent' | 'top_engagement' | 'most_likes' | 'most_views' | 'most_comments'`\n  Sort order\n\n- `username?: string`\n  Username (required with platform)\n\n### Returns\n\n- `{ id: string; caption: string; hashtags: string[]; location: { name: string; }; media: { duration_seconds: number; thumbnail_url: string; url: string; video_url: string; }; mentions: string[]; metrics: { comments: number; engagement_rate: number; likes: number; shares: number; views: number; }; platform: 'instagram'; platform_id: string; posted_at: string; profile_id: string; type: 'image' | 'video' | 'carousel' | 'reel' | 'story'; url: string; }`\n  Full post details\n\n  - `id: string`\n  - `caption: string`\n  - `hashtags: string[]`\n  - `location: { name: string; }`\n  - `media: { duration_seconds: number; thumbnail_url: string; url: string; video_url: string; }`\n  - `mentions: string[]`\n  - `metrics: { comments: number; engagement_rate: number; likes: number; shares: number; views: number; }`\n  - `platform: 'instagram'`\n  - `platform_id: string`\n  - `posted_at: string`\n  - `profile_id: string`\n  - `type: 'image' | 'video' | 'carousel' | 'reel' | 'story'`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\n// Automatically fetches more pages as needed.\nfor await (const postListResponse of client.posts.list()) {\n  console.log(postListResponse);\n}\n```",
  },
  {
    name: 'get_profile',
    endpoint: '/v1/raw/instagram/profile/{username}',
    httpMethod: 'get',
    summary: 'Get Live Instagram Profile',
    description:
      "Fetch fresh Instagram profile data directly from Instagram in real-time. Use this when you need the most current follower counts, bio, or recent activity.\n\n**When to use live scraping:**\n- Profile not found in our database\n- Need real-time follower/engagement data\n- Verifying current profile status before campaign\n\n**Note:** Live scraping is slower than cached data (2-5 seconds) and costs more. Use cached endpoints when freshness isn't critical.\n\n**Pricing**: 0.5 credits per profile scraped ($0.005)",
    stainlessPath: '(resource) raw.instagram > (method) get_profile',
    qualified: 'client.raw.instagram.getProfile',
    params: ['username: string;', 'include_posts?: boolean;', 'post_limit?: number;'],
    response:
      "{ data: { id: string; activity: { last_post_at: string; }; avatar_url: string; bio: string; category: string; creator_id: string; data_updated_at: string; display_name: string; external_url: string; growth: { followers_30d_pct: number; }; is_business: boolean; is_private: boolean; is_verified: boolean; metrics: { avg_comments_recent: number; avg_likes_recent: number; avg_views_recent: number; engagement_rate: number; followers: number; following: number; posts: number; posts_last_30d: number; posts_per_week: number; }; platform: 'instagram'; pronouns: string[]; scraped_at: string; url: string; username: string; posts?: { id: string; caption: string; comments_count: number; likes_count: number; media_url: string; platform_id: string; posted_at: string; type: 'image' | 'video' | 'carousel' | 'reel' | 'story'; url: string; }[]; }; }",
    markdown:
      "## get_profile\n\n`client.raw.instagram.getProfile(username: string, include_posts?: boolean, post_limit?: number): { data: object; }`\n\n**get** `/v1/raw/instagram/profile/{username}`\n\nFetch fresh Instagram profile data directly from Instagram in real-time. Use this when you need the most current follower counts, bio, or recent activity.\n\n**When to use live scraping:**\n- Profile not found in our database\n- Need real-time follower/engagement data\n- Verifying current profile status before campaign\n\n**Note:** Live scraping is slower than cached data (2-5 seconds) and costs more. Use cached endpoints when freshness isn't critical.\n\n**Pricing**: 0.5 credits per profile scraped ($0.005)\n\n### Parameters\n\n- `username: string`\n  Username on the platform\n\n- `include_posts?: boolean`\n  Include recent posts in response\n\n- `post_limit?: number`\n  Number of posts to include\n\n### Returns\n\n- `{ data: { id: string; activity: { last_post_at: string; }; avatar_url: string; bio: string; category: string; creator_id: string; data_updated_at: string; display_name: string; external_url: string; growth: { followers_30d_pct: number; }; is_business: boolean; is_private: boolean; is_verified: boolean; metrics: { avg_comments_recent: number; avg_likes_recent: number; avg_views_recent: number; engagement_rate: number; followers: number; following: number; posts: number; posts_last_30d: number; posts_per_week: number; }; platform: 'instagram'; pronouns: string[]; scraped_at: string; url: string; username: string; posts?: { id: string; caption: string; comments_count: number; likes_count: number; media_url: string; platform_id: string; posted_at: string; type: 'image' | 'video' | 'carousel' | 'reel' | 'story'; url: string; }[]; }; }`\n\n  - `data: { id: string; activity: { last_post_at: string; }; avatar_url: string; bio: string; category: string; creator_id: string; data_updated_at: string; display_name: string; external_url: string; growth: { followers_30d_pct: number; }; is_business: boolean; is_private: boolean; is_verified: boolean; metrics: { avg_comments_recent: number; avg_likes_recent: number; avg_views_recent: number; engagement_rate: number; followers: number; following: number; posts: number; posts_last_30d: number; posts_per_week: number; }; platform: 'instagram'; pronouns: string[]; scraped_at: string; url: string; username: string; posts?: { id: string; caption: string; comments_count: number; likes_count: number; media_url: string; platform_id: string; posted_at: string; type: 'image' | 'video' | 'carousel' | 'reel' | 'story'; url: string; }[]; }`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst response = await client.raw.instagram.getProfile('fitness_coach_jane');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_channel',
    endpoint: '/v1/raw/youtube/channel/{handle}',
    httpMethod: 'get',
    summary: 'Get Live YouTube Channel',
    description:
      'Fetch fresh YouTube channel data including subscriber count, video count, and total views.\n\n**Pricing**: 0.5 credits per channel scraped ($0.005)',
    stainlessPath: '(resource) raw.youtube > (method) get_channel',
    qualified: 'client.raw.youtube.getChannel',
    params: ['handle: string;', 'include_videos?: boolean;', 'video_limit?: number;'],
    response:
      '{ data: { avatar_url: string; description: string; handle: string; name: string; scraped_at: string; subscribers: number; videos_count: number; views_total: number; videos?: { id: string; comments: number; duration_seconds: number; likes: number; published_at: string; thumbnail_url: string; title: string; url: string; views: number; }[]; }; }',
    markdown:
      "## get_channel\n\n`client.raw.youtube.getChannel(handle: string, include_videos?: boolean, video_limit?: number): { data: object; }`\n\n**get** `/v1/raw/youtube/channel/{handle}`\n\nFetch fresh YouTube channel data including subscriber count, video count, and total views.\n\n**Pricing**: 0.5 credits per channel scraped ($0.005)\n\n### Parameters\n\n- `handle: string`\n  YouTube channel handle\n\n- `include_videos?: boolean`\n  Include recent videos in response\n\n- `video_limit?: number`\n  Number of videos to include\n\n### Returns\n\n- `{ data: { avatar_url: string; description: string; handle: string; name: string; scraped_at: string; subscribers: number; videos_count: number; views_total: number; videos?: { id: string; comments: number; duration_seconds: number; likes: number; published_at: string; thumbnail_url: string; title: string; url: string; views: number; }[]; }; }`\n\n  - `data: { avatar_url: string; description: string; handle: string; name: string; scraped_at: string; subscribers: number; videos_count: number; views_total: number; videos?: { id: string; comments: number; duration_seconds: number; likes: number; published_at: string; thumbnail_url: string; title: string; url: string; views: number; }[]; }`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst response = await client.raw.youtube.getChannel('@techreviews');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_channel_transcripts',
    endpoint: '/v1/raw/youtube/channel-transcripts/{handle}',
    httpMethod: 'get',
    summary: 'Get YouTube Channel Transcripts',
    description:
      "Fetch transcripts for multiple videos from a YouTube channel. Videos can be sorted by popularity, newest, or oldest before selection.\n\n**Features:**\n- Fetches up to 20 video transcripts per request\n- Sort by popular (most views), newest, or oldest\n- Partial success — individual video failures don't block the response\n- Optional timestamped segments for each transcript\n\n**Pricing**: 0.5 credits per transcript fetched ($0.005)",
    stainlessPath: '(resource) raw.youtube > (method) get_channel_transcripts',
    qualified: 'client.raw.youtube.getChannelTranscripts',
    params: [
      'handle: string;',
      'include_segments?: boolean;',
      'language?: string;',
      "sort_by?: 'popular' | 'newest' | 'oldest';",
      'video_limit?: number;',
    ],
    response:
      "{ data: { channel_id: string; channel_name: string; handle: string; items: { error: string; full_text: string; language: string; published_text: string; source: 'manual' | 'auto_generated'; title: string; transcript: transcript_segment[]; url: string; video_id: string; view_count: number; word_count: number; }[]; scraped_at: string; transcripts_failed: number; transcripts_fetched: number; videos_found: number; }; }",
    markdown:
      "## get_channel_transcripts\n\n`client.raw.youtube.getChannelTranscripts(handle: string, include_segments?: boolean, language?: string, sort_by?: 'popular' | 'newest' | 'oldest', video_limit?: number): { data: object; }`\n\n**get** `/v1/raw/youtube/channel-transcripts/{handle}`\n\nFetch transcripts for multiple videos from a YouTube channel. Videos can be sorted by popularity, newest, or oldest before selection.\n\n**Features:**\n- Fetches up to 20 video transcripts per request\n- Sort by popular (most views), newest, or oldest\n- Partial success — individual video failures don't block the response\n- Optional timestamped segments for each transcript\n\n**Pricing**: 0.5 credits per transcript fetched ($0.005)\n\n### Parameters\n\n- `handle: string`\n  YouTube channel handle\n\n- `include_segments?: boolean`\n  Include timestamped transcript segments in response\n\n- `language?: string`\n  Language code for transcripts\n\n- `sort_by?: 'popular' | 'newest' | 'oldest'`\n  How to sort channel videos before selecting\n\n- `video_limit?: number`\n  Number of videos to fetch transcripts for (max 20)\n\n### Returns\n\n- `{ data: { channel_id: string; channel_name: string; handle: string; items: { error: string; full_text: string; language: string; published_text: string; source: 'manual' | 'auto_generated'; title: string; transcript: transcript_segment[]; url: string; video_id: string; view_count: number; word_count: number; }[]; scraped_at: string; transcripts_failed: number; transcripts_fetched: number; videos_found: number; }; }`\n\n  - `data: { channel_id: string; channel_name: string; handle: string; items: { error: string; full_text: string; language: string; published_text: string; source: 'manual' | 'auto_generated'; title: string; transcript: { duration: number; start: number; text: string; }[]; url: string; video_id: string; view_count: number; word_count: number; }[]; scraped_at: string; transcripts_failed: number; transcripts_fetched: number; videos_found: number; }`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst response = await client.raw.youtube.getChannelTranscripts('@techreviews');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_transcript',
    endpoint: '/v1/raw/youtube/transcript/{video_id}',
    httpMethod: 'get',
    summary: 'Get YouTube Video Transcript',
    description:
      'Fetch YouTube video transcript/captions. Returns timestamped segments and full text. Useful for content analysis.\n\n**Supported sources:**\n- Manual captions (highest quality)\n- Auto-generated captions\n- Multiple language tracks\n\n**Pricing**: 0.5 credits per transcript ($0.005)',
    stainlessPath: '(resource) raw.youtube > (method) get_transcript',
    qualified: 'client.raw.youtube.getTranscript',
    params: ['video_id: string;', 'language?: string;'],
    response:
      '{ data: { available_languages: string[]; full_text: string; language: string; title: string; transcript: object[]; url: string; video_id: string; word_count: number; }; }',
    markdown:
      "## get_transcript\n\n`client.raw.youtube.getTranscript(video_id: string, language?: string): { data: object; }`\n\n**get** `/v1/raw/youtube/transcript/{video_id}`\n\nFetch YouTube video transcript/captions. Returns timestamped segments and full text. Useful for content analysis.\n\n**Supported sources:**\n- Manual captions (highest quality)\n- Auto-generated captions\n- Multiple language tracks\n\n**Pricing**: 0.5 credits per transcript ($0.005)\n\n### Parameters\n\n- `video_id: string`\n  YouTube video ID\n\n- `language?: string`\n  Language code or \"auto\" for automatic detection\n\n### Returns\n\n- `{ data: { available_languages: string[]; full_text: string; language: string; title: string; transcript: object[]; url: string; video_id: string; word_count: number; }; }`\n\n  - `data: { available_languages: string[]; full_text: string; language: string; title: string; transcript: { duration: number; start: number; text: string; }[]; url: string; video_id: string; word_count: number; }`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst response = await client.raw.youtube.getTranscript('dQw4w9WgXcQ');\n\nconsole.log(response);\n```",
  },
  {
    name: 'search',
    endpoint: '/v1/raw/youtube/search',
    httpMethod: 'get',
    summary: 'Search YouTube',
    description:
      'Search YouTube videos and channels.\n\n**Pricing**: 0.5 credits per result returned ($0.005)',
    stainlessPath: '(resource) raw.youtube > (method) search',
    qualified: 'client.raw.youtube.search',
    params: ['q: string;', 'country_code?: string;', 'language_code?: string;', 'limit?: number;'],
    response:
      "{ data: { estimated_results: number; query: string; results: { channel_handle: string; channel_id: string; channel_name: string; channel_verified: boolean; description: string; duration_seconds: number; duration_text: string; published_at: string; published_text: string; thumbnail_url: string; title: string; type: 'video'; url: string; video_id: string; view_count: number; view_count_text: string; } | { channel_handle: string; channel_id: string; channel_name: string; channel_verified: boolean; description: string; subscriber_count: number; thumbnail_url: string; type: 'channel'; url: string; video_count: number; }[]; scraped_at: string; }; }",
    markdown:
      "## search\n\n`client.raw.youtube.search(q: string, country_code?: string, language_code?: string, limit?: number): { data: object; }`\n\n**get** `/v1/raw/youtube/search`\n\nSearch YouTube videos and channels.\n\n**Pricing**: 0.5 credits per result returned ($0.005)\n\n### Parameters\n\n- `q: string`\n  Search query\n\n- `country_code?: string`\n  Country code for localized results (ISO 3166-1 alpha-2)\n\n- `language_code?: string`\n  Language code for results\n\n- `limit?: number`\n  Maximum number of results to return\n\n### Returns\n\n- `{ data: { estimated_results: number; query: string; results: { channel_handle: string; channel_id: string; channel_name: string; channel_verified: boolean; description: string; duration_seconds: number; duration_text: string; published_at: string; published_text: string; thumbnail_url: string; title: string; type: 'video'; url: string; video_id: string; view_count: number; view_count_text: string; } | { channel_handle: string; channel_id: string; channel_name: string; channel_verified: boolean; description: string; subscriber_count: number; thumbnail_url: string; type: 'channel'; url: string; video_count: number; }[]; scraped_at: string; }; }`\n\n  - `data: { estimated_results: number; query: string; results: { channel_handle: string; channel_id: string; channel_name: string; channel_verified: boolean; description: string; duration_seconds: number; duration_text: string; published_at: string; published_text: string; thumbnail_url: string; title: string; type: 'video'; url: string; video_id: string; view_count: number; view_count_text: string; } | { channel_handle: string; channel_id: string; channel_name: string; channel_verified: boolean; description: string; subscriber_count: number; thumbnail_url: string; type: 'channel'; url: string; video_count: number; }[]; scraped_at: string; }`\n\n### Example\n\n```typescript\nimport Influship from 'influship';\n\nconst client = new Influship();\n\nconst response = await client.raw.youtube.search({ q: 'fitness workout' });\n\nconsole.log(response);\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
