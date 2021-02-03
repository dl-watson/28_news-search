import React from "react";
import PropTypes from "prop-types";

const Article = ({ title, author, description }) => {
  return (
    <>
      <p style={{ fontSize: "1.2rem" }}>{title}</p>
      <p>Written by: {author || "anonymous"}</p>
      <p>Summary: {description}</p>
    </>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Article;
