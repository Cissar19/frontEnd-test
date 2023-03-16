import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";
export default function AllButton() {
  return (
    <>
      <Link to="/">
        <button className="btn">All</button>
      </Link>
    </>
  );
}
