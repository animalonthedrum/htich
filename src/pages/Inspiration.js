import React, { Component } from 'react'

export default class Inspiration extends Component {
  render() {
    return (
      <div className='inspirationContainer'>
      <div className="inspirationL">
      <h2>Looking for inspiration?</h2>
      <p>finding the perfect vacation spot can be overwhelming, so we've compiled a list of our favorite destinations as well as the time it takes to get there. </p>
      <div className="dest">
      <img src={require("../images/inspiration/BoundaryWaters.png")}  alt="Boundary Waters"/>
      <p>Boundary Waters Canoe Wilderness Area</p>
      <p>5 hours away</p>
      </div>
      <div className="dest">
      <img src={require("../images/inspiration/MadelineIsland.png")}  alt="Madeline Islands"/>
      <p>Madeline Island, WI</p>
      <p>3 hours away</p>
      </div>
      </div>
      <div className="inspirationR">
      <div className="dest">
      <img src={require("../images/inspiration/northShore.png")}  alt="North Shore, MN"/>
      <p>North Shore, MN</p>
      <p>4 hours away</p>
      </div>
      <div className="dest">
      <img src={require("../images/inspiration/LaCrosse.png")}  alt="La Crosse WI"/>
      <p>La Crosse, WI </p>
      <p>3 hours away</p>
      </div>
      </div>
      </div>
    )
  }
}
