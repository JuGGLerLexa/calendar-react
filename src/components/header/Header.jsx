import React from "react";
import PropTypes from "prop-types";

import "./header.scss";

const Header = ({ today, onCreate }) => {
  return (
    <header className="header">
      <button
        className="button create-event-btn"
        onClick={() => onCreate(new Date().getHours(), new Date())}
      >
        <i className="fas fa-plus create-event-btn__icon"></i>
        Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={() => today}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month"></span>
      </div>
    </header>
  );
};

Header.propTypes = {
  onCreate: PropTypes.func.isRequired, // З PropTypes.element ви можете вказати, що лише один елемент може бути переданий компоненту в якості дочірнього.
};

export default Header;
