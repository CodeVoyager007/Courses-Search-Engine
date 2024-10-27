import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FreeCodeCampCourses = () => {
  const courses = [
    {
      title: "Responsive Web Design Certification 🌐",
      description: "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.",
      link: "https://www.freecodecamp.org/learn/responsive-web-design/",
    },
    {
      title: "JavaScript Algorithms and Data Structures Certification 📊",
      description: "In this JavaScript Algorithm and Data Structures Certification, you'll learn the JavaScript fundamentals like variables, arrays, objects, loops, functions, the DOM and more.",
      link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    },
    {
      title: "Front End Development Libraries Certification 📚",
      description: "In the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass.",
      link: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
    },
    {
      title: "Data Visualization Certification 📈",
      description: "Data is all around us, but it doesn't mean much without shape or context. In the Data Visualization Certification, you'll build charts, graphs, and maps to present different types of data with the D3.js library. You'll also learn about JSON (JavaScript Object Notation), and how to work with data online using an API (Application Programming Interface).",
      link: "https://www.freecodecamp.org/learn/data-visualization/",
    },
    {
      title: "Back End Development and APIs 🔗",
      description: "In the Back End Development and APIs Certification, you'll learn how to write back end apps with Node.js and npm. You'll also build web applications with the Express framework, and build a People Finder microservice with MongoDB and the Mongoose library.",
      link: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    },
    {
      title: "Quality Assurance Certification ✅",
      description: "In the Quality Assurance Certification, you'll learn how to write tests with Chai to ensure your applications work the way you expect them to.",
      link: "https://www.freecodecamp.org/learn/quality-assurance/",
    },
    {
      title: "Scientific Computing with Python Certification 🐍",
      description: "The Scientific Computing with Python (Beta) curriculum will equip you with the skills to analyze and manipulate data using Python, a powerful and versatile programming language. You'll learn key concepts like data structures, algorithms, Object-Oriented Programming, and how to perform complex calculations using a variety of tools.",
      link: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
    },
    {
      title: "Data Analysis with Python Certification 📊",
      description: "In the Data Analysis with Python Certification, you'll learn the fundamentals of data analysis with Python. By the end of this certification, you'll know how to read data from sources like CSVs and SQL, and how to use libraries like Numpy, Pandas, Matplotlib, and Seaborn to process and visualize data.",
      link: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
    },
    {
      title: "Machine Learning with Python Certification 🤖",
      description: "In the Machine Learning with Python Certification, you'll use the TensorFlow framework to build several neural networks and explore more advanced techniques like natural language processing and reinforcement learning.",
      link: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 p-4">
      {courses.map((course, index) => (
        <div key={index} className="flex justify-center">
          <Card className="bg-[#D6AD60] border border-[#1E3A8A] rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 w-full max-w-xs">
            <CardHeader>
              <CardTitle className="text-[#1E3A8A] text-center font-montserrat font-bold">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#374151]">{course.description}</p>
            </CardContent>
            <CardFooter>
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#1E3A8A] text-white hover:bg-[#B21368]">Learn More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FreeCodeCampCourses;

