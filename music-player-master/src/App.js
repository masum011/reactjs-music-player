// import './style/app.scss';
import { useState, useRef } from "react";
import Nav from "./components/Nav";
import "./style/app.scss";

import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import data from "./util";

function App() {
  const audioref = useRef(null);

  const [song, setSong] = useState(data());
  const [correntSong, setcorrentSong] = useState(song[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const UpDatetimeHendaler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
    console.log(duration);
  };
  // console.log(correntSong);
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song correntSong={correntSong} />
      <Player
        audioref={audioref}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        correntSong={correntSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        song={song}
        setcorrentSong={setcorrentSong}
        setSong={setSong}
      />
      <Library
        audioref={audioref}
        songs={song}
        setcorrentSong={setcorrentSong}
        isPlaying={isPlaying}
        setSong={setSong}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={UpDatetimeHendaler}
        onLoadedMetadata={UpDatetimeHendaler}
        ref={audioref}
        src={correntSong.audio}
      />
    </div>
  );
}

export default App;
