import React from "react";
import ButtonContainer from "./components/buttons/ButtonContainer";
import MainHeader from "./components/header/MainHeader";
import NewsListContainer from "./components/newsListContainer/NewsListContainer";

export default function App() {
  return (
    <>
      <MainHeader />
      <ButtonContainer />
      <NewsListContainer />
    </>
  );
}
