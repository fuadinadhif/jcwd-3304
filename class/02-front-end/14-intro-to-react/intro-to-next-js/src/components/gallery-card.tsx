export default function GalleryCard(props: { src: string; alt: string }) {
  return (
    <div style={{ width: "100%" }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}
