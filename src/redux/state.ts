import { Video } from "./models"
import { rootReducer } from "./reducers"


export interface VideoState{
  videos: Video[];
}

export const initialVideoState: VideoState = {
  videos: []
}

export type RootState = ReturnType<typeof rootReducer>