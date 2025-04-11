export default function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <h1 className="hero-title">DummyDumbDumb</h1>
        <p className="hero-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non
          earum sequi odit recusandae, eaque laborum cupiditate suscipit unde
          veritatis omnis tenetur dignissimos at consequatur atque? Neque
          excepturi reprehenderit tempora!
        </p>
      </div>
      <img
        className="hero-img"
        style={{ marginBottom: "10px", height: "100px" }}
        src="https://froyonion.sgp1.cdn.digitaloceanspaces.com/images/blogdetail/858eb1bd32c0fc50cba8ba93e472de88e7082914.jpg"
        alt="capybara"
      />
    </section>
  );
}
