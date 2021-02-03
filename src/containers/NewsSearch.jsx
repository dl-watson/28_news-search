import React, { Component } from "react";
import ArticlesList from "../components/articles/ArticlesList";
import getArticles from "../services/getArticles";
import Header from "../components/header/Header";
import searchArticles from "../services/searchArticles";

export default class NewsSearch extends Component {
  state = {
    loading: true,
    articles: [],
    search: [],
  };

  handleSearch = ({ target }) => {
    if (target.value) {
      return searchArticles(target.value).then(({ articles }) => {
        this.setState({ articles });
      });
    }
  };

  componentDidMount() {
    return getArticles().then(({ articles }) =>
      this.setState({ articles, loading: false })
    );
  }

  render() {
    const { articles, loading } = this.state;
    const { handleSearch } = this;
    return (
      <>
        <Header handleSearch={handleSearch} />
        {/* <input onChange={handleSearch} /> */}
        {loading ? <>Loading...</> : <ArticlesList articles={articles} />}
      </>
    );
  }
}
