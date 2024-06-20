import React from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
<div>
    <section class="mt-16 pt-12 bg-[url(public/img/home/hero.png)] bg-cover bg-center bg-no-repeat">
        <div class="mx-auto max-w-screen-xl px-4 py-32  lg:flex lg:max-h-full lg:items-center" >
             
            <motion.div 
            initial={{  opacity: 0 }}
            animate={{opacity: 1 }}
            transition={ {duration: 2.5 }}
            class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h1 class="text-3xl text-white font-bold sm:text-5xl">
                    Enjoy Your Healthy 
                    <strong class="block font-bold">
                    Delicious Food.
                    </strong>
                </h1>

                <p class="text-white font-semibold text-lg mt-4 max-w-lg sm:text-xl/relaxed">
                Very proud to introduce Yummy.
                </p>

                <div className="mt-4 flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                    <Link to="/booktable">
                        <button className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-800 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                        Book a Table</button>
                    </Link>
                    <a href="#" className="inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-white border rounded-lg outline-none ring-indigo-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                    Watch Video</a>
                </div>
            </motion.div>

        </div>
    </section>
</div>
  )
}
