import { Link } from "react-router-dom";
import {
  EllipsisOutlined,
  BarsOutlined,
  HeartFilled,
  TagFilled,
  StarFilled,
} from "@ant-design/icons";
import { Button, message, Space } from "antd";

import Imgotto from "../../../assets/otto.jpg";
import "./today.css";
import Click from "../../Click";
import { useEffect, useState } from "react";

const Today = () => {
  //   const [messageApi, contextHolder] = message.useMessage();
  //   const success = () => {
  //     messageApi.open({
  //       type: "success",
  //       content: "This is a success message",
  //       placement: "topRight",
  //     });
  //   };

  //   const remove = () => {
  //     messageApi.open({
  //       type: "error",
  //       content: "This is a success message",
  //       placement: "topRight",
  //     });
  //   };
  //   const [state, setState] = useState(false);
  //   function handleState() {
  //     state === false ? setState(true) : setState(false);
  //     const btnOptions = document.querySelectorAll(".ant-dropdown-menu-item");
  //     btnOptions.forEach((option, index) => {
  //       if (state === false) {
  //         if (index === 1) {
  //           option.addEventListener("click", () => {
  //             return success();
  //           });
  //         } else if (index === 2) {
  //           success();
  //         }
  //       } else {
  //         if (index === 1) {
  //           remove();
  //         }
  //       }
  //     });
  //   }
  const items = [
    {
      label: (
        <Link style={{ fontSize: "16px", padding: "5px 20px" }}>
          <BarsOutlined style={{ marginRight: "8px" }} />
          Add to list
        </Link>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link to="/" style={{ fontSize: "16px", padding: "5px 20px" }}>
          <HeartFilled style={{ marginRight: "8px" }} />
          Favorite
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link to="/" style={{ fontSize: "16px", padding: "5px 20px" }}>
          <TagFilled style={{ marginRight: "8px" }} />
          Wacthlist
        </Link>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link to="/" style={{ fontSize: "16px", padding: "5px 20px" }}>
          <StarFilled style={{ marginRight: "8px" }} />
          Your rating
        </Link>
      ),
      key: "3",
    },
  ];

  function handleOptions() {
    const addOpen = document.querySelector(".hover");
    const opTions = document.querySelector(".container-1");
    opTions.addEventListener("click", () => {
      addOpen.classList.remove("open");
    });
    addOpen.classList.add("open");
    const select = document.querySelector(".ant-dropdown-menu");
    select.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }

  return (
    <div id="today" className="media scroller-wrap should_fade is_fading">
      {/* {contextHolder}

      <Space>
        <Button onClick={handleState}>Success</Button>
      </Space> */}
      <div className="trending-scroll loaded column-content flex">
        <div className="container container-1">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-2">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-3">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-4">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-5">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-6">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-7">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-8">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-9">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-10">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-11">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-12">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-13">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
        <div className="container container-14">
          <Link>
            <img src={Imgotto} />
          </Link>
          <div className="options" onClick={handleOptions}>
            <Link to="/">
              <Click items={items} type={<EllipsisOutlined />} />
            </Link>
          </div>

          <div className="content">
            <h2>
              <Link>Otto bác hàng xóm khó ở</Link>
            </h2>
            <p>Dec 28, 2022</p>
          </div>
          <div className="hover"></div>
        </div>
      </div>
    </div>
  );
};

export default Today;
