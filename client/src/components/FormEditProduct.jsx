import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { read, update } from "../functions/product";
import "./FormEditProduct.css";
const FormEditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    detail: "",
    price: "",
  });

  useEffect(() => {
    loadData(params.id);
  }, []);

  const loadData = async (event) => {
    read(event).then((res) => {
      console.log(res);
      setData(res.data);
    });
  };
  console.log(data);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);

    update(params.id, data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Edit Product</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Product Name"
          value={data.name}
          className="form-input"
        />
        <input
          type="text"
          name="detail"
          onChange={handleChange}
          placeholder="Detail"
          value={data.detail}
          className="form-input"
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Price"
          value={data.price}
          className="form-input"
        />
        <button className="form-button">Save</button>
      </form>
    </div>
  );
};

export default FormEditProduct;
