import LetterPullup from "./ui/LetterPullup";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center ">
      {/* <LetterPullup
        words="Welcome to Web Dev Tools"
        className="text-xl text-black dark:text-secondary"
      />
      <p className="text-gray-600 mb-4 max-w-lg">
        Web Dev Tools is your one-stop shop for all the essential tools needed
        for web development. From code editors and debugging tools to
        performance analyzers and design resources, find everything you need to
        enhance your web development workflow.
      </p>
      <Link href={"/sign-in"}>
        <button className="btn btn-accent">Sign In</button>
      </Link> */}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
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
