import React from "react";

const NewsSummaryCard = ({ news }) => {
  const { title } = news;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default NewsSummaryCard;
