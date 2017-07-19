import React from 'react';

const Message = ({message, checkstate, test}) => {
    return (
<div className={"row message "+ message.classname.checkRead} onClick = {(event)=> {checkstate(message, 'read', event)}}>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" onClick = {(event)=> {checkstate(message, 'selected', event)}}/>
      </div>
      <div className="col-xs-2">
        <i className={"star fa fa-star" + message.classname.checkStar} onClick= {(event)=> {checkstate(message, 'starred', event)}}></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#" >
      {message.title}
    </a>
  </div>
</div>
    )
  }

export default Message;
