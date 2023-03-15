import React from "react";
import AllButton from "./AllButton";
import MyFavs from "./MyFavs";

export default function ButtonContainer() {
  return (
    <section className="buttonContainer">
      <AllButton />
      <MyFavs />
    </section>
  );
}
