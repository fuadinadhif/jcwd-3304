import GoogleSignInButton from "@/components/google-sign-in-button";
import { auth } from "@/auth";
import { SignOutButton } from "./sign-out-button";

export default async function Header() {
  const userData = await auth();

  return (
    <header className="fixed top-0 flex w-full max-w-[1100px] p-8 justify-between mx-auto">
      <div className="font-bold">RANDOM BLOG</div>
      {userData?.user ? (
        <div>
          <p>{userData?.user.name}</p>
          <SignOutButton />
        </div>
      ) : (
        <GoogleSignInButton />
      )}
    </header>
  );
}
