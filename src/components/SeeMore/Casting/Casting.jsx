import React from "react";
import "./Casting.css";
import img from "../../../images/film01.jpg";

const Casting = ({ casting, actor }) => {
  console.log(actor);
  return (
    <div>
      <div className="casting-container grid-col-4">
        {casting.map(cast => {
          return (
            <div className="bloc-casting-img">
              <img src={cast} />
            </div>
          );
        })}
        {actor &&
          actor.map(act => {
            return <div className="cast-actors">{act}</div>;
          })}
      </div>
    </div>
  );
};

export default Casting;
