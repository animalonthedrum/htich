import React, { Component } from 'react';

import Anchors from './Anchors';
import MobileNav from './MobileNav';
import NavClose from './NavClose';
// import More from './More';

class Menu extends Component {
  state = {
    navOpen: false
  };

  navToggleClickHandler = () => {
    this.setState((prevState) => {
      return {navOpen: !prevState.navOpen};
    });
  };

  closeClickHandler = () => {
    this.setState({navOpen: false});
  };

  render() {
    let navClose;

    if (this.state.navOpen) {
      navClose = <NavClose click={this.closeClickHandler} />
    }
    return (
      <div>
        <Anchors navClickHandler={this.navToggleClickHandler} />
        <MobileNav show={this.state.navOpen}  click={this.closeClickHandler} />
        {navClose}
      </div>
    );
  }
}

export default Menu;