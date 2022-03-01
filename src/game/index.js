import React, { useEffect, useRef } from 'react';
import useStore from 'store/index';

import 'scss/global.scss';
import Router from './router';

function selectSetScreen (state) {
  return state.setScreen;
}

export default function Game () {
  const ref = useRef();
  const setScreenSize = useStore(selectSetScreen);
  
  // This effect only fires once
  useEffect(() => {    
    let screen = {};
    let windowBox;
    
    // Window resize handler
    function resize () {
      windowBox = ref.current.getBoundingClientRect();

      screen.x = windowBox.x;
      screen.y = windowBox.y;

      setScreenSize(screen);
    }

    // Fire the resize function once to initialize the state
    resize();

    // Bind the resize event to the window
    window.addEventListener('resize', resize);

    // Remove the event listener if this component is unmounted.
    return () => window.removeEventListener('resize', resize);
  }, []);
  
  return (
    <div ref={ref} className="game">
      <Router />
    </div>
  );
}