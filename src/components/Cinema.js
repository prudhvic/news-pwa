import React from "react";
import Articles from "./Articles";
import { useState, useEffect } from "react";
const Cinema = () => {
  let [News, setNews] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=cinema&from=2022-1-1&to=2022-1-25&sortBy=popularity&apiKey=7c7d06ab74434931956cfd7bcd993199`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((news) => {
        setNews(news.articles);
        setIsLoading(false);
      });
  }, [isLoading]);

  return (
    <div>
      {isLoading ? <h1 className="loader">Loading...</h1> : ""}
      <div className="grid">
        {News.map((article) => (
          <Articles article={article} key={Math.random() * 100} />
        ))}
      </div>
    </div>
  );
};

export default Cinema;
