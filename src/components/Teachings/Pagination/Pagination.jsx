import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="nav-pagination">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <NavLink
              onClick={() => paginate(number)}
              to={`/teachings/adults/` + "page-" + number}
              className="page-link"
            >
              {number}
            </NavLink>
            {/* <a
              onClick={() => paginate(number)}
              href={`/teachings/adults/` + "page-" + number}
              className="page-link"
            >
              {number}
            </a> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
