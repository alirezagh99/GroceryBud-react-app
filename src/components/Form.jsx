import React from "react";
import { useState } from "react";

function Form({ handleNewItem }) {
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (val == "") {
      return;
    }
    handleNewItem(val);
    setVal("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col items-center mb-5"
    >
      <h3 className="text-xl mb-4 font-medium text-gray-700">Grocery Bud</h3>
      <div className="mb-3 w-full">
        <input
          onChange={handleChange}
          className="border text-sm w-[80%] -mr-2 h-7 pl-3 outline-0"
          type="text"
          value={val}
        />
        <button className="bg-blue-400 hover:bg-blue-800 transition-all duration-500 text-white text-sm py-1 px-4">
          Add item
        </button>
      </div>
    </form>
  );
}

export default Form;
