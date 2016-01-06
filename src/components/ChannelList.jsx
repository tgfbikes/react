'use strict';

import React from 'react';
import mui from 'material-ui';

var {Card, List} = mui;

class ChannelList extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Card>
        <List></List>
      </Card>
    );
  }

}

export default ChannelList;