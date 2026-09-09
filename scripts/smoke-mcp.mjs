import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(new URL('../packages/mcp-server/package.json', import.meta.url));
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { version } = require('../../package.json');
const client = new Client({ name: 'cutover-smoke', version: '1.0.0' });
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [fileURLToPath(new URL('../packages/mcp-server/dist/index.js', import.meta.url))],
  env: { PATH: process.env.PATH, INFLUSHIP_API_KEY: 'local-smoke-not-a-real-key' },
  stderr: 'inherit',
});

try {
  await client.connect(transport);
  assert.equal(client.getServerVersion().version, version);
  const names = (await client.listTools()).tools.map((tool) => tool.name);
  assert(names.includes('execute') && names.includes('search_docs'));
  const docs = await client.callTool({
    name: 'search_docs',
    arguments: { query: 'instagram profile', language: 'typescript' },
  });
  assert(!docs.isError && JSON.stringify(docs).includes('instagram'));
  const result = await client.callTool({
    name: 'execute',
    arguments: { code: 'async function run(client) { return { result: 6 * 7 }; }' },
  });
  assert(!result.isError && JSON.stringify(result).includes('42'), JSON.stringify(result));
  const blocked = await client.callTool({
    name: 'execute',
    arguments: {
      code: 'async function run(client) { try { await fetch("https://example.com"); return "unexpected-network-access"; } catch (error) { return error.name; } }',
    },
  });
  assert(JSON.stringify(blocked).includes('NotCapable'), JSON.stringify(blocked));
  console.log('MCP handshake, local docs, local execution, and network isolation passed.');
} finally {
  await client.close();
}
