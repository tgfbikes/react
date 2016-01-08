'use strict';

import React           from 'react';
import Firebase        from 'firebase';
import _               from 'lodash';
import mui             from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';

import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox  from './MessageBox.jsx';
import Login       from './Login.jsx';
import ChatStore   from '../stores/ChatStore.jsx';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;


@connectToStores
class App extends React.Component {

  constructor() {
    super();
    ThemeManager.setPalette({
      primary1Color: Colors.grey700,
      primary2Color: Colors.grey400,
      primary3Color: Colors.grey300,
      accent1Color:  Colors.greenA200
    });
  }
  
    // **ES7** Subscribes App to ChatStore
    static getStores() {
      return [ChatStore];
    }
    
    // **ES7** Changes state based on stores update
    static getPropsFromStores() {
      return ChatStore.getState();
    }
  
    // **ES7** Setting color theme for child component's context via muiTheme variable
    // This only declares we are placing this on the child's context
    static childContextTypes = {
      muiTheme: React.PropTypes.object
    }
    
    // Sets the child component context...maybe should be called setChildContext
    // but I'm a good boy and I follow instructions
    getChildContext() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    }
    
  
  render() {
    var view = <Login />
    
    if (this.props.user) {
      view = (
        <div>
          <div className='flex-container'>
            <ChannelList />
            <MessageList />
          </div>
          <MessageBox />
        </div>
      ); 
    }
    
    return (
      <div>
        <AppBar title='Chatty Chatty Bang Bang' />
        {view}
      </div>
    );
  }
  
}

export default App;