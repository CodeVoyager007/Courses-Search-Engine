"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import HarvardCourses from "./Cs50";
import FreeCodeCampCourses from "./fcc";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const CourseSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<"harvard" | "freecodecamp" | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-gradient-to-r from-[#A3EBB1] to-[#21B6A8] min-h-screen flex flex-col items-center justify-start p-5 md:p-10">
      {/* Introductory Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-[#FFFFFF]">
          Explore the Best Courses! 🎓
        </h2>
        <p className="mt-2 text-lg text-[#F3F4F6]">
          Access top-notch courses from Harvard CS50 and FreeCodeCamp! 🌟
        </p>
      </div>

      {/* Card for Course Selection */}
      <motion.div
        className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="w-full md:w-1/2 lg:w-1/3">
          <Card className="bg-[#D6AD60] p-4 flex flex-col items-center text-center h-full">
            <div className="bg-[#EFD3B5] rounded-full p-6 mb-4">
              <Image src="/harvard.png" alt="Harvard Logo" width={96} height={96} />
            </div>
            <CardHeader>
              <CardTitle className="text-[#1E3A8A] text-lg md:text-xl">Harvard CS50</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm md:text-base text-[#374151]">
                🎓 Dive into Harvard&apos;s CS50 Series! 🎓 Unlock the fundamentals of computer science with Harvard&apos;s CS50 lineup of free courses. Covering Web Programming, AI, and more, these courses bring top-tier knowledge in an accessible format. Learn and apply real-world skills with Harvard’s renowned teaching approach.These are non-commercial courses. 💻🌍
              </p>
              <Button onClick={() => setSelectedCourse(selectedCourse === "harvard" ? null : "harvard")} className="mt-2 w-full md:w-auto bg-[#1E3A8A] text-white hover:bg-[#B21368]">
                {selectedCourse === "harvard" ? "Hide CS50 Courses" : "View Harvard CS50 Courses"}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full md:w-1/2 lg:w-1/3">
          <Card className="bg-[#D6AD60] p-4 flex flex-col items-center text-center h-full">
            <div className="bg-[#EFD3B5] rounded-full p-6 mb-4">
              <Image src="/fcc.png" alt="FreeCodeCamp Logo" width={96} height={96} />
            </div>
            <CardHeader>
              <CardTitle className="text-[#1E3A8A] text-lg md:text-xl">FreeCodeCamp</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm md:text-base text-[#374151]">
                🌟 Explore freeCodeCamp’s Learning Pathways! 🌟 Discover a wide range of tech skills with free, hands-on courses from freeCodeCamp. From Web Design to Data Analysis with Python, each course is designed to build real-world expertise at your pace. Ideal for all levels, freeCodeCamp helps you learn, create, and grow. 🌐🚀
              </p>
              <Button onClick={() => setSelectedCourse(selectedCourse === "freecodecamp" ? null : "freecodecamp")} className="mt-2 w-full md:w-auto bg-[#1E3A8A] text-white hover:bg-[#B21368]">
                {selectedCourse === "freecodecamp" ? "Hide FreeCodeCamp Courses" : "View FreeCodeCamp Courses"}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Conditional Rendering of Course Sections */}
      {selectedCourse === "harvard" && <HarvardCourses />}
      {selectedCourse === "freecodecamp" && <FreeCodeCampCourses />}
    </div>
  );
};

export default CourseSection;

