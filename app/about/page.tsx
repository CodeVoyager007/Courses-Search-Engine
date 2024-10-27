"use client"; 
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutPage: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#A3EBB1] to-[#21B6A8] text-black dark:bg-gradient-to-r dark:from-[#3A3A3A] dark:to-[#5A5A5A] min-h-screen flex flex-col items-center justify-start p-5 md:p-10">
      <header className="text-center mb-10 mt-20">
        <motion.h1
          className="text-4xl md:text-6xl font-montserrat font-bold text-[#FFFFFF] mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the Programming Search Engine
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl font-georgia text-[#374151]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here you can find anything you want, from video tutorials to certified courses.
        </motion.p>
      </header>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
      
        {[ 
          {
            title: "Video Tutorials",
            description: "Access a wide range of video tutorials to boost your coding skills.",
            iconPath: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
          },
          {
            title: "Certified Courses",
            description: "Enroll in certified courses that will enhance your knowledge and credibility.",
            iconPath: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M-4 6v-7.5l4-2.222",
},
          {
            title: "Daily Blogs",
            description: "Stay updated with the latest trends and tips in programming through our blogs.",
            iconPath: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
          }
        ].map((card, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center">
            <div className="bg-[#D6AD60] rounded-full p-4 mb-4 md:p-6 flex items-center justify-center">
              <svg
                className="w-16 h-16 md:w-12 md:h-12 text-[#F3F4F6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-montserrat font-bold text-[#1E3A8A] mb-2">{card.title}</h2>
            <p className="text-center text-sm md:text-base text-[#374151]">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutPage;
