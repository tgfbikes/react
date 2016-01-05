'use strict';

import React from 'react';


class MessageList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      messages: [
        'Captain Jean Luke Picard',
        'Commander William Ryker'
      ]
    };
  }
  
  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div>{message}</div>
      );
    });
    
    return (
      <div>{messageNodes}</div>
    );
  }
}

export default MessageList;