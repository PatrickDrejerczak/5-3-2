import React from "react";
import MainPage from "./Components/MainPage/index.js";
import PaginationBar from "./Components/Pagination";
import SearchBox from "./Components/SearchBox/index.js";
import SideMenu from "./Components/SideMenu";
import { useEffect } from "react";
import { useState } from "react";

const myKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [newList, setNewList] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    let url = "https://newsapi.org/v2/top-headlines";
    url += `?country=us&category=${category}&apiKey=${myKey}`;
    const getData = async () => {
      const data = await fetch(url);
      const result = await data.json();
      console.log(result);
      setNewList(result.articles);
    };
    getData();
  }, [category]);

  const handleCategory = (eventKey, event) => {
    setCategory(eventKey);
  };

  return (
    <div>
      <SearchBox />
      <MainPage
        data={newList}
        category={category}
        handleCategory={handleCategory}
      />
    </div>
  );
};

export default App;
