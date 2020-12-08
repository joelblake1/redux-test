import React from 'react';
import { connect } from 'react-redux';
import { GetVideosThunk } from '../redux/actions';
import { Video } from '../redux/models';
import { RootState } from '../redux/state';

export interface VideoProps{
  fetchVideos(): void;
  videos: Video[];
}

export const VideosComponent = (props: VideoProps): JSX.Element =>{
  React.useEffect(()=>{
    props.fetchVideos();
  });
  
  return (
    <>
      <form>
        <h2>Videos</h2>
      </form>
      <div>{props.videos.map(v =>
        <div>{v.name}</div>
        )}
      </div>    
    </>
    );
}

const mapState = (state: RootState) => ({
  videos: state.video.videos
})

const mapDispatch = (dispatch:any) => ({  
  fetchVideos() {
    dispatch(GetVideosThunk());
  }
})

export const ConnectedVideosComponent = connect(mapState, mapDispatch)(VideosComponent);
