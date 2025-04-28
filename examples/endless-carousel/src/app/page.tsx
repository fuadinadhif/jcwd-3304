import Carousel from "@/components/carousel";

export default function HomePage() {
  const carouselItems = ["ITEM 1", "ITEM 2", "ITEM 3"];

  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl font-light mb-8">Minimalist Carousel</h1>
      <Carousel items={carouselItems} />
    </main>
  );
}
