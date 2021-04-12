import styles from './Menu.module.css';

const Menu = ({ }) => (
  <div className={styles.menuIcon}>
    <div className={styles.height}>
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </div>
  </div>
);

export default Menu;
