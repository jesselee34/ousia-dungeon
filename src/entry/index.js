import React, { useEffect, useRef } from 'react';

import context from 'contexts/game';
import 'scss/global.scss';

import { useState } from 'react';
import Router from './router';

export default function Entry () {
  const [gameState, setGameState] = useState({});
  const ref = useRef();
  
  // This effect only fires once
  useEffect(() => {
    // Window resize handler
    function resize () {
      const screen = ref.current.getBoundingClientRect();

      setGameState({
        ...gameState,
        screen: {
          x: screen.x,
          y: screen.y
        },
      });
    }
    // Bind the resize event to the window
    window.addEventListener('resize', resize);
    // Remove the event listener if this component is unmounted.
    return () => (
      window.removeEventListener('resize', resize)
    );
  }, []);
  
  return (
    <div ref={ref} className="game">
      <context.Provider value={{}}>
        <Router />
      </context.Provider>
    </div>
  );
}