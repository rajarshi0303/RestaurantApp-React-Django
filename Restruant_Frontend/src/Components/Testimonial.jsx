import React from 'react'
import { Carousel } from 'flowbite-react';
import axios from "axios";
import { motion } from 'framer-motion';

const baseURL = "http://127.0.0.1:8000/testimonials/";

const animation={
  onscreen:{
    opacity: 1, scale: 1 ,
    transition:{ duration: 0.5 }
  }
}

function Card(props) {
    const { name, date, imageUrl, testimonial } = props;  
    return (
      <motion.div
      initial={{  opacity: 0, scale: 0.5 }}
      whileInView={"onscreen"}
      viewport={{once:false , amount:0.1}}
      variants={animation}> 
        <a className="mx-auto block max-w-3xl p-6 bg-stone-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <article>
            <div className="flex items-center mb-4 space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src={"public/img/testimonials/"+imageUrl}
                alt={name} />
              <div className="space-y-1 font-medium dark:text-white">
                <p>
                  {name}{" "}
                  <time
                    dateTime={date}
                    className="block text-sm text-gray-500 dark:text-gray-400">
                    Posted on {date}
                  </time>
                </p>
              </div>
            </div>
            <div className="flex items-center mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  aria-hidden="true"
                  className={`w-5 h-5 text-yellow-400 ${
                    i <= props.rating ? "" : "opacity-50"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20" >
                  <title>Star {i}</title>
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              ))}
            </div>
            <p>{testimonial}</p>
          </article>
        </a>
      </motion.div>
    );
  }

function Slider(){
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;

    return(
      <div>
        <div className="bg-orange-50 mb-4 h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel>
        {post.map((item) => (
                <Card key={item.id} imageUrl={item.imageurl} name={item.name} date={item.date} testimonial={item.content} rating={item.rating}/>
              ))}
    </Carousel>
  </div>
      </div>
    );
  }

export default function Testimonial() {
  return (
    <div>
        <Slider></Slider>
    </div>
  )
}
