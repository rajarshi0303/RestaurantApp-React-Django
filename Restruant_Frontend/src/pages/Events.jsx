import React from 'react'
import { Link } from 'react-router-dom';
import Heading from "../Components/Heading";
import Footer from '../Components/Footer';
import EventCards from '../Components/EventCards';
import { motion } from 'framer-motion';

function Banner(){
  return(
    <div>
      <section class="bg-[url(public/img/event/event10.png)] bg-cover bg-center bg-no-repeat">
        <motion.div
          initial={{  opacity: 0 }}
          animate={{opacity: 1 }}
          transition={ {duration: 2.5 }}
          class="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:max-h-full lg:items-center">
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl text-white font-extrabold sm:text-5xl">
              Share Your Moments With Us.
            </h1>

            <p class="mt-4 text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/bookevent">
              <button className="inline-block rounded-lg bg-indigo-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Book an Event</button>
            </Link>
            </div>
          </div>
        </motion.div>
      </section>

</div>
  );
}


export default function Events() {
  return (
    <div>
      <Banner></Banner>
      <Heading title="Share Your Moments In Yummy." description="Book an Event"></Heading>
      <EventCards></EventCards>
      <Footer></Footer>
    </div>
  )
}
