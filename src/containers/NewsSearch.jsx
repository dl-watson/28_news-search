import React, { Component } from "react";
import ArticlesList from "../components/articles/ArticlesList";
import getArticles from "../services/getArticles";

export default class NewsSearch extends Component {
  state = {
    loading: true,
    articles: [],
    search: "",
  };

  componentDidMount() {
    return getArticles().then(({ articles }) =>
      this.setState({ articles, loading: false })
    );
  }

  render() {
    const { articles, loading } = this.state;
    return (
      <>{loading ? <>Loading...</> : <ArticlesList articles={articles} />}</>
    );
  }
}
