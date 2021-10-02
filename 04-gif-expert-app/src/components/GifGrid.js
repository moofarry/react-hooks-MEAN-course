import React from "react";

export const GifGrid = ({ category }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    getGifs();
  });

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Uribe&limit=10&api_key=Enhu5gM26OHBLH0hYgf1tKNVcT2JHheo";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => {
      return {
        id: id,
        title: title,
        url: images?.downsized_medium.url,
      };
    });

    console.log(`gifs`, gifs);
  };
  return (
    <div>
      <h3>{category}</h3>

      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1)}}
      ></button>
    </div>
  );
};
