import React from "react";
import { useNavigate } from "react-router-dom";
import TableComp from "./common/TableComp";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

export default function BillPage() {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Bill ID",
      dataIndex: "ID",
      key: "ID",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Foods",
      dataIndex: "Foods",
      key: "Foods",
    },
    {
      title: "Date and Time",
      dataIndex: "datetime",
      key: "datetime",
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
      ID: "233",
      Foods: "fried chicken, burger",
      datetime: new Date().toLocaleString(), // Format date and time
    },
    {
      key: "2",
      ID: "234",
      Foods: "fried chicken, burger",
      datetime: new Date().toLocaleString(), // Format date and time
    },
    {
      key: "3",
      ID: "235",
      Foods: "wings chicken, burger",
      datetime: new Date().toLocaleString(), // Format date and time
    },
  ];

  const handleAddBillClick = () => {
    navigate("/add-bill");
  };

  return (
    <div>
      <h3>Bill</h3>
      <Button 
      type="primary" onClick={handleAddBillClick}   
            style={{ position: "absolute", top: 80, right: 0, marginTop: "20px", marginRight: "20px" }}
      >
        Add Bill
      </Button>
      <TableComp data={data} columns={columns} />
    </div>
  );
}
