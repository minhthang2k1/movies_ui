import "./App.css";

import { Routes, Route } from "react-router-dom";

import SearchLayout from "./Layout/SearchLayout";
import DefaultLayout from "./Layout/DefaultLayout";
import LoginLayout from "./Layout/LoginLayout";
import DetailMovieLayout from "./Layout/DetailMovieLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/search" element={<SearchLayout />} />
        <Route path="/movie" element={<DetailMovieLayout />} />
      </Routes>
    </div>
  );
}

export default App;
