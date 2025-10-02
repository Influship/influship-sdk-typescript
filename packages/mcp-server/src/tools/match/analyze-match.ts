// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'influship-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'influship-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import InflushipAPI from 'influship';

export const metadata: Metadata = {
  resource: 'match',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/match',
  operationId: 'matchCreators',
};

export const tool: Tool = {
  name: 'analyze_match',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEvaluate how well creators align with campaign requirements using AI-powered analysis.\n\nProvide creator references and campaign description to receive match scores (0-100),\nAI decisions (good/neutral/avoid), explanations, and supporting evidence.\n\n**Pricing**: 0.1 credits per creator analyzed\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/match_result'\n      }\n    }\n  },\n  $defs: {\n    match_result: {\n      type: 'object',\n      properties: {\n        creator: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            platform: {\n              type: 'string',\n              enum: [                'instagram'\n              ]\n            },\n            username: {\n              type: 'string'\n            }\n          }\n        },\n        decision: {\n          type: 'string',\n          description: 'AI recommendation decision:\\n- `good`: Strong fit for the campaign, recommended\\n- `neutral`: Acceptable fit, evaluate based on other factors\\n- `avoid`: Not recommended for this campaign',\n          enum: [            'good',\n            'neutral',\n            'avoid'\n          ]\n        },\n        evidence: {\n          type: 'array',\n          description: 'Array of specific evidence supporting the match decision.\\nIncludes relevant content examples and audience insights.\\n',\n          items: {\n            type: 'string'\n          }\n        },\n        explanation: {\n          type: 'string',\n          description: 'Human-readable explanation of the match assessment.\\nSummarizes why this creator fits or doesn\\'t fit the campaign.\\n'\n        },\n        match_score: {\n          type: 'number',\n          description: 'Match score from 0 to 100 indicating campaign fit.\\n- 80-100: Excellent match\\n- 60-79: Good match\\n- 40-59: Moderate match\\n- 0-39: Poor match\\n'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      creators: {
        type: 'array',
        description: 'Creators to match against campaign. Max 100 creators per request.',
        items: {
          anyOf: [
            {
              $ref: '#/$defs/creator_reference_by_id',
            },
            {
              $ref: '#/$defs/creator_reference_by_handle',
            },
          ],
          description: 'Creator identifier supplied either by ID or by platform username',
        },
      },
      search_intent: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Campaign search intent',
          },
          context: {
            type: 'string',
            description: 'Additional context for matching',
          },
        },
        required: ['query'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['creators', 'search_intent'],
    $defs: {
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.match.analyze(body)));
};

export default { metadata, tool, handler };
