import styles from './Newsletter.module.css';

export default function Newsletter() {
    return(
        <div className={styles.newsletter}>
   
    <h1 className={styles.title}>Subscribe to our newsletter
    </h1>
    <p className={styles.subhead}> Promotions, discounts, and app updates</p>
    <input className={styles.email} type="text" placeholder="Enter your email" />
    <button className={styles.button}>Sign Up</button>
    </div>

    )
}