function calculateSelectedPosition (cards, selectedIndex, mouseX, mouseY, screenX, screenY) {
  const result = cards.map((card, i) => {
    if (i === selectedIndex) {
      card.left = mouseX - screenX - cardWidth / 2;
      card.top = mouseY - screenY - cardHeight / 2;
    }
    
    return card;
  });

  return result;
}

export default calculateSelectedPosition;
