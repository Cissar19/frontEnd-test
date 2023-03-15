import React from "react";
import "./New.css";

export default function New({ title, date, author }) {
  return (
    <section className="Rectangle">
      <p className="-hours-ago-by-autho">
        {"3 horas ago"} {author}
      </p>
      <h2 className="Realize-for-React-fo">{title}</h2>
    </section>
  );
}
