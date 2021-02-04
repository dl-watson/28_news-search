import React, { Component } from "react";
import ArticlesList from "../components/articles/ArticlesList";
import getArticles from "../services/getArticles";
import Header from "../components/header/Header";
import searchArticles from "../services/searchArticles";

export default class NewsSearch extends Component {
  state = {
    loading: true,
    articles: [],
    search: "",
  };

  componentDidMount() {
    getArticles().then(({ articles }) =>
      this.setState({ articles, loading: false })
    );
  }

  handleSearch = ({ target }) => {
    if (target.value.trim()) {
      searchArticles(target.value).then(({ articles }) =>
        this.setState({ articles, search: target.value })
      );
      this.setState({ search: target.value.trim() });
    }
  };

  render() {
    const { articles, loading, search } = this.state;
    const { handleSearch } = this;
    return (
      <>
        <Header handleSearch={handleSearch} />
        {loading ? (
          <>Loading...</>
        ) : (
          <ArticlesList articles={articles} search={search} />
        )}
      </>
    );
  }
}
