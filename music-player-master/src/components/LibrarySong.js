import React from "react";

function LibrarySong({  songs, setcorrentSong,song, id,audioref,isPlaying,setSong }) {
  const songSelectHandelr = () => {
    const selectSong = songs.filter((state) => state.id === id);
    setcorrentSong(selectSong[0]);
    const newSongs=songs.map((song)=>{
        if(song.id===id){
            return{
                ...song,
                active:true
            }
        }else{
            return{
                ...song,
                active:false,
            }
        }
    })
    setSong(newSongs)
    if(isPlaying){
        const playPromise=audioref.current.play();
        if(playPromise !==undefined){
            playPromise.then((audio)=>{
                audioref.current.play()
            });
        }
    }

  };
  return (
    <div onClick={songSelectHandelr} className={`library-songs ${song.active ? 'seleted' : ""}`}>
      <img alt={song.name} src={song.conver} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
