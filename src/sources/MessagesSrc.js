'use strict';

import Actions  from '../actions';
import Firebase from 'firebase';


let firebaseRef = null;

let MessagesSrc= {

  getMessages: {
    remote(state) {
      
      if(firebaseRef) {
        firebaseRef.off();
      }
      
      firebaseRef = new Firebase('http://chatty-chatty.firebaseio.com/messages/' + state.selectedChannel.key);
      return new Promise((resolve, reject) => {
        firebaseRef.once('value', (dataSnapShot) => {
          var messages = dataSnapShot.val();
          resolve(messages);
        });
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed
  }

}

export default MessagesSrc;