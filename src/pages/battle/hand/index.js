import useStore from 'store/index';

function selectHoverCard (state) {
  return state.hoverCard;
}

function selectSetSelectedCardToMouse (state) {
  return state.setSelectedCardToMouse;
}

function selectSelectCard (state) {
  return state.hoverCard;
}

export default function Hand () {
  const hoverCard = useStore(selectHoverCard);
  const setSelectedCardToMouse = useStore(selectSetSelectedCardToMouse);
  const selectCard = useStore(selectSelectCard);
  
  return (
    <>
      {
        newCards.map((card, i) => {
          return (
            <Card
              id={card.id}
              key={card.id}
              x={card.x}
              y={card.y}
              scale={card.scale}
              rotation={card.rotation}
              zIndex={i}

              onMouseOver={() => hoverCard(i)}
              onMouseOut={() => hoverCard(-1)}

              onMouseDown={(e) => {
                selectCard(i);
                setSelectedCardToMouse({ x: e.clientX, y: e.clientY });
              }}
            />
          );
        })
      }
    </>
  )
}
