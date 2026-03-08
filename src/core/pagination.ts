// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { InflushipError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type Influship } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: Influship;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: Influship, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new InflushipError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: Influship,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface QueryCursorResponse<Item> {
  next_cursor: string | null;

  has_more: boolean;

  data: Array<Item>;
}

export interface QueryCursorParams {
  cursor?: string;

  limit?: number;
}

export class QueryCursor<Item> extends AbstractPage<Item> implements QueryCursorResponse<Item> {
  next_cursor: string | null;

  has_more: boolean;

  data: Array<Item>;

  constructor(
    client: Influship,
    response: Response,
    body: QueryCursorResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.next_cursor = body.next_cursor || null;
    this.has_more = body.has_more || false;
    this.data = body.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  override hasNextPage(): boolean {
    if (this.has_more === false) {
      return false;
    }

    return super.hasNextPage();
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.next_cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}

export interface BodyCursorResponse<Item> {
  next_cursor: string | null;

  has_more: boolean;

  data: Array<Item>;
}

export interface BodyCursorParams {
  cursor?: string;

  limit?: number;
}

export class BodyCursor<Item> extends AbstractPage<Item> implements BodyCursorResponse<Item> {
  next_cursor: string | null;

  has_more: boolean;

  data: Array<Item>;

  constructor(
    client: Influship,
    response: Response,
    body: BodyCursorResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.next_cursor = body.next_cursor || null;
    this.has_more = body.has_more || false;
    this.data = body.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  override hasNextPage(): boolean {
    if (this.has_more === false) {
      return false;
    }

    return super.hasNextPage();
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.next_cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}
