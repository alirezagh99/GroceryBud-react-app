import React from "react";
import { useState } from "react";

function Form() {
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (val == "") {
      return;
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 m-auto mt-10 border flex flex-col items-center"
    >
      <h3 className="text-xl mb-4">Grocery Bud</h3>
      <div className="mb-3">
        <input
          onChange={handleChange}
          className="border text-sm w-48 -mr-2 h-7 pl-3"
          type="text"
        />
        <button className="bg-blue-400 text-white text-sm py-1 px-4">
          Add item
        </button>
      </div>
    </form>
  );
}

export default Form;
