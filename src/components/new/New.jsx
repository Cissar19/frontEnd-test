import React from "react";
import "./New.css";
import * as timeago from "timeago.js";
import clock from "../../icons/clock.png";
import heart from "../../icons/heartEmpty.png";

export default function New({ title, date, author }) {
  return (
    <section className="card">
      <div className="card-left">
        <div className="head">
          <img className="clock " src={clock} alt="clock" />
          <p className="-hours-ago-by-autho">
            {timeago.format(date)} {author}
          </p>
        </div>
        <h2 className="title">{title}</h2>
      </div>
      <div className="card-right">
        <img className="heart-img" src={heart} alt="clock" />
      </div>
    </section>
  );
}
