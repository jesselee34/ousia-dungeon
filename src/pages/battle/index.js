import Cards from './cards';
import styles from './battle.module.scss';

export default function Battle () {
  return (
    <div className={styles.content}>
      <Cards />
    </div>
  )
}
