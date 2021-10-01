import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "Naruto",
    "Dragon Ball",
    "Neon Genesis Evangelion",
  ]);

  //
  //   setCategories(["newCategory", ...categories]);
  // };

  return (
    <>
      <h2>GiftExpertApp </h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <button>Agregar</button>
      <ol>
        {categories.map((category,indx) => (
          <li key={category+indx}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
