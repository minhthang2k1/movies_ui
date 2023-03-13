import DefaultLayout from "../Layout/DefaultLayout";
import SearchLayout from "../Layout/SearchLayout";
import LoginLayout from "../Layout/DefaultLayout";
import DetailMovieLayout from "../Layout/DetailMovieLayout";

export const publicRoutes = [
  { path: "/", layout: DefaultLayout },
  { path: "/login", layout: LoginLayout },
  { path: "/movie", layout: DetailMovieLayout },
  { path: "/search", layout: SearchLayout },
];
