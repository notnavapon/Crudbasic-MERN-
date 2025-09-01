// rafce
import React, { useState, useEffect } from "react";
import axios from "axios";

import { remove, create, getdata } from "../functions/product";

import { Link } from "react-router-dom";

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
        console.log(res);
        loadData();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      FormProduct
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(event) => handleChange(event)}
          placeholder="name"
        ></input>
        <input
          type="text"
          name="detail"
          onChange={(event) => handleChange(event)}
          placeholder="detail"
        ></input>
        <input
          type="text"
          name="price"
          onChange={(event) => handleChange(event)}
          placeholder="price"
        ></input>
        <button>Submit</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">action</th>
            <th scope="col">edit</th>
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
                  <td onClick={() => handleRemove(item._id)}>delete</td>
                  <td > <Link to={'/edit/' + item._id}>edit</Link></td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default FormProduct;
