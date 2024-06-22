import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {ArrowLeftOutlined } from "@ant-design/icons";

const FoodComp = () => {
  const { register, handleSubmit } = useForm();
  const [showOfferDetails, setShowOfferDetails] = useState(true);


  const navigate = useNavigate()
  

  const onSubmit = (data) => {
   navigate ('/product-page')
    console.log(data);

  };

  const handleOfferChange = () => {
    setShowOfferDetails(showOfferDetails ? false : true);
  };

  return (
    <div className="container mt-5">
      <span></span>
      <h2> <ArrowLeftOutlined />   Add Food Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="foodName" className="form-label">Food Name:</label>
            <input type="text" id="foodName" {...register('foodName', { required: true })} className="form-control" />
          </div>
          <div className="col-md-3">
            <label htmlFor="price" className="form-label">Price:</label>
            <input type="number" id="price" {...register('price', { required: true })} className="form-control" />
          </div>

          <div className="col-md-3">
            <label htmlFor="foodName" className="form-label">Category:</label>
            <input type="text" id="foodName" {...register('foodName', { required: true })} className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">Image:</label>
            <input type="file" id="image" {...register('image', { required: true })} accept="image/*" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="status" className="form-label">Status:</label>
            <select id="status" {...register('status', { required: true })} className="form-select">
              <option value="active">Active</option>
              <option value="nonactive">Non Active</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="offer" className="form-label">Offer:</label>
            <select id="offer" {...register('offer', { required: true })} onChange={handleOfferChange} className="form-select">
              <option value="Yes" >Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {showOfferDetails && (
            <div className="col-md-6">
              <label htmlFor="offerDetails" className="form-label">Offer Details:</label>
              <input type="text" id="offerDetails" {...register('offerDetails')} className="form-control" />
            </div>
          )}
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="foodType" className="form-label">Food Type:</label>
            <select id="foodType" {...register('foodType', { required: true })} className="form-select">
              <option value="veg">Vegetarian</option>
              <option value="nonveg">Non-Vegetarian</option>
            </select>
          </div>
        </div>

              <div className="col-md-12 mb-3 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary me-2">
                  Submit
                </button>
                <button type="button" className="btn btn-secondary" >
                  Cancel
                </button>
              </div>
      </form>
    </div>
  );
};

export default FoodComp;
