import {React} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft,faAngleRight,faPause} from "@fortawesome/free-solid-svg-icons";

const Player=({audioref,correntSong,isPlaying,setIsPlaying,setSongInfo,songInfo,song,setcorrentSong,setSong})=> {
    // useEffect(()=>{
    //   const newSongs=song.map((songs)=>{
    //     if(songs.id===correntSong.id){
    //         return{
    //             ...song,
    //             active:true
    //         }
    //     }else{
    //         return{
    //             ...song,
    //             active:false,
    //         }
    //     }
    // })
    // setSong(newSongs)
    // },[""])
  const playsongHandler=( )=>{
    // console.log(audioref.current);
    // audioref.current.play();
    if(isPlaying){
      audioref.current.pause();
      setIsPlaying(!isPlaying);
    }else{
      audioref.current.play();
      setIsPlaying(!isPlaying);
    }
  }
  console.log(correntSong);
  const getTime=(time)=>{
    return(
      Math.floor(time/60)+ ":" + ("0" +Math.floor(time%60)).slice(-2)
    )
    
  }
  const dragHandler=(e)=>{
    // console.log(e.target.value);
    audioref.current.currentTime=e.target.value;
    setSongInfo({...songInfo,currentTime: e.target.value})

  }
  const skilTrackHand=(direction)=>{
    let currentIndex=song.findIndex((songs)=>songs.id===correntSong.id)
    if(direction==="skip-forword"){
      setcorrentSong(song[(currentIndex+1) % song.length] );
    }
    if(direction=== 'skip-back'){
      setcorrentSong(song[(currentIndex-1) % song.length] );
    }
    console.log(currentIndex +1);
  };
  return (
    <div className="player">
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-conntrol">
            <FontAwesomeIcon onClick={()=>skilTrackHand('skip-back')} className="skip-back" size="2x " icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playsongHandler}  className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
            <FontAwesomeIcon  className="skip-forward" size="2x" icon={faAngleRight }onClick={()=>skilTrackHand('skip-forword')} />
        </div>
    </div>
  );
};
export default Player;
