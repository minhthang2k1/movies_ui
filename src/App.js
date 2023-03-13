import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginLayout from "./Layout/LoginLayout";

import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = LoginLayout;

          if (localStorage.getItem("session_id") === null) {
            Layout = LoginLayout;
          } else if (localStorage.getItem("session_id")) {
            Layout = route.layout;
          }
          return <Route key={index} path={route.path} element={<Layout />} />;
        })}
        {/* <Route path="/login" element={<LoginLayout />} />
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/search" element={<SearchLayout />} />
        <Route path="/movie" element={<DetailMovieLayout />} /> */}
      </Routes>
    </div>
  );
}

export default App;
