// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InstagramAPI from './instagram';
import {
  Instagram,
  InstagramGetPostResponse,
  InstagramGetPostsParams,
  InstagramGetPostsResponse,
  InstagramGetProfileParams,
  InstagramGetProfileResponse,
  InstagramGetTranscriptParams,
  InstagramGetTranscriptResponse,
  InstagramGetTranscriptsParams,
  InstagramGetTranscriptsResponse,
  InstagramSinglePostResponse,
  InstagramTranscriptResponse,
} from './instagram';
import * as YoutubeAPI from './youtube';
import {
  TranscriptSegment,
  Youtube,
  YoutubeGetChannelParams,
  YoutubeGetChannelResponse,
  YoutubeGetChannelTranscriptsParams,
  YoutubeGetChannelTranscriptsResponse,
  YoutubeGetTranscriptParams,
  YoutubeGetTranscriptResponse,
  YoutubeSearchParams,
  YoutubeSearchResponse,
} from './youtube';

export class Raw extends APIResource {
  instagram: InstagramAPI.Instagram = new InstagramAPI.Instagram(this._client);
  youtube: YoutubeAPI.Youtube = new YoutubeAPI.Youtube(this._client);
}

Raw.Instagram = Instagram;
Raw.Youtube = Youtube;

export declare namespace Raw {
  export {
    Instagram as Instagram,
    type InstagramSinglePostResponse as InstagramSinglePostResponse,
    type InstagramTranscriptResponse as InstagramTranscriptResponse,
    type InstagramGetPostResponse as InstagramGetPostResponse,
    type InstagramGetPostsResponse as InstagramGetPostsResponse,
    type InstagramGetProfileResponse as InstagramGetProfileResponse,
    type InstagramGetTranscriptResponse as InstagramGetTranscriptResponse,
    type InstagramGetTranscriptsResponse as InstagramGetTranscriptsResponse,
    type InstagramGetPostsParams as InstagramGetPostsParams,
    type InstagramGetProfileParams as InstagramGetProfileParams,
    type InstagramGetTranscriptParams as InstagramGetTranscriptParams,
    type InstagramGetTranscriptsParams as InstagramGetTranscriptsParams,
  };

  export {
    Youtube as Youtube,
    type TranscriptSegment as TranscriptSegment,
    type YoutubeGetChannelResponse as YoutubeGetChannelResponse,
    type YoutubeGetChannelTranscriptsResponse as YoutubeGetChannelTranscriptsResponse,
    type YoutubeGetTranscriptResponse as YoutubeGetTranscriptResponse,
    type YoutubeSearchResponse as YoutubeSearchResponse,
    type YoutubeGetChannelParams as YoutubeGetChannelParams,
    type YoutubeGetChannelTranscriptsParams as YoutubeGetChannelTranscriptsParams,
    type YoutubeGetTranscriptParams as YoutubeGetTranscriptParams,
    type YoutubeSearchParams as YoutubeSearchParams,
  };
}
