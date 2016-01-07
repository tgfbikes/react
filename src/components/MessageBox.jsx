'use strict';

import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Firebase from 'firebase';

var {Card, CardTitle} = mui;


class MessageBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
    
    this.fireBaseRef = new Firebase('https://chatty-chatty.firebaseio.com/messages');
  }
  
  onChange(event) {
    this.setState({
      message: event.target.value
    });
  }
  
  onKeyUp(event) {
    if (event.keyCode === 13 && trim(event.target.value) != '') {
      event.preventDefault();
      
      this.fireBaseRef.push({
        message: this.state.message
      }); 
      
      this.setState({
        message: ''
      });
    }
  }
  
  render() {
    return(
      <Card className='message-box'>
        <CardTitle
          title='Leave a comment'
          subtitle='right now...'
        />
        <textarea 
          value={this.state.message}
          onChange={this.onChange.bind(this)} // have to .bind(this) for ES6 class, sort of dumb, but whatever
          onKeyUp={this.onKeyUp.bind(this)}
        />
      </Card>
    );
  }
}

export default MessageBox; 