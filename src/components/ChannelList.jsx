'use strict';

import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

var {Card, List} = mui;


class ChannelList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      channels: [
        'Star Trek',
        'Rock Climbing'
      ]
    };
  }
  
  render() {
    var channelNodes = this.state.channels.map((channel) => {
      return (
        <Channel channel={channel} />
      );
    });
    
    return (
      <Card>
      <List>{channelNodes}</List>
      </Card>
    );
  }
}

export default ChannelList;