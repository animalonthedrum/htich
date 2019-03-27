import React, { Component } from 'react';
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import HomeHero from '.././pages/HomeHero';
import About from '.././pages/About';
import Details from '.././pages/Details';
import Gallery from '.././pages/Gallery';
import Inspiration from '.././pages/Inspiration';
import Footer from './Footer';


export default class Scroll extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {

    });

    Events.scrollEvent.register('end', function () {
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
          <Element name="homeHero" className="element" style={{
            height: '100vh',
            backgroundColor:'inherit',
            margin:'25px 25px 0 25px'
         
          }}>
           <HomeHero />
           {/* <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a> */}
        </Element>

          <Element name="about" className="element"style={{
            height: '100%',
            display:'flex',
            backgroundColor:'inherit'
          }}>
            <About />
        </Element>

          <Element name="details" className="element"style={{
            height: '100%',
            backgroundColor:'#fff'
          }}>
            <Details />
        </Element>
        <Element name="story" className="element"style={{
            height: '100%',
            backgroundColor:'inherit'
          }}>          
           <Inspiration />
        </Element>
          <Element name="gallery" className="element"style={{
            height: '100%',
            backgroundColor:'green'
          }}>
           <Gallery />
      
        </Element>

          <Element name="footer" className="element"style={{
            height: '100%',
            backgroundColor:'#142D6C'
            
          }}>
         <Footer />
   
        </Element>
      </div>
    );
  }
};
