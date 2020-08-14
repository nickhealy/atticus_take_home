import { SELECT_SONG, TOGGLE_SONG_PLAYING } from './songActions'; 

const initialState = {
  songPlaying: false,
  currentSong: {
    id: 1, 
    title: "Don't Stop Believing", 
    songUrl: 'url/to/song',
    artist: "Journey", 
    year: "1985", 
    album: "Album Name", 
    albumCover: 'path/to/album cover'
  },
  // THIS ARRAY WOULD COME FROM AN API CALL THAT WOULD OCCUR ON LOAD
  availableSongs: [
    {
      id: 1, 
      title: "Don't Stop Believing", 
      artist: "Journey", 
      year: "1985", 
      album: "Album Name", 
      albumCover: 'path/to/album cover'
    }
  ]
}; 

export const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      // not crazy about the time complexity of this method, but for now it is ok
      const selectedSong = state.availableSongs.filter(song => song.id === action.id)[0]; 
      return ({
        ...state, 
        currentSong : selectedSong,
      }); 
    // toggles whether current song is playing (true => false, false => true)
    case TOGGLE_SONG_PLAYING: 
      return ({
        ...state, 
        songPlaying: !state.songPlaying,
      })
    default: 
      return state
  }
}