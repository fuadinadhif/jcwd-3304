import Carousel from "@/components/carousel";
import CircularText from "@/components/circular-text";

export default function HomePage() {
  const carouselItems = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimoni: "Lorem ipsum something dolor si amet",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimoni: "Lorem ipsum someone dolor si amet",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimoni: "Lorem ipsum somewhere dolor si amet",
    },
    {
      imageUrl: "/profile-image.png",
      testimoni: "Lorem ipsum somehow dolor si amet",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl font-light mb-8">Minimalist Carousel</h1>
      <Carousel items={carouselItems} />

      <CircularText
        text="REACT*BITS*COMPONENTS*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
    </main>
  );
}
