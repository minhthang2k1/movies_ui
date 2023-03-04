import {} from "antd";
import { Link } from "react-router-dom";
import Imgfooter from "../../assets/footer.svg";

import "./footer.css";

const Footer = () => {
  return (
    <div id="footer-movies">
      <nav>
        <div className="logofooter">
          <img src={Imgfooter} />
        </div>
        <div>
          <h3>THE BASICS</h3>
          <ul>
            <li>
              <Link>About TMDB</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>Support Forums</Link>
            </li>
            <li>
              <Link>API</Link>
            </li>
            <li>
              <Link>System Status</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>GET INVOLVED</h3>
          <ul>
            <li>
              <Link>Contribution Bible</Link>
            </li>
            <li>
              <Link>Add New Movie</Link>
            </li>
            <li>
              <Link>Add New TV Show</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>COMMUNITY</h3>
          <ul>
            <li>
              <Link>Guidelines</Link>
            </li>
            <li>
              <Link>Discussions</Link>
            </li>
            <li>
              <Link>Leaderboard</Link>
            </li>
            <li>
              <Link>Twitter</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>LEGAL</h3>
          <ul>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>API Terms of Use</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
