import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

  const { heroId } = useParams();
  const hero = getHeroById(heroId);
  console.log(hero);

  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>Hero</h1>
      <hr />
      <h2>{hero.superhero}</h2>
    </>
  );
};
