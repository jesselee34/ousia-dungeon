import shallow from 'zustand/shallow';
import useStore from 'store/index';
import Card from 'common/card';

// function handleClick (e, selectCard, setSelectedCardToMouse) {
//   if (state.selectedIndex === i) {
//     // Left Click
//     if (e.nativeEvent.which === 1) {
//       setState({
//         selectedIndex: -1,
//         hoverIndex: -1,
//         use: i,
//       });
//     }
//     // Right Click
//     else if (e.nativeEvent.which === 3) {
//       setState({
//         selectedIndex: -1,
//         hoverIndex: -1,
//         use: -1,
//       });
//     }
//   } else {
//     setState({
//       ...state,
//       selectedIndex: i,
//       use: -1,
//     });
//   }
// }

function selectSelectedCard (state) {
  return state.selectedCard;
}

function selectSetSelectedCardToMouse (state) {
  return state.setSelectedCardToMouse;
}

export default function SelectedCard () {
  const selectedCard = useStore(selectSelectedCard, shallow);
  const setSelectedCardToMouse = useStore(selectSetSelectedCardToMouse);

  useEffect(() => {
    const mouse = {};
    
    // Mousemovement handler
    function mouseMove (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      setSelectedCardToMouse(mouse);
    }

    // Bind the mousemove event to make the mouse position available to all components
    document.addEventListener('mousemove', mouseMove);

    // Remove the event listener if this component is unmounted.
    return () => document.removeEventListener('mousemove', mouseMove);

  }, []);

  // If a selected card exists in the store
  if (selectedCard !== null) {
    return (
      <Card
        id={selectedCard.id}
        x={selectedCard.x}
        y={selectedCard.y}
        scale={selectedCard.scale}
        rotation={selectedCard.rotation}
        zIndex={99}
      />
    )
  }

  // If no used card is in the store, unmount
  return null;
}
