import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer center white">
      <div className="content">
        <div className="container">
          <div className="logo oswald ">
            <NavLink className="td-none resize-logo" to="/">
              <span className="black">
                Christ<span className="white">Center</span>
              </span>
            </NavLink>
          </div>
          <div className="quotation">
            <q className="white">Je suis le pain de vie.</q>
            <span className="black bold"> Jean 6:3</span>
          </div>
          <div className="article-about">
            <h3 className="oswald uppercase">A propos</h3>
            <p className="text-article">
              Ce site me fut inspiré par le Saint-Esprit de Dieu qui voulait que
              les chrétiens ainsi que les paiens
              <br /> puissent avoir un contenu édifiant qui réuni films
              édifiants et enseignements spirituels selon
              <br />
              les divers âge et situations confrontées dans la vie de tous les
              jours.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
