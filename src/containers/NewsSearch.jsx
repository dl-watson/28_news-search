import React, { Component } from "react";
import getArticles from "../services/getArticles";

export default class NewsSearch extends Component {
  state = {
    loading: false,
    articles: [],
    search: "",
  };

  componentDidMount() {
    return getArticles().then(({ articles }) => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    return <div></div>;
  }
}
