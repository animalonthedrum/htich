import React, { Component } from 'react';
import styles from './Compass.module.scss';

export default class Compass extends Component {
  
  documentStyle = document.documentElement.style;
  initalCompass = 'rotate(0deg)';
  scrolledCompass = 'rotate(45deg)';
  returnCompass = 'rotate(90deg)';
  initialText = 'clipped'
  revealText = 'revealer'

  handleScroll = () => {
      if (window.scrollY === 0) {
          this.documentStyle.setProperty('--compass', this.initalCompass);
          console.log(window.scrollY, '1')
      } if (window.scrollY >= 250 ) {
          this.documentStyle.setProperty('--compass', this.scrolledCompass);
          console.log(window.scrollY, '2')
      }
      if (window.scrollY >= 400)  {
        this.documentStyle.setProperty('--compass', this.returnCompass);
        console.log(window.scrollY, '3')
      }
      if (window.scrollY < 599) {
        this.documentStyle.setProperty('--reveal', this.initialText);
        console.log(window.scrollY, '1')
    } if (window.scrollY >= 600 ) {
        this.documentStyle.setProperty('--reveal', this.revealText);
        console.log(window.scrollY, '2')
    }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }


  render() {
    return (
      <div className="compassContainer">
        <img className={styles.Compass} src={require("../../images/compass.png")}  alt="Compass"/>
        <div className="compassText">
            <h3 className={styles.Reveal}>Nearly the most fun you can have in 8sq ft.</h3>
            <p>Relax we said nearly.</p>
        </div>
      </div>
    )
  }
}

