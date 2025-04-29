"use client";

import type React from "react";
import { useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Image from "next/image";

export default function Carousel({
  items,
}: {
  items: { imageUrl: string; testimoni: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function previous() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="border border-black h-52 flex justify-center items-center rounded-xl">
        <div className="flex flex-col gap-4 mb-2 items-center">
          <p>{items[currentIndex].testimoni}</p>
          <div className="h-12 w-12 relative rounded-full overflow-hidden">
            <Image
              src={items[currentIndex].imageUrl}
              alt="Profile image"
              fill
              className="object-cover"
            />
          </div>
        </div>
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
