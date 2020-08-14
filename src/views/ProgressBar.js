import React, { useState, useEffect, useRef, useCallback } from 'react'; 



const ProgressBar = ({ duration, isPlaying }) => {
  const [currentTime, setCurrentTime] = useState(0); 
  let interval = useRef(null); 

  const stopTimer = useCallback(() => {
    clearTimeout(interval.current)
  }, []); 

  useEffect(() => {
    if (currentTime === duration) {
      stopTimer(); 
    }
  }, [currentTime, duration, stopTimer])

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
    <h4>{currentTime} / {duration}</h4>
  )
}; 

export default ProgressBar; 