import React from "react";
import { Helmet } from "react-helmet";
import PageHeading from "../../components/shared/pageheading/PageHeading";
import Article from "../../components/article/Article";
import Carousel from "../../components/carousel/Carousel";
import Container from "react-bootstrap/Container";
import HomeTabs from "../../components/tabs/Tabs";
import Accordion from "../../components/accordion/Accordion";

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
