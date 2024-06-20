import React from 'react'
import Hero from '../Components/Hero'
import Heading from "../Components/Heading";
import Services from '../Components/Services'
import PouplarItems from '../Components/PouplarItems';
import Testimonial from '../Components/Testimonial';
import Footer from '../Components/Footer';
export default function Home() {
  return (
    <div>
        <Hero></Hero>
        <Heading title="Explore Our Services." description="- Our Services -"></Heading>
        <Services></Services>
        <Heading title="Most Popular Items." description="- Our Food Menu -"></Heading>
        <PouplarItems></PouplarItems>
        <Heading title="Our Client Says !!!" description="- Testimonial -"></Heading>
        <Testimonial></Testimonial>
        <Footer></Footer>
    </div>
  )
}
