import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  render() {
    return (
      <form style={{ textAlign: "center" }}>
        <input
          onChange={this.props.handleSearch}
          placeholder="Search all articles..."
        />
      </form>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
