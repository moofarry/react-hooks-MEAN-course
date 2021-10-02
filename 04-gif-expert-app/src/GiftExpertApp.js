import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Neon Genesis Evangelion"]);

  return (
    <>
      <h2>GiftExpertApp </h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <button>Agregar</button>
      <ol>
        {categories.map((category, indx) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
