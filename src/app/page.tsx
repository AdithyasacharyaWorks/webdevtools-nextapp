import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Card } from "@/components/Card";
import LandingPage from "@/components/LandingPage";

export default async function Home() {
  const response = await fetch('https://webdevtools-version1.netlify.app/api/tools', { cache: 'no-store' });
  const tools = await response.json();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="flex justify-center">
        <SignedIn>
          <Card tools={tools?.data} />
        </SignedIn>
        <SignedOut>
          <LandingPage />
        </SignedOut>
      </div>
    </div>
  );
}
