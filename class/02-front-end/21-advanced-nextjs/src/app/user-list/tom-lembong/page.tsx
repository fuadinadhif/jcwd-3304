export default async function TomLembongPage() {
  const res = await fetch(
    "https://pallywaves-us.backendless.app/api/data/Users/350A7DFA-A304-4D78-A692-7F0B013E69C4"
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
