import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const baseURL="http://127.0.0.1:8000/event/"

const animation={
  onscreen:{
    y: 0 ,
    opacity: 1,
    transition:{ duration: 1 }
  }
}

function Card(props) {
    return (
    <motion.div 
    initial={{ y: "15%",opacity:0 }}
    whileInView={"onscreen"}
    viewport={{once:true , amount:0.1}}
    variants={animation} 
    class="max-w-3xl bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
      
      <div className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src={"/public/img/event/"+props.imageUrl}  loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      </div>

      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>      
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">${props.price}</span>
            <Link to="/bookevent">
              <button className="mt-4 inline-block rounded-lg bg-stone-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none hover:bg-stone-700 focus-visible:ring md:text-base">
                Book Now</button>
            </Link>
        </div>
      </div>
      
    </motion.div>
    )
  }

export default function EventCards() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then(function (response) {
      setData(response.data);
      console.log(response.data)
    });
  }, []);

  if (!data) return null;
  
  return (
    <div>
        <div>
        <div className="bg-orange-50 mb-10 sm:py-8 lg:py-0">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
  
            <div className="grid gap-6 sm:grid-cols-2">
            {data.map((item) => (
                <Card key={item.id} imageUrl={item.imageUrl} title={item.title} description={item.content} price={item.price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
