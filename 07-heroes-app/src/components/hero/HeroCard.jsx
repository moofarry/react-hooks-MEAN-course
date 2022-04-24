import React from "react";
import { Link } from "react-router-dom";
import "./HeroCards.css";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter,
  first,
  characters,
}) => {
  const imgPath = `/public/assets/heroes/${id}.jpg`;

  return (
    <Link to={`/hero/${id}`} className="my-card">
      <img
        src={imgPath}
        className="img img-responsive"
        alt={superhero}
      />
      <div className="profile-name">{superhero}</div>
      <div className="profile-position">{alter}</div>
      <div className="profile-overview">
        <div className="profile-overview">
          <div className="row">
            <div className="col-ms-4">
              <h3>{publisher}</h3>
              <p>
                first occurrence: <br />
                {first}
              </p>
              {alter !== characters && <p>{characters}</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
