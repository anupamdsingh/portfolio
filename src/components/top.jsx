import React from "react";
import Buttons from "@/src/components/buttons";
import Link from "next/link";
import Image from 'next/image';


function Top() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="flex items-center xl:h-screen xl:justify-between xl:pl-28 justify-center xl:pr-12 xl:pt-0 h-screen flex-col-reverse xl:flex-row ">
      <div className="xl:w-2/5 pl-10 pt-10">
        <div className="text-6xl font-bold pb-2 2xl:text-9xl">
          <div className="font-normal text-4xl 2xl:text-6xl pb-3">Hi,I am </div>
          अनुपम सिंह
        </div>
        <div className="text-2xl 2xl:text-4xl text-stone-500">Developer</div>
        <div className="pt-5 flex xl:flex-row gap-x-3 flex-col w-80 2xl:w-3/4">
          <div className="w-1/3 font-medium" onClick={onButtonClick}>
            <Buttons type="secondary" Name="Download CV" />
          </div>
          <div className="w-1/3  font-medium">
            <Link href="#about">
              <Buttons type="primary" Name="Learn More" />
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:flex justify-center xl:w-1/2 pt-8 flex justify-center">
        <Image
          className="h-9/12 w-9/12 rounded-full "
          src={
            "data:image/webp;base64,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"
          }
          alt="photo"
        />
      </div>
    </div>
  );
}
export default Top;
