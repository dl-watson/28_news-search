import fetch from "node-fetch";

const API_KEY = process.env.API_KEY;
const API_URL = `http://newsapi.org/v2/top-headlines?
country=us&apiKey=${API_KEY}`;

const getArticles = () => {
  return fetch(API_URL).then((res) => res.json());
};

export default getArticles;
