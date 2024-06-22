import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const AddBillComp = () => {
  const [billId, setBillId] = useState("");
  const [price, setPrice] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [selectedFoodItems, setSelectedFoodItems] = useState([]);

  const handleBillIdChange = (e) => {
    setBillId(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDateTimeChange = (e) => {
    const value = e.target.value;
    setDateTime(value);
  };

  const handleFoodItemsChange = (selectedOptions) => {


    setSelectedFoodItems(selectedOptions);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log("Bill ID:", billId);
    // console.log("Price:", price);
    // console.log("DateTime:", dateTime);
    // console.log(
    //   "Selected Food Items:",
    //   selectedFoodItems.map((item) => item.value)
    // );
  };

  

  const foodOptions = [
    { value: "burger", label: "Burger" },
    { value: "ahg", label: "A" },
    { value: "gghg", label: "b" },
    { value: "hbb", label: "dwk" },
    { value: "hgh", label: "dkdj" },
    { value: "jh", label: "kjk" },
    { value: "jn", label: "kjkj" },
  ];

  return (
    <div className="container mt-5">
      <h2>Add Bill</h2>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="billId" className="form-label">
                  Bill ID:
                </label>
                <input
                  type="text"
                  id="billId"
                  value={billId}
                  onChange={handleBillIdChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={handlePriceChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="dateTime" className="form-label">
                  Date & Time:
                </label>
                <input
                  type="datetime-local"
                  id="dateTime"
                  value={dateTime}
                  onChange={handleDateTimeChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="foodItems" className="form-label">
                  Food Items:
                </label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={foodOptions}
                  value={selectedFoodItems}
                  onChange={handleFoodItemsChange}
                />
              </div>
              <div className="col-md-12 mb-3 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary me-2">
                  Submit
                </button>
                <button type="button" className="btn btn-secondary" >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBillComp;
