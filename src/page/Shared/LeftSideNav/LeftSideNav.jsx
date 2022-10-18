import React, { useEffect, useState } from "react";
import CategoryComponent from "../../../components/Category/CategoryComponent";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`http://localhost:15000/categories-news`);
        response.ok
          ? console.log("Successfully loaded")
          : console.log("Failed to load");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <h4>All Categories</h4>
      {categories.map((category) => (
        <CategoryComponent key={category.id} category={category} />
      ))}
    </div>
  );
};

export default LeftSideNav;
