import { combineReducers } from 'redux'; 
import { songReducer } from '../modules/songs/songReducer';

// This is where I would also import redux-thunk or redux-saga if I were making actual api calls. For simplicity, I am leaving those out

export const rootReducer = combineReducers({
  music: songReducer,
}); 




