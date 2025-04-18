import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main className="grid min-h-screen place-items-center">
      <h1>🏡 Home Page</h1>
      <HeroSection />
      <AboutSection />
    </main>
  );
}
