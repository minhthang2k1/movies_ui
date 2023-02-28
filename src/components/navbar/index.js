import { Row, Col } from "antd";

import { Link } from "react-router-dom";

import "./navbar.css";
import Subnav from "./subnav";
import Logo from "./logo";
import Menus from "./menu";

const Navbar = () => {
  const MoviesItems = [
    {
      key: "1",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="movies/popular">
          Popular
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="movies/now-playing">
          Now Playing
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="movies/upcoming">
          Upcoming
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="movies/top-rated">
          Top Rated
        </Link>
      ),
    },
  ];
  const TVShowsItems = [
    {
      key: "1",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="tv/popular">
          Popular
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="tv/airing-today">
          Airing Today
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="tv/on-tv">
          On TV
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="tv/top-rated">
          Top Rated
        </Link>
      ),
    },
  ];
  const Peopleitems = [
    {
      key: "1",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="/popular">
          Popular People
        </Link>
      ),
    },
  ];
  const Moreitems = [
    {
      key: "1",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="more/discussions">
          Discussions
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="more/leaderboard">
          Leaderboard
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="more/support">
          Support
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="more/api">
          API
        </Link>
      ),
    },
  ];
  return (
    <Row id="navbar" style={{ backgroundColor: "#032541" }}>
      <Col className="navigation" span={12}>
        <Row>
          <Col span={5} className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </Col>
          <Col span={14}>
            <ul>
              <li>
                <Link to="/movies">
                  <Subnav items={MoviesItems} type={"Movies"} />
                </Link>
              </li>
              <li>
                <Link to="/tv">
                  <Subnav items={TVShowsItems} type={"TV Shows"} />
                </Link>
              </li>
              <li>
                <Link to="/people">
                  <Subnav items={Peopleitems} type={"People"} />
                </Link>
              </li>
              <li>
                <Link to="/more">
                  <Subnav items={Moreitems} type={"More"} />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
      <Col span={8} className="menu">
        <Menus />
      </Col>
    </Row>
  );
};

export default Navbar;
