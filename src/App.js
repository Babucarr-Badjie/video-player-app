import { useState } from "react";
import Menu from "./components/Menu";
import Video from "./components/Video";
// videos links
const VIDEOS = {
  antelopes:
    "https://content.codecademy.com/courses/React/react_video-fast.mp4",
  snail: "https://content.codecademy.com/courses/React/react_video-slow.mp4",
  cat: "https://content.codecademy.com/courses/React/react_video-cute.mp4",
  spider: "https://content.codecademy.com/courses/React/react_video-eek.mp4",
};

function App() {
  const [videoSrc, setVideoSrc] = useState(VIDEOS.antelopes);

  // handler function
  const selectedVideoHandler = (nextVideo) => {
    setVideoSrc(VIDEOS[nextVideo]);
  };

  return (
    <div>
      <h1>Video Player</h1>
      <Menu selectedVideo={selectedVideoHandler} />
      <Video src={videoSrc} />
    </div>
  );
}

export default App;
