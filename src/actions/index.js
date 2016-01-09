'use strict';

import alt from '../alt';
import Firebase from 'firebase';


class Actions {
  
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed'
    );
  }

  login(args) {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://chatty-chatty.firebaseio.com/messages');
      
      firebaseRef.authWithOAuthPopup('google', (err, user) => {
        if (err) {
          console.log('Authentication error');
          return;
        }
        
        dispatch(user);
        
      });
    }
  }

}

export default alt.createActions(Actions);