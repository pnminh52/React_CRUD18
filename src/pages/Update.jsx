import React, { useState } from "react";
import { useParams } from "react-router-dom";
const Update = ({ products, onUpdate }) => {
  const [inputValue, setInputValue] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const { id } = useParams();
  const crtprd = products.find((item) => item.id == id);
  const finalUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...crtprd, ...inputValue };
    onUpdate(updateData);
  };
  return (
    <div>
      <form action="" onSubmit={finalUpdate}>
        <input
          defaultValue={crtprd?.name}
          type="text"
          name="name"
          placeholder="name"
          onInput={onChange}
        />
        <input
          defaultValue={crtprd?.des}
          type="text"
          name="des"
          placeholder="des"
          onInput={onChange}
        />
        <input
          defaultValue={crtprd?.price}
          type="number"
          name="price"
          placeholder="price"
          onInput={onChange}
        />
        <input
          defaultValue={crtprd?.img}
          type="text"
          name="img"
          placeholder="img"
          onInput={onChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
