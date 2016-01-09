'use strict';

import alt                          from '../alt';
import Actions                      from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import ChannelSrc                   from '../sources/ChannelSrc.js';
import MessagesSrc                  from '../sources/MessagesSrc.js';
import _                            from 'lodash';


// Creates the getChannels function from ChannelSrc to the ChatStore 
@datasource(ChannelSrc, MessagesSrc)

@decorate(alt)
class ChatStore {

  constructor() {
    this.state = {
      user: null,
      messages: null
    }
  }
  
  @bind(Actions.messagesReceived)
  receivedMessages(messages) {
    _(messages)
      .keys()
      .each( (key, index) => {
        messages[key].key = key;
      }).value();
      
      this.setState({
        messages
      });
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
    
    setTimeout(this.getInstance().getMessages, 100);
  }

  @bind(Actions.login)
  login(user) {
    this.setState({
      user: user
    });
  }
  
}

export default alt.createStore(ChatStore);