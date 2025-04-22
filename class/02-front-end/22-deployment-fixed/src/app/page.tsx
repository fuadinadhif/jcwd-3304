export default function HomePage() {
  return (
    <main className="min-h-screen p-4 place-items-center grid">
      <div>
        <h1 className="font-bold text-3xl text-center">Welcome To My Site</h1>
        <p className="text-center">
          Checkout my GitHub and LinkedIn using the menu above
        </p>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------- POSITION -------------------------------- */
// export default function HomePage() {
//   return (
//     <main className="min-h-screen">
//       <div className="w-[50px] h-[50px] bg-amber-300 relative top-[10px] left-[10px]"></div>
//       <div className="w-[500px] h-[500px] bg-purple-300 relative">
//         <div className="w-[300px] h-[200px] bg-purple-500 absolute bottom-0"></div>
//       </div>
//       <div className="w-[30px] h-[30px] bg-green-500 fixed right-0 bottom-0"></div>
//       <div className="w-full h-[30px] bg-sky-500 fixed top-0"></div>
//     </main>
//   );
// }

/* ---------------------------------- FLEX ---------------------------------- */
// export default function HomePage() {
//   return (
//     <main className="min-h-screen flex border-red-500 border justify-center items-center gap-10">
//       <div className="w-[50px] h-[50px] bg-amber-200"></div>
//       <div className="w-[50px] h-[50px] bg-amber-500"></div>
//       <div className="w-[50px] h-[50px] bg-amber-800"></div>
//     </main>
//   );
// }
