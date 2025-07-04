import React, { useState } from "react";
import FormStyle from "./Form.module.css";
const Form = ({ userinfoHandler, setIsOn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameHandler = (e) => {
    setUsername(e.target.value);
    console.log("USERNAME:", username);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log("PASSWORD: ", password);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const userInfo = {
      username,
      password,
      id: Math.random().toString(),
    };
    userinfoHandler(userInfo);
    setIsOn(true);
    // cleaner
    setUsername("");
    setPassword("");
  };
  return (
    <div className={FormStyle.HERO}>
      <form onSubmit={submitHandler}>
        <div className={FormStyle.inputs}>
          <input
            type="text"
            placeholder="Username"
            onChange={usernameHandler}
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={passwordHandler}
            value={password}
          />
        </div>
        <div className={FormStyle.btns}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
