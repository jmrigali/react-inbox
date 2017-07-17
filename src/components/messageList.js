import React from 'react';

import Message from './Message';


const MessageList= ({messages})=> {

    return (
      <div>
      {messages.map((element, index) => (<Message message= {element} key= {index} />))}
      </div>
    )

}

export default MessageList;
