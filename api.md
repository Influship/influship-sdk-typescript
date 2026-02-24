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

- <code><a href="./src/resources/search.ts">SearchCreateResponse</a></code>

Methods:

- <code title="post /v1/search">client.search.<a href="./src/resources/search.ts">create</a>({ ...params }) -> SearchCreateResponse</code>

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

- <code title="get /v1/posts">client.posts.<a href="./src/resources/posts.ts">list</a>({ ...params }) -> PostListResponsesCursor</code>

# Raw

## Instagram

Types:

- <code><a href="./src/resources/raw/instagram.ts">InstagramGetProfileResponse</a></code>

Methods:

- <code title="get /v1/raw/instagram/profile/{username}">client.raw.instagram.<a href="./src/resources/raw/instagram.ts">getProfile</a>(username, { ...params }) -> InstagramGetProfileResponse</code>

## Youtube

Types:

- <code><a href="./src/resources/raw/youtube.ts">YoutubeGetChannelResponse</a></code>
- <code><a href="./src/resources/raw/youtube.ts">YoutubeGetChannelTranscriptsResponse</a></code>
- <code><a href="./src/resources/raw/youtube.ts">YoutubeGetTranscriptResponse</a></code>
- <code><a href="./src/resources/raw/youtube.ts">YoutubeSearchResponse</a></code>

Methods:

- <code title="get /v1/raw/youtube/channel/{handle}">client.raw.youtube.<a href="./src/resources/raw/youtube.ts">getChannel</a>(handle, { ...params }) -> YoutubeGetChannelResponse</code>
- <code title="get /v1/raw/youtube/channel-transcripts/{handle}">client.raw.youtube.<a href="./src/resources/raw/youtube.ts">getChannelTranscripts</a>(handle, { ...params }) -> YoutubeGetChannelTranscriptsResponse</code>
- <code title="get /v1/raw/youtube/transcript/{video_id}">client.raw.youtube.<a href="./src/resources/raw/youtube.ts">getTranscript</a>(videoID, { ...params }) -> YoutubeGetTranscriptResponse</code>
- <code title="get /v1/raw/youtube/search">client.raw.youtube.<a href="./src/resources/raw/youtube.ts">search</a>({ ...params }) -> YoutubeSearchResponse</code>
