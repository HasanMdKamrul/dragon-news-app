import React from "react";
import { Link } from "react-router-dom";

const CategoryComponent = ({ category }) => {
  const { name, id } = category;
  return (
    <div>
      <Link to={`/category/${id}`}>{name}</Link>
    </div>
  );
};

export default CategoryComponent;
