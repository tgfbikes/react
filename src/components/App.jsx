'use strict';

import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: [
        'message 1',
        'message 2'
      ]
    };
  }
  
  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div>{message}</div>
      );
    });
    
    return (
    <div>{messageNodes}</div>
    );
  }
  
}

export default App;