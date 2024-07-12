import { SignIn } from "@clerk/nextjs";

export default function page(){
    return(
    <div className="flex  flex-col items-center justify-center gap-12 mt-32">
        <SignIn path="/sign-in"/>
    </div>)
}