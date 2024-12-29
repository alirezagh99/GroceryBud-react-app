import React from "react";
import SingleItem from "./SingleItem";
import { v4 as uuidv4 } from "uuid";
function Items({ items, handleDelete }) {
  return (
    <div className="flex flex-col items-center">
      {items.map((item) => {
        return (
          <SingleItem item={item} key={uuidv4()} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default Items;
