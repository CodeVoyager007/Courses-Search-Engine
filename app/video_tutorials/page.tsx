import React from "react";

const VideoTutorials: React.FC = () => {
  return (
    <div className="max-w-full mx-auto px-4 overflow-hidden bg-gradient-to-r from-[#A3EBB1] to-[#21B6A8] min-h-screen py-6">
      <div className="text-center py-6 rounded-lg shadow-md mb-8">
        <h1 className="text-6xl font-bold mb-2 text-white">Programming Tutorials</h1>
        <p className="text-xl text-[#374151]">
          A selection of coding tutorials from popular channels like Code with
          Harry, Apna College, and more. Content is in Hindi and Urdu.
        </p>
      </div>

      <div className="space-y-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#B68D40]">Video Tutorials</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: "https://www.youtube.com/embed/HcOc7P5BMi4",
              title: "HTML Tutorial for Beginners | Complete HTML with Notes & Code",
            },
            {
              src: "https://www.youtube.com/embed/CYwEq1GdU4E",
              title: "Spotify Clone using HTML, CSS & JavaScript | Sigma Web Development Course - Tutorial #84",
            },
            {
              src: "https://www.youtube.com/embed/RGKi6LSPDLU",
              title: "React Tutorial in Hindi 🔥🔥",
            },
            {
              src: "https://www.youtube.com/embed/fqF9M92jzUo",
              title: "Python Crash Course in Hindi | 5 Python Projects | Complete Python Tutorial",
            },
            {
              src: "https://www.youtube.com/embed/JRc-Wm_IBBY",
              title: "How to Build a Website in 10 Minutes Using WordPress & AI (No Coding Required)🔥",
            },
            {
              src: "https://www.youtube.com/embed/ERCMXc8x7mc",
              title: "Python Tutorial for Beginners - Full Course (with Notes & Practice Questions)",
            },
            {
              src: "https://www.youtube.com/embed/gY5sGvq-8h8",
              title: "ReactJS Tutorial for Beginners | Learn React in 2.5 Hours | Part 1",
            },
            {
              src: "https://www.youtube.com/embed/TAP5B_XlVa0",
              title: "Should you use Bootstrap & Tailwind CSS or stick to Vanilla CSS?",
            },
            {
              src: "https://www.youtube.com/embed/8KVrdL0VcAk",
              title: "Creating Fully Responsive Website Project Using HTML & CSS in Hindi | Web Development Tutorials #39",
            },
            {
              src: "https://www.youtube.com/embed/NpmFbWO6HPU",
              title: "9 HOURS of Python Projects - From Beginner to Advanced",
            },
            {
              src: "https://www.youtube.com/embed/CpgNVyUxUV0",
              title: "HTML And CSS Projects for Beginners 2024 | HTML & CSS Tutorial With 5 Projects Source Code",
            },
            {
              src: "https://www.youtube.com/embed/c2-4EoBLHSY",
              title: "React JS Project using Tailwind CSS for Beginners | React JS Tutorial 2023",
            },
          ].map((video) => (
            <a
              key={video.src}
              href={video.src}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#B68D40] rounded-lg transition-transform transform hover:scale-105 w-full"
            >
              <iframe
                className="w-full"
                height="315"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTutorials;
