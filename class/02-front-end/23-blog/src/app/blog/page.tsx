import Image from "next/image";
import Link from "next/link";

interface ArticleType {
  content: string;
  created: number;
  image: string;
  objectId: string;
  ownerId: string;
  preview: string;
  title: string;
  updated: number;
  category: { name: string };
}

export default async function BlogPage() {
  const res = await fetch(
    "https://volantpurpose-us.backendless.app/api/data/Articles?loadRelations=category"
  );
  const data = await res.json();

  console.log(data);

  return (
    <main className="py-8 px-8 text-black">
      <section className="grid grid-cols-3 w-full max-w-[1100px] mx-auto gap-x-4 gap-y-8">
        {data.map((article: ArticleType) => (
          <article key={article.objectId} className="bg-white">
            <div className="relative h-24 w-full">
              <Image
                src={article.image}
                alt="Article image"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p>{article.preview}</p>
              {/* <span className="block py-1 px-2 border border-black w-fit text-sm mb-2 mt-2">
                {article.category.name}
              </span> */}
              <Link
                href={`/blog/${article.objectId}`}
                className="border border-black py-2 px-4 mt-4 block w-fit"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
