import React from 'react';
import TabText from './tabtext/TabText';
import TabLinks from './tablinks/TabLinks';

function TabContent() {
  return (
    <div className='tab__text-container'>
      <TabText />
      <TabLinks />
    </div>
  )
}

export default TabContent