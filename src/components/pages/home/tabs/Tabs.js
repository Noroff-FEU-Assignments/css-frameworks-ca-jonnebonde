import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import tabImages from '../../../../assets/tab/TabImages';
import TabContent from './tabcontent/TabContent';

function homeTabs() {
  return (
    <Tabs
      defaultActiveKey="first"
      id="uncontrolled-tab-example"
      className=""
    >
      <Tab eventKey="first" title="First">
        <div className='d-flex'>
          <img className='block-d' src={tabImages.tab1} alt="An old tv" />
          <TabContent />
        </div>
      </Tab>
      <Tab eventKey="second" title="Second">
      <div className='d-flex'>
          <img className='block-d' src={tabImages.tab2} alt="A wall full of pictures" />
          <TabContent />
        </div>
      </Tab>
      <Tab eventKey="third" title="Third">
      <div className='d-flex'>
          <img className='block-d' src={tabImages.tab3} alt="A window on a rusty wall" />
          <TabContent />
        </div>
      </Tab>
    </Tabs>
  )
}

export default homeTabs