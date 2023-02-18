import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImages from '../../../../assets/images/carousel';

function ImageSlider() {

  return (
    <Carousel interval={null} controls={false} defaultActiveIndex={1}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carouselImages.carousel2}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carouselImages.carousel1}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100"
        src={carouselImages.carousel3}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  )
}

export default ImageSlider