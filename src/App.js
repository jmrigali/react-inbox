import React, { Component } from 'react';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';

const messageArray = [
  {title: 'Here is some message text that has a bunch of stuff',
  unread: true,
  checkbox: false},
  {title: 'This is something I\'m not quite sure what',
  unread:true,
  checkbox: false},
  {title: 'Maybe it\'s an email, who knows?',
  unread: true,
  checkbox: false}];

class App extends Component {
  constructor () {
    super()
    this.state = {
      messageArray
    };
  }

  render() {
    return (
      <div className="container">
      <header>React-Inbox</header>
        <Toolbar />
        <MessageList messages= {this.state.messageArray} />
      </div>
    );
  }
}

export default App;
