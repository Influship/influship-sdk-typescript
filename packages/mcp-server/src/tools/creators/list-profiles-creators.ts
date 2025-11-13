// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'influship-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'influship-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import InflushipAPI from 'influship';

export const metadata: Metadata = {
  resource: 'creators',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/creators/{id}/profiles',
  operationId: 'getCreatorSocialAccounts',
};

export const tool: Tool = {
  name: 'list_profiles_creators',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n**EXPLORATION ENDPOINT**: Get all social account data when you know a creator UUID.\n\n**🎯 When to use this endpoint:**\n- ✅ You have a creator UUID (from `/v1/creators` or `/v1/profiles` response)\n- ✅ You want to see all social accounts for a creator (Instagram, TikTok, etc.)\n- ✅ You need comprehensive social account data for a creator\n- ✅ You want to explore all platforms a creator is on\n\n**❌ When NOT to use this endpoint:**\n- ❌ You only have a username and platform (use `/v1/profiles` instead)\n- ❌ You don't have a creator UUID (use `/v1/profiles` to discover first)\n\n**📊 Response Format:**\nReturns `SocialAccountLite` or `SocialAccountDetailed` objects with identical structure to `/v1/profiles`.\nBoth endpoints return the same data structure for consistency.\n\n**🔗 Data Relationships:**\n- This endpoint requires a creator UUID (not a social account ID)\n- Use `creator_profile_id` from `/v1/profiles` response as the `{id}` parameter\n- Returns all social accounts associated with that creator\n- Filter by platform using the `platforms` query parameter\n\n**🔄 Typical Workflow:**\n1. **Discovery**: Call `/v1/profiles` with username+platform → get social account data + creator_profile_id\n2. **All Accounts**: Call `/v1/creators/{creator_profile_id}/profiles` → get all social accounts for that creator\n3. **Creator Data**: Call `/v1/creators` with creator_profile_id → get creator-level data\n\n**⚙️ Parameters:**\n- `mode`: `lite` (default) or `detailed` - controls response detail level\n- `platforms`: Comma-separated list of platforms to filter (e.g., `instagram,tiktok`)\n**Pricing**: 0.01-0.05 credits per social account (lite/detailed mode)\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/creator_list_profiles_response',\n  $defs: {\n    creator_list_profiles_response: {\n      type: 'object',\n      properties: {\n        profiles: {\n          type: 'array',\n          description: 'Array of social account objects. The structure depends on the `mode` parameter:\\n- If `mode: \"lite\"`: Returns SocialAccountLite objects\\n- If `mode: \"detailed\"`: Returns SocialAccountDetailed objects with additional fields\\n',\n          items: {\n            anyOf: [              {\n                $ref: '#/$defs/social_account_lite'\n              },\n              {\n                $ref: '#/$defs/social_account_detailed'\n              }\n            ],\n            description: 'Basic social account information returned in lite mode'\n          }\n        }\n      }\n    },\n    social_account_lite: {\n      type: 'object',\n      description: 'Basic social account information returned in lite mode',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique social account identifier'\n        },\n        bio: {\n          type: 'string',\n          description: 'Account bio'\n        },\n        creator_profile_id: {\n          type: 'string',\n          description: 'Creator UUID this social account belongs to. Use with `/v1/creators` for person-level data \\n(name, bio, avatar) or `/v1/creators/{id}/profiles` for all social accounts.\\n'\n        },\n        display_name: {\n          type: 'string',\n          description: 'Display name on the platform'\n        },\n        platform: {\n          type: 'string',\n          description: 'Social media platform',\n          enum: [            'instagram',\n            'tiktok'\n          ]\n        },\n        username: {\n          type: 'string',\n          description: 'Username on the platform'\n        },\n        verified: {\n          type: 'boolean',\n          description: 'Whether the account has platform verification (blue checkmark).'\n        },\n        avatar_url: {\n          type: 'string',\n          description: 'Profile picture URL'\n        },\n        engagement_rate: {\n          type: 'number',\n          description: 'Engagement rate percentage (0-100). Formula: (avg_likes + avg_comments) / follower_count × 100. \\nBased on last 12 posts. null if account is private or has <3 posts.\\n'\n        },\n        external_url: {\n          type: 'string',\n          description: 'External website URL'\n        },\n        follower_count: {\n          type: 'number',\n          description: 'Total number of followers on this platform.\\nnull if data is unavailable or account is private.\\n'\n        }\n      },\n      required: [        'id',\n        'bio',\n        'creator_profile_id',\n        'display_name',\n        'platform',\n        'username',\n        'verified'\n      ]\n    },\n    social_account_detailed: {\n      allOf: [        {\n          $ref: '#/$defs/social_account_lite'\n        }\n      ],\n      description: 'Extended social account information with detailed metrics'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      mode: {
        type: 'string',
        description: 'Response detail level',
        enum: ['lite', 'detailed'],
      },
      platforms: {
        type: 'string',
        description: 'Comma-separated list of platforms to include (instagram, tiktok)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: InflushipAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.creators.listProfiles(id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
