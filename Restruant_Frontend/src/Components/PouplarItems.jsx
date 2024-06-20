import React from 'react'
import axios from "axios";
import { motion } from 'framer-motion';

const baseURL = "http://127.0.0.1:8000/popularitems/";

function Card(props){
    return(
    <div
    class="flex items-center space-x-4 pr-8 ">
        <div class="flex-shrink-0">
            <img class="w-24 h-24 rounded" src={"public/img/menu/"+props.src} alt="Default avatar"/>
        </div>
        <div class="flex-1 min-w-0">
            <p class="text-xl font-bold text-orange-800 truncate dark:text-white">
                {props.name}
            </p>
            <p class=" inline-flex text-sm text-gray-500 truncate dark:text-gray-400 whitespace-normal break-words">
                {props.content}
            </p>
        </div>
        <div class="text-2xl inline-flex font-bold text-orange-900 dark:text-white">
            ${props.price}
        </div>
    </div>
    )
}

const animation={
  onscreen:{
    y: 0 ,
    opacity: 1,
    transition:{ duration: 0.9 }
  }
}

export default function PouplarItems() {
    
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setData(response.data);
      });
    }, []);
  
    if (!data) return null;

  return (
    <div>
        <div
         class="bg-orange-50 py-6  sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

                <motion.div
                initial={{ y: "5%" ,opacity: 0}}
                whileInView={"onscreen"}
                viewport={{once:true , amount:0}}
                variants={animation}
                class="grid gap-6 sm:grid-cols-2">
                {data.map((item) => (
                <Card key={item.id} src={item.src} name={item.name} content={item.content} price={item.price}/>
              ))}
                </motion.div>

            </div>
        </div>
    </div>
  )
}
