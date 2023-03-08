import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Fragment } from "react";

import SearchLayout from "./Layout/SearchLayout";
import DefaultLayout from "./Layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/search" element={<SearchLayout />} />
      </Routes>
    </div>
  );
}

export default App;
