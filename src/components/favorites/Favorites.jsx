import React from "react";
import New from "../new/New";

export default function Favorites() {
  let favorite = localStorage.getItem("favorite");
  favorite = favorite ? JSON.parse(favorite) : [];
  return (
    <>
      <section className="parent">
        {favorite.map((item) => {
          return (
            <New
              key={item.keyID}
              author={"by " + item.author}
              title={item.title}
              date={item.date}
              keyID={item.keyID}
            />
          );
        })}
      </section>
    </>
  );
}
