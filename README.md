Hi Sam, 
Here is my assignment, as well as some of my overall thought process/future feature ideas. 

## Overall Approach: 

I figured Redux would be a good choice to manage state in this application. While it may be overkill for the scale of the app you assigned me to do today, in theory this would be a much larger application in the future, where Redux would be a little more justified. Another alternative I thought of was using Context, but frankly I think that would have gotten a little bit out of control, given how much data this application would be using in the future.  

I decided to keep the information of what the current song we are listening to is and whether that song is playing in the store, and leave the data about how far into the song we are in the local state of the ProgressBar component using Hooks. It did not seem important to me that, as the UI scales, all components have access to the progress of a song, so I left that in local state. 

I did not have a chance to implement this, but I also planned on having information about song sequences (i.e. a current playlist or an album) in the store as well. You'll notice that I had an id key on every song. In an ideal world, I would get back from my API an array of the id's of the songs in a particular playlist or album, and cross-reference that with a list of the songs by id. That way, as soon as one song ends, a "NEXT_SONG" action would be dispatched to the store, which would update the currentSong field to be the song corresponding with the next id in the array from the API. There would also be a "PREVIOUS_SONG" action that would do the opposite. This seemed to me to be a good way to normalize my data, and is how I would imagine that information would be stored in a relational database. 

The redux is also set up to have the user select a song from a list. The list, a mini dummy version of which I have put in the "availableSongs" field of the store, would be rendered as an array of React components, each showing that song's respective information and holding behind the scenes their id from the store. When you click on them, that would fire the "SELECT_SONG" action, passing in that element's respective id, and updating the store as I do in my reducer. This "availableSongs" array would be fetched when the component first mounts. 

I think it is also worth mentioning that that initial fetch of songs/user-specific info would be dependent upon whatever authentication information is retrieved from the API. The songs that Person A sees would be different from the songs Person B sees. 

## What I did well 
I made really good use of Hooks in the ProgressBar component (useState, useEffect, useRef, useCallback) to mimic certain class lifecycle methods and minimize unnecessary re-renders of certain functions. I also think I overall wrote really clean and generally well-commented code. I also think I set up a good file structure that would make it easy to scale the UI. I organized it by what (I think) is called the "redux ducks" method of organizing your Redux into modules that each have their own reducer, actions, and actionCreator files instead of having. For example, you could easily add a 'user' modules with a userActions, userActionCreators, and userReducer files. 

## Challenges, and How I Could Have Improved 
The biggest technical challenge was, oddly enough, mocking the song. I initially tried to have mp3 files included in the bundle (you'll notice that I ran npm eject on my create-react-app so I could configure webpack), but I eventually abandoned that approach. I then realized this music would probably be stored on an AWS S3 bucket (or similar technology), so I scoured the internet for a S3 url pointing to an mp3. I found one, so only the song that is currently loaded will actually play. Unfortunately, figuring all this out did take some time. In retrospect, I probably could have focused on completing the song selection feature, and mocking actually playing an audio, but it seemed to me an important aspect of the MVP that the music player actual play some music. 

In retrospect, I also should have probably used redux-toolkit instead of setting up Redux by hand. The application seemed small enough that it wouldn't be a problem, but I did spend a little time typing boilerplate. 

Admittedly, I did not do as many features as I would have hoped in the alloted time. I also would have liked to spend slightly more time on styling, although I knew going into this project that styling was not a priority. It also goes without saying that I should have added a few unit tests, even if they were only testing reducer behavior. If I had not sunk time into the music problem, I likely would have been able to implement a few. 

Anyway, I sincerely hope you see that, while the application is bare-bones, I was thinking very far down the road and trying to be as smart as possible with my approach. 
