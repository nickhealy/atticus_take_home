import React, { useState, useEffect, useRef, useCallback } from 'react'; 



const ProgressBar = ({ duration, isPlaying }) => {
  const [currentTime, setCurrentTime] = useState(0); 
  // interval variable stored as a ref so that it does the reference does not reset in between renders
  let interval = useRef(null); 

  // this function does not need to get re-declared ever, so we memoize it with a useCallback hook
  const stopTimer = useCallback(() => {
    clearTimeout(interval.current)
  }, []); 

  // if the current time on the time remaining variable is ever equal to the end of the song, we have finished the song, and should stop the timer
  useEffect(() => {
    if (currentTime === duration) {
      stopTimer(); 
    }
  }, [currentTime, duration, stopTimer])

  // whenever we are playing, we should also be incrementing the timer variable 
  useEffect(() => {
    if (isPlaying) {
      interval.current = setInterval(() => {
        setCurrentTime(currentTime => currentTime + 1); 
      }, 1000)
    } else {
      stopTimer(); 
    }
  }, [isPlaying, stopTimer])

  return (
    <h4 id='progress'>{currentTime} / {duration}</h4>
  )
}; 

export default ProgressBar; 