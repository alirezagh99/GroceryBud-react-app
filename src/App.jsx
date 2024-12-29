import { useState } from "react";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";
import Items from "./components/Items";
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
function App() {
  const [items, setItems] = useState(data);

  const handleNewItem = (i) => {
    console.log(i);
    const newList = [...items, { name: i, id: uuidv4() }];
    setItems(newList);
  };

  return (
    <div className="w-1/3 m-auto shadow-lg rounded p-5 mt-20">
      <Form handleNewItem={handleNewItem} />
      <Items items={items} />
    </div>
  );
}

export default App;
