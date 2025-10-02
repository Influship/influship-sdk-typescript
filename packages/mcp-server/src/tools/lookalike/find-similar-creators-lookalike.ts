// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'influship-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'influship-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import InflushipAPI from 'influship-api';

export const metadata: Metadata = {
  resource: 'lookalike',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/lookalike',
  operationId: 'findLookalikeCreators',
};

export const tool: Tool = {
  name: 'find_similar_creators_lookalike',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFind creators similar to your seed creators using AI-powered similarity analysis.\n\nThis endpoint analyzes your seed creators and finds similar influencers based on\naudience demographics, content style, and engagement patterns.\n\n**Pricing**:\n- Base: 1.0 credit per creator returned\n- Detailed mode: Additional 0.05 credits per social account profile\n- **Example**: 25 lookalike creators in lite mode = 25 credits\n- **Example**: 25 creators with avg 3 profiles each in detailed mode = 25 + (25 × 3 × 0.05) = 28.75 credits\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    billing_plan: {\n      type: 'string',\n      description: 'Current billing plan'\n    },\n    credits_charged: {\n      type: 'number',\n      description: 'Credits consumed for this request'\n    },\n    features: {\n      type: 'array',\n      description: 'Features used in this request',\n      items: {\n        type: 'string'\n      }\n    },\n    filtered_total: {\n      type: 'integer',\n      description: 'Total number of results after filtering'\n    },\n    has_more: {\n      type: 'boolean',\n      description: 'Whether there are more results available'\n    },\n    items: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/search_item'\n      }\n    },\n    next_cursor: {\n      type: 'string',\n      description: 'Cursor for next page of results'\n    },\n    rate_limit: {\n      type: 'object',\n      properties: {\n        limit: {\n          type: 'integer',\n          description: 'Rate limit for this endpoint'\n        },\n        remaining: {\n          type: 'integer',\n          description: 'Remaining requests in current window'\n        },\n        reset: {\n          type: 'integer',\n          description: 'Unix timestamp when rate limit resets'\n        }\n      }\n    }\n  },\n  $defs: {\n    search_item: {\n      type: 'object',\n      description: 'Search result item containing creator information and all social media profiles',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique creator identifier (UUID v4)'\n        },\n        ai_recommendation: {\n          type: 'object',\n          description: 'AI-powered recommendation analysis explaining why this creator matches your query',\n          properties: {\n            explanation: {\n              type: 'string',\n              description: 'Human-readable explanation of why this creator was recommended.\\nHighlights key matching factors from the query.\\n'\n            },\n            score: {\n              type: 'number',\n              description: 'Relevance score from 0 to 1, where 1 is a perfect match.\\nScores above 0.7 indicate strong relevance.\\n'\n            }\n          },\n          required: [            'explanation',\n            'score'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Creator\\'s display name or full name'\n        },\n        profiles: {\n          type: 'array',\n          description: 'Array of ALL social media profiles for this creator',\n          items: {\n            anyOf: [              {\n                $ref: '#/$defs/social_account_lite'\n              },\n              {\n                $ref: '#/$defs/social_account_detailed'\n              }\n            ],\n            description: 'Basic social account information returned in lite mode'\n          }\n        },\n        avatar_url: {\n          type: 'string',\n          description: 'Profile picture URL. null if no avatar is available.\\nURLs are typically valid for 24 hours.\\n'\n        },\n        bio: {\n          type: 'string',\n          description: 'Creator\\'s biography or description text.\\nMay be aggregated from multiple platforms. null if unavailable.\\n'\n        }\n      },\n      required: [        'id',\n        'ai_recommendation',\n        'name',\n        'profiles'\n      ]\n    },\n    social_account_lite: {\n      type: 'object',\n      description: 'Basic social account information returned in lite mode',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique social account identifier'\n        },\n        bio: {\n          type: 'string',\n          description: 'Account bio'\n        },\n        creator_profile_id: {\n          type: 'string',\n          description: 'Creator UUID this social account belongs to. Use with `/v1/creators` for person-level data \\n(name, bio, avatar) or `/v1/creators/{id}/profiles` for all social accounts.\\n'\n        },\n        display_name: {\n          type: 'string',\n          description: 'Display name on the platform'\n        },\n        platform: {\n          type: 'string',\n          description: 'Social media platform',\n          enum: [            'instagram',\n            'tiktok'\n          ]\n        },\n        username: {\n          type: 'string',\n          description: 'Username on the platform'\n        },\n        verified: {\n          type: 'boolean',\n          description: 'Whether the account has platform verification (blue checkmark).'\n        },\n        avatar_url: {\n          type: 'string',\n          description: 'Profile picture URL'\n        },\n        engagement_rate: {\n          type: 'number',\n          description: 'Engagement rate percentage (0-100). Formula: (avg_likes + avg_comments) / follower_count × 100. \\nBased on last 12 posts. null if account is private or has <3 posts.\\n'\n        },\n        external_url: {\n          type: 'string',\n          description: 'External website URL'\n        },\n        follower_count: {\n          type: 'number',\n          description: 'Total number of followers on this platform.\\nnull if data is unavailable or account is private.\\n'\n        }\n      },\n      required: [        'id',\n        'bio',\n        'creator_profile_id',\n        'display_name',\n        'platform',\n        'username',\n        'verified'\n      ]\n    },\n    social_account_detailed: {\n      allOf: [        {\n          $ref: '#/$defs/social_account_lite'\n        }\n      ],\n      description: 'Extended social account information with detailed metrics'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      seeds: {
        type: 'array',
        description:
          'Seed creators to find lookalikes for. Max 10 seeds, each with optional weight (0-10, default 1).',
        items: {
          anyOf: [
            {
              allOf: [
                {
                  $ref: '#/$defs/lookalike_seed_base',
                },
                {
                  $ref: '#/$defs/creator_reference_by_id',
                },
              ],
            },
            {
              allOf: [
                {
                  $ref: '#/$defs/lookalike_seed_base',
                },
                {
                  $ref: '#/$defs/creator_reference_by_handle',
                },
              ],
            },
          ],
          description: 'Seed creator provided for lookalike discovery',
        },
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
          audience_size: {
            type: 'object',
            properties: {
              max: {
                type: 'number',
              },
              min: {
                type: 'number',
              },
            },
          },
          engagement_rate: {
            type: 'object',
            properties: {
              max: {
                type: 'number',
              },
              min: {
                type: 'number',
              },
            },
          },
          platform: {
            type: 'array',
            description: 'Filter by platforms',
            items: {
              type: 'string',
            },
          },
          verified: {
            type: 'boolean',
          },
        },
      },
      mode: {
        type: 'string',
        description: 'Response detail level',
        enum: ['lite', 'detailed'],
      },
      profile_platforms: {
        type: 'array',
        description:
          'Filter which social media profiles to include in the response for each creator.\n- If not specified, all profiles for each creator are returned\n- If specified, only profiles from these platforms are included\n- This allows you to control which platforms you want to see results from\n- Independent of your seed creators\' platforms - you can mix seed types freely\nExample: ["instagram"] to only see instagram profiles, ["instagram", "tiktok"] for both\n- This allows you to get cross-platform creators but only show specific platform profiles\n',
        items: {
          type: 'string',
          enum: ['instagram', 'tiktok'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['seeds'],
    $defs: {
      lookalike_seed_base: {
        type: 'object',
        properties: {
          weight: {
            type: 'number',
            description: 'Weight for this seed in similarity calculation',
          },
        },
      },
      creator_reference_by_id: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique creator identifier',
          },
          platform: {
            type: 'string',
            description: 'Platform name (optional when using the ID)',
            enum: ['instagram'],
          },
        },
        required: ['id'],
      },
      creator_reference_by_handle: {
        type: 'object',
        properties: {
          platform: {
            type: 'string',
            description: 'Social platform where the creator exists',
            enum: ['instagram', 'tiktok'],
          },
          username: {
            type: 'string',
            description: 'Username on the platform',
          },
        },
        required: ['platform', 'username'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: InflushipAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.lookalike.findSimilarCreators(body)));
};

export default { metadata, tool, handler };
