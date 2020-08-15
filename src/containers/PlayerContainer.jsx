import React, { useEffect, useRef } from 'react'; 
import Controls from '../views/Controls'; 
import ProgressBar from '../views/ProgressBar';
import { connect } from 'react-redux'; 
import { toggleSongPlaying } from '../redux/modules/songs/songActionCreators';


const mapStateToProps = state => ({
  currentSong : state.music.currentSong,
  songPlaying: state.music.songPlaying,
}); 

const mapDispatchToProps = dispatch => ({
  toggleSongPlaying : () => dispatch(toggleSongPlaying())
})

// TO DO -- account for whether some data is incomplete (using conditional rendering)
const PlayerContainer = ({ currentSong, songPlaying, toggleSongPlaying }) => { 
  // store references to the audio element that will persist across renders
  const songRef = useRef(null); 

  // this will play the audio element if the song is playing according to the store
  useEffect(() => {
    if (songPlaying) {
      songRef.current.play();

    } else {
      songRef.current.pause();
    }
  }, [songPlaying]); 

  return (
    <div id='player-container'>
      <h3>Title : {currentSong.title ? currentSong.title : 'Unknown' }</h3>
      <h2>Artist : {currentSong.artist ? currentSong.artist : 'Unknown'}</h2>
      <h2>Album : {currentSong.album ? currentSong.album : 'Unknown'} , Year: {currentSong.year ? currentSong.year : 'Unknown'}</h2>
      <h2>{currentSong.albumCover}</h2>
      <audio src={currentSong.songUrl} type='audio/mp3' crossOrigin='anonymous' ref={songRef}></audio>
      <ProgressBar duration={currentSong.duration} isPlaying={songPlaying}/>
      <Controls isPlaying={songPlaying} toggleSongPlaying={toggleSongPlaying} songId={currentSong.id}/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer); 