import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { read, update } from "../functions/product";

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
    <div>
      <div>FormEditProduct</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(event) => handleChange(event)}
          placeholder="name"
          value={data.name}
        ></input>
        <input
          type="text"
          name="detail"
          onChange={(event) => handleChange(event)}
          placeholder="detail"
          value={data.detail}
        ></input>
        <input
          type="text"
          name="price"
          onChange={(event) => handleChange(event)}
          placeholder="price"
          value={data.price}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormEditProduct;
