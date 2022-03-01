import React, { useEffect, useRef } from 'react';
import useStore from 'store';
import 'scss/global.scss';

import { useState } from 'react';
import Router from './router';

const initialState = {
  screen: {},
  mousePosition: {},
};

export default function Game () {
  const [gameState, setGameState] = useState(initialState);
  const ref = useRef();
  
  // This effect only fires once
  useEffect(() => {    
    let screen = {};
    let mousePosition  = {};
    let windowBox;
    
    // Window resize handler
    function resize () {
      windowBox = ref.current.getBoundingClientRect();

      screen.x = windowBox.x;
      screen.y = windowBox.y;

      setGameState({ screen, mousePosition });
    }

    // Mousemovement handler
    function mouseMove (e) {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;

      setGameState({ screen, mousePosition });
    }

    // Fire the resize function one to initialize the state
    resize();

    // Bind the resize event to the window
    window.addEventListener('resize', resize);

    // Bind the mousemove event to make the mouse position available to all components
    document.addEventListener('mousemove', mouseMove);

    // Remove the event listener if this component is unmounted.
    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  
  return (
    <div ref={ref} className="game">
      <Router />
    </div>
  );
}