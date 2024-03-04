import React from 'react';
import styles from './Hero.module.css';
import Spline from '@splinetool/react-spline';

export default function Hero() {
    return (
    <>
    <div className={styles.hero}>
        <div className={styles.written}>
    <h1 className={styles.title}>Culinary Compass
    </h1>
    <p className={styles.subhead}> Explore the solution that will revolutionize the way you explore, plan, and enjoy your culinary experiences.</p>
    <input className={styles.email} type="text" placeholder="Enter your email" />
    <button className={styles.button}>Sign Up</button>
    </div>
    <div className={styles.spline}>
    <Spline scene="https://prod.spline.design/wjKM-Lz24XQOYpFK/scene.splinecode" />
    </div>
    </div>
    </>
    );
}