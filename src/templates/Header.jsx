import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header" id="header">
      <div className="Header-main">
        <div className="Header-logo">
          <h1>
            <Link to="/" className="link-header">
              100tifi.co
            </Link>
          </h1>
        </div>
        <div>
          <Link to="/about" className="Header-nav">
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
