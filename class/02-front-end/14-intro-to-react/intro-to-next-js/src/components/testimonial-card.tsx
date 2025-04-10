export default function TestimonialCard(props: { text: string; name: string }) {
  return (
    <div>
      <p>{props.text}</p>
      <small>{props.name}</small>
    </div>
  );
}
