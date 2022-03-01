import styles from './cards.module.scss';

const a = -0.02;
const h = 5;
const k = 0.5;
const diff = 0.1;
const multi = 1.6;

const screenHeight = parseFloat(styles.screenHeight, 10);
const cardWidth = parseFloat(styles.cardWidth, 10);
const cardHeight = parseFloat(styles.cardHeight, 10);
const handWidth = parseFloat(styles.handWidth, 10);
const handHeight = parseFloat(styles.handHeight, 10);

function getYPos(xpos){
  const ypos = a * Math.pow((xpos - h), 2) + k;

  return ypos;
}

function getRotation (xpos) {
  const ypos = getYPos(xpos);

  //left of the vertex
  if(xpos < h){
    const newx = xpos + diff;
    const newy = getYPos(newx);

    const adjacent = newx - xpos;
    const opposite = newy - ypos;
    
    let angle = Math.atan(opposite / adjacent);
    angle *= 180;
    angle /= Math.PI;
    angle = 0 - angle;
  
    return angle * multi;
  }
  //right of the vertex
  else if(xpos > h){
    const newx = xpos - diff;
    const newy = getYPos(newx);

    const adjacent = newx - xpos;
    const opposite = newy - ypos;
    
    let angle = Math.atan(opposite / adjacent);
    angle *= 180;
    angle /= Math.PI;
    angle = 0 - angle;
  
    return angle * multi;
  }
  //on the vertex
  else{
    return 0;
  }
}

function alignCards (cards) {
  let count = cards.length;

  const result = cards.map((card, i) => {
    let left = cardWidth * i / 1.4;

    let totalwidth = count * (cardWidth / 1.4) + cardWidth / 2;

    //shift the cards to fit with minimal margin leftover
    if(totalwidth > handWidth){
      const overflow = totalwidth - handWidth;
      const shift = (overflow / count);
      left -= shift * i;
      totalwidth = handWidth;
    }
    
    const leftdif = (handWidth - totalwidth) / 1.6;
    left += leftdif;

    const center = left + cardWidth / 2;
    const xpos = center / handWidth * 10;
    const ypos = getYPos(xpos);
    
    card.left = left;
    card.rotation = getRotation(xpos);
    card.top = screenHeight - (cardHeight / 2) - ((ypos / k) * handHeight / 4);
    card.scale = 1;
    card.transition = 'transform 0.5s';
    card.zIndex = i;
    card.classes = [];
  
    return card;
  });

  return result;
}

function hoverAlignCards (hoverIndex, cards) {
  let newCards = alignCards(cards, cardWidth, handWidth, handHeight);
  const hoverScale = 1.4;
  const offsetLeft = ((cardWidth * hoverScale) - (cardWidth * hoverScale)/1.5);
  
  newCards = newCards.map((card, i) => {
    // Shift every card to the left of the hovered card more to the left
    if (i < hoverIndex) {
      card.left -= (offsetLeft / (hoverIndex - i));
    }
    // Shift every card to the rightof the hovered card more to the right
    else if (i > hoverIndex) {
      card.left += (offsetLeft / (i - hoverIndex));
    }
    // Set the rotation, size, and Y offset for the hovered card
    else {
      card.top = screenHeight - cardHeight * (hoverScale/1.17);
      card.scale = hoverScale;
      card.rotation = 0;
      card.zIndex = newCards.length;
      card.transition = 'none';
    }
    
    return card;
  });
  
  return newCards;
}

function positionCards (hand, hoverIndex, selectedCard) {
  return hand;
}

export default positionCards;
