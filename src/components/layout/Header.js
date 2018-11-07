import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {branding}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="navbar-brand">
                  <i className="fa fa-home" /> Home
                </Link>
                <Link to="/contacts/add" className="navbar-brand">
                  <i className="fa fa-plus" /> Add
                </Link>
                <Link to="/about" className="navbar-brand">
                  <i className="fa fa-question" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
