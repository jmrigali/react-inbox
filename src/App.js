import React, { Component } from 'react';
import Message from './components/Message';
import Toolbar from './components/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="container">
      <header>React-Inbox</header>
        <Toolbar />
        <Message />
      </div>
    );
  }
}

export default App;
