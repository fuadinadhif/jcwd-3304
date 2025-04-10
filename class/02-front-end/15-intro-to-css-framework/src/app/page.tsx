import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-fit w-fit bg-white p-4 rounded-2xl border border-gray-500">
      <Image
        src="/illustration-article.svg"
        alt="Article illustration image"
        width={250}
        height={150}
        className="rounded-xl mb-4"
      />
      <small className="bg-[#f4d04e] py-1 px-2 rounded-sm font-figtree font-[800]">
        Learning
      </small>
      <p className="max-w-[250px] font-figtree font-[500]">
        These languages are the backbone of every website, defining structure,
        content, and presentation. Greg Hooper
      </p>
    </div>
  );
}
