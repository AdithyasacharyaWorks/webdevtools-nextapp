import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { Card } from "@/components/Card";
import axios from "axios";
import LandingPage from "@/components/LandingPage";

export default async function Home() {

  const tools = await axios.get('https://webdevtools-version1.netlify.app/api/tools')

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="flex justify-center">
        <SignedIn>
          <Card tools={tools?.data?.data}/>
        </SignedIn>
        <SignedOut>
          <LandingPage />
        </SignedOut>
      </div>
    </div>
  );
}
