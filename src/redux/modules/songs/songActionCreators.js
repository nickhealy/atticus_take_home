import { FAST_FORWARD, REWIND, SELECT_SONG, TOGGLE_SONG_PLAYING} from './songActions'; 

export const selectSong = id => ({
  type: SELECT_SONG, 
  id
}); 

export const toggleSongPlaying = () => ({
  type: TOGGLE_SONG_PLAYING, 
}); 

