import AppStyle from "./App.module.css";
import HeaderLogout from "./Components/Header/HeaderLogout/HeaderLogout";
import HeaderLogin from "./Components/Header/HeaderLogin/HeaderLogin";
import Form from "./Components/Main/Form";
import FrontPage from "./Components/Main/FrontPage/FrontPage";
import { useEffect, useState } from "react";

let username = "";
let password = "";
function App() {
  const [isRight, setIsRight] = useState(false);
  const [isOn, setIsOn] = useState(false);
  console.log(isOn, "VALUEEEEEE");

  const userinfoHandler = (userData) => {
    // setData(userData);
    username = userData.username;
    password = userData.password;
  };

  //
  useEffect(() => {
    console.log("RUN");
    if (username === "pedro123" && password === "password123") {
      localStorage.setItem("FreezeState", "1000");
      setIsRight(true);
    }
    if (localStorage.getItem("FreezeState") === "1000") {
      setIsRight(true);
    }
  }, [isOn]);

  return (
    <>
      <div className={AppStyle}>
        {/* HEader */}
        <div>
          {/* <HeaderLogout /> */}
          {/* <HeaderLogin /> */}
          {!isRight && <HeaderLogout />}
          {isRight && <HeaderLogin setIsRight={setIsRight} setIsOn={setIsOn} />}
        </div>
        <div>
          {!isRight && (
            <Form setIsOn={setIsOn} userinfoHandler={userinfoHandler} />
          )}
          {isRight && <FrontPage />}
        </div>
      </div>
    </>
  );
}

export default App;
