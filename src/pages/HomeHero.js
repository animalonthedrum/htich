import React, { Component } from 'react'
import Menu from '.././components/Menu';
// import ScrollTrigger from '.././components/ScrollTrigger';

export default class HomeHero extends Component {
  render() {
    return (
      <div className='homeHero'>
       <Menu/>
       <header>
        <h1 className="homeTitle">get in Hitch</h1>
        <h2 className="homeSubtitle">We're going camping</h2>
        </header>
      </div>
    )
  }
}
