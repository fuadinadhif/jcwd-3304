import TestimonialCard from "./testimonial-card";

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      {/* First Testimoni */}
      <TestimonialCard
        text="Lorem ipsum something something"
        name="Jack Dohan"
      />

      {/* Second Testimoni */}
      <TestimonialCard text="Short testimonial" name="Sumanto" />

      {/* Third Testimoni */}
      <TestimonialCard text="Last testimonial here" name="Budiman" />

      {/* <p>{props.companyName}</p> */}
    </section>
  );
}
