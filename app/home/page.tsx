"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

const phrases = [
  "🤞Begin Your Coding Journey...",
  "✨ Get Cheat Sheets, Code Snippets...",
  "🎉 Watch Video Tutorials...",
  "🚀 Certified Courses at Your Fingertips...",
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const typeText = () => {
      const fullText = phrases[currentPhrase];
      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentPhrase((currentPhrase + 1) % phrases.length);
        setTypingSpeed(100);
      }
    };

    const timeoutId = setTimeout(typeText, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, typingSpeed, currentPhrase]);

  return (
    <div className="bg-gradient-to-r from-[#A3EBB1] to-[#21B6A8] min-h-screen flex flex-col items-center justify-center text-center p-6 md:p-10">
      <motion.h1
        className="text-4xl md:text-6xl font-montserrat font-bold text-[#FFFFFF] mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        𝖦𝖾𝗍 𝗍𝗁𝖾 𝖼𝗈𝗎𝗋𝗌𝖾 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-6 lg:mt-10">
        <div className="text-center lg:text-left lg:mr-10">
          <motion.div
            className="mt-3 sm:mt-4 text-lg sm:text-xl lg:text-2xl text-[#5F093D] italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Unlock your potential with our comprehensive learning resources!
          </motion.div>

          <motion.div
            className="mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl text-[#B21368]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {typedText}
          </motion.div>

          <Link href="/courses">
            <motion.button
              className="mt-8 sm:mt-10 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#D6AD60] text-white font-semibold hover:bg-[#F05941] transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
            >
              Explore Courses
            </motion.button>
          </Link>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-0">
          <Image
            src="/computer.gif"
            alt="3D Computer GIF"
            width={320}
            height={240}
            className="rounded-lg shadow-lg lg:w-96 lg:h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
