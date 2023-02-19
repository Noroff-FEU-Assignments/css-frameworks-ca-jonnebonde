import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import tabImages from '../../../../assets/tab/TabImages';

function homeTabs() {
  return (
    <Tabs
      defaultActiveKey="first"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="first" title="First">
      <img
        className="d-block"
        src={tabImages.tab1}
        alt="An old tv"
      />
      </Tab>
      <Tab eventKey="second" title="Second">
      </Tab>
      <Tab eventKey="third" title="Third">
      </Tab>
    </Tabs>
  )
}

export default homeTabs