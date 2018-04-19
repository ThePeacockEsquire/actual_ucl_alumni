import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

class YOG extends Component {
  render() {
    return (
      <div>
      <Tabs>
        <Tab eventKey={1} title="1991">
          Tab 1 content
        </Tab>
        <Tab eventKey={2} title="1992">
          Tab 2 content
        </Tab>
        <Tab eventKey={3} title="1993">
          Tab 3 content
        </Tab>
      </Tabs>
      </div>
    );
  }
}

export default YOG;
