import React, { Component } from 'react';
import Accordian from './sections/Accordian';

export default class Details extends Component {
  render() {
    return (
      <div className='detailsContainer'>
      <div className="detailsL">
       <h2>Before you set off...</h2>
        <p>While we’re firm believers in having a good dose of spontaneity when it comes to travel, here’s some need-to-knows about Hitch before heading out on the open road.</p>
      </div>
      <div className="detailsR">
      <Accordian/>
      </div>
        
      </div>
    )
  }
}
