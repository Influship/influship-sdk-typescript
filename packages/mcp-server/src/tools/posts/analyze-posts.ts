// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'influship-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import InflushipAPI from 'influship';

export const metadata: Metadata = {
  resource: 'posts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/posts/analyze',
  operationId: 'analyzePost',
};

export const tool: Tool = {
  name: 'analyze_posts',
  description:
    'Analyze a social media post for engagement metrics, content insights, and brand safety.\n\nProvide post via URL or post_id+platform. Optionally include AI analysis and/or brand safety features.\n\n**Pricing**:\n- Base: 1.0 credit per post\n- AI Analysis feature: +0.5 credits (includes summary and transcript)\n- Brand Safety feature: +0.5 credits (includes rating and risk flags)\n- **Example**: 1 post with both features = 1.0 + 0.5 + 0.5 = 2.0 credits\n',
  inputSchema: {
    type: 'object',
    properties: {
      features: {
        type: 'array',
        description: 'Analysis features to include',
        items: {
          type: 'string',
          enum: ['ai_analysis', 'brand_safety'],
        },
      },
      platform: {
        type: 'string',
        description: 'Social media platform (required when using post_id)',
        enum: ['instagram', 'tiktok'],
      },
      post_id: {
        type: 'string',
        description: 'Platform-specific post ID',
      },
      url: {
        type: 'string',
        description: 'Public URL of the post to analyze',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: InflushipAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.posts.analyze(body));
};

export default { metadata, tool, handler };
