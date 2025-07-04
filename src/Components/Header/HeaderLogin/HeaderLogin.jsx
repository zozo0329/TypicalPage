import React from "react";
import LoginStyle from "./HeaderLogin.module.css";
const HeaderLogin = ({ setIsRight, setIsOn }) => {
  const logoutHandler = () => {
    setIsRight(false);
    setIsOn(false);
    localStorage.removeItem("FreezeState");
  };
  return (
    <div className={LoginStyle.Login}>
      <div className={LoginStyle.Title}>
        <h1>A Typical Page</h1>
      </div>
      <div className={LoginStyle.nav}>
        <ul>
          <li>User</li>
          <li>Admin</li>
          <button onClick={logoutHandler} className={LoginStyle.button}>
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderLogin;
