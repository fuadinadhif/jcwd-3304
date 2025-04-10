import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-fit w-fit drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white p-4 rounded-2xl border border-gray-500">
      <Image
        src="/illustration-article.svg"
        alt="Article illustration image"
        width={250}
        height={0}
        className="rounded-xl mb-4"
      />
      <small className="bg-[#f4d04e] py-1 px-2 rounded-sm font-figtree">
        Learning
      </small>
      <p className="max-w-[250px] font-figtree">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed
        accusantium voluptatibus eveniet exercitationem consequatur nam
        consequuntur doloribus corrupti fugit in, ab, nesciunt magni molestias!
        Aspernatur est quidem autem omnis!
      </p>
    </div>
  );
}
