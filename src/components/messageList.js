import React from 'react';

import Message from './Message';


const MessageList= ({messages, checkState})=> {

    return (
      <div>
      {messages.map((element, index) => (<Message message= {element} key= {index} checkstate= {checkState} />))}
      </div>
    )
}

export default MessageList;
