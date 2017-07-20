import React from 'react';
import Label from '../components/Labels';

const Message = ({message, checkstate, test}) => {
    return (
<div className={"row message "+ message.classname.checkRead + " " + message.classname.checkSelect} onClick = {()=> {checkstate(message, 'read')}}>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" onClick = {()=> {checkstate(message, 'selected')}} checked={message.classname.checkCheck}/>
      </div>
      <div className="col-xs-2">
        <i className={"star fa fa-star" + message.classname.checkStar} onClick= {()=> {checkstate(message, 'starred')}}></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
  {message.labels.map((ele, index)=><Label ele= {ele} key={index}/>)}
    <a href="#" >
      {message.title}
    </a>
  </div>
</div>
    )
  }

export default Message;
