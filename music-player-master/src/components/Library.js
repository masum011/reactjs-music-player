import React from 'react'
import LibrarySong from './LibrarySong';


function Library({songs, setcorrentSong,audioref,isPlaying,setSong,libraryStatus}) {
    console.log(songs)
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ""} `}>
        <h2>Library</h2>
        <div className="library-songs">
            {songs.map((song)=>(
                <LibrarySong
                songs={songs}
                setcorrentSong={setcorrentSong}
                song={song}
                id={song.id}
                key={song.id}
                audioref={audioref}
                isPlaying={isPlaying}
                setSong={setSong}
                 
                />
            ))}
        </div>

    </div>
  )
}

export default Library;