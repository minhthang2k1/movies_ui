import {
  NotificationFilled,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Menu = () => {
  return (
    <ul>
      <li className="language">EN</li>
      <li className="notification">
        <NotificationFilled />
      </li>
      <li className="profile">
        <UserOutlined />
      </li>
      <li className="search">
        <SearchOutlined />
      </li>
    </ul>
  );
};

export default Menu;
