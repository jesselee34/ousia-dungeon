import style from './particles.module.scss';

export default function Particles () {
  const particles = new Array(50).fill(0);
  
  return (
    <div className={style.fire}>
      {particles.map((p) => (
        <div className={style.particle} />
      ))}
    </div>
  );
}