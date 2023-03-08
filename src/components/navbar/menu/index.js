import { Link } from "react-router-dom";
import {
  NotificationFilled,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Menu = () => {
  return (
    <ul>
      <Link>
        <li className="language">EN</li>
      </Link>
      <Link>
        <li className="notification">
          <NotificationFilled />
        </li>
      </Link>
      <Link>
        <li className="profile">
          <UserOutlined />
        </li>
      </Link>
      <Link to="/search">
        <li className="search">
          <SearchOutlined />
        </li>
      </Link>
    </ul>
  );
};

export default Menu;
