export default function HeroSection(props: { companyName: string }) {
  return (
    <section className="hero-section">
      <div>
        <h1 className="hero-title">Dummy Hero Company</h1>
        <p className="hero-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quod
          ipsum vel quasi? Iure ullam adipisci accusamus nihil mollitia
          dignissimos exercitationem, ipsa quasi nulla quisquam ex enim
          voluptatum libero. Maxime.
        </p>
        <p>{props.companyName}</p>
      </div>
      <div style={{ width: "100%" }}>
        <img
          style={{ marginBottom: "10px", height: "100%", objectFit: "cover" }}
          className="hero-img"
          src="https://banggaikep.go.id/portal/wp-content/uploads/2024/03/jokowi-1.jpg"
          alt="Jokowi image"
        />
      </div>
    </section>
  );
}
