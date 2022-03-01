import Hand from './hand';
import SelectedCard from './selected-card';
import UsedCard from './used-card';
import styles from './battle.module.scss';

export default function Battle () {
  return (
    <div className={styles.content}>
      <Hand />
      <SelectedCard />
      <UsedCard />
    </div>
  )
}
