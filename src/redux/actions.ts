import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Video } from "./models";
import { RootState } from "./state";

export const GET_VIDEOS = "GET_VIDEOS";
export const GET_VIDEOS_SUCCESS = "GET_VIDEOS_SUCCESS";
export const GET_VIDEOS_FAIL = "GET_VIDEOS_FAIL";

export function GetVideos():GetVideosAction {
  return {type: GET_VIDEOS};
}

export function GetVideosSuccess(videos: Video[]):GetVideoSuccessAction {
  return {
    type: GET_VIDEOS_SUCCESS,
    payload: videos
  };
}

export function GetVideosFail(error: string):GetVideosFailAction {
  return {
    type: GET_VIDEOS_FAIL,
    payload: error
  };
}

export interface GetVideosAction extends AppAction{
}

export interface GetVideosFailAction extends AppAction{
  payload: string
}

export interface GetVideoSuccessAction extends AppAction{
  payload: Video[]
}

export interface AppAction{
  type: string
}

export type VideoActionTypes = GetVideosAction | GetVideoSuccessAction | GetVideosFailAction

export const GetVideosThunk = ():ThunkAction<void, RootState, unknown, Action<string>> => {
  return async function (dispatch):Promise<AppAction> {
    dispatch(GetVideos());    
    return getVideosApi()
      .then(response => {
        return response.json()
        .then(responseJson => dispatch(GetVideosSuccess(responseJson)))
        .catch(e => dispatch(GetVideosFail(e)));
      })
      .catch(e => dispatch(GetVideosFail(e)));
  }
};

export const getVideosApi = async (): Promise<Response> => 
{
  return fetch('https://jsonplaceholder.typicode.com/users');
};