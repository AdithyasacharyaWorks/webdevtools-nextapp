import { SignUp } from "@clerk/nextjs";

export default function page(){
    return(
        <div className="flex justify-center items-center pt-32 "> 
            <SignUp path="/sign-up"/>
        </div>
    )
}