import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import tabImages from "../../../../assets/tab/TabImages";
import TabContent from "./tabcontent/TabContent";

function homeTabs() {
  return (
    <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="">
      {tabImages.map((tab, index) => (
        <Tab eventKey={tab.eventKey} title={tab.title} key={index}>
          <div className="d-flex">
            <img className="block-d" src={tab.src} alt={tab.alt} />
            <TabContent />
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}

export default homeTabs;
