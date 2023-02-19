import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import tabImages from '../../../../assets/tab/TabImages';
import TabLinks from '../tabs/tabcontent/tablinks/TabLinks';
import TabText from '../tabs/tabcontent/tabtext/TabText';


function AccordionTabs() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body>
          <TabText />
          <img className='block-d w-100' src={tabImages.tab1} alt="An old tv" />
          <TabLinks />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body>
        <TabText />
          <img className='block-d w-100' src={tabImages.tab2} alt="A wall full of pictures" />
          <TabLinks />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body>
        <TabText />
          <img className='block-d w-100' src={tabImages.tab3} alt="A window on a rusty wall" />
          <TabLinks />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordionTabs