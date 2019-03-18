import React, { Component } from 'react';
import Compass from './sections/Compass';

export default class About extends Component {
  render() {
    return (
      <div>
      <Compass/>
      <div className="aboutContainer">
        <div>
          <h2>The tiny trailer with a big heart.</h2>
          <p>Hitch is a renovated tear drop camper, standing 6 ft tall and 8ft long, she’s the little way to get away. Available for rental from one night to weeks on end, she’s perfect for your next adventure.</p>
          <ul>
            <li>Perfect for solo or couples travellers — we have tried three, it’s a 
bit of a squeeze.</li>
<li>
Micro-kitchen featuring a hot plate, kettle, stove, microwave and 
storage cupboards.
</li>
<li>
Standard connection rod, suitable for hitching to any medium to
large sized vehicle.
</li>
          </ul>
        </div>
        <div>
        <img src={require("../images/maidenVoyage.png")}  alt="Maiden Voyage"/>
        </div>
      </div>
      </div>
    )
  }
}
