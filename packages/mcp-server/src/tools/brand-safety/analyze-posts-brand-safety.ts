// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'influship-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'influship-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import InflushipAPI from 'influship-api';

export const metadata: Metadata = {
  resource: 'brand_safety',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/brand-safety/posts',
  operationId: 'analyzePostsBrandSafety',
};

export const tool: Tool = {
  name: 'analyze_posts_brand_safety',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAnalyze individual posts for brand safety risks.\n\nThis endpoint evaluates specific posts for potential brand safety issues.\n\n**Pricing**: 0.5 credits per post analyzed\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    results: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/brand_safety_result'\n      }\n    }\n  },\n  $defs: {\n    brand_safety_result: {\n      type: 'object',\n      description: 'Result of brand safety analysis',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the analysis result'\n        },\n        analysis: {\n          $ref: '#/$defs/brand_safety_analysis'\n        }\n      },\n      required: [        'id',\n        'analysis'\n      ]\n    },\n    brand_safety_analysis: {\n      type: 'object',\n      description: 'Brand safety analysis results',\n      properties: {\n        flags: {\n          type: 'array',\n          description: 'Specific safety concerns detected. Empty array = no issues found.',\n          items: {\n            $ref: '#/$defs/brand_safety_flag'\n          }\n        },\n        metadata: {\n          type: 'object',\n          properties: {\n            analysis_date: {\n              type: 'string',\n              description: 'When the analysis was performed',\n              format: 'date-time'\n            },\n            content_analyzed: {\n              type: 'object',\n              description: 'Information about the content that was analyzed',\n              properties: {\n                media_count: {\n                  type: 'number',\n                  description: 'Number of media items analyzed'\n                },\n                text_length: {\n                  type: 'number',\n                  description: 'Length of text content analyzed'\n                }\n              }\n            },\n            model_version: {\n              type: 'string',\n              description: 'Version of the AI model used for analysis'\n            },\n            processing_time_ms: {\n              type: 'number',\n              description: 'Processing time in milliseconds'\n            }\n          },\n          required: [            'analysis_date',\n            'content_analyzed',\n            'model_version',\n            'processing_time_ms'\n          ]\n        },\n        overall_confidence: {\n          type: 'number',\n          description: 'Confidence score (0-1) for the rating. >0.8 = high confidence.'\n        },\n        rating: {\n          type: 'string',\n          description: 'Brand safety rating. A = safe (no risks), B = moderate concerns, C = significant risks.',\n          enum: [            'A',\n            'B',\n            'C'\n          ]\n        },\n        reasoning: {\n          type: 'string',\n          description: 'Detailed reasoning explaining the analysis result.\\nIncludes context about content analyzed and decision factors.\\n'\n        },\n        summary: {\n          type: 'string',\n          description: 'Human-readable summary of the assessment.'\n        }\n      },\n      required: [        'flags',\n        'metadata',\n        'overall_confidence',\n        'rating',\n        'reasoning',\n        'summary'\n      ]\n    },\n    brand_safety_flag: {\n      type: 'object',\n      description: 'Individual brand safety flag with detailed information',\n      properties: {\n        confidence: {\n          type: 'number',\n          description: 'Confidence score for this specific flag (0-1).\\nHigher values indicate greater certainty about this concern.\\n'\n        },\n        description: {\n          type: 'string',\n          description: 'Human-readable description explaining the concern.\\nProvides context about what was detected.\\n'\n        },\n        severity: {\n          type: 'string',\n          description: 'Severity level of the concern:\\n- `low`: Minor issue, may be acceptable for some brands\\n- `medium`: Moderate concern, evaluate based on brand guidelines\\n- `high`: Significant risk, likely unsuitable for most brands',\n          enum: [            'low',\n            'medium',\n            'high'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Category of brand safety concern detected:\\n- `adult_sexual_content`: Sexually explicit or suggestive content\\n- `profanity_strong_language`: Profanity or offensive language\\n- `drugs_alcohol_tobacco`: Drug, alcohol, or tobacco-related content\\n- `violence_weapons`: Violent content or weapon references\\n- `hate_discrimination`: Hate speech or discriminatory content\\n- `political_social_issues`: Politically divisive or controversial topics\\n- `misinformation_conspiracy`: Misinformation or conspiracy theories\\n- `misc`: Other brand safety concerns',\n          enum: [            'adult_sexual_content',\n            'profanity_strong_language',\n            'drugs_alcohol_tobacco',\n            'violence_weapons',\n            'hate_discrimination',\n            'political_social_issues',\n            'misinformation_conspiracy',\n            'misc'\n          ]\n        },\n        evidence: {\n          type: 'array',\n          description: 'Specific examples or evidence that triggered this flag.\\nMay include post excerpts or contextual information.\\n',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'confidence',\n        'description',\n        'severity',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      posts: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                platform: {
                  type: 'string',
                  description: 'Social media platform hosting the post',
                  enum: ['instagram'],
                },
                url: {
                  type: 'string',
                  description: 'URL of the post to scan',
                },
              },
              required: ['platform', 'url'],
            },
            {
              type: 'object',
              properties: {
                platform: {
                  type: 'string',
                  description: 'Social media platform hosting the post',
                  enum: ['instagram'],
                },
                post_id: {
                  type: 'string',
                  description: 'Platform-specific post identifier',
                },
              },
              required: ['platform', 'post_id'],
            },
          ],
          description: 'Post to analyze for brand safety',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['posts'],
  },
  annotations: {},
};

export const handler = async (client: InflushipAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.brandSafety.analyzePosts(body)));
};

export default { metadata, tool, handler };
