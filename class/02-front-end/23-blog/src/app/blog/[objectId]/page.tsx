import Image from "next/image";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) {
  const { objectId } = await params;
  const res = await fetch(
    `https://volantpurpose-us.backendless.app/api/data/Articles/${objectId}?loadRelations=category`
  );
  const data: {
    image: string;
    title: string;
    content: string;
    category: { name: string };
  } = await res.json();

  console.log(data);

  return (
    <main className="py-8 px-8 text-white">
      <section className="w-full max-w-[1100px] mx-auto">
        <div className="w-full h-96 relative">
          <Image
            src={data.image}
            alt="Hero image"
            fill
            className="object-cover"
          />
        </div>
        {/* <span className="block py-2 px-4 text-sm border border-white mt-4 w-fit">
          {data.category.name}
        </span> */}
        <h2 className="mt-8 text-4xl font-extrabold">{data.title}</h2>
        <p className="mt-4">{data.content}</p>
      </section>
    </main>
  );
}
