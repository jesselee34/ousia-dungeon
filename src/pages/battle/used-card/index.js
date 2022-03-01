import shallow from 'zustand/shallow';
import useStore from 'store/index';
import Card from 'common/card';
import styles from './used-card.module.scss';

function selectUsedCard (state) {
  return state.usedCard;
}

export default function UsedCard () {
  const usedCard = useStore(selectUsedCard, shallow);

  // If a used card exists in the store
  if (usedCard !== null) {
    return (
      <Card
        id={usedCard.id}
        x={usedCard.x}
        y={usedCard.y}
        scale={usedCard.scale}
        rotation={usedCard.rotation}
        zIndex={99}
        animation={styles.animation}
      />
    )
  }

  // If no used card is in the store, unmount
  return null;
}
