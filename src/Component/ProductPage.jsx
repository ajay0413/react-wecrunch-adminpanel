import React from "react";
import TableComp from "./common/TableComp";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { BiFoodTag } from "react-icons/bi";

export default function ProductPage() {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Food Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "Img",
      dataIndex: "img",
      key: "img",
      render: (url) => <img src={url} className="rounded-img" alt="Food" />, // Add className for styling
    },
    {
      title: "Veg/Non-Veg",
      dataIndex: "veg",
      key: "veg",
      render: (veg) => (
        <span className={veg ? "Veg" : "Non-Veg"}>
          <BiFoodTag />
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <span>
          <a style={{ marginRight: 8 }}>
            <EditOutlined />
          </a>
          <a style={{ marginRight: 8 }}>
            <DeleteOutlined />
          </a>
          <a>
            <EyeOutlined />
          </a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "fried chicken",
      Price: 32,
      img: "https://th.bing.com/th/id/OIP.UZwrSBEQbRBcrGBY67VPFAHaFI?rs=1&pid=ImgDetMain",
      veg: false,
    },
    {
      key: "2",
      name: "leg",
      Price: 42,
      img: "https://th.bing.com/th/id/OIP.UZwrSBEQbRBcrGBY67VPFAHaFI?rs=1&pid=ImgDetMain",
      veg: true,
    },
    {
      key: "3",
      name: "wings",
      Price: 32,
      img: "https://th.bing.com/th/id/OIP.UZwrSBEQbRBcrGBY67VPFAHaFI?rs=1&pid=ImgDetMain",
      veg: true,
    },
  ];

  const handleAddMenuClick = () => {
    navigate("/add-food");
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h3>Menu</h3>
        <Button
                    style={{ position: "absolute", top: 80, right: 0, marginTop: "20px", marginRight: "20px" }}

         type="primary" onClick={handleAddMenuClick}>
          Add Menu
        </Button>
      </div>
      <TableComp data={data} columns={columns} />
    </div>
  );
}
