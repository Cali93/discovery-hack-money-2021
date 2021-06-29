import React, { Component } from 'react';
import personImg from './../../../img/person.jpg';
import styles from './Reviews.module.css';

export default class Reviews extends Component {
  render() {
    return (
      <div className={styles.getStarted}>
        <span className={styles.verticalLine}></span>
        <h2>Contribute</h2>
        <span className={styles.verticalLine}></span>
        <div className={styles.testimonials}>
          <img src={personImg} alt="Person" />
          <blockquote>"Discovery will be the biggest platform for newcomers and developers who want to master the newest blockchain technologies, come join us!"</blockquote>
          <cite>- Joe Doe</cite>
        </div>
      </div>
    );
  }
}
