import { combineReducers } from "redux";
import { GetVideoSuccessAction, GET_VIDEOS_SUCCESS } from "./actions";
import { initialVideoState } from "./state";

export function videoReducer(state = initialVideoState, action: GetVideoSuccessAction){
  switch(action.type){
    case GET_VIDEOS_SUCCESS:
      var typedAction = action as GetVideoSuccessAction
      return {...state,
        videos: typedAction.payload      
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({video: videoReducer});
