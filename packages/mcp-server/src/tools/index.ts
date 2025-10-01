// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import check_health from './health/check-health';
import find_creators_search from './search/find-creators-search';
import retrieve_creators from './creators/retrieve-creators';
import autocomplete_creators from './creators/autocomplete-creators';
import list_profiles_creators from './creators/list-profiles-creators';
import lookup_profiles from './profiles/lookup-profiles';
import find_similar_creators_lookalike from './lookalike/find-similar-creators-lookalike';
import analyze_posts from './posts/analyze-posts';
import list_by_creator_posts from './posts/list-by-creator-posts';
import analyze_match from './match/analyze-match';
import analyze_creators_brand_safety from './brand-safety/analyze-creators-brand-safety';
import analyze_posts_brand_safety from './brand-safety/analyze-posts-brand-safety';
import analyze_profiles_brand_safety from './brand-safety/analyze-profiles-brand-safety';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(check_health);
addEndpoint(find_creators_search);
addEndpoint(retrieve_creators);
addEndpoint(autocomplete_creators);
addEndpoint(list_profiles_creators);
addEndpoint(lookup_profiles);
addEndpoint(find_similar_creators_lookalike);
addEndpoint(analyze_posts);
addEndpoint(list_by_creator_posts);
addEndpoint(analyze_match);
addEndpoint(analyze_creators_brand_safety);
addEndpoint(analyze_posts_brand_safety);
addEndpoint(analyze_profiles_brand_safety);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
