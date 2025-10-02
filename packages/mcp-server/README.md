# Influship API TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export INFLUSHIP_API_KEY="My API Key"
npx -y influship-api-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "influship_api": {
      "command": "npx",
      "args": ["-y", "influship-api-mcp", "--client=claude", "--tools=all"],
      "env": {
        "INFLUSHIP_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------- | ------------------------ | --------------- |
| `X-API-Key` | `apiKey` | ApiKeyAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "influship_api": {
      "url": "http://localhost:3000",
      "headers": {
        "X-API-Key": "My API Key"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "influship-api-mcp/server";

// import a specific tool
import checkHealth from "influship-api-mcp/tools/health/check-health";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [checkHealth, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `health`:

- `check_health` (`read`): Check the health status of the API

### Resource `search`:

- `find_creators_search` (`write`): Find influencers using AI-powered search with natural language queries and optional filters.

  **Pricing**:

  - Base: 2.0 credits per creator returned
  - Detailed mode: Additional 0.05 credits per social account profile
  - **Example**: 10 creators in lite mode = 20 credits
  - **Example**: 10 creators with avg 2 profiles each in detailed mode = 20 + (10 × 2 × 0.05) = 21 credits

### Resource `creators`:

- `retrieve_creators` (`read`): Get creator-level information (person data) for one or multiple creators by their IDs.

  This endpoint returns basic creator profile data including name, bio, avatar, and status information.
  For platform-specific data (follower counts, engagement rates, etc.), use the `/v1/creators/{id}/profiles` endpoint.

  **Creator vs Profile Data:**

  - **Creator data**: Person-level information (name, bio, avatar, status)
  - **Profile data**: Platform-specific data (follower counts, engagement, metrics)

  **Pricing**: 0.1 credits per creator profile returned

- `autocomplete_creators` (`read`): Search creators by partial name or on-platform username for autocomplete suggestions.

  This endpoint searches across both global creator names and platform-specific
  usernames/display names from all platforms. Use the platform parameter to filter
  results to only show creators that have profiles on the specified platform.

  Use the scope parameter to control response granularity:

  - `creator_only`: Returns only creator profile data (id, name, avatar)
  - `matched_platforms`: Returns creator data + only the social accounts that matched the search
  - `all_platforms`: Returns creator data + all social accounts (default)

  This endpoint is optimized for fast autocomplete functionality and returns
  lightweight results suitable for dropdown suggestions.

  **Pricing**: 0.001 credits per request

- `list_profiles_creators` (`read`): **EXPLORATION ENDPOINT**: Get all social account data when you know a creator UUID.

  **🎯 When to use this endpoint:**

  - ✅ You have a creator UUID (from `/v1/creators` or `/v1/profiles` response)
  - ✅ You want to see all social accounts for a creator (Instagram, TikTok, etc.)
  - ✅ You need comprehensive social account data for a creator
  - ✅ You want to explore all platforms a creator is on

  **❌ When NOT to use this endpoint:**

  - ❌ You only have a username and platform (use `/v1/profiles` instead)
  - ❌ You don't have a creator UUID (use `/v1/profiles` to discover first)

  **📊 Response Format:**
  Returns `SocialAccountLite` or `SocialAccountDetailed` objects with identical structure to `/v1/profiles`.
  Both endpoints return the same data structure for consistency.

  **🔗 Data Relationships:**

  - This endpoint requires a creator UUID (not a social account ID)
  - Use `creator_profile_id` from `/v1/profiles` response as the `{id}` parameter
  - Returns all social accounts associated with that creator
  - Filter by platform using the `platforms` query parameter

  **🔄 Typical Workflow:**

  1. **Discovery**: Call `/v1/profiles` with username+platform → get social account data + creator_profile_id
  2. **All Accounts**: Call `/v1/creators/{creator_profile_id}/profiles` → get all social accounts for that creator
  3. **Creator Data**: Call `/v1/creators` with creator_profile_id → get creator-level data

  **⚙️ Parameters:**

  - `mode`: `lite` (default) or `detailed` - controls response detail level
  - `platforms`: Comma-separated list of platforms to filter (e.g., `instagram,tiktok`)
    **Pricing**: 0.01-0.05 credits per social account (lite/detailed mode)

### Resource `profiles`:

- `lookup_profiles` (`write`): **DISCOVERY ENDPOINT**: Look up social account data when you know a username and platform.

  **🎯 When to use this endpoint:**

  - ✅ You have a username and platform (e.g., @fitness_guru on Instagram)
  - ✅ You want to discover who a social account belongs to
  - ✅ You need to look up specific social accounts by username
  - ✅ You want to get social account metrics for known usernames

  **❌ When NOT to use this endpoint:**

  - ❌ You already have a creator UUID (use `/v1/creators/{id}/profiles` instead)
  - ❌ You want to get all accounts for a creator (use `/v1/creators/{id}/profiles` instead)

  **📊 Response Format:**
  Returns `SocialAccountLite` or `SocialAccountDetailed` objects with identical structure to `/v1/creators/{id}/profiles`.
  Both endpoints return the same data structure for consistency.

  **🔗 Data Relationships:**

  - Use the `creator_profile_id` field to fetch creator-level data via `/v1/creators`
  - Use the `creator_profile_id` to get all social accounts via `/v1/creators/{id}/profiles`
  - Creator-level data includes: name, bio, avatar, ai_one_line_bio
  - Social account data includes: follower_count, engagement_rate, verified, platform-specific metrics

  **🔄 Typical Workflow:**

  1. **Discovery**: Call `/v1/profiles` with username+platform → get social account data + creator_profile_id
  2. **Creator Data**: Call `/v1/creators` with creator_profile_id → get creator-level data
  3. **All Accounts**: Call `/v1/creators/{id}/profiles` with creator_profile_id → get all social accounts for that creator

  **⚙️ Parameters:**

  - `mode`: `lite` (default) or `detailed` - controls response detail level
  - `platforms`: Array of platform names to filter results (e.g., `["instagram", "tiktok"]`)
    **Pricing**: 0.01-0.05 credits per profile (lite/detailed mode)

### Resource `lookalike`:

- `find_similar_creators_lookalike` (`write`): Find creators similar to your seed creators using AI-powered similarity analysis.

  This endpoint analyzes your seed creators and finds similar influencers based on
  audience demographics, content style, and engagement patterns.

  **Pricing**:

  - Base: 1.0 credit per creator returned
  - Detailed mode: Additional 0.05 credits per social account profile
  - **Example**: 25 lookalike creators in lite mode = 25 credits
  - **Example**: 25 creators with avg 3 profiles each in detailed mode = 25 + (25 × 3 × 0.05) = 28.75 credits

### Resource `posts`:

- `analyze_posts` (`write`): Analyze a social media post for engagement metrics, content insights, and brand safety.

  Provide post via URL or post_id+platform. Optionally include AI analysis and/or brand safety features.

  **Pricing**:

  - Base: 1.0 credit per post
  - AI Analysis feature: +0.5 credits (includes summary and transcript)
  - Brand Safety feature: +0.5 credits (includes rating and risk flags)
  - **Example**: 1 post with both features = 1.0 + 0.5 + 0.5 = 2.0 credits

- `list_by_creator_posts` (`read`): Retrieve posts for a specific creator using cursor-based pagination.

  This endpoint allows you to fetch posts from a creator's social media accounts
  with optional analysis features and date filtering.

  **Pricing**:

  - Base: 0.01 credits per post returned
  - The more posts you request, the more you pay
  - Use the `limit` parameter to control costs
  - **Example**: 25 posts = 0.25 credits
  - **Example**: 100 posts = 1.0 credit

### Resource `match`:

- `analyze_match` (`write`): Evaluate how well creators align with campaign requirements using AI-powered analysis.

  Provide creator references and campaign description to receive match scores (0-100),
  AI decisions (good/neutral/avoid), explanations, and supporting evidence.

  **Pricing**: 0.1 credits per creator analyzed

### Resource `brand_safety`:

- `analyze_creators_brand_safety` (`write`): Analyze creators for brand safety risks using AI-powered content analysis.

  This endpoint evaluates creators for potential brand safety issues including
  controversial content, inappropriate associations, and reputation risks.

  **Pricing**: 2.0 credits per creator analyzed

- `analyze_posts_brand_safety` (`write`): Analyze individual posts for brand safety risks.

  This endpoint evaluates specific posts for potential brand safety issues.

  **Pricing**: 0.5 credits per post analyzed

- `analyze_profiles_brand_safety` (`write`): Analyze social media profiles for brand safety risks.

  This endpoint evaluates profiles by username for potential brand safety issues.

  **Pricing**: 2.0 credits per profile analyzed
