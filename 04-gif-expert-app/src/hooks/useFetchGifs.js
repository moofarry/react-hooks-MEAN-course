import React from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [state, setstate] = React.useState({
    data: [],
    loading: true,
  });

  React.useEffect(() => {
    getGifs(category).then((imgs) => {

      setTimeout(() => {
        setstate({
          data: imgs,
          loading: false,
        });
      }, 1000);

    });

  }, [category]);

  return state;
};  
