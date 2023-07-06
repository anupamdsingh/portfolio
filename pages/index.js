import { Inter } from "next/font/google";
import Navbar from "@/src/components/navbar";
import About from "@/src/components/about";
import What from "@/src/components/what_i_do";
import Skills from "@/src/components/skills";
import Touch1 from "@/src/components/getintouch";
import Top from "@/src/components/top";
// import "./style.css";
import Link from "next/link";
import { useRef } from "react";

export default function Index() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();

  const scrollHandeler = (elmref) => {
    if (!elmref || !elmref.current) {
      console.error("Invalid element reference");
      return;
    }

    console.log(elmref);
    const { offsetTop } = elmref.current;
    console.log(offsetTop);
    if (offsetTop === undefined || offsetTop === null) {
      console.error("Invalid offsetTop");
      return;
    }

    try {
      window.scroll({ y: offsetTop });
      console.log("Scrolled");
    } catch (error) {
      console.error(`Error scrolling to ${offsetTop}: ${error.message}`);
    }
  };

  return (
    <div className="bg-black text-white flex flex-col font-mono">
      <div className="fixed top-0 bg-black">
        <div className="flex w-screen z-30 top-10 py-1 px-4 ">
          <div className="flex justify-start">
            <div className="text-slate-200 w-full flex items-center px-4 text-3xl">
              anupamdsingh
            </div>
          </div>
          <div className="w-screen flex justify-end">
            <div className=" ">
              <div className=" w-full flex items-center  mt-0 px-4 py-2">
                <div>
                  <ul className="flex items-center justify-between text-base text-slate-200 md:pt-0">
                    <li>
                      <Link
                        className="inline-block no-underline hover:text-slate-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                        onClick={() => scrollHandeler(section1)}
                        href="#top"
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="inline-block no-underline hover:text-slate-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                        onClick={() => scrollHandeler(section2)}
                        href="#about"
                      >
                        About
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="inline-block no-underline hover:text-slate-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                        onClick={() => scrollHandeler(section3)}
                        href="#"
                      >
                        Projects
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="inline-block no-underline hover:text-slate-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                        onClick={() => scrollHandeler(section4)}
                        href="#getintouch"
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
      </div>
      <div id="top" ref={section1}>
        <Top />
      </div>
      <div id="about" ref={section2}>
        <About />
      </div>
      <div>
        <What />
      </div>
      <div>
        <Skills />
      </div>
      <div id="getintouch" ref={section4}>
        <Touch1 />
      </div>
    </div>
  );
}
