"use client";

import type React from "react";
import { useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function Carousel({ items }: { items: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    console.log(currentIndex);
  }

  function previous() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="border border-black h-52 flex justify-center items-center rounded-xl">
        {items[currentIndex]}
      </div>

      <div className="flex justify-between items-center absolute w-[90%] m-auto right-0 left-0 top-0 bottom-0">
        <button
          onClick={previous}
          className="w-10 h-10 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <FaCircleChevronLeft size={25} />
        </button>

        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center"
          aria-label="Next slide"
        >
          <FaCircleChevronRight size={25} />
        </button>
      </div>

      <div className="flex gap-1 absolute bottom-4 left-0 right-0 m-auto justify-center">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            } w-2 h-2 rounded-full transition-all`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
