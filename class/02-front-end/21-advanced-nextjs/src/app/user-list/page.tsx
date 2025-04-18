import UserList from "@/components/user-list";
import { Suspense } from "react";

export default async function UserListPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Artificial Error!");

  return (
    <main className="grid min-h-screen place-items-center">
      <div className="grid place-items-center gap-4">
        <h1>🤼 USER LIST</h1>
        <p className="max-w-48 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Suspense fallback={<p>Loading heavy content...</p>}>
          <UserList />
        </Suspense>
      </div>
    </main>
  );
}
