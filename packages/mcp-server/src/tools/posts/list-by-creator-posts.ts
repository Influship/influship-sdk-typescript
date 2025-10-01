// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'influship-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import InflushipAPI from 'influship-api';

export const metadata: Metadata = {
  resource: 'posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/posts/by-creator',
  operationId: 'getPostsByCreator',
};

export const tool: Tool = {
  name: 'list_by_creator_posts',
  description:
    "Retrieve posts for a specific creator using cursor-based pagination.\n\nThis endpoint allows you to fetch posts from a creator's social media accounts\nwith optional analysis features and date filtering.\n\n**Pricing**:\n- Base: 0.01 credits per post returned\n- The more posts you request, the more you pay\n- Use the `limit` parameter to control costs\n- **Example**: 25 posts = 0.25 credits\n- **Example**: 100 posts = 1.0 credit\n",
  inputSchema: {
    type: 'object',
    properties: {
      creator_id: {
        type: 'string',
        description: 'Creator UUID',
      },
      cursor: {
        type: 'string',
        description: 'Opaque pagination cursor from previous response. Do not construct manually.',
      },
      date_from: {
        type: 'string',
        description: 'Start date for filtering posts (ISO 8601)',
        format: 'date-time',
      },
      date_to: {
        type: 'string',
        description: 'End date for filtering posts (ISO 8601)',
        format: 'date-time',
      },
      features: {
        type: 'array',
        description:
          'Optional analysis features. `ai_analysis` adds summary/transcript. `brand_safety` adds rating/flags. Each feature has additional cost.',
        items: {
          type: 'string',
          enum: ['ai_analysis', 'brand_safety'],
        },
      },
      limit: {
        type: 'integer',
        description: 'Number of posts per page. Min 1, max 100, default 25.',
      },
      platform: {
        type: 'string',
        description: 'Social media platform',
        enum: ['instagram', 'tiktok'],
      },
      username: {
        type: 'string',
        description: 'Social media username',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: InflushipAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.posts.listByCreator(body));
};

export default { metadata, tool, handler };
