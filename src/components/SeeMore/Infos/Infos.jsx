import React from "react";
import "./Infos.css";
import img from "../../../images/film01.jpg";

const Infos = ({ infos, average, age, productor }) => {
  return (
    <div>
      <div className="flex-between">
        <div className="bloc-img-poster">
          <img src={infos.poster} alt="" />
        </div>
        <div className="bloc-info-movie">
          <div className="info-see-more">
            <b className="bold red">Note</b>
            <div className="info-txt">{average}</div>
          </div>
          <div className="info-see-more">
            <b className="bold red">Age</b>
            <div className="info-txt">{age}</div>
          </div>
          <div className="info-see-more">
            <b className="bold red">Type</b>
            <div className="info-txt">
              {infos.type &&
                infos.type.map(inf => {
                  return <li>{inf}</li>;
                })}
            </div>
          </div>
          <div className="">
            <b className="bold red">Productor</b>
            <div className="info-txt">{productor}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
