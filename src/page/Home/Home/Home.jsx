import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const allNews = useLoaderData();

  console.log(allNews);

  return (
    <div>
      <h1>Total News found: {allNews.length}</h1>
      {allNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Home;
