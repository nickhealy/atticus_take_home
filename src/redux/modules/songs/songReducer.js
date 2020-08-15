import { SELECT_SONG, TOGGLE_SONG_PLAYING } from './songActions'; 

const initialState = {
  songPlaying: false,
  currentSong: {
    id: 1, 
    songUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3',
    title: "We Were Young",
    artist: "Odesza",
    album: "Summer's Gone",
    year: 2012,
    duration: 192,
    albumCover: 'path/to/album cover'
  },
  // THIS ARRAY WOULD COME FROM AN API CALL THAT WOULD OCCUR ON LOAD
  availableSongs: [
    {
      id: 1, 
      songUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3',
      title: "We Were Young",
      artist: "Odesza",
      album: "Summer's Gone",
      year: 2012,
      duration: 192,
      albumCover: 'path/to/album cover'
    }, 
    {
      id: 2, 
      songUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3',
      title: "The Next Song",
      artist: "Amazing musician",
      album: "Album #1",
      year: 2012,
      duration: 60,
      albumCover: 'path/to/album cover'
    },
    {
      id: 3, 
      songUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3',
      title: "Another Song",
      artist: "Even better musician",
      album: "Album #1",
      year: 2012,
      duration: 90,
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