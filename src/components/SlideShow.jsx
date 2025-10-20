import { useState, useRef } from "react";

import { slides } from "../data/data";
import SlideItem from "./SlideItem";

const SlideShow = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft; // How far we've scrolled (in pixels)
    const slideWidth = e.target.offsetWidth; // Width of one slide
    const currentSlide = Math.round(scrollLeft / slideWidth); // Which slide number
    setActiveSlide(currentSlide);
  };

  const scrollToSlide = (index) => {
    const slideWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ul
        ref={scrollRef}
        onScroll={handleScroll}
        class="w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory flex gap-3.5 scroll-smooth no-scrollbar"
      >
        {slides.map((slide) => (
          <SlideItem
            key={slide.img}
            img={slide.img}
            tag={slide.tag}
            title={slide.title}
            description={slide.description}
          />
        ))}
      </ul>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-[#DC143C] w-8"
                : "bg-gray-300 hover:bg-gray-400"
            } cursor-pointer`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
