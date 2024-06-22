import React from "react";
import { Table } from "antd";
import "./table.css";

const TableComp = ({ data, columns }) => (
  <div style={{ overflowX: "auto" }}> {/* Make the table scrollable horizontally */}
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }} // Adjust pagination size if needed
      scroll={{ x: true }} // Enable horizontal scrolling
      size="middle" // Adjust table size if needed
    />
  </div>
);

export default TableComp;
