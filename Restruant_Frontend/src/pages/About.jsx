import Heading from "../Components/Heading";
import AboutCards from "../Components/AboutCards"; 
import Footer from '../Components/Footer'
import { motion } from "framer-motion";

function AboutContent(){
    return(
    <div>
        <section className="bg-orange-50 dark:bg-gray-900">
            <motion.div
            initial={{  opacity: 0 }}
            animate={{opacity: 1 }}
            transition={ {duration: 2 }}
            className="container px-6 py-3 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center">
                    <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="public/img/about/about.jpg" alt=""/>

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                        <p className="text-5xl font-semibold text-blue-500 ">“</p>

                        <h1 className="text-sm font-semibold text-gray-800 dark:text-white lg:text-lg lg:w-96">
                            “Our restaurant is dedicated to providing our customers with an exceptional dining experience
                            through great food, attentive service, and a welcoming atmosphere.”
                        </h1>

                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                            A restaurant is a place where people can enjoy delicious food and great company in a comfortable
                            and welcoming atmosphere. A good restaurant not only offers quality food but also provides
                            exceptional service and an overall enjoyable experience. From the moment a customer walks
                            through the door, they should feel welcomed and valued.
                        </p>
                        <div className="flex items-center justify-between mt-4 lg:justify-start">
                            <img className="h-72 w-full object-cover md:h-full md:w-80" src="public/img/about/about-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    </div>
    );
}

function About(){
    return(
    <div>
        <div className="mt-16">
        <Heading title="Learn More About Yummy." description="About Us"></Heading>
        </div>
        <AboutContent></AboutContent>
        <AboutCards></AboutCards>
        <Footer></Footer>
    </div>
    );
}

export default About;