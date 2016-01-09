'use strict';

import alt                          from '../alt';
import Actions                      from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import ChannelSrc                   from '../sources/ChannelSrc.js';
import _                            from 'lodash';


// Creates the getChannels function from ChannelSrc to the ChatStore 
@datasource(ChannelSrc)

@decorate(alt)
class ChatStore {

  constructor() {
    this.state = {
      user: null
    }
  }
  
  @bind(Actions.channelsReceived)
  receivedChannels(channels) {
    let selectedChannel;
    _(channels)
      .keys()
      .each( (key, index) => {
        channels[key].key = key;
        if (index == 0) {
          channels[key].selected = true;
          selectedChannel = channels[key];
        }
      }).value();
      
    this.setState({
      channels,
      selectedChannel
    });
  }

  @bind(Actions.login)
  login(user) {
    this.setState({
      user: user
    });
  }
  
}

export default alt.createStore(ChatStore);