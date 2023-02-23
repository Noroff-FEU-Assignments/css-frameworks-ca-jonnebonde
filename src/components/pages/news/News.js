import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import PageHeading from '../../shared/pageheading/PageHeading';
import Pagination from './pagination/Pagination';
import Newscards from './newscards/Newscards';

function News() {
  return (
    <>
      <Helmet>
        <title>The YAY Company | News</title>
      </Helmet>
      <Container className="container__width--mobile">
        <PageHeading>News</PageHeading>
        <Pagination />
        <Newscards />
        <Pagination />
      </Container>
      
    </>

  )
}

export default News