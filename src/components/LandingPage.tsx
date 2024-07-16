import LetterPullup from "./ui/LetterPullup";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center ">
      
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://files.edgestore.dev/ctkrfw1w0n811vze/publicFiles/_public/5249904e-180e-4470-a6af-831c2d01cb90.jpeg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <LetterPullup
              words="Welcome to Web Dev Tools"
              className="text-xl text-black dark:text-secondary"
            />
            <p className="py-6">
              Web Dev Tools is your one-stop shop for all the essential tools
              needed for web development. From code editors and debugging tools
              to performance analyzers and design resources, find everything you
              need to enhance your web development workflow.
            </p>
            <Link href={"/sign-in"}>
              <button className="btn btn-accent">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
