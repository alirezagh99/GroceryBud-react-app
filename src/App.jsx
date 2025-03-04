import { useState } from "react";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";
const data = [
  {
    id: uuidv4(),
    name: "Apples",
  },
  {
    id: uuidv4(),
    name: "Oranges",
  },
  {
    id: uuidv4(),
    name: "Ice Cream",
  },
  {
    id: uuidv4(),
    name: "Bread",
  },
];

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const getLocalStorage = JSON.parse(localStorage.getItem("list") || "[]");

function App() {
  const [items, setItems] = useState(getLocalStorage);

  const handleNewItem = (i) => {
    const newList = [...items, { name: i, id: uuidv4() }];
    setItems(newList);
    setLocalStorage(newList);
    toast.success("New item added to the list.");
  };

  const handleDelete = (id) => {
    const newList = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newList);
    setLocalStorage(newList);
  };

  return (
    <div className="w-1/3 m-auto shadow-lg rounded p-5 mt-20">
      <Form handleNewItem={handleNewItem} />
      <Items items={items} handleDelete={handleDelete} />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
