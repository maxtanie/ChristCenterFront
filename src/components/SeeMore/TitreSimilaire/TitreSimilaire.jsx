import React from "react";

const TitreSimilaire = ({ titreSimilaire }) => {
  let displayState = { display: "none" };
  if (titreSimilaire) displayState = { display: "block" };
  return (
    <div>
      <h1 className="oswald center" style={displayState}>
        Titre similaire
      </h1>
    </div>
  );
};

export default TitreSimilaire;
