import React from "react";
import { Helmet } from "react-helmet";
import PageHeading from "../../shared/pageheading/PageHeading";
import Article from "./article/Article";
import Carousel from "./carousel/Carousel";
import Container from "react-bootstrap/Container";
import HomeTabs from "./tabs/Tabs";
import Accordion from "./accordion/Accordion";

function Home() {
  return (
    <>
      <Helmet>
        <title>The YAY Company | Home</title>
      </Helmet>
      <Carousel />
      <Container className="mobile-width__container">
        <PageHeading>We do YAY things</PageHeading>
        <Article />
        <div className="d-md-none d-block">
          <Accordion />
        </div>
        <div className="d-none d-md-block">
          <HomeTabs />
        </div>
      </Container>
    </>
  );
}

export default Home;
