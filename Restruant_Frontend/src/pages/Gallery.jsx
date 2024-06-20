import React from 'react'
import Heading from '../Components/Heading'
import GalleryGrid from '../Components/GalleryGrid'
import { Carousel } from 'flowbite-react';

function Slider(){
  return(
    <div className="mt-16 h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <img
      src="public/img/gallery/gallery10.png"
      alt="..."
    />
    <img
      src="public/img/menu/lunch5.png"
      alt="..."
    />
    <img
      src="public/img/home/hero.png" 
      alt="..."
    />
    <img
      src="public/img/event/event5.jpg" 
      alt="..."
    />
    <img
      src="public/img/event/event10.png"
      alt="..."
    />
  </Carousel>
</div>
  )
}


export default function Gallery() {
  return (
    <div>
      <Slider></Slider>
      <Heading title="Check Out Our Gallery" description="Yummy's Gallery"></Heading>
      <GalleryGrid></GalleryGrid>
    </div>
  )
}
