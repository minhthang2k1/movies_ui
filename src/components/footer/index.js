import {} from "antd";
import { Link } from "react-router-dom";
// import Imgfooter from "../../assets/footer.svg";

import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <nav>
        <div className="logofooter">
          {/* <img src={Imgfooter} /> */}
          <Link to="/home">Hello</Link>
        </div>
        <div>
          <h3>THE BASICS</h3>
          <ul>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </div>
        <div>
          <h3>GET INVOLVED</h3>
          <ul>
            <li>Contribution Bible</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </div>
        <div>
          <h3>COMMUNITY</h3>
          <ul>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h3>LEGAL</h3>
          <ul>
            <li>Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
