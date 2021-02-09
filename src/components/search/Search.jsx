import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  render() {
    const { handleSearch } = this.props;
    return (
      <form style={{ textAlign: "center" }}>
        <input
          data-testid="search-input"
          onChange={handleSearch}
          placeholder="Search all articles..."
        />
      </form>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
