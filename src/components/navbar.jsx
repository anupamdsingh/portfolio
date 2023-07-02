import React from "react";
import Link from "next/link";

const Navbar = ({}) => {
  return (
    <div className="flex w-screen z-30 top-10 py-1 px-4 ">
      <div className="flex justify-start">
        <div className="text-slate-200 w-full flex items-center px-4 text-3xl">
          anupamdsingh
        </div>
      </div>
      <div className="w-screen flex justify-end">
        <div className=" ">
          <div className=" w-full flex items-center  mt-0 px-4 py-2">
            {/* <Image className=" h-full w-full" src={Logo} alt="photo"/> */}
            <div>
              <ul className="flex items-center justify-between text-base text-slate-200 md:pt-0">
                <li>
                  <Link
                    className="inline-block no-underline hover:text-slate-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                    href="/Home"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="inline-block no-underline hover:text-slate-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                    href="/About"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="inline-block no-underline hover:text-slate-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                    href="/login"
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    className="inline-block no-underline hover:text-slate-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                    href="/ApplyNow"
                  >
                    <b>Contact me</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
