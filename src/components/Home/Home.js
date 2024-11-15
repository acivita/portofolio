import React from 'react';
import { ReactComponent as Intro } from '../../assets/Intro.svg';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.pageContent}>
      <div className={styles.cadre1}>
        <div className={styles.svgContainer}>
         <Intro width="75%" />
       </div>
      </div>
      <div id="work" className={styles.cadre2}></div>
    </div>
  );
}

export default Home;
