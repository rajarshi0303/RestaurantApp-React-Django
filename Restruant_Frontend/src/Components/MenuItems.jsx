import React from 'react'
import axios from 'axios';
import Heading from './Heading';
import { motion } from 'framer-motion';

const animation={
  onscreen:{
    y: 0 ,
    transition:{ duration: 1 }
  }
}

function Card(props){
    return(
<motion.div
initial={{ y: "50%" }}
whileInView={"onscreen"}
viewport={{once:true , amount:0.1}}
variants={animation}
 class="flex items-center space-x-4 pr-8 rounded-lg">
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
</motion.div>
    )
}


export default function MenuItems() {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
      breakfast();
    }, []);
    
    function breakfast(){
        axios.get("http://127.0.0.1:8000/breakfast/").then(function (response) {
            setData(response.data);
          });
    }
    function lunch(){
        axios.get("http://127.0.0.1:8000/lunch/").then(function (response) {
            setData(response.data);
          });
    }
    function dinner(){
        axios.get("http://127.0.0.1:8000/dinner/").then(function (response) {
            setData(response.data);
          });
    }
    if (!data) return null;

  return (
    <div>
      <div className="mt-16">
      <Heading title="Check Out Our Menu." description="Our Menu"></Heading>
        </div>

        <motion.nav 
        className="shadow dark:bg-gray-800">
          <div className="container flex items-center justify-center mx-auto text-gray-600 capitalize dark:text-gray-300">
            <button onClick={() => breakfast()} className="text-2xl border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              <img class="w-28 h-24 rounded" src="public/img/logo/breakfast.png" alt="Default avatar"/>
              Breakfast
              </button>
            <button onClick={() => lunch()} className="text-2xl border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            <img class="w-28 h-28 rounded" src="public/img/logo/lunch.png" alt="Default avatar"/>
              Lunch
            </button>
            <button onClick={() => dinner()} className="text-2xl border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            <img class="w-28 h-28 rounded" src="public/img/logo/dinner.png" alt="Default avatar"/>
              Dinner
            </button>
          </div>
        </motion.nav>

        <div class="bg-orange-50 py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="grid gap-6 sm:grid-cols-2">
                {data.map((item) => (
                <Card key={item.id} src={item.src} name={item.name} content={item.content} price={item.price}/>
              ))}
                </div>
            </div>
        </div>
    </div>
  )
}
