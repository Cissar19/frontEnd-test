import React from "react";
import { Link } from "react-router-dom";

export default function MyFavs() {
  return (
    <>
      <Link to="/favorites">
        <button className="btn">My favs</button>
      </Link>
    </>
  );
}
