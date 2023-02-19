import React from 'react';
import Article from './article/Article';
import Carousel from './carousel/Carousel';
import Container from 'react-bootstrap/Container';
import HomeTabs from './tabs/Tabs';
import Accordion from './accordion/Accordion';


function Home() {
  return (
    <>
      <Carousel />
      <Container>
        <Article />
        <div className='d-md-none d-block'>
          <Accordion />
        </div>
       
          <div className='d-none d-md-block'>
            <HomeTabs />
          </div>
      </Container>

    </>
  )
}

export default Home;