import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import FilterSearch from "../FilterSearch/FilterSearch";
import logo from "../../images/logo.png";

const Nav = props => {
  return (
    <nav className="nav">
      <div className="subNav">
        <div className="container right">
          {/* <NavLink className="list-items-connection" to="/sign-in">
            Sign In
          </NavLink>
          <NavLink className="list-items-connection" to="/sign-up">
            Sign Up
          </NavLink> */}
        </div>
      </div>
      <div className="logo center">
        <NavLink className="td-none" to="/">
          {/* <span className="red">
            Christ<span className="white">Center</span>
            <img src={logo} alt="" className="logo" />
          </span> */}

          <span class="txt red">Chris</span>
          <span class="cross">
            <span class="cross1" />
          </span>
          <span class="txt white">Center</span>
        </NavLink>
      </div>
      <div className="flex container">
        <ul className="list-menu flex">
          {/* <NavLink className="list-items" to="/">
            Accueil
          </NavLink> */}
          <li className="list">
            <NavLink className="list-items" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="list-items" to="/series">
              Series
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="list-items" to="/added-recently">
              Added recently
            </NavLink>
          </li>
          <li className="list" id="teachings">
            <NavLink className="list-items" to="/teachings/adults">
              Teachings
            </NavLink>
            {/* <ul className="sub-menu">
              <li>
                <NavLink className="list-sub-menu" to="/teachings/adults">
                  Adults
                </NavLink>
              </li>
              <li>
                <NavLink className="list-sub-menu" to="/teachings/teenager">
                  Teenager
                </NavLink>
              </li>
              <li>
                <NavLink className="list-sub-menu" to="/teachings/kids">
                  Kids
                </NavLink>
              </li>
            </ul> */}
          </li>
          <li className="list">
            <NavLink className="list-items" to="/youth">
              Youth
            </NavLink>
          </li>
        </ul>
        <FilterSearch moveNav={props.moveNav} handleInput={props.handleInput} />
      </div>
    </nav>
  );
};

export default Nav;
