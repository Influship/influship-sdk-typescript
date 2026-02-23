# Shared

Types:

- <code><a href="./src/resources/shared.ts">ProfileSummary</a></code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Creators

Types:

- <code><a href="./src/resources/creators.ts">CreatorRetrieveResponse</a></code>
- <code><a href="./src/resources/creators.ts">CreatorAutocompleteResponse</a></code>
- <code><a href="./src/resources/creators.ts">CreatorLookalikeResponse</a></code>
- <code><a href="./src/resources/creators.ts">CreatorMatchResponse</a></code>

Methods:

- <code title="get /v1/creators/{id}">client.creators.<a href="./src/resources/creators.ts">retrieve</a>(id, { ...params }) -> CreatorRetrieveResponse</code>
- <code title="get /v1/creators/autocomplete">client.creators.<a href="./src/resources/creators.ts">autocomplete</a>({ ...params }) -> CreatorAutocompleteResponse</code>
- <code title="post /v1/creators/lookalike">client.creators.<a href="./src/resources/creators.ts">lookalike</a>({ ...params }) -> CreatorLookalikeResponse</code>
- <code title="post /v1/creators/match">client.creators.<a href="./src/resources/creators.ts">match</a>({ ...params }) -> CreatorMatchResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchQueryResponse</a></code>

Methods:

- <code title="post /v1/search">client.search.<a href="./src/resources/search.ts">query</a>({ ...params }) -> SearchQueryResponse</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles.ts">ProfileGetResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileLookupResponse</a></code>

Methods:

- <code title="get /v1/profiles/{platform}/{username}">client.profiles.<a href="./src/resources/profiles.ts">get</a>(username, { ...params }) -> ProfileGetResponse</code>
- <code title="post /v1/profiles/lookup">client.profiles.<a href="./src/resources/profiles.ts">lookup</a>({ ...params }) -> ProfileLookupResponse</code>

# Posts

Types:

- <code><a href="./src/resources/posts.ts">PostListResponse</a></code>

Methods:

- <code title="get /v1/posts">client.posts.<a href="./src/resources/posts.ts">list</a>({ ...params }) -> PostListResponse</code>

# Live

# Raw
