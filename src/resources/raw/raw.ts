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
import * as TiktokAPI from './tiktok';
import {
  BatchFailure,
  Profile,
  Tiktok,
  TiktokGetMusicParams,
  TiktokGetMusicResponse,
  TiktokGetProfileResponse,
  TiktokGetVideoCaptionsParams,
  TiktokGetVideoCaptionsResponse,
  TiktokGetVideoParams,
  TiktokGetVideoResponse,
  TiktokGetVideoTranscriptParams,
  TiktokGetVideoTranscriptResponse,
  TiktokGetVideoTranscriptsParams,
  TiktokGetVideoTranscriptsResponse,
  TiktokGetVideosParams,
  TiktokGetVideosResponse,
  TiktokListCommentRepliesParams,
  TiktokListCommentRepliesResponse,
  TiktokListHashtagVideosParams,
  TiktokListHashtagVideosResponse,
  TiktokListMusicVideosParams,
  TiktokListMusicVideosResponse,
  TiktokListProfileVideosParams,
  TiktokListProfileVideosResponse,
  TiktokListVideoCommentsParams,
  TiktokListVideoCommentsResponse,
  TiktokSearchUsersParams,
  TiktokSearchUsersResponse,
  TiktokSearchVideosParams,
  TiktokSearchVideosResponse,
  Transcript,
  TranscriptBatchSuccess,
  Video,
  VideoBatchSuccess,
  VideoResponse,
} from './tiktok';
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
  YoutubeGetVideoResponse,
  YoutubeSearchParams,
  YoutubeSearchResponse,
  YoutubeTypeaheadParams,
  YoutubeTypeaheadResponse,
} from './youtube';

export class Raw extends APIResource {
  instagram: InstagramAPI.Instagram = new InstagramAPI.Instagram(this._client);
  youtube: YoutubeAPI.Youtube = new YoutubeAPI.Youtube(this._client);
  tiktok: TiktokAPI.Tiktok = new TiktokAPI.Tiktok(this._client);
}

Raw.Instagram = Instagram;
Raw.Youtube = Youtube;
Raw.Tiktok = Tiktok;

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
    type YoutubeGetVideoResponse as YoutubeGetVideoResponse,
    type YoutubeSearchResponse as YoutubeSearchResponse,
    type YoutubeTypeaheadResponse as YoutubeTypeaheadResponse,
    type YoutubeGetChannelParams as YoutubeGetChannelParams,
    type YoutubeGetChannelTranscriptsParams as YoutubeGetChannelTranscriptsParams,
    type YoutubeGetTranscriptParams as YoutubeGetTranscriptParams,
    type YoutubeSearchParams as YoutubeSearchParams,
    type YoutubeTypeaheadParams as YoutubeTypeaheadParams,
  };

  export {
    Tiktok as Tiktok,
    type BatchFailure as BatchFailure,
    type Profile as Profile,
    type Transcript as Transcript,
    type TranscriptBatchSuccess as TranscriptBatchSuccess,
    type Video as Video,
    type VideoBatchSuccess as VideoBatchSuccess,
    type VideoResponse as VideoResponse,
    type TiktokGetMusicResponse as TiktokGetMusicResponse,
    type TiktokGetProfileResponse as TiktokGetProfileResponse,
    type TiktokGetVideoResponse as TiktokGetVideoResponse,
    type TiktokGetVideoCaptionsResponse as TiktokGetVideoCaptionsResponse,
    type TiktokGetVideoTranscriptResponse as TiktokGetVideoTranscriptResponse,
    type TiktokGetVideoTranscriptsResponse as TiktokGetVideoTranscriptsResponse,
    type TiktokGetVideosResponse as TiktokGetVideosResponse,
    type TiktokListCommentRepliesResponse as TiktokListCommentRepliesResponse,
    type TiktokListHashtagVideosResponse as TiktokListHashtagVideosResponse,
    type TiktokListMusicVideosResponse as TiktokListMusicVideosResponse,
    type TiktokListProfileVideosResponse as TiktokListProfileVideosResponse,
    type TiktokListVideoCommentsResponse as TiktokListVideoCommentsResponse,
    type TiktokSearchUsersResponse as TiktokSearchUsersResponse,
    type TiktokSearchVideosResponse as TiktokSearchVideosResponse,
    type TiktokGetMusicParams as TiktokGetMusicParams,
    type TiktokGetVideoParams as TiktokGetVideoParams,
    type TiktokGetVideoCaptionsParams as TiktokGetVideoCaptionsParams,
    type TiktokGetVideoTranscriptParams as TiktokGetVideoTranscriptParams,
    type TiktokGetVideoTranscriptsParams as TiktokGetVideoTranscriptsParams,
    type TiktokGetVideosParams as TiktokGetVideosParams,
    type TiktokListCommentRepliesParams as TiktokListCommentRepliesParams,
    type TiktokListHashtagVideosParams as TiktokListHashtagVideosParams,
    type TiktokListMusicVideosParams as TiktokListMusicVideosParams,
    type TiktokListProfileVideosParams as TiktokListProfileVideosParams,
    type TiktokListVideoCommentsParams as TiktokListVideoCommentsParams,
    type TiktokSearchUsersParams as TiktokSearchUsersParams,
    type TiktokSearchVideosParams as TiktokSearchVideosParams,
  };
}
