'use strict';

import React from 'react';
import mui from 'material-ui';

var {Card} = mui;


class MessageBox extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <Card className='message-box'>
        <textarea />
      </Card>
    );
  }
}

export default MessageBox; 