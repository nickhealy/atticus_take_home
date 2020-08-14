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
  const songRef = useRef(null); 

  useEffect(() => {
    if (songPlaying) {
      // NOTE: I had trouble mocking how I would play mp3 file paths, so I am mocking playing a song
      // in real life, I would do somehting like songRef.play(); 
      songRef.current.play();

    } else {
      songRef.current.pause();
    }
  }, [songPlaying]); 

  return (
    <div id='player-container'>
      <h3>{currentSong.title}</h3>
      <h2>{currentSong.artist}</h2>
      <h2>{currentSong.album},{currentSong.year}</h2>
      <h2>{currentSong.albumCover}</h2>
      <audio src={currentSong.songUrl} type='audio/mp3' crossOrigin='anonymous' ref={songRef}></audio>
      <ProgressBar duration={currentSong.duration} isPlaying={songPlaying}/>
      <Controls isPlaying={songPlaying} toggleSongPlaying={toggleSongPlaying} songId={currentSong.id}/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer); 