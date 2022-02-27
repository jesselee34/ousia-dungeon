import { Link } from 'react-router-dom';
import Particles from './particles';
import style from './menu.module.scss';

export default function Home () {
  return (
    <div className={style.wrapper}>
      <main className={style.content}>
        <Particles />
        <h1>
          OUSIA
        </h1>
        <h2>
          Crawl
        </h2>
        <Link to="/battle">
          Play
        </Link>
      </main>
    </div>
  );
}