import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <img src="culinary.svg" alt="Culinary Logo" className="logo" />
          </div>
          <div className={styles.navbarRight}>
            <a className={styles.link}>About</a>
            <button className={styles.button}>Sign up</button>
          </div>
        </header>
    )
}