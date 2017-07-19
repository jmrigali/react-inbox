import React, { Component } from 'react';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';

const messageArray = [
  {title: 'Here is some message text that has a bunch of stuff',
  starred: false,
  read: false,
  selected: false,
  checked: false,
  classname: {
    checkStar: '-o',
    checkRead:'unread',
    checkSelect: '',
    chechCheck: '',
  }},
  {title: 'This is something I\'m not quite sure what',
  starred:false,
  read: false,
  selected: false,
  checked: false,
  classname: {
    checkStar: '-o',
    checkRead:'unread',
    checkSelect: 'selected'
  }},
  {title: 'Maybe it\'s an email, who knows?',
  starred: false,
  read:false,
  selected: false,
  checked: false,
  classname: {
    checkStar: '-o',
    checkRead:'unread',
    checkSelect: 'selected'
  }}];

function checkClass (obj, objkey, event) {
  if(obj[objkey]) {
  obj[objkey] = false;
  defaultClasses(obj, objkey);
  } else {
    obj[objkey] = true
    selectedClasses(obj, objkey);
  }
}

function defaultClasses (obj, objkey) {
  if(objkey === 'starred') {
    obj.classname.checkStar = '-o';
  } else if (objkey === 'read') {
    obj.classname.checkRead = 'unread';
  } else if (objkey === 'selected') {
    obj.classname.checkSelect = '';
  } else if (objkey === 'checked') {
    obj.classname.checkCheck = '';
  }
}
function selectedClasses (obj, objkey) {
  if(objkey === 'starred') {
    obj.classname.checkStar = '';
  } else if (objkey === 'read') {
    obj.classname.checkRead = 'read';
  } else if (objkey === 'selected') {
    obj.classname.checkSelect = 'selected';
  } else if (objkey === 'checked') {
    obj.classname.checkCheck = 'selected';
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {messageArray: messageArray}
    this.checkStateChange=this.checkStateChange.bind(this);
  }
  checkStateChange (obj, objkey, event) {
    checkClass(obj, objkey, event);
    this.setState({messageArray:this.state.messageArray});
  }

  render() {
    return (
      <div className="container">
      <header>React-Inbox</header>
        <Toolbar checkState = {this.checkStateChange}/>
        <MessageList messages= {this.state.messageArray} checkState= {this.checkStateChange} />
      </div>
    );
  }
}

export default App;
