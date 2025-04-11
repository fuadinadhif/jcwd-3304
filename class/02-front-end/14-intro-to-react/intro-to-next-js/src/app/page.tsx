//1. buat sebuah fungsi dengan format Pascalcase
//2. export default fungsi tersebut
//3.return sebuah HTML di dalam fungsi tersebut.

import HeroSection from "@/components/hero-section";

export default function HomePage() {
  console.log("Hello");
  return (
    <main>
      <HeroSection />
      {/*Testimonial section */}
    </main>
  );
}
