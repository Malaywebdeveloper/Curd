import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getuser, updateUser } from "../Api/Api";

const Update = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [text, setText] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const { name, age, email, phone } = text;

  const textHandle = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    if (name || age || email || phone === true) {
      await updateUser(id, text);
      history("/");
    } else {
      alert("Fill the inputs");
    }
  };

  const loadData = async () => {
    const res = await getuser(id);
    // console.log(res);
    setText(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <form onSubmit={submitHandle}>
        <div className="form-group">
          <label for="exampleInputPassword1">name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={textHandle}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">age</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={textHandle}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={textHandle}
            className="form-control"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">phone</label>
          <input
            type="password"
            name="phone"
            value={phone}
            onChange={textHandle}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
