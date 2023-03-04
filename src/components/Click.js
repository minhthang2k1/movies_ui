import { Link } from "react-router-dom";

import { Dropdown, Space } from "antd";

const Click = ({ items, type }) => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
    placement="bottomLeft"
  >
    <Link onClick={(e) => e.preventDefault()}>
      <Space>{type}</Space>
    </Link>
  </Dropdown>
);

export default Click;
