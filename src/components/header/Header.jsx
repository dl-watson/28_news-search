import React from "react";
import Search from "../search/Search";
import PropTypes from "prop-types";

const Header = ({ handleSearch }) => {
  return (
    <header
      style={{
        height: "120px",
        border: "1px solid black",
      }}
    >
      <h1 style={{ textAlign: "center" }}>News Search</h1>
      <Search handleSearch={handleSearch} />
    </header>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Header;
