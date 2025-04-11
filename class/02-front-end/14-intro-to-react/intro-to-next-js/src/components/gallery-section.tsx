import GalleryCard from "./gallery-card";
export default function GallerySection() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      <GalleryCard
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WFYUHLLQa0WXHe3TkgGanrxS3L3AYk7ttg&s"
        alt="SBY Image"
      />

      <GalleryCard
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJdvMCLnoRNJS71p04s2ahHfBmzcOTIwtQg&s"
        alt="Prabowo Image"
      />
      <GalleryCard
        src="https://kompaspedia.kompas.id/wp-content/uploads/2022/10/20190808RAD35-scaled.jpg"
        alt="Megawati Image"
      />
    </div>
  );
}
