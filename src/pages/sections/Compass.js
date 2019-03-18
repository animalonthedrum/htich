import React, { Component } from 'react'

export default class Compass extends Component {
  render() {
    return (
      <div className="compassContainer">
        <img src={require("../../images/compass.png")}  alt="Compass"/>
        <div className="compassText">
            <h3>Nearly the most fun you can have in 8sq ft.</h3>
            <p>Relax we said nearly.</p>
        </div>
      </div>
    )
  }
}
