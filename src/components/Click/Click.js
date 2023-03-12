import { Link } from "react-router-dom";
import {
  EllipsisOutlined,
  BarsOutlined,
  HeartFilled,
  TagFilled,
  StarFilled,
} from "@ant-design/icons";

import "./click.css";

const Click = () => {
  return (
    <div
      id="options"
      onClick={function handleClick(e) {
        e.stopPropagation();
      }}
    >
      <Link to="/">
        <EllipsisOutlined />
      </Link>
      <div className="list-option">
        <ul>
          <li className="add-list">
            <p>
              <Link to="/">
                <BarsOutlined /> Add to list
              </Link>
            </p>
          </li>
          <li className="favorite">
            <p>
              <Link to="/">
                <HeartFilled />
                Favorite
              </Link>
            </p>
          </li>
          <li className="watchlist">
            <p>
              <Link to="/">
                <TagFilled />
                Wacthlist
              </Link>
            </p>
          </li>
          <li className="rating">
            <p>
              <Link to="/">
                <StarFilled />
                Your rating
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Click;
