# README

1. Creeate Next.js App + TS + Tailwind + Turbopack
   ```
   npx create-next-app@latest
   ```
2. Install Redux + Redux Toolkit
   ```
   npm install @reduxjs/toolkit react-redux
   ```
3. Setup Redux Files
   ```
   src/lib/redux-store.ts
   src/lib/redux-provider.tsx
   src/lib/features/counter/counter-slice.ts
   ```
4. Wrapp App with Redux Provider
   ```tsx
   export default function RootLayout({
     children,
   }: Readonly<{ children: React.ReactNode }>) {
     return (
       <html lang="en">
         <body>
           <ReduxProvider>{children}</ReduxProvider>
         </body>
       </html>
     );
   }
   ```
5. Create Counter Page

   ```tsx
   "use client";

   import { useDispatch, useSelector } from "react-redux";
   import {
     increment,
     decrement,
     reset,
   } from "@/lib/features/counter/counter-slice";

   export default function HomePage() {
     const count = useSelector((state) => {
       return state.counter.point;
     });
     const dispatch = useDispatch();

     return (
       <main>
         <h1>Redux Counter</h1>
         <p>{count}</p>
         <button
           className="border border-white p-2"
           onClick={() => dispatch(increment())}
         >
           Increment +
         </button>
         <button
           className="border border-white p-2"
           onClick={() => dispatch(decrement())}
         >
           Decrement -
         </button>
         <button
           className="border border-white p-2"
           onClick={() => dispatch(reset())}
         >
           Reset
         </button>
       </main>
     );
   }
   ```
