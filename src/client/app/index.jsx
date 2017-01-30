import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));