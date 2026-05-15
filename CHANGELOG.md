# Changelog

## 0.8.1 (2026-05-15)

Full Changelog: [v0.8.0...v0.8.1](https://github.com/Influship/influship-sdk-typescript/compare/v0.8.0...v0.8.1)

### Bug Fixes

* **api:** remove source field from instagram transcript responses ([841391f](https://github.com/Influship/influship-sdk-typescript/commit/841391f4cf38334f682b242656a26638643c1732))

## 0.8.0 (2026-05-14)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/Influship/influship-sdk-typescript/compare/v0.7.0...v0.8.0)

### Features

* **api:** add getPost/getTranscript methods and fields to instagram ([8d37459](https://github.com/Influship/influship-sdk-typescript/commit/8d3745968dcb902d8eef329fecb378be5bb5c9ce))

## 0.7.0 (2026-05-09)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/Influship/influship-sdk-typescript/compare/v0.6.0...v0.7.0)

### Features

* **api:** add creator_kinds parameter to search.create ([290edb1](https://github.com/Influship/influship-sdk-typescript/commit/290edb1a0e46723b2d2721cc8087f56aa6b343e7))


### Chores

* redact api-key headers in debug logs ([de059df](https://github.com/Influship/influship-sdk-typescript/commit/de059df0223cf692cadf308efdecdd3ecb64f808))


### Documentation

* update http mcp docs ([9b8a494](https://github.com/Influship/influship-sdk-typescript/commit/9b8a4949cf27aec23023a9f2bf4de179d38a2990))

## 0.6.0 (2026-05-05)

Full Changelog: [v0.5.2...v0.6.0](https://github.com/Influship/influship-sdk-typescript/compare/v0.5.2...v0.6.0)

### Features

* **api:** add audience_demographics/brand_alignment/key_facts/vibe to creators retrieve ([1b034f9](https://github.com/Influship/influship-sdk-typescript/commit/1b034f98e412096b7e281fee843248236a2a1d21))

## 0.5.2 (2026-05-04)

Full Changelog: [v0.5.1...v0.5.2](https://github.com/Influship/influship-sdk-typescript/compare/v0.5.1...v0.5.2)

### Bug Fixes

* **types:** make include optional in creators.retrieve ([b3e4e3a](https://github.com/Influship/influship-sdk-typescript/commit/b3e4e3a8eba0434e808fdb38c004e4dfd83d86f2))

## 0.5.1 (2026-05-02)

Full Changelog: [v0.5.0...v0.5.1](https://github.com/Influship/influship-sdk-typescript/compare/v0.5.0...v0.5.1)

### Chores

* **internal:** regenerate SDK with no functional changes ([d40febb](https://github.com/Influship/influship-sdk-typescript/commit/d40febb9697d8250fa1ba876b50aafacf6846534))


### Documentation

* **api:** add MCP tool references to creators/profiles/posts/search methods ([d40f4c3](https://github.com/Influship/influship-sdk-typescript/commit/d40f4c311e489fb35bedfa6e3b52675c01a2a40d))

## 0.5.0 (2026-05-01)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/Influship/influship-sdk-typescript/compare/v0.4.0...v0.5.0)

### Features

* **api:** change publish method for ts target to OIDC ([9e283cf](https://github.com/Influship/influship-sdk-typescript/commit/9e283cfb654435a3154ef2eec9f20c2d42f69f76))


### Chores

* update SDK settings ([bf20071](https://github.com/Influship/influship-sdk-typescript/commit/bf20071c4f86def93709b2cca2c4b16eb5fe0d22))
* update SDK settings ([b26ab07](https://github.com/Influship/influship-sdk-typescript/commit/b26ab079bdd186df4bce4435fe8b56aa20e4d81e))

## 0.4.0 (2026-05-01)

Full Changelog: [v0.3.3...v0.4.0](https://github.com/Influship/influship-sdk-typescript/compare/v0.3.3...v0.4.0)

### Features

* **api:** update instagram profile, youtube channel/transcript response types ([0c4e5c0](https://github.com/Influship/influship-sdk-typescript/commit/0c4e5c0d44f856604a7dce094d31915b4bac6978))
* support setting headers via env ([39aca1e](https://github.com/Influship/influship-sdk-typescript/commit/39aca1e576b0756ff53684977862e886e719b2d3))


### Chores

* avoid formatting file that gets changed during releases ([57cc5f3](https://github.com/Influship/influship-sdk-typescript/commit/57cc5f318d5273567517cf9f8a00d159a7f73569))
* **ci:** escape input path in publish-npm workflow ([1293f91](https://github.com/Influship/influship-sdk-typescript/commit/1293f91c04d9203b6805446c77384368f07080c2))
* **ci:** skip lint on metadata-only changes ([c95e7ab](https://github.com/Influship/influship-sdk-typescript/commit/c95e7ab02921050360e41afc8964bcd97a7dc626))
* **format:** run eslint and prettier separately ([c5cdeab](https://github.com/Influship/influship-sdk-typescript/commit/c5cdeabf3bfb96b6f9bf028b7565d294e8952bcf))
* **internal:** codegen related update ([aceb42c](https://github.com/Influship/influship-sdk-typescript/commit/aceb42cb7ce6d09dd53142b2491a6ab4acad165c))
* **internal:** codegen related update ([417f634](https://github.com/Influship/influship-sdk-typescript/commit/417f634940ebaef527d289a35e53fefdf5fd67d2))
* **internal:** codegen related update ([8b7ce85](https://github.com/Influship/influship-sdk-typescript/commit/8b7ce8573329da8ee67047b40890475245216f7a))
* **internal:** codegen related update ([cb07a1a](https://github.com/Influship/influship-sdk-typescript/commit/cb07a1ac75a9bd424a7eef3f7826c4a4757d8905))
* **internal:** fix MCP docker image builds in yarn projects ([345ed15](https://github.com/Influship/influship-sdk-typescript/commit/345ed151d171c7aecc1dbf89155bb40c288297a4))
* **internal:** fix MCP server import ordering ([20e0bc6](https://github.com/Influship/influship-sdk-typescript/commit/20e0bc6bd2596228f91ae5f49aad3cb46062d07a))
* **internal:** improve local docs search for MCP servers ([06f4d99](https://github.com/Influship/influship-sdk-typescript/commit/06f4d99b016cb4f69e4750c4cac609092a95f070))
* **internal:** improve local docs search for MCP servers ([5be75f7](https://github.com/Influship/influship-sdk-typescript/commit/5be75f798f5b6c1159453fc900fbc99641c1b67b))
* **internal:** more robust bootstrap script ([67549c1](https://github.com/Influship/influship-sdk-typescript/commit/67549c12339128eb287d8ec623b85bdb2af17b1d))
* **internal:** rename MCP server package from influship-mcp to influship-api-mcp ([b965d1e](https://github.com/Influship/influship-sdk-typescript/commit/b965d1ef793b55afb79f1cb35374cee3cfe5ee7d))
* **internal:** show error causes in MCP servers when running in local mode ([2a2a2a4](https://github.com/Influship/influship-sdk-typescript/commit/2a2a2a44af55ad4064187df4780532030ee6b4ad))
* **internal:** support custom-instructions-path flag in MCP servers ([7ea25f0](https://github.com/Influship/influship-sdk-typescript/commit/7ea25f0adfdc9a03bec88dad6ed22f0bacfeed02))
* **internal:** support local docs search in MCP servers ([49c7920](https://github.com/Influship/influship-sdk-typescript/commit/49c792023f321c6579ef4332df2ab70ad98ba6c1))
* **internal:** support type annotations when running MCP in local execution mode ([39c12b6](https://github.com/Influship/influship-sdk-typescript/commit/39c12b6111ab96c5dd31d44c0862c00beb3ddeb1))
* **internal:** use link instead of file in MCP server package.json files ([4a5bc04](https://github.com/Influship/influship-sdk-typescript/commit/4a5bc040286911e206c3bf9440a0d7c79a0269b6))
* **mcp-server:** add support for session id, forward client info ([bc18dde](https://github.com/Influship/influship-sdk-typescript/commit/bc18dde4f45b1a1e54b9d2fa3bd98f6d306454ff))
* **mcp-server:** increase local docs search result count from 5 to 10 ([a6c38ff](https://github.com/Influship/influship-sdk-typescript/commit/a6c38ff04c87e42903f7e5b1e4dbe4d084de7ab1))
* **mcp-server:** log client info ([f33d640](https://github.com/Influship/influship-sdk-typescript/commit/f33d640a9a5edd1678ad4f9680ef82d30e4fe116))
* restructure docs search code ([c61506c](https://github.com/Influship/influship-sdk-typescript/commit/c61506cb2409fe71ebd298e97522d33d1b77f501))
* update SDK settings ([65f0280](https://github.com/Influship/influship-sdk-typescript/commit/65f02802cad2d0ff29d3434442e20dc1af67adf6))
* update SDK settings ([76f614c](https://github.com/Influship/influship-sdk-typescript/commit/76f614c217554062694bd736aa0e51680bd67907))


### Documentation

* update examples ([783a861](https://github.com/Influship/influship-sdk-typescript/commit/783a86153f74c22b46e87e13a8512e2f195e12e3))

## 0.3.3 (2026-03-24)

Full Changelog: [v0.3.2...v0.3.3](https://github.com/Influship/influship-sdk-typescript/compare/v0.3.2...v0.3.3)

### Chores

* **internal:** fix MCP server TS errors that occur with required client options ([9d713ec](https://github.com/Influship/influship-sdk-typescript/commit/9d713ec6d69e3795cf2a37d7d09d6fdbdfaefc2a))
* **internal:** update gitignore ([5042f54](https://github.com/Influship/influship-sdk-typescript/commit/5042f54f5bf70cf593051463bd6c216a332441b8))

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
