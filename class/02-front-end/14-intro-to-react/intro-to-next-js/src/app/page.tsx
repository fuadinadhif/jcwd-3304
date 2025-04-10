// 1. Buat sebuah fungsi dengan format PascalCase .
// 2. Export default fungsi tersebut .
// 3. Return sebuah HTML di dalam fungsi tersebut .

import HeroSection from "@/components/hero-section";

export default function HomePage() {
  const nameCompany = "Farhan & Fun";

  return (
    <main>
      <HeroSection companyName={nameCompany} />
    </main>
  );
}
