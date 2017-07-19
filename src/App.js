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
    checkSelect: '',
    checkCheck: ''
  }},
  {title: 'Maybe it\'s an email, who knows?',
  starred: false,
  read:false,
  selected: false,
  checked: false,
  classname: {
    checkStar: '-o',
    checkRead:'unread',
    checkSelect: '',
    checkCheck: ''
  }}];

function checkClass (obj, objkey) {
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
    obj.classname.checkCheck = 'checked';
  }
}
function selectAllCheckBoxes (arr) {
  let counter = 0;
  arr.forEach (ele=> {
    if(ele.selected) {
      counter++
    }
    return counter;
  })
  if(counter === arr.length){
    arr.forEach (e=> {
      e.selected = false;
      e.classname.checkSelect = '';
      e.classname.checkCheck = '';
    })
   } else {
    arr.forEach (e=> {
      e.selected = true;
      e.classname.checkSelect = 'selected';
      e.classname.checkCheck = 'checked';
  })
  }
}

function selectAsRead (arr) {
  arr.forEach(ele=>{
    if(ele.selected){
      ele.read = true;
      ele.classname.checkRead = 'read';
    }
  })
}

function selectAsUnread (arr) {
  arr.forEach(ele=>{
    if(ele.selected){
      ele.read = false;
      ele.classname.checkRead = 'unread';
    }
  })
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      messageArray: messageArray,
      toolbar : {
        checkboxClass: "fa fa-square-o",
        checkbox: false
      }
    }
    this.checkStateChange=this.checkStateChange.bind(this);
    this.setStateChangeToolBar = this.setStateChangeToolBar.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
    this.markAsUnread = this.markAsUnread.bind(this);
  }
  checkStateChange (obj, objkey, event) {
    checkClass(obj, objkey, event);
    this.setState({messageArray:this.state.messageArray});
  }

  setStateChangeToolBar (arr) {
    selectAllCheckBoxes(arr);
    this.setState({messageArray:this.state.messageArray});
  }
  markAsRead (arr) {
    selectAsRead (arr);
    this.setState({messageArray:this.state.messageArray});
  }

  markAsUnread (arr) {
    selectAsUnread (arr);
    this.setState({messageArray:this.state.messageArray});
  }

  render() {
    return (
      <div className="container">
      <header>React-Inbox</header>
        <Toolbar markAsUnread={this.markAsUnread} markAsRead= {this.markAsRead} checkbox = {this.setStateChangeToolBar} messages = {this.state.messageArray} toolbar = {this.state.toolbar}/>
        <MessageList messages= {this.state.messageArray} checkState= {this.checkStateChange} />
      </div>
    );
  }
}

export default App;
