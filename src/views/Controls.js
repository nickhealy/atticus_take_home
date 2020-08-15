import React from 'react'; 

const Controls = ({ isPlaying, toggleSongPlaying, songId }) => {
  // TODO Memoize these components so they do not re render unnecessarily 
  return (
    <button id='play-btn' onClick={() => toggleSongPlaying(songId)}>{isPlaying ? 'PAUSE' : 'PLAY'}</button>
  )
}; 

export default Controls; 