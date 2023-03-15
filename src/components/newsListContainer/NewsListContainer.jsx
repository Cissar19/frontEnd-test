import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import New from "../new/New";
import "./NewsListContainer.css";

export default function NewsListContainer() {
  const [newList, setNewList] = useState([]);
  const [query, setQuery] = useState("reactjs");
  const [page, setPage] = useState(1);

  async function getNews() {
    let respuesta = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`
    );
    let news = await respuesta.json();
    setNewList(news.hits);
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
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
        <Pagination count={10} color="primary" />
      </section>
    </>
  );
}
