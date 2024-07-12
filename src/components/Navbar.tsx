import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg w-full">
      <div className="flex-1">
        <Link href="/">
        <span className="btn btn-ghost normal-case sm:text-2xl text-lg ">Webdevtools</span>
        </Link>
      </div>
      <div className="flex space-x-4  mr-4">
        <Link href="/addCategory">
          <span className="btn  btn-accent cursor-pointer sm:btn-md btn-sm">Add Category</span>
        </Link>
        <Link href="/addTool">
          <span className="btn  btn-secondary cursor-pointer sm:btn-md btn-sm">Add Tool</span>
        </Link>
      </div>
      <div className="flex-none">
        <SignedIn>
          <UserButton appearance={{
            elements:{
              userButtonBox:"bg-accent p-1 sm:p-3  rounded-full"
            }
          }}/>
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
