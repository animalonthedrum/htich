import React, { Component } from 'react'
import Anchors from '.././components/Anchors';


export default class HomeHero extends Component {
  render() {
    return (
      <div className='homeHero'>
       <Anchors/>
       <header>
        <h1 className="homeTitle">get in Hitch</h1>
        <h2 className="homeSubtitle">We're going camping</h2>
        </header>
      </div>
    )
  }
}
