import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavAdmin.css";

const NavAdmin = props => {
  console.log("----------nav props ??");
  console.log(props);
  return (
    <React.Fragment>
      <div className="subnav">
        <li className="list-item-logout white">
          {props.loggedInUser && (
            <span>Hello {props.loggedInUser.username}</span>
          )}
          <NavLink to="/logout">
            <i class="fas fa-sign-out-alt icon-logout" />
            {/* Log Out */}
          </NavLink>
        </li>
      </div>
      <nav className="navAdmin">
        <h2 class="logoAdmin center">
          <a href="/admin/index" className="white">
            Admin
          </a>
        </h2>
        <ul className="menu-admin">
          <li className="list-item-admin">
            <NavLink to="/admin/add-teachings-adults">
              <i class="fas fa-plus icon-admin" />
              Add Teachings
            </NavLink>
          </li>
          <li className="list-item-admin">
            <NavLink to="/admin/manage-teachings-adults">
              <i class="fa fa-tasks icon-admin" />
              Manage Teachings
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default NavAdmin;
