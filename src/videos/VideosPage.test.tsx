import { act } from "react-dom/test-utils";
import { VideoProps, VideosComponent } from "./VideosPage";

describe("VideosPage Should", ()=>{
  const videosProps: VideoProps = {videos:[{name: "first video", key: "asd"}], fetchVideos: jest.fn()}
  
  it("match snapshot", () =>{
    const videosPage = <VideosComponent {...videosProps}/>
    expect( videosPage).toMatchSnapshot()
  });
});
