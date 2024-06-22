import React from 'react'
import TableComp from './common/TableComp'

export default function ReviewPage() {

    const reviewColoum = [
        {
          title: "Name",
          dataIndex: "Name",
          key: "Name",
          
        },
        {
          title: "review",
          dataIndex: "review",
          key: "review",
        },
        {
          title: "Date and Time",
          dataIndex: "datetime",
          key: "datetime",
        },]

        const reviewdata = [
            {
              key: "1",
              Name: "dks",
              review: "",
              datetime: new Date().toLocaleString(), // Format date and time
            },
            {
              key: "2",
              Name: "djf",
              review: "",
              datetime: new Date().toLocaleString(), // Format date and time
            },
            {
              key: "3",
              Name: "fjfj",
              review: "",
              datetime: new Date().toLocaleString(), // Format date and time
            },
          ];





  return (
    <div>
      <TableComp columns={reviewColoum} data ={reviewdata}/>
    </div>
  )
}
