import React from "react";
import Accordion from "react-bootstrap/Accordion";
import tabImages from "../../assets/tab/TabImages";
import TabLinks from "../tabs/tabcontent/tablinks/TabLinks";
import TabText from "../tabs/tabcontent/tabtext/TabText";

function AccordionTabs() {
  return (
    <Accordion defaultActiveKey="0">
      {tabImages.map((accordion, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{accordion.title}</Accordion.Header>
          <Accordion.Body>
            <TabText />
            <img
              className="block-d w-100"
              src={accordion.src}
              alt={accordion.alt}
            />
            <TabLinks />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionTabs;
