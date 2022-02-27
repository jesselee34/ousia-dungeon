import Cards from 'components/cards';
import styles from './battle.module.scss';

const cards = [
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
  return (
    <div className={styles.content}>
      <Cards cards={cards} />
    </div>
  )
}
