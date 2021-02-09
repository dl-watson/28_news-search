/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import Article from "./Article";

const ArticlesList = ({ articles, search }) => {
  const articlesList = articles.map((article, index) => {
    return (
      <li key={index}>
        <Article {...article} />
        <br />
      </li>
    );
  });

  return (
    <>
      {search && (
        <div style={{ textAlign: "center" }}>
          Fetching results for "{search}"...
        </div>
      )}
      <ul style={{ listStyle: "none" }}>{articlesList}</ul>
    </>
  );
};

ArticlesList.propTypes = {
  search: PropTypes.string,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string,
    }).isRequired
  ),
};

export default ArticlesList;
