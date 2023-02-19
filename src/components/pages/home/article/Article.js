import React from 'react';
import Heading from './heading/Heading';
import Content from './content/Content';

function Article() {
  return (
      <div className='home__article-container mt-5'>
        <Heading />
        <Content />
      </div>
  )
}

export default Article