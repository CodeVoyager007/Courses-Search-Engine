"use client";
import { useState, useEffect, useMemo } from "react";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [typedText, setTypedText] = useState("");

  // Use useMemo to memoize phrases
  const phrases = useMemo(() => [
    "❓ Have Questions?",
    "✨ Want to give suggestions.",
    "🎉 Want to know more about any course.",
    "🚀 Feel free to reach out!",
  ], []); // Empty dependency array to ensure stability

  const typingDelay = 100; // Typing delay
  const deletingDelay = 50; // Deleting delay
  const pauseBeforeDeleting = 1000; // Pause before deleting

  useEffect(() => {
    let currentPhraseIndex = 0;
    let isDeleting = false;
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setTypedText((prev) => prev.slice(0, -1));
        charIndex--;

        if (charIndex <= 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          charIndex = 0;
          timeoutId = setTimeout(typeText, pauseBeforeDeleting);
        } else {
          timeoutId = setTimeout(typeText, deletingDelay);
        }
      } else {
        setTypedText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeText, pauseBeforeDeleting);
        } else {
          timeoutId = setTimeout(typeText, typingDelay);
        }
      }
    };

    // Start the typing effect
    typeText();

    // Cleanup function to clear timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [phrases]); // Now, phrases is stable and does not change between renders

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:ayeshamughal2162@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#A3EBB1] to-[#21B6A8] text-black dark:bg-gradient-to-r dark:from-[#3A3A3A] dark:to-[#5A5A5A] relative">
      {/* Sidebar with Typewriter Content */}
      <div className="p-6 flex flex-col justify-center items-center text-center">
        <h2 className="text-7xl font-serif mb-4 text-white">Contact Us</h2>
        <p className="text-xl font-handwritten text-white">{typedText}</p>
      </div>

      {/* Main Content */}
      <div className="p-6 flex items-center justify-center">
        <div className="max-w-lg w-full space-y-8 bg-white dark:bg-[#4A4A6A] rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-dark dark:text-white">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="mt-1 rounded shadow-md bg-[#F2F2F2] dark:bg-[#6A6A6A] text-black dark:text-white"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-dark dark:text-white">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="mt-1 rounded shadow-md bg-[#F2F2F2] dark:bg-[#6A6A6A] text-black dark:text-white"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-dark dark:text-white">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                required
                className="mt-1 rounded shadow-md bg-[#F2F2F2] dark:bg-[#6A6A6A] text-black dark:text-white"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#18A558] hover:bg-[#21B6A8] text-white rounded shadow-md"
            >
              Send Message
            </Button>
          </form>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://www.instagram.com/ayesha_techadventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.063 2.633.323 3.608 1.298.976.976 1.235 2.242 1.298 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.063 1.366-.323 2.633-1.298 3.608-.976.976-2.242 1.235-3.608 1.298-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.323-3.608-1.298-.976-.976-1.235-2.242-1.298-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.063-1.366.323-2.633 1.298-3.608.976-.976 2.242-1.235 3.608-1.298C8.416 2.175 8.796 2.163 12 2.163zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zm0 10.162a3.98 3.98 0 1 1 0-7.96 3.98 3.98 0 1 1 0 7.96zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 1 0 0 2.881z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ayesha-mughal-0421b6264/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              <GlobeAltIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
