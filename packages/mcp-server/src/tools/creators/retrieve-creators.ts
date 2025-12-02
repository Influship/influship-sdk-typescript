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
  httpPath: '/v1/creators',
  operationId: 'getCreatorProfiles',
};

export const tool: Tool = {
  name: 'retrieve_creators',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet creator-level information (person data) for one or multiple creators by their IDs.\n\nThis endpoint returns basic creator profile data including name, bio, avatar, and status information.\nFor platform-specific data (follower counts, engagement rates, etc.), use the `/v1/creators/{id}/profiles` endpoint.\n\n**Creator vs Profile Data:**\n- **Creator data**: Person-level information (name, bio, avatar, status)\n- **Profile data**: Platform-specific data (follower counts, engagement, metrics)\n\n\n**Pricing**: 0.1 credits per creator profile returned\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/creator_retrieve_response',\n  $defs: {\n    creator_retrieve_response: {\n      type: 'object',\n      properties: {\n        creators: {\n          type: 'array',\n          items: {\n            anyOf: [              {\n                allOf: [                  {\n                    $ref: '#/$defs/creator'\n                  }\n                ],\n                description: 'Creator with embedded social account profiles'\n              },\n              {\n                $ref: '#/$defs/creator'\n              }\n            ],\n            description: 'Creator with embedded social account profiles'\n          }\n        }\n      }\n    },\n    creator: {\n      type: 'object',\n      description: 'Basic creator information',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique creator identifier'\n        },\n        avatar: {\n          type: 'string',\n          description: 'Creator\\'s avatar URL'\n        },\n        bio: {\n          type: 'string',\n          description: 'Creator\\'s bio text'\n        },\n        name: {\n          type: 'string',\n          description: 'Creator\\'s display name'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      creator_ids: {
        type: 'string',
        description: 'Comma-separated list of creator UUIDs',
      },
      include_profiles: {
        type: 'boolean',
        description: 'Whether to include social account profiles for each creator',
      },
      profile_mode: {
        type: 'string',
        description: 'Detail level for included profiles (only used when include_profiles=true)',
        enum: ['lite', 'detailed'],
      },
      profile_platforms: {
        type: 'string',
        description:
          'Comma-separated list of platforms to include (instagram, tiktok). Only used when include_profiles=true',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['creator_ids'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: InflushipAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.creators.retrieve(body)));
  } catch (error) {
    if (error instanceof InflushipAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
