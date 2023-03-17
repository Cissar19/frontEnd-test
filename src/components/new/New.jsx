import React from "react";
import "./New.css";
import * as timeago from "timeago.js";
import clock from "../../icons/clock.png";
import heart from "../../icons/heart.png";
import Swal from "sweetalert2";

export default function New({ title, date, author, url, keyID }) {
  const handleAddFav = () => {
    // localStorage.favorite = JSON.stringify({ title, date, author, url, keyID });
    let favorite = localStorage.getItem("favorite");

    if (!favorite) {
      favorite = [{ title, date, author, url, keyID }];
    } else {
      favorite = JSON.parse(favorite);
      favorite.push({ title, date, author, url, keyID });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Agregada a Favoritos",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    localStorage.setItem("favorite", JSON.stringify(favorite));
  };

  return (
    <section className="card">
      <a className="card-left" href={url} target="_blank" rel="noreferrer">
        <div className="card-left">
          <div className="head">
            <img className="clock " src={clock} alt="clock" />
            <p className="-hours-ago-by-autho">
              {timeago.format(date)} {author}
            </p>
          </div>
          <h2 className="title">{title}</h2>
        </div>
      </a>

      <div className="card-right">
        <button onClick={handleAddFav}>
          <img className="heart-img" src={heart} alt="" />
        </button>
      </div>
    </section>
  );
}
