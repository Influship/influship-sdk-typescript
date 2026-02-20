// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'influship-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import InflushipAPI from 'influship';

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
    'Find creators similar to your seed creators using AI-powered similarity analysis.\n\nThis endpoint analyzes your seed creators and finds similar influencers based on\naudience demographics, content style, and engagement patterns.\n\n**Pricing**:\n- Base: 1.0 credit per creator returned\n- Detailed mode: Additional 0.05 credits per social account profile\n- **Example**: 25 lookalike creators in lite mode = 25 credits\n- **Example**: 25 creators with avg 3 profiles each in detailed mode = 25 + (25 × 3 × 0.05) = 28.75 credits\n',
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
  const body = args as any;
  try {
    return asTextContentResult(await client.lookalike.findSimilarCreators(body));
  } catch (error) {
    if (error instanceof InflushipAPI.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
