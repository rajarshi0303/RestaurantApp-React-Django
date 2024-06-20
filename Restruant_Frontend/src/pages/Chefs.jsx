import React from 'react'
import Heading from '../Components/Heading'
import ChefsTeam from '../Components/ChefsTeam';
import Footer from '../Components/Footer';


function Banner(){
    return(
<div class="bg-orange-50">

    <div class="bg-orange-50 mt-16">
    <div class="mx-auto max-w-full ">
        <div class="overflow-hidden rounded-lg sm:flex-row md:h-96">
        <div class="order-first h-48 w-full bg-white sm:order-none sm:h-auto sm:w-1/2 lg:w-full">
            <img src="/public/img/chefs/chefs13.png" loading="lazy" alt="Photo by Dom Hill" class="w-full object-cover object-center" />
        </div>
        </div>
    </div>
    </div>
</div>
    );
  }


export default function Chefs() {
  return (
    <div>
        <Banner></Banner>
        <Heading title="Our Professional Chefs." description="Chefs"></Heading>
        <ChefsTeam></ChefsTeam>
        <Footer></Footer>
    </div>
  )
}
