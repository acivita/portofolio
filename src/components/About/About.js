import React from 'react';
import { ReactComponent as AboutSvg } from '../../assets/About.svg';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.pageContent}>
      <div className={styles.cadre1}>
        <div className={styles.svgContainer}>
         <AboutSvg width="75%" />
       </div>
      </div>
      <div id="work" className={styles.cadre2}></div>
    </div>
  );
}

export default About;
