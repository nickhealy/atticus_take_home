import { createStore } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './index'; 

export const store = createStore(
  rootReducer, 
  // to have access redux dev tools
  composeWithDevTools()
); 