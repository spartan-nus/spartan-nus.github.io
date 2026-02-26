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
    <div className="relative w-full overflow-hidden max-w-7xl mx-auto mt-6 h-[400px] rounded-2xl shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute w-full h-full transition-all duration-700 ease-in-out",
            currentIndex === index
              ? "opacity-100 pointer-events-auto scale-100"
              : "opacity-0 pointer-events-none scale-105",
          )}
        >
          {image.link && currentIndex == index ? (
            <a href={image.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </a>
          ) : (
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
            {image.title && (
              <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
            )}
            <p className="text-sm md:text-base font-medium">{image.alt}</p>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-nus-orange/90 text-white p-3 rounded-full hover:bg-nus-orange hover:scale-110 transition-all shadow-lg backdrop-blur-sm"
      >
        <ArrowLeft size={28} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-nus-orange/90 text-white p-3 rounded-full hover:bg-nus-orange hover:scale-110 transition-all shadow-lg backdrop-blur-sm"
      >
        <ArrowRight size={28} />
      </button>

      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              currentIndex === index ? "bg-nus-orange w-8" : "bg-white/60 w-2 hover:bg-white/90",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
