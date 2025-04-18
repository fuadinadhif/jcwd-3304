export default async function IdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const res = await fetch(
    `https://pallywaves-us.backendless.app/api/data/Users/${id}`
    // "https://pallywaves-us.backendless.app/api/data/Users/" + id
  );
  console.log(res);
  const data = await res.json();

  return (
    <main className="grid min-h-screen place-items-center">
      <div className="grid">
        <p className="border border-white">{data.name}</p>
        <p className="border border-white">{data.email}</p>
        <time className="border border-white">
          {new Date(data.created).toDateString()}
        </time>
      </div>
    </main>
  );
}
