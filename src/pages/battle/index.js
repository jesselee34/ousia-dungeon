import { useState } from 'react';
import Cards from './cards';
import styles from './battle.module.scss';

const defaultCards = [
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
];

export default function Battle () {
  const [cards, setCards] = useState(defaultCards);
  
  return (
    <div className={styles.content}>
      <Cards cards={cards} setCards={setCards} />
    </div>
  )
}
