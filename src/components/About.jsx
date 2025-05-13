import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import hikingImage from "../assets/hiking.jpeg";
import roseImage from "../assets/rose.jpeg";
import runningImage from "../assets/running.jpeg";
import sunsetImage from "../assets/sunset.jpeg";

const AboutMe = () => {
  const images = [
    hikingImage,
    roseImage,
    runningImage,
    sunsetImage,
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Extended time for better viewing
    return () => clearInterval(interval); 
  }, [images.length]);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Image transition variants
  const imageVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: "easeIn" } }
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          variants={textVariant()}
          initial="hidden"
          animate={controls}
          className={`${styles.sectionText} mb-6 text-center`}>
          About Me
        </motion.h2>
        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeIn("up", "spring", 0, 0.75)}
          className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-80 h-48 overflow-hidden rounded-md shadow-md relative">
            <AnimatePresence mode="sync">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={`Dynamic Image ${currentImage + 1}`}
                className={`w-full h-full object-cover absolute top-0 left-0`}
                style={images[currentImage] === sunsetImage ? { objectPosition: "center 25%" } : {}}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
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