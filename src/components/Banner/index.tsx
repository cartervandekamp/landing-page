import styles from './Banner.module.css';
import Spline from '@splinetool/react-spline';

export default function Banner() {
    return (
         <div className={styles.banner}>
        <div className={styles.content}>
        <div className={styles.spline}>
        <Spline scene="https://prod.spline.design/SDts81Tk6cMLGAav/scene.splinecode" />
        </div>
            <div className={styles.written}>
        <h1 className={styles.title}>This is For You.
        </h1>
        <p className={styles.subhead}>The core value proposition of Culinary Compass lies in its ability to simplify meal planning while maximizing choice and flexibility.   </p>
        <p className={styles.subhead}> Culinary Compass was made for food lovers, by food lovers. Wether you are going out, or staying in, this is for you.</p>
        </div>
        </div>
        </div>
        
        );
    
}