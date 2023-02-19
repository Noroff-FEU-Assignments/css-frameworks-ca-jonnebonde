import React from 'react';
import Article from './article/Article';
import Carousel from './carousel/Carousel';
import Container from 'react-bootstrap/Container';
import HomeTabs from './tabs/Tabs';


function Home() {
  return (
    <>
      <Carousel />
      <Container>
        <Article />
        <HomeTabs />
      </Container>
      
    </>
    )
}

export default Home;