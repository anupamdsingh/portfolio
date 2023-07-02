import React from "react";

const TextInput = ({ label, type, placeholder }) => {
  return (
    <div className="mb-4 text-white w-1/3">
      <label className="block text-grey-darker text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        className="bg-transparent border-b border-white text-sm rounded-none focus:outline-none focus:border-zinc-300 block w-full p-2.5 text-white "
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default TextInput;
