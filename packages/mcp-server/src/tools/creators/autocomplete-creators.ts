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
  httpPath: '/v1/creators/autocomplete',
  operationId: 'searchCreatorsAutocomplete',
};

export const tool: Tool = {
  name: 'autocomplete_creators',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch creators by partial name or on-platform username for autocomplete suggestions.\n\nThis endpoint searches across both global creator names and platform-specific \nusernames/display names from all platforms. Use the platform parameter to filter \nresults to only show creators that have profiles on the specified platform.\n\nUse the scope parameter to control response granularity:\n- `creator_only`: Returns only creator profile data (id, name, avatar)\n- `matched_platforms`: Returns creator data + only the social accounts that matched the search\n- `all_platforms`: Returns creator data + all social accounts (default)\n\nThis endpoint is optimized for fast autocomplete functionality and returns\nlightweight results suitable for dropdown suggestions.\n\n**Pricing**: 0.001 credits per request\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/creator_autocomplete_response',\n  $defs: {\n    creator_autocomplete_response: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer'\n        },\n        ok: {\n          type: 'boolean'\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              avatar: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              platforms: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    display_name: {\n                      type: 'string'\n                    },\n                    match_field: {\n                      type: 'string'\n                    },\n                    match_type: {\n                      type: 'string',\n                      enum: [                        'name',\n                        'username',\n                        'display_name'\n                      ]\n                    },\n                    platform: {\n                      type: 'string'\n                    },\n                    username: {\n                      type: 'string'\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      q: {
        type: 'string',
        description: 'Search query text (partial name/username)',
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of results to return',
      },
      platform: {
        type: 'string',
        description:
          'Filter results to only show creators that have profiles on this specific platform. If not provided, returns creators from all platforms.',
        enum: ['instagram', 'tiktok'],
      },
      scope: {
        type: 'string',
        description: 'Control the granularity of returned data',
        enum: ['creator_only', 'matched_platforms', 'all_platforms'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['q'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: InflushipAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.creators.autocomplete(body)));
  } catch (error) {
    if (error instanceof InflushipAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
