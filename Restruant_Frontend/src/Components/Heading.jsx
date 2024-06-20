import React from 'react'
import { motion } from 'framer-motion'

const animation={
    onscreen:{
      opacity: 1, scale: 1 ,
      transition:{ duration: 0.5 }
    }
  }

export default function Heading(props) {
  return (
    <div className="bg-orange-50 py-10 sm:py-4 lg:py-10">
        <motion.div
        initial={{  opacity: 0, scale: 0.5 }}
        whileInView={"onscreen"}
        viewport={{once:true , amount:0.1}}
        variants={animation}>
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <p className="mx-auto max-w-screen-md text-center text-orange-500 md:text-lg">
                    -{props.description}-
                </p>
                <h2 className="font-serif mb-4 text-center text-2xl font-bold text-black md:mb-5 lg:text-3xl">
                    {props.title}
                </h2>
            </div>
        </motion.div>
    </div>
  )
}
