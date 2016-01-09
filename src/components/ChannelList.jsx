'use strict';

import React           from 'react';
import Channel         from './Channel.jsx';
import mui             from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore       from '../stores/ChatStore.jsx';

var {Card, List, CircularProgress} = mui;


@connectToStores
class ChannelList extends React.Component {

  constructor(props) {
    super(props);
    ChatStore.getChannels();
  }
  
  static getStores() {
    return [ChatStore]
  }
  
  static getPropsFromStores() {
    return ChatStore.getState();
  }
  
  render() {
    if (!this.props.channels) {
      return (
        <Card className='flex-grow-one'>
          <CircularProgress
            style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            margin: '0 auto',
            display: 'block',
            width: '60px'
            }}
          />
        </Card>
      );
    }
    
    var channelNodes = _(this.props.channels)
      .keys()
      .map((key) => {
        let channel = this.props.channels[key];
        return (
          <Channel channel={channel} />
        );
      }).value();
    
    return (
      <Card className='flex-grow-one'>
        <List>{channelNodes}</List>
      </Card>
    );
  }
}

export default ChannelList;