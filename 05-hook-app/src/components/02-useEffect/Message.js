import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener(" ", mouseMove);
    };
  }, []);

  return (
    <div>
      <h2> You are cool!</h2>
      <p>
        x: {x} y:{y}
      </p>
    </div>
  );
};
