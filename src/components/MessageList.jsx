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
    // The data coming from firebase will change when the keys for the data are not
    // able to be used as array indexes; ie 0,1,2,etc.  Instead it will send objects.
    // messagesVal is the object it will send back instead of an array.
      var messagesVal = dataSnapShot.val();
      // Using lodash to create an array out of the objects pass from firebase for the 
      // app to use.
      var messages = _(messagesVal)
        // Creates array of keys
        .keys()
        // Maps over the keys.  .clone creates a clone of the data so it is treated as immutable.
        .map((messageKey) => {
          var cloned = _.clone(messagesVal[messageKey]);
          cloned.key = messageKey;
          return cloned;
        }).value();
        
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