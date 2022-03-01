import create from 'zustand';

import drawCard from './draw-card';
import positionCards from './position-cards';
import removeCard from './remove-card';
import discard from './discard';
import calculateSelectedPosition from './calculate-selected-position';

const useStore = create((set) => ({
  screen: {
    x: 0,
    y: 0,
  },
  
  hand: [
    {
      id: 'one',
    },
    {
      id: 'two'
    },
    {
      id: 'three'
    },
    {
      id: 'four'
    },
    {
      id: 'five'
    },
  ],

  drawPile: [
    {
      id: 'six',
    },
    {
      id: 'seven'
    },
    {
      id: 'eight'
    },
    {
      id: 'nine'
    },
    {
      id: 'ten'
    },
  ],

  discardPile: [

  ],
  
  usedCard: null,
  selectedCard: null,
  selectedCardIndex: -1,
  hoveredCardIndex: -1,

  // Add a new card to the hand, remove a card from the drawPile
  drawCard: () => set((state) => {
    let [hand, drawPile] = drawCard(state.hand, state.drawPile);
    hand = positionCards(hand, state.hoverCardIndex);

    return { hand, drawPile };
  }),
  
  // Remove a card from the hand, set the used card
  useCard: (index) => set((state) => {
    const [hand, removed] = removeCard(state.hand, index);
    hand = positionCards(hand, state.hoverCardIndex);

    return { hand, usedCard: removed };
  }),

  // Unset the used card, add the used card to the discard pile
  discard: () => set((state) => {
    const discardPile = discard(state.discardPile, state.usedCard);
    
    return { usedCard: null, discardPile };
  }),

  // Set which card is hovered
  hoverCard: (index) => set(() => {
    const hand = positionCards(hand, state.hoverCardIndex);
    
    return { hand, hoveredCard: index };
  }),
  
  // Set which card is selected
  selectCard: (index) => set(() => ({ selectedCard: index })),

  // Set the selected card to the mouse position
  setSelectedCardToMouse: (mouse) => set((state) => {
    const position = calculateSelectedPosition(
      state.hand,
      state.selectedCardIndex,
      mouse.x,
      mouse.y,
      state.screen.x,
      state.screen.y
    );

    return { selectedCard: { ...state.selectedCard, ...position } };
  }),

  // Update the screen position
  setScreen: (screen) => set(() => { screen }),
}));

export default useStore;
