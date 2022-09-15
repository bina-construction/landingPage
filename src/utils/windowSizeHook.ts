import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {

    //Update State with actual dimension
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    //Create Event Listener
    window.addEventListener('resize', handleResize);

    //Remove Event Listener when unMounted
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  //Return state
  return windowDimensions;
}