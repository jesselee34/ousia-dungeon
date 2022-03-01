import styles from './card.module.scss';

function Card ({
  id,
  x = 0,
  y= 0,
  zIndex,
  gameScale = 1,
  size = 50,
  rotation = 0,
  visible = true,
  transition = 'all 0.5s',
  animation = '',
  className = '',
  ...other
}) {
  const style = {
    transform: `
      translate(${x}px, ${y}px)
      scale(${scale})
      rotateZ(${rotation}deg)
    `,

    width: `${2.5 * gameScale * size}px`,
    height: `${3.5 * gameScale * size}px`,
    transition,
    zIndex,
  };

  if (!visible) {
    style.opacity = 0;
  }
  
  return (
    <div
      id={id}
      style={style}
      
      className={
        classnames(styles.card, animation, className)
      }

      {...other}
    />
  );
}

export default Card;
