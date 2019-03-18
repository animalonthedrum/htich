import React, { Component } from 'react';
import {Waypoint} from "react-waypoint";
import Revealable from './Revealable';

class Reveal extends Component {
    state = {
      revealed: false
    };
    reveal = () => {
      this.setState({ revealed: true });
    };
    render() {
      return (
        <Waypoint onEnter={this.reveal}>
          <Revealable show={this.state.revealed}>
            {this.props.children}
          </Revealable>
        </Waypoint>
      );
    }
  }

  export default Reveal


  

