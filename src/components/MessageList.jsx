'use strict';

import React           from 'react';
import Firebase        from 'firebase';
import _               from 'lodash';
import mui             from 'material-ui';
import Message         from './Message.jsx';
import ChatStore       from '../stores/ChatStore.jsx';
import connectToStores from 'alt/utils/connectToStores';

var {Card, List} = mui;


@connectToStores
class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    messages: {} 
    };
  }
  
  static getStores() {
    return [ChatStore];
  }
  
  static getPropsFromStores() {
    return ChatStore.getState();
  }
  
  render() {
    let messageNodes = null;
    
    if (this.props.messages) {
      messageNodes = _.values(this.props.messages).map((message) => {
        return (
          <Message message={message.message} />
        );
      });
    }
    
    return (
      <Card className='flex-grow-two left-margin'>
        <List>{messageNodes}</List>
      </Card>
    );
  }
}

export default MessageList;