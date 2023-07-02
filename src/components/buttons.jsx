import { Button } from "@material-tailwind/react";
import React from "react";

const Buttons = ({ type, Name }) => {
  if (type == "primary") {
    return (
      <div className="flex items-center justify-center ">
        <Button className="text-green-600 rounded-none w-full  bg-white hover:bg-green-600 hover:text-white focus:ring-4 font-medium text-sm py-2.5 mb-2">
          {Name}
        </Button>
      </div>
    );
  } else if (type == "secondary") {
    return (
      <div className="flex items-center justify-center ">
        <Button className="text-white w-full rounded-none  bg-green-600 hover:bg-white hover:text-green-500 hover:border-green-600 focus:ring-4 font-medium text-sm py-2.5 mb-2 ">
          {Name}
        </Button>
      </div>
    );
  } else if (type == "default") {
    return (
      <div className="flex items-center justify-center rounded-none">
        <Button className="text-gray-800 w-full border border-gray-800 bg-gray-200 hover:text-white font-medium text-sm py-2.5 mb-2 ">
          {Name}
        </Button>
      </div>
    );
  }
};
export default Buttons;
