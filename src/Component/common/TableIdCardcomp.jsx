import React from "react";

const cardData = [
  {
    id: 1,
    title: "Table 1",
    foodorder: [
      {
        name: "leg",
        price: 65,
      },
      {
        name: "burger",
        price: 45,
      },
    ],
  },
  {
    id: 2,
    title: "Table 2",
    foodorder: [
      {
        name: "wings",
        price: 65,
      },
      {
        name: "burger",
        price: 45,
      },
    ],
  },
  {
    id: 3,
    title: "Table 3",
    foodorder: [
      {
        name: "chicken",
        price: 65,
      },
      {
        name: "test",
        price: 45,
      },
    ],
  },
  {
    id: 4,
    title: "Table 4",
    foodorder: [
      {
        name: "pizza",
        price: 65,
      },
      {
        name: "lassi",
        price: 45,
      },
    ],
  },
  {
    id: 5,
    title: "Table 5",
    foodorder: [
      {
        name: "the",
        price: 45,
      },
      {
        name: "wings",
        price: 42,
      },
    ],
  },
  {
    id: 6,
    title: "Table 6",
    foodorder: [
      {
        name: "kfc",
        price: 44,
      },
      {
        name: "the",
        price: 45,
      },
    ],
  },
];

const CustomCard = ({ card }) => {
  return (
    <div className="card mr-4" style={{ width: "18rem", marginBottom: "20px" ,marginRight: "20px" }}>
      <div className="card-body">
        <h4 className="card-title">{card.title}</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S No</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {card.foodorder.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-between align-items-center">
          <p className="bold tot">Total : </p>
          <p className="bold">
            {card.foodorder.reduce((total, data) => total + data.price, 0)}
          </p>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary mr-2">Approve</button>
          <button className="btn btn-danger ms-2">Reject</button>
        </div>
      </div>
    </div>
  );
};

const TableIdCardcomp = () => {
  return (
    <div>
      <h2>Dasboard</h2>
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4">
            <CustomCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableIdCardcomp;
