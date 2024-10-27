"use client";
import AboutPage from "@/app/about/page";
import Homepage from "@/app/home/page";
import SlideTabs from "@/components/ui/navbar";
import CourseSection from "./courses/page";
import BlogPage from "./blog/page";
import VideoTutorials from "./video_tutorials/page";
import ContactUsPage from "./contact/page";
export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-[#A3EBB1] to-[#21B6A8]">
      <SlideTabs />
      <Homepage />

      <AboutPage />

      <CourseSection />

      <VideoTutorials />

      <BlogPage />

      <ContactUsPage />
    </div>
  );
}
