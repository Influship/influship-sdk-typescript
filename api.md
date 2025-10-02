# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchItem</a></code>
- <code><a href="./src/resources/search.ts">SearchFindCreatorsResponse</a></code>

Methods:

- <code title="post /v1/search">client.search.<a href="./src/resources/search.ts">findCreators</a>({ ...params }) -> SearchFindCreatorsResponse</code>

# Creators

Types:

- <code><a href="./src/resources/creators.ts">Creator</a></code>
- <code><a href="./src/resources/creators.ts">CreatorAutocomplete</a></code>
- <code><a href="./src/resources/creators.ts">SocialAccountDetailed</a></code>
- <code><a href="./src/resources/creators.ts">SocialAccountLite</a></code>
- <code><a href="./src/resources/creators.ts">CreatorRetrieveResponse</a></code>
- <code><a href="./src/resources/creators.ts">CreatorAutocompleteResponse</a></code>
- <code><a href="./src/resources/creators.ts">CreatorListProfilesResponse</a></code>

Methods:

- <code title="get /v1/creators">client.creators.<a href="./src/resources/creators.ts">retrieve</a>({ ...params }) -> CreatorRetrieveResponse</code>
- <code title="get /v1/creators/autocomplete">client.creators.<a href="./src/resources/creators.ts">autocomplete</a>({ ...params }) -> CreatorAutocompleteResponse</code>
- <code title="get /v1/creators/{id}/profiles">client.creators.<a href="./src/resources/creators.ts">listProfiles</a>(id, { ...params }) -> CreatorListProfilesResponse</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles.ts">CreatorReferenceByHandle</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileLookupResponse</a></code>

Methods:

- <code title="post /v1/profiles">client.profiles.<a href="./src/resources/profiles.ts">lookup</a>({ ...params }) -> ProfileLookupResponse</code>

# Lookalike

Types:

- <code><a href="./src/resources/lookalike.ts">LookalikeSeedBase</a></code>
- <code><a href="./src/resources/lookalike.ts">LookalikeFindSimilarCreatorsResponse</a></code>

Methods:

- <code title="post /v1/lookalike">client.lookalike.<a href="./src/resources/lookalike.ts">findSimilarCreators</a>({ ...params }) -> LookalikeFindSimilarCreatorsResponse</code>

# Posts

Types:

- <code><a href="./src/resources/posts.ts">AIAnalysis</a></code>
- <code><a href="./src/resources/posts.ts">CursorPagination</a></code>
- <code><a href="./src/resources/posts.ts">PostAnalysis</a></code>
- <code><a href="./src/resources/posts.ts">PostListByCreatorResponse</a></code>

Methods:

- <code title="post /v1/posts/analyze">client.posts.<a href="./src/resources/posts.ts">analyze</a>({ ...params }) -> PostAnalysis</code>
- <code title="get /v1/posts/by-creator">client.posts.<a href="./src/resources/posts.ts">listByCreator</a>({ ...params }) -> PostListByCreatorResponse</code>

# Match

Types:

- <code><a href="./src/resources/match.ts">CreatorReferenceByID</a></code>
- <code><a href="./src/resources/match.ts">MatchResult</a></code>
- <code><a href="./src/resources/match.ts">MatchAnalyzeResponse</a></code>

Methods:

- <code title="post /v1/match">client.match.<a href="./src/resources/match.ts">analyze</a>({ ...params }) -> MatchAnalyzeResponse</code>

# BrandSafety

Types:

- <code><a href="./src/resources/brand-safety.ts">BrandSafetyAnalysis</a></code>
- <code><a href="./src/resources/brand-safety.ts">BrandSafetyFlag</a></code>
- <code><a href="./src/resources/brand-safety.ts">BrandSafetyResult</a></code>
- <code><a href="./src/resources/brand-safety.ts">BrandSafetyAnalyzeCreatorsResponse</a></code>
- <code><a href="./src/resources/brand-safety.ts">BrandSafetyAnalyzePostsResponse</a></code>
- <code><a href="./src/resources/brand-safety.ts">BrandSafetyAnalyzeProfilesResponse</a></code>

Methods:

- <code title="post /v1/brand-safety/creators">client.brandSafety.<a href="./src/resources/brand-safety.ts">analyzeCreators</a>({ ...params }) -> BrandSafetyAnalyzeCreatorsResponse</code>
- <code title="post /v1/brand-safety/posts">client.brandSafety.<a href="./src/resources/brand-safety.ts">analyzePosts</a>({ ...params }) -> BrandSafetyAnalyzePostsResponse</code>
- <code title="post /v1/brand-safety/profiles">client.brandSafety.<a href="./src/resources/brand-safety.ts">analyzeProfiles</a>({ ...params }) -> BrandSafetyAnalyzeProfilesResponse</code>
