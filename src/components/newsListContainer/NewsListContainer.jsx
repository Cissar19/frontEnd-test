import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import New from "../new/New";
import "./NewsListContainer.css";

export default function NewsListContainer() {
  const [newList, setNewList] = useState([]);
  const DEFAULT_PAGE = 1;

  async function callNews(pages, query) {
    let respuesta = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${pages}&hitsPerPage=8`
    );
    let news = await respuesta.json();
    setNewList(news);
  }

  const handleChangePagination = (e_, numberPage) => {
    callNews(numberPage);
  };
  const handleChangeFilterQuery = (query) => {
    callNews(DEFAULT_PAGE, query);
  };

  useEffect(() => {
    callNews(DEFAULT_PAGE, "angular");
  }, []);

  return (
    <>
      <select
        className="dropdown"
        name="select"
        onChange={(e) => handleChangeFilterQuery(e.target.value)}
      >
        <option value="angular">Angular</option>
        <option value="vuejs">vuejs</option>
        <option value="reactjs">React</option>
      </select>

      <section className="parent">
        {(() => {
          if (newList && newList.hits) {
            return newList.hits.map((item) => {
              if (item.story_title) {
                return (
                  <New
                    key={item.objectID}
                    author={"by " + item.author}
                    title={item.story_title}
                    date={item.created_at}
                    keyID={item.objectID}
                  />
                );
              }
              return null;
            });
          }
        })()}
      </section>

      <section className="pagination">
        <Pagination
          count={newList.nbPages ? newList.nbPages : 0}
          color="primary"
          onChange={handleChangePagination}
        />
      </section>
    </>
  );
}
