"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

const SlideTabs: React.FC = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pt-10">
      <div className="md:hidden flex justify-end p-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          ☰
        </button>
      </div>

      <ul
        className={`relative mx-auto w-full max-w-md justify-around md:max-w-3xl lg:max-w-4xl rounded-full border-2 border-black bg-white p-1 flex-col ${
          isOpen ? "flex" : "hidden"
        } md:flex md:flex-row`}
        onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      >
        <Tab setPosition={setPosition} href="/home">Home</Tab>
        <Tab setPosition={setPosition} href="/about">About</Tab>
        <Tab setPosition={setPosition} href="/courses">Courses</Tab>
        <Tab setPosition={setPosition} href="/video_tutorials">Video Tutorials</Tab>
        <Tab setPosition={setPosition} href="/blog">Blog</Tab>
        <Tab setPosition={setPosition} href="/contact">Contact Me</Tab>

        <Cursor position={position} />
      </ul>
    </div>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  href: string;
}

const Tab: React.FC<TabProps> = ({ children, setPosition, href }) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className="relative z-10 block cursor-pointer px-2 py-1 text-xs uppercase text-black transition-colors duration-300 hover:text-white md:px-3 md:py-2 md:text-sm lg:px-5 lg:py-3 lg:text-base"
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

interface CursorProps {
  position: Position;
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-6 rounded-full bg-black md:h-9 lg:h-12"
    />
  );
};

export default SlideTabs;
