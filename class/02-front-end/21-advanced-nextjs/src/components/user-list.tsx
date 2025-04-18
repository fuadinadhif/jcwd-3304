import Link from "next/link";

export default async function UserList() {
  const res = await fetch(
    "https://pallywaves-us.backendless.app/api/data/Users"
  );
  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <ul>
      {data?.map((item: { objectId: string; name: string }) => (
        <li key={item.objectId}>
          <Link href={`/user-list/${item.objectId}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
