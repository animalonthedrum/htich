import React, { Component } from 'react';
import Scroll from './components/Scroll';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add( faEnvelope, faPhone, faChevronDown, faChevronUp, fab );

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scroll/>
      </div>
    );
  }
}

export default App;
