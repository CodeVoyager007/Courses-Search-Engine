"use client";
import { useState, useEffect } from "react";
import { CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

// Define an interface for the structure of news articles
interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const BlogPage = () => {
  const [news, setNews] = useState<Article[]>([]);

  const fetchData = async () => {
    try {
      const newsResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=126457c4b51548baaab61e1e1651aa1e`
      );

      if (!newsResponse.ok) {
        throw new Error(`HTTP error! status: ${newsResponse.status}`);
      }

      const newsData = await newsResponse.json();
      setNews(newsData.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 86400000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#A3EBB1] to-[#21B6A8] text-white min-h-screen flex flex-col items-center justify-start p-5 md:p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Programming Blogs</h1>

      <div className="relative overflow-hidden w-full">
        <div className="flex animate-slider space-x-4">
          {news.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card w-60 h-60 bg-white text-black rounded-lg shadow-md"
            >
              <CardHeader>
                <Image
                  src={article.urlToImage || "/placeholder-image.png"} 
                  alt={article.title}
                  width={400}
                  height={160}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-700 mt-2">{article.description}</p>
              </CardContent>
              <CardFooter>
                <span className="text-blue-400 font-medium hover:underline transition-colors duration-200">
                  Read more
                </span>
              </CardFooter>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Move left by 50% to show 3 cards */
          }
        }

        .animate-slider {
          animation: slider 6s linear infinite; /* Speed of the animation */
          display: flex;
        }

        .card {
          width: 250px; /* Increased width */
          height: 350px; /* Increased height */
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
