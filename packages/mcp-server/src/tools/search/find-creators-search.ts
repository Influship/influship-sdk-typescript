// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'influship-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'influship-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import InflushipAPI from 'influship';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/search',
  operationId: 'searchCreators',
};

export const tool: Tool = {
  name: 'find_creators_search',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFind influencers using AI-powered search with natural language queries and optional filters.\n\n**Pricing**:\n- Base: 2.0 credits per creator returned\n- Detailed mode: Additional 0.05 credits per social account profile\n- **Example**: 10 creators in lite mode = 20 credits\n- **Example**: 10 creators with avg 2 profiles each in detailed mode = 20 + (10 × 2 × 0.05) = 21 credits\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/search_find_creators_response',\n  $defs: {\n    search_find_creators_response: {\n      type: 'object',\n      properties: {\n        filtered_total: {\n          type: 'integer',\n          description: 'Total number of matching results in the database before pagination.\\nUse this with `has_more` to display \"Showing 25 of 1,247 results\" in your UI.\\n'\n        },\n        has_more: {\n          type: 'boolean',\n          description: 'Whether there are more results available for pagination.\\nIf true, use the `next_cursor` value in your next request.\\n'\n        },\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/search_item'\n          }\n        },\n        next_cursor: {\n          type: 'string',\n          description: 'Opaque cursor for fetching the next page of results.\\nPass this value as the `cursor` query parameter. Only present when `has_more` is true.\\n'\n        }\n      }\n    },\n    search_item: {\n      type: 'object',\n      description: 'Search result item containing creator information and all social media profiles',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique creator identifier (UUID v4)'\n        },\n        ai_recommendation: {\n          type: 'object',\n          description: 'AI-powered recommendation analysis explaining why this creator matches your query',\n          properties: {\n            explanation: {\n              type: 'string',\n              description: 'Human-readable explanation of why this creator was recommended.\\nHighlights key matching factors from the query.\\n'\n            },\n            score: {\n              type: 'number',\n              description: 'Relevance score from 0 to 1, where 1 is a perfect match.\\nScores above 0.7 indicate strong relevance.\\n'\n            }\n          },\n          required: [            'explanation',\n            'score'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Creator\\'s display name or full name'\n        },\n        profiles: {\n          type: 'array',\n          description: 'Array of ALL social media profiles for this creator',\n          items: {\n            anyOf: [              {\n                $ref: '#/$defs/social_account_lite'\n              },\n              {\n                $ref: '#/$defs/social_account_detailed'\n              }\n            ],\n            description: 'Basic social account information returned in lite mode'\n          }\n        },\n        avatar_url: {\n          type: 'string',\n          description: 'Profile picture URL. null if no avatar is available.\\nURLs are typically valid for 24 hours.\\n'\n        },\n        bio: {\n          type: 'string',\n          description: 'Creator\\'s biography or description text.\\nMay be aggregated from multiple platforms. null if unavailable.\\n'\n        }\n      },\n      required: [        'id',\n        'ai_recommendation',\n        'name',\n        'profiles'\n      ]\n    },\n    social_account_lite: {\n      type: 'object',\n      description: 'Basic social account information returned in lite mode',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique social account identifier'\n        },\n        bio: {\n          type: 'string',\n          description: 'Account bio'\n        },\n        creator_profile_id: {\n          type: 'string',\n          description: 'Creator UUID this social account belongs to. Use with `/v1/creators` for person-level data \\n(name, bio, avatar) or `/v1/creators/{id}/profiles` for all social accounts.\\n'\n        },\n        display_name: {\n          type: 'string',\n          description: 'Display name on the platform'\n        },\n        platform: {\n          type: 'string',\n          description: 'Social media platform',\n          enum: [            'instagram',\n            'tiktok'\n          ]\n        },\n        username: {\n          type: 'string',\n          description: 'Username on the platform'\n        },\n        verified: {\n          type: 'boolean',\n          description: 'Whether the account has platform verification (blue checkmark).'\n        },\n        avatar_url: {\n          type: 'string',\n          description: 'Profile picture URL'\n        },\n        engagement_rate: {\n          type: 'number',\n          description: 'Engagement rate percentage (0-100). Formula: (avg_likes + avg_comments) / follower_count × 100. \\nBased on last 12 posts. null if account is private or has <3 posts.\\n'\n        },\n        external_url: {\n          type: 'string',\n          description: 'External website URL'\n        },\n        follower_count: {\n          type: 'number',\n          description: 'Total number of followers on this platform.\\nnull if data is unavailable or account is private.\\n'\n        }\n      },\n      required: [        'id',\n        'bio',\n        'creator_profile_id',\n        'display_name',\n        'platform',\n        'username',\n        'verified'\n      ]\n    },\n    social_account_detailed: {\n      allOf: [        {\n          $ref: '#/$defs/social_account_lite'\n        }\n      ],\n      description: 'Extended social account information with detailed metrics'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Natural language search query',
      },
      cursor: {
        type: 'string',
        description:
          "Opaque pagination cursor from previous response's `next_cursor`. Do not construct manually.",
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of results to return',
      },
      filters: {
        type: 'object',
        properties: {
          platform_filters: {
            type: 'array',
            description: 'Per-platform filter definitions',
            items: {
              type: 'object',
              properties: {
                platform: {
                  type: 'string',
                  enum: ['instagram', 'tiktok'],
                },
                max_engagement_rate: {
                  type: 'number',
                },
                max_followers: {
                  type: 'number',
                },
                min_engagement_rate: {
                  type: 'number',
                },
                min_followers: {
                  type: 'number',
                },
                verified_only: {
                  type: 'boolean',
                },
              },
              required: ['platform'],
            },
          },
          platform_logic: {
            type: 'string',
            description:
              'How to combine platform_filters. `OR` = creator matches ANY platform filter. `AND` = creator must match ALL platform filters. Default: OR.',
            enum: ['AND', 'OR'],
          },
        },
      },
      include_platforms: {
        type: 'array',
        description:
          'Filter social accounts to only these platforms. Reduces payload size. Does not affect search results or costs.',
        items: {
          type: 'string',
          enum: ['instagram', 'tiktok'],
        },
      },
      mode: {
        type: 'string',
        description:
          'Response detail level. `lite` returns basic fields (username, follower_count, engagement_rate). \n`detailed` adds avg_comments_recent, avg_video_views_recent, follower_change_rate, etc. \nDetailed mode costs 5x more (0.05 vs 0.01 credits per profile).',
        enum: ['lite', 'detailed'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['query'],
  },
  annotations: {},
};

export const handler = async (client: InflushipAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.search.findCreators(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
