// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.health.check',
    fullyQualifiedName: 'health.check',
    httpMethod: 'get',
    httpPath: '/health',
  },
  {
    clientCallName: 'client.creators.retrieve',
    fullyQualifiedName: 'creators.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/creators/{id}',
  },
  {
    clientCallName: 'client.creators.autocomplete',
    fullyQualifiedName: 'creators.autocomplete',
    httpMethod: 'get',
    httpPath: '/v1/creators/autocomplete',
  },
  {
    clientCallName: 'client.creators.lookalike',
    fullyQualifiedName: 'creators.lookalike',
    httpMethod: 'post',
    httpPath: '/v1/creators/lookalike',
  },
  {
    clientCallName: 'client.creators.match',
    fullyQualifiedName: 'creators.match',
    httpMethod: 'post',
    httpPath: '/v1/creators/match',
  },
  {
    clientCallName: 'client.search.query',
    fullyQualifiedName: 'search.query',
    httpMethod: 'post',
    httpPath: '/v1/search',
  },
  {
    clientCallName: 'client.profiles.get',
    fullyQualifiedName: 'profiles.get',
    httpMethod: 'get',
    httpPath: '/v1/profiles/{platform}/{username}',
  },
  {
    clientCallName: 'client.profiles.lookup',
    fullyQualifiedName: 'profiles.lookup',
    httpMethod: 'post',
    httpPath: '/v1/profiles/lookup',
  },
  {
    clientCallName: 'client.posts.list',
    fullyQualifiedName: 'posts.list',
    httpMethod: 'get',
    httpPath: '/v1/posts',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
