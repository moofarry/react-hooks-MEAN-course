import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const coors = { x: e.x, y: e.y };
      console.log(coors);
    });

    return () => {
      console.log("com  ponent down ");
    };
  }, []);

  return (
    <div>
      <h2> You are cool!</h2>
    </div>
  );
};
