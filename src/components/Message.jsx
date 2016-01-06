'use strict';

import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;


class Message extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
    <ListItem leftAvatar={<Avatar src='https://identicons.github.com/tgfbikes.png' />}>
        {this.props.message}
      </ListItem>
    );
  }

}

export default Message;