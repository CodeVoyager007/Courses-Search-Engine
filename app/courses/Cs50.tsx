import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HarvardCourses = () => {
  const courses = [
    {
      title: "CS50: Introduction to Computer Science 📚",
      description: "Learn the basics of computer science and programming using C, Python, and SQL. This course covers algorithms, data structures, and software engineering principles. You'll engage in hands-on projects to solidify your understanding. Ideal for beginners and those looking to refresh their skills.",
      link: "https://cs50.harvard.edu/x/2023/",
    },
    {
      title: "CS50: Web Programming with Python and JavaScript 🌐",
      description: "Dive into web programming with HTML, CSS, JavaScript, and Python. Build dynamic web applications and learn about frameworks like Flask and Django. The course emphasizes practical skills through real-world projects. Perfect for aspiring web developers.",
      link: "https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript",
    },
    {
      title: "CS50: Introduction to Artificial Intelligence with Python 🤖",
      description: "Explore the concepts of artificial intelligence, including machine learning, neural networks, and natural language processing using Python. You'll work on projects that apply AI techniques to real-world problems. Gain insights into ethical considerations in AI. Suitable for those with a basic programming background.",
      link: "https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python",
    },
    {
      title: "CS50: Game Development  🌟",
      description: "Learn the fundamentals of game development using the Unity game engine. Create 2D and 3D games while exploring game design principles and mechanics. The course includes hands-on projects to develop your own games. Ideal for both beginners and experienced developers.",
      link: "https://cs50.harvard.edu/games/2018/",
    },
    {
      title: "CS50: Mobile App Development with React Native 📱",
      description: "Build mobile applications using React Native. Learn about mobile UI design, APIs, and data storage while creating cross-platform apps. The course includes practical projects to enhance your skills. Great for those interested in mobile development.",
      link: "https://cs50.harvard.edu/mobile/2018/",
    },
    {
      title: "CS50: Introduction to Cybersecurity 🔒",
      description: "Understand the principles of cybersecurity, including network security, cryptography, and risk management. Learn how to protect systems and data from cyber threats. The course features hands-on labs and real-world scenarios. Perfect for anyone interested in a career in cybersecurity.",
      link: "https://www.harvardonline.harvard.edu/course/cs50s-introduction-cybersecurity",
    },
    {
      title: "CS50: Introduction to Game Development 🎮",
      description: "Discover the principles of game design and development using Unity. Create engaging games while learning about graphics, physics, and user interaction. The course includes collaborative projects and peer reviews. Ideal for aspiring game designers and developers.",
      link: "https://cs50.harvard.edu/games/2018/",
    },
    {
      title: "CS50: Data Science with Python 📊",
      description: "Learn data science concepts and how to analyze data using Python. Explore libraries like Pandas and NumPy for data manipulation and visualization. The course includes practical projects to apply your skills. Suitable for those looking to enter the data science field.",
      link: "https://www.harvardonline.harvard.edu/course/introduction-data-science-python",
    },
    {
      title: "CS50: Introduction to Programming with Scratch 📱",
      description: "This course introduces programming fundamentals through Scratch, a visual language for creating animations and games. Topics include functions, loops, and variables, preparing students for further programming studies.",
      link: "https://pll.harvard.edu/course/cs50s-introduction-programming-scratch",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 p-4">
      {courses.map((course, index) => (
        <div key={index} className="flex justify-center">
          <Card className="bg-[#D6AD60] border border-[#1E3A8A] rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 w-full max-w-xs h-full">
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

export default HarvardCourses;
