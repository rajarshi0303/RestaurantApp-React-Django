import React from 'react'
import { motion } from 'framer-motion';

const animation={
    onscreen:{
      opacity: 1, scale: 1 ,
      transition:{ duration: 0.5 }
    }
  }

function Card(props){
    return(
        <motion.div initial={{  opacity: 0, scale: 0.5 }}
        whileInView={"onscreen"}
        viewport={{once:true , amount:0.1}}
        variants={animation}>
            <div className="transform transition duration-500  hover:-translate-x-3 hover:-translate-y-3">
                <div className="block max-w-sm p-6 bg-stone-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {props.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}


function AboutCards(){
    return(
    <>        
        <div className="bg-orange-50 py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <h2 className="text-2xl font-bold text-gray-500 lg:text-3xl">Why Choose Yummy?</h2>
                </div>

                <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                    <Card 
                        title="Quality of Food"
                        description="Customers are likely to choose a restaurant that offers high-quality and delicious food. The taste and presentation of the dishes are important factors in their dining experience."
                    />
                    <Card 
                        title="Great Service"
                        description="A friendly and efficient staff is key to creating a positive dining experience. Great service can make customers feel welcome and appreciated.Get Best Services in Yummy Restaurant"
                    />
                    <Card 
                        title="Atmosphere"
                        description="The ambiance and decor of a restaurant can greatly influence the dining experience. A pleasant atmosphere can make customers feel relaxed and comfortable.Great Atmosphere in Yummy"
                    />
                    <Card 
                        title="Affordable Prices"
                        description="Offering affordable prices can make a restaurant more appealing to customers who are on a budget. It can also help to attract a wider range of customers.Get Most Affordable Price in Yummy"
                    />
                </div>
            </div>
        </div>
    </>
    );
}

export default AboutCards;