import React from "react";
import { getGifs } from "../helpers/getGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};