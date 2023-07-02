import Buttons from "@/src/components/buttons";
import TextInput from "@/src/components/textInput";
import React from "react";

function Touch1() {
  return (
    <div className="flex justify-center items-center flex-col pt-20 text-white">
      <div className="text-5xl font-bold">Get in touch</div>
      <div className="w-1/2 ">
        <div className="flex flex-row justify-evenly pt-14 ">
          <TextInput type="text" placeholder="First name" />
          <TextInput type="text" placeholder="Last name" />
        </div>
        <div className="flex flex-row justify-evenly">
          <TextInput type="email" placeholder="Email" />
          <TextInput type="numeric" placeholder="Phone no." />
        </div>
        <div className="flex justify-center pt-5">
          <textarea
            className="bg-transparent border-x border-y border-white text-sm rounded-none focus:outline-none focus:border-zinc-300 block w-4/5  p-2.5 text-white "
            placeholder="Message"
            required
          />
        </div>
      </div>
      <div className="w-1/2 flex justify-center pt-8">
        <div className="w-1/6">
          <Buttons type="secondary" Name="Submit" />
        </div>
      </div>
    </div>
  );
}
export default Touch1;
