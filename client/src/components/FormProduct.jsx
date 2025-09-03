// rafce
import React, { useState, useEffect } from "react";

import { remove, create, getdata } from "../functions/product";

import { Link } from "react-router-dom";
import "./FormProduct.css";

const FormProduct = () => {
  //java script
  const [data, setData] = useState([]);
  const [form, setForm] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    getdata()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(form)

    create(form)
      .then((res) => {
        console.log(res);
        loadData();
      })
      .catch((error) => console.log(error));
  };

  console.log(form);

  const handleRemove = async (event) => {
    console.log(event);

    remove(event)
      .then((res) => {
        // console.log(res);
        loadData();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="page">
      <h2 className="title">Product Manager</h2>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Product Name"
            className="form-input"
          />
          <input
            type="text"
            name="detail"
            onChange={handleChange}
            placeholder="Detail"
            className="form-input"
          />
          <input
            type="number"
            name="price"
            onChange={handleChange}
            placeholder="Price"
            className="form-input"
          />
          <button className="btn-submit">Submit</button>
        </form>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Detail</th>
              <th>Price</th>
              <th>Action</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.detail}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn-danger"
                        onClick={() => handleRemove(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link to={`/edit/${item._id}`} className="btn-edit">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormProduct;
