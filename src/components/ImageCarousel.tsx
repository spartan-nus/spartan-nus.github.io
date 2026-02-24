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
  {
    url: "/ieee-spectrum-interview.png",
    alt: "Professor Abhik Roychoudhury Comments in IEEE Spectrum on Importance of Intent Inference and Trust in AI Coding",
    link: "https://spectrum.ieee.org/ai-for-coding"
  }
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
    <div className="relative w-full h-[500px] bg-black overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            currentIndex === index
              ? "opacity-100"
              : "opacity-0",
          )}
        >
          {image.link && currentIndex == index ? (
            <a href={image.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-contain"
              />
            </a>
          ) : (
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all z-10"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all z-10"
      >
        <ArrowRight size={24} />
      </button>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              currentIndex === index ? "bg-nus-orange w-12" : "bg-white/50 w-2",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
