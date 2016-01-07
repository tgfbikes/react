'use strict';

import React from 'react';
import mui from 'material-ui';
import trim from 'trim';

var {Card} = mui;


class MessageBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }
  
  onChange(event) {
    this.setState({
      message: event.target.value
    });
  }
  
  onKeyUp(event) {
    if (event.keyCode === 13 && trim(event.target.value) != '') {
      event.preventDefault();
      this.setState({
        message: ''
      });
      console.log('message sent');
    }
  }
  
  render() {
    return(
      <Card className='message-box'>
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