import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const baseURL = "http://127.0.0.1:8000/services/";

const animation={
  onscreen:{
    y: 0 ,
    opacity: 1,
    transition:{ duration: 1 }
  }
}

function Card(props){
    return(
        <motion.div 
        initial={{ y: "15%",opacity:0 }}
        whileInView={"onscreen"}
        viewport={{once:true , amount:0.1}}
        variants={animation}>
            <div class="max-w-sm p-6 bg-stone-100 border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <img class="w-16 h-14 rounded" src={props.icon} alt="Default avatar"/>
                    <h5 class="mt-2 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.content}</p>
            </div>
        </motion.div>
    )
}

export default function Services() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then(function (response) {
      setData(response.data);
      console.log(response)
    });
  }, []);

  if (!data) return null;

  return (
    <div>
        <div class="bg-orange-50 py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                {data.map((item) => (
                <Card key={item.id} icon={item.icon} title={item.title} content={item.content} />
              ))}
                </div>
            </div>
        </div>
    </div>
  )
}
