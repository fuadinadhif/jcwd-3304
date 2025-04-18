export default async function TypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const type = (await params).type;

  return <h1>{type}</h1>;
}
