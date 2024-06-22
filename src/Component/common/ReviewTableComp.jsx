import React from 'react'
import { Table } from "antd";

export default function ReviewTableComp({colum ,data}) {
  return (
    <div>
       <Table
       columns={colum}
       dataSource={data}
       />
    </div>
  )
}
