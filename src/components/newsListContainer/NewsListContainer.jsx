import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import New from "../new/New";
import "./NewsListContainer.css";

export default function NewsListContainer() {
  const [newList, setNewList] = useState([]);
  const [query, setQuery] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pages, setPages] = useState(0);

  async function getNews() {
    let respuesta = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${pages}&hitsPerPage=8`
    );
    let news = await respuesta.json();
    setNewList(news.hits);
    setTotalPages(news.nbPages);
    setQuery(news.query);
    console.log(news);
    console.log(newList);
  }

  const handleChange = (e, p) => {
    setPages(p);
  };
  const handleChangeFilter = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    getNews();
  }, [pages, query]);

  return (
    <>
      <section>
        <select
          name="select"
          onChange={(e) => handleChangeFilter(e.target.value)}
        >
          <option value="angular">Angular</option>
          <option value="vuejs">vuejs</option>
          <option value="reactjs">React</option>
        </select>
      </section>

      <section className="parent">
        {newList.map((item) => (
          <New
            key={item.objectID}
            author={"by " + item.author}
            title={item.story_title}
            date={item.created_at}
          />
        ))}
      </section>

      <section className="pagination">
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handleChange}
        />
      </section>
    </>
  );
}
