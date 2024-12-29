import React from "react";
import { useState } from "react";

function SingleItem({ item }) {
  const [checked, setChecked] = useState(false);
  const lineThrough = checked ? "line-through" : "";

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex flex-row w-full mb-5 justify-between items-center text-sm">
      <div className="flex flex-row">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <h5 className={`ml-3 font-medium ${lineThrough}`}>{item.name}</h5>
      </div>
      <button className="bg-gray-900 px-1 hover:bg-blue-400 transition-all duration-300 text-white rounded">
        Delete
      </button>
    </div>
  );
}

export default SingleItem;
