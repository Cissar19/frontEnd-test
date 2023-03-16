import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonContainer from "./components/buttons/ButtonContainer";
import Favorites from "./components/favorites/Favorites";
import MainHeader from "./components/header/MainHeader";
import NewsListContainer from "./components/newsListContainer/NewsListContainer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <ButtonContainer />
        <Routes>
          <Route path="/" element={<NewsListContainer />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
