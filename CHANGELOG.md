# Changelog

## 0.3.2 (2026-03-17)

Full Changelog: [v0.3.1...v0.3.2](https://github.com/Influship/influship-sdk-typescript/compare/v0.3.1...v0.3.2)

### Chores

* **internal:** bump @modelcontextprotocol/sdk, @hono/node-server, and minimatch ([f982b62](https://github.com/Influship/influship-sdk-typescript/commit/f982b629275ba9ce6abd60ae9c9cb59e420755df))
* **internal:** configure MCP Server hosting ([46301f2](https://github.com/Influship/influship-sdk-typescript/commit/46301f201ba7f4b3c4173855c94f1c1aac1b043e))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([fa720e6](https://github.com/Influship/influship-sdk-typescript/commit/fa720e63ebd09acf1127187623c4878b5ac94c1a))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([e1812ff](https://github.com/Influship/influship-sdk-typescript/commit/e1812ff4868670826e684df0de46f7f791fc7c15))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([2f71ccb](https://github.com/Influship/influship-sdk-typescript/commit/2f71ccb14971aa9ae2d09947a17523208e35b204))
* **internal:** tweak CI branches ([4e88652](https://github.com/Influship/influship-sdk-typescript/commit/4e886528b68bcbd8d321b6c12d683b4505f3742f))
* **internal:** update dependencies to address dependabot vulnerabilities ([16eae9a](https://github.com/Influship/influship-sdk-typescript/commit/16eae9a35d3f52ac0859aebac65e31e854856ea0))

## 0.3.1 (2026-03-08)

Full Changelog: [v0.3.0...v0.3.1](https://github.com/Influship/influship-sdk-typescript/compare/v0.3.0...v0.3.1)

### Chores

* update SDK settings ([8ae1e31](https://github.com/Influship/influship-sdk-typescript/commit/8ae1e319214344034e19b3cc79d21f53e2bce1b5))

## 0.3.0 (2026-03-08)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/Influship/influship-sdk-typescript/compare/v0.2.0...v0.3.0)

### Features

* **api:** add pagination to creators lookalike method ([a6d63b7](https://github.com/Influship/influship-sdk-typescript/commit/a6d63b7eeb7474f56bdeeed3a8d4d98e1eeb0833))
* **api:** add search_id/total fields, remove cursor param from search ([2a276d0](https://github.com/Influship/influship-sdk-typescript/commit/2a276d03055bc939516505912d4b37e3f1308c08))
* Fix Stainless pagination and model warnings in SDK config ([98a9e10](https://github.com/Influship/influship-sdk-typescript/commit/98a9e1053b42e5c8ce3b1c1da227c5bc8f17fd31))
* **mcp:** add an option to disable code tool ([a49e2c9](https://github.com/Influship/influship-sdk-typescript/commit/a49e2c9b1bda3d73dd4b163f687a5206d1da783d))


### Bug Fixes

* **client:** preserve URL params already embedded in path ([47c7a8c](https://github.com/Influship/influship-sdk-typescript/commit/47c7a8c32245d52f9e92c1cdfeaf9a8a0d7aec94))
* **mcp:** update prompt ([1cce5e6](https://github.com/Influship/influship-sdk-typescript/commit/1cce5e6caaa1ae512c9348b3fd61263940e598bc))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([a9b3ff7](https://github.com/Influship/influship-sdk-typescript/commit/a9b3ff7f05f6918eb76782a20dacff023822865c))
* **internal:** codegen related update ([a59d8ea](https://github.com/Influship/influship-sdk-typescript/commit/a59d8eab8c50a870eda2b1a4689960185fb1b582))
* **internal:** codegen related update ([198c7c3](https://github.com/Influship/influship-sdk-typescript/commit/198c7c3b741b8cb8fa2a11d7675e5eefe03e201d))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([75a1b54](https://github.com/Influship/influship-sdk-typescript/commit/75a1b54d19e9e9e45aca756f67ab36843286d333))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([c6a3043](https://github.com/Influship/influship-sdk-typescript/commit/c6a304380afa2e0d55b6c9db422c32b0474af626))
* **internal:** make MCP code execution location configurable via a flag ([b29bcf7](https://github.com/Influship/influship-sdk-typescript/commit/b29bcf775bd898322576430c8db485859b910d82))
* **internal:** move stringifyQuery implementation to internal function ([f13b42b](https://github.com/Influship/influship-sdk-typescript/commit/f13b42bdb740ed1bb1a13f2042f633d87c757c7b))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([b77057e](https://github.com/Influship/influship-sdk-typescript/commit/b77057e7d4371ea74c8638420950efac0ff4a44c))
* **mcp-server:** improve instructions ([48ab5b4](https://github.com/Influship/influship-sdk-typescript/commit/48ab5b423a0f8d23182afefcbab9c2da3addf0d4))
* **mcp-server:** return access instructions for 404 without API key ([8257c18](https://github.com/Influship/influship-sdk-typescript/commit/8257c18800bb3e656fe34dfe4a696cb16a0a211d))


### Documentation

* **api:** correct pricing comment in youtube.getChannel ([2997b86](https://github.com/Influship/influship-sdk-typescript/commit/2997b86c594545a67d6c4836bab2251ad5f00449))
* **api:** update pricing information ([331d003](https://github.com/Influship/influship-sdk-typescript/commit/331d0035f13f16cf65daf4525a3ebdf3f89810fd))

## 0.2.0 (2026-02-24)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/influship/influship-sdk-typescript/compare/v0.1.0...v0.2.0)

### Features

* **api:** add instagram getProfile and youtube channel/transcript/search to raw ([abf8573](https://github.com/influship/influship-sdk-typescript/commit/abf85734a59c59b73c50f1541661bea8ecddc691))


### Bug Fixes

* **docs/contributing:** correct pnpm link command ([c9409a6](https://github.com/influship/influship-sdk-typescript/commit/c9409a628bc918216cbb28d4e43e5cbd540b9274))


### Chores

* **internal:** update repository references from inf-labs to influship ([375ee35](https://github.com/influship/influship-sdk-typescript/commit/375ee355691fcdc79aaa13d1648a73e6709f1634))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([2ffda1c](https://github.com/influship/influship-sdk-typescript/commit/2ffda1c7c32f8843f5cf03ba1cb97436b9d7b6a7))
* sync repo ([dab28ce](https://github.com/influship/influship-sdk-typescript/commit/dab28ce90d232523e49d57fdc94b6503efad30a4))

## 0.1.0 (2025-10-01)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/Influship/influship-sdk-typescript/compare/v0.0.1...v0.1.0)

### Features

* **api:** Config ([3bc99c9](https://github.com/Influship/influship-sdk-typescript/commit/3bc99c93be1bfa310b4396e372d2d38985d3e937))


### Chores

* configure new SDK language ([322b5bf](https://github.com/Influship/influship-sdk-typescript/commit/322b5bff499f1d6d6e1f88b0311c0e5115bb429e))
* update SDK settings ([10cd49b](https://github.com/Influship/influship-sdk-typescript/commit/10cd49b0c89f1635b3357b1ac98a0e4692d8ec8b))
