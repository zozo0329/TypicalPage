import React from "react";
import LogoutStyle from "./HeaderLogout.module.css";
const HeaderLogout = () => {
  return (
    <div className={LogoutStyle.Logout}>
      <div className={LogoutStyle.Title}>
        <h1>A Typical Page</h1>
      </div>
    </div>
  );
};

export default HeaderLogout;
