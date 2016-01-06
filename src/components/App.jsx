'use strict';

import React from 'react';
import MessageList from './MessageList.jsx';
import mui from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

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
    return (
      <div>
        <AppBar title='Chatty Chatty Bang Bang' />
        <MessageList />
      </div>
    );
  }
  
}

export default App;