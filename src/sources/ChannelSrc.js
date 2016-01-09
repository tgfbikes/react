'use strict';

import Actions  from '../actions';
import Firebase from 'firebase';


let firebaseRef = new Firebase('http://chatty-chatty.firebaseio.com/channels');

let ChannelSrc = {

  getChannels: {
    remote(state) {
      return new Promise((resolve, reject) => {
        firebaseRef.once('value', (dataSnapShot) => {
          var channel = dataSnapShot.val();
          resolve(channel);
        });
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }

}

export default ChannelSrc;