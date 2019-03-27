import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="footerContainer">
        <div className="footerTop">
      
        </div>
        <div className="footerBottom">
          <div className="footerSocial">
          <div className="scroll-up-animation">    
          <p className='scrollUp' onClick={this.scrollToTop}>
           Hitch.
          </p>
         </div>
            <FontAwesomeIcon icon="envelope" color='#fff' className='social' />
            <FontAwesomeIcon icon={['fab', 'instagram']} color='#fff' className='social' />
            <FontAwesomeIcon icon="phone" color='#fff' className='social' />
          </div>
          <div className="footerCopyright">
            <p>©Hitch Adventures 2019</p>
            </div>
        </div>
      </div>
    )
  }
}
