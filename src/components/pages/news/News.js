import React from "react";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
import PageHeading from "../../shared/pageheading/PageHeading";
import Pagination from "./pagination/Pagination";
import Newscards from "./newscards/Newscards";

function News() {
  return (
    <>
      <Helmet>
        <title>The YAY Company | News</title>
      </Helmet>
      <Container className="mobile-width__container">
        <PageHeading>News</PageHeading>
        <Pagination />
        <Newscards />
        <Pagination />
      </Container>
    </>
  );
}

export default News;
