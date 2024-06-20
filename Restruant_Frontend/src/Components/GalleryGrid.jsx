import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const baseURL = "http://127.0.0.1:8000/gallery/";

const animation={
  onscreen:{
    opacity: 1, scale: 1 ,
    transition:{ duration: 0.5 }
  }
}

export default function GalleryGrid() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then(function (response) {
      setData(response.data);
      console.log("response"+response)
    });
  }, []);

  if (!data) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {data.map((item) => (
        <motion.div
        initial={{  opacity: 0, scale: 0.5 }}
        whileInView={"onscreen"}
        viewport={{once:true , amount:0.1}}
        variants={animation}>
            <span  class="group block h-60 overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
              <img key={item.id} src={"public/img/gallery/"+item.imageUrl} loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </span>
        </motion.div>
      ))}
    </div>
  )
}
