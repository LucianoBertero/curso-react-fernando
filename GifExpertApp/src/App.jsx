import { useState } from "react";
import "./App.css";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
function App() {
  const [categories, setCategories] = useState(["One punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([...categories, newCategory]); //siempre hacerlo asi no de la otra forma
  };

  return (
    <>
      <h2>GiftExpert</h2>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      <ol>
        {categories.map((category, index) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      <GifGrid></GifGrid>
    </>
  );
}

export default App;
