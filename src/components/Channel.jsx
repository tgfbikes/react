'use strict';

import React from 'react';
import mui from 'material-ui';

var {ListItem} = mui;


class Channel extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    let activeStyle = {};
    
    if(this.props.channel.selected) {
      activeStyle.backgroundColor = '#f0f0f0';
    }
    
    return(
      <ListItem style={activeStyle}>
        {this.props.channel}
      </ListItem>
    );
  }
}

export default Channel;