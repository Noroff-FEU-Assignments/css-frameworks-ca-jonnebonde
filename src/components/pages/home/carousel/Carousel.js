import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImages from '../../../../assets/carousel/CarouselImages';


function ImageSlider() {

  return (
    <Carousel interval={null} controls={false} defaultActiveIndex={1}>
      {carouselImages.map((image) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image.src} alt={image.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlider