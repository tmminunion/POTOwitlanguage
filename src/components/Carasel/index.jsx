import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./styles.css";
import Hero from '../Hero/Hero';

import Nufat from '../Nufat';
function MyCarousel() {
  return (
    <Carousel indicators={false} prevLabel="" nextLabel="">
      <Carousel.Item>
      <Nufat />
      </Carousel.Item>
      <Carousel.Item>
       <Hero />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
