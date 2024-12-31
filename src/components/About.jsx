import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, textVariant } from "../utils/motion";

const AboutMe = () => {
  const images = [
    "https://via.placeholder.com/500x300?text=Image+1",
    "https://via.placeholder.com/500x300?text=Image+2",
    "https://via.placeholder.com/500x300?text=Image+3",
    "https://via.placeholder.com/500x300?text=Image+4",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); 
    return () => clearInterval(interval); 
  }, [images.length]);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
            <motion.h2 
                variants={textVariant()}
                initial="hidden"
                animate="show"
                className="text-4xl font-bold text-white mb-6 text-center">
                About Me
            </motion.h2>
            <motion.div 
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={fadeIn("up", "spring", 0, 0.75)}
                className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-80 h-48 overflow-hidden rounded-md shadow-md">
                <img
                    src={images[currentImage]}
                    alt={`Dynamic Image ${currentImage + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                />
                </div>
                <div className="flex-1">
                <p className="text-white text-lg">
                    Hi, I'm Hosung Kim! I'm passionate about software engineering, AI, and
                    building solutions that make an impact. My journey includes projects in prompt
                    engineering, hackathons, and developing apps like Pillora to simplify lives.
                </p>
                </div>
            </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;