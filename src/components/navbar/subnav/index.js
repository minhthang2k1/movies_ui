import { Button, Dropdown } from "antd";

const Subnav = ({ items, type }) => (
  <Dropdown
    menu={{
      items,
    }}
    placement="bottomLeft"
    arrow
  >
    <Button>{type}</Button>
  </Dropdown>
);
export default Subnav;
