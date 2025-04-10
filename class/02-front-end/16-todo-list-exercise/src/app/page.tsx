import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <div className="bg-purple-400 h-[300px] w-full relative">
        <Image src="/background.svg" alt="Background image" fill />
      </div>

      <div className="w-fit absolute top-[70px] right-0 left-0 m-auto">
        <h1 className="text-white text-[40px] font-bold tracking-[15px] mb-[40px]">
          TODO
        </h1>
        <form className="bg-white flex gap-[24px] rounded-[5px] w-[540px] py-[20px] px-[24px]">
          <div className="rounded-full border border-[#E3E4F1] h-[24px] w-[24px]"></div>
          <input
            type="text"
            placeholder="Create a new todo"
            className="w-full outline-none"
          />
        </form>
        <div className="w-[540px] bg-white rounded-[5px] h-[500px] mt-[24px] drop-shadow-[5px5px5px_#000]"></div>
      </div>
    </main>
  );
}
