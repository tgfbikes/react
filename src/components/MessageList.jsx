'use strict';

import React from 'react';
import Firebase from 'firebase';
import _ from 'lodash';
import mui from 'material-ui';
import Message from './Message.jsx';

var {Card, List} = mui;


class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    
    this.firebaseRef = new Firebase('https://chatty-chatty.firebaseio.com/messages');
    this.firebaseRef.once('value', (dataSnapShot) => {
      var messages = dataSnapShot.val();
      this.setState({
        messages: messages
      });
    });
  }
  
  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <Message message={message.message} />
      );
    });
    
    return (
      <Card className='flex-grow-two left-margin'>
        <List>{messageNodes}</List>
      </Card>
    );
  }
}

export default MessageList;