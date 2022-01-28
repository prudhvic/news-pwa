import React from "react";
import Articles from "./Articles";
import { useState, useEffect } from "react";
const Home = () => {
  let [News, setNews] = useState([]);
  let [query, setQuery] = useState("nft");
  let [search, setSearch] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=${query}&from=2022-1-1&to=2022-1-25&sortBy=popularity&apiKey=7c7d06ab74434931956cfd7bcd993199`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((news) => {
        setNews(news.articles);
        setIsLoading(false);
      });
  }, [query]);
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) {
      alert("please enter something");
    }
    setQuery(search);
    setSearch("");
  }
  console.log(News);
  return (
    <div>
      <form>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </form>
      {isLoading ? <h1 className="loader">Loading...</h1> : ""}
      <div className="grid">
        {News.map((article) => (
          <Articles article={article} key={Math.random() * 100} />
        ))}
      </div>
    </div>
  );
};

export default Home;
