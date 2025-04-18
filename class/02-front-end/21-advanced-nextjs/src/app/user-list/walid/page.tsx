export default async function TomLembongPage() {
  const res = await fetch(
    "https://pallywaves-us.backendless.app/api/data/Users/29CEC28E-B7CF-4741-BC0A-8DEC3258B1CA"
  );
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
