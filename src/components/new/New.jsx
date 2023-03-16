import React from "react";
import "./New.css";
import * as timeago from "timeago.js";
import clock from "../../icons/clock.png";
import heart from "../../icons/heartEmpty.png";
import heartFull from "../../icons/heart.png";

export default function New({ title, date, author, url }) {
  const handleAddFav = () => {
    console.log(`Agregaste ${title} a favoritos`);
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
        {/* <img className="heart-img" src={heart} alt="clock" /> */}
        <button onClick={handleAddFav}>FAVORITO</button>
      </div>
    </section>
  );
}
