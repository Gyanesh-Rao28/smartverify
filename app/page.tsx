import { initialProfile } from "@/libs/initialProfile";
import { SignOutButton } from "@clerk/nextjs";


export default async function Home() {
  const profile = await initialProfile();

  return (
    <>
      <h1>hello World</h1>
      {profile? <SignOutButton />:<></>}
    </>
  );
}
