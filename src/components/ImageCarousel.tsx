import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselImage {
  url: string;
  alt: string;
  link?: string;
  title?: string;
}

const images: CarouselImage[] = [
  {
    url: "/public_talk.png",
    alt: "AutoCodeRover: from research on Automatic Programming to Spinoff Acquisition",
    title: "AutoCodeRover: from research on Automatic Programming to Spinoff Acquisition",
    link: "https://www.youtube.com/watch?v=o8B6q8FNC70"
  },
  {
    url: "/ACR_logo.png",
    alt: "Agent for Autonomous Program Improvement",
    title: "Featured: AutoCodeRover",
    link: "https://autocoderover.dev"
  },
  {
    url: "/sonar_plus_autocoderover.png",
    alt: "AutoCodeRover: from Research on Automatic Programming to Spinoff Acquisition",
    link: "https://www.youtube.com/watch?v=o8B6q8FNC70&t=2s",
  },
  {
    url: "/use_agent_workflow.png",
    alt: "Unified Software Engineering agent as AI Software Engineer",
    link: "https://arxiv.org/pdf/2506.14683",
  },
  {
    url: "/hands.png",
    alt: "Agentic AI Software Engineer: Programming with Trust",
    link: "https://arxiv.org/abs/2502.13767",
  },

];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden max-w-6xl mx-auto mt-8 h-[350px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute w-full h-full transition-opacity duration-500",
            currentIndex === index
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          {image.link && currentIndex == index ? (
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </a>
          ) : (
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            {image.title && (
              <h2 className="text-xl font-bold">{image.title}</h2>
            )}
            <p>{image.alt}</p>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
      >
        <ArrowRight size={24} />
      </button>

      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full",
              currentIndex === index ? "bg-white" : "bg-white/50",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
