import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me estoy mostrando");
  return <small>{value}</small>;
});

