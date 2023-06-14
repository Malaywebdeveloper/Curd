import React, { useState } from "react";
import { getuser } from "../Api/Api";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Api/Api";
const Register = () => {
  const history = useNavigate();

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
      await addUser(text);
      history("/");
    } else {
      alert("Fill the inputs");
    }
  };

  return (
    <>
    <div className="Container">
    <form onSubmit={submitHandle}>
    <h1><u>REGISTER</u></h1>

        <div className="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={textHandle}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">Age</label>
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
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Phone</label>
          <input
            type="password"
            name="phone"
            value={phone}
            onChange={textHandle}
            className="form-control"
          />
        </div>
        <div className="submit">
          <button type="submit" className="buttonBar">
            Submit
          </button>
        </div>
      </form>
    </div>


    </>
  );
};

export default Register;
