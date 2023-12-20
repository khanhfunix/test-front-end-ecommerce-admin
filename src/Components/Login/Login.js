import classes from "./Login.module.css";
import { logActions } from "../../store/userLog";

import { useState } from "react";
import { useDispatch } from "react-redux";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const fetchLogin = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userName,
            password,
          }),
        }
      );

      if (response.status !== 201 && response.status !== 200) {
        window.alert("Something went Wrong!!");
        return;
      }

      const data = await response.json();

      const expiration = new Date();
      const expire = expiration.setHours(expiration.getHours() + 1);

      data.expire = expire;
      data.isAdmin = "TRUE";

      dispatch(logActions.logIn(data));
    } catch (err) {
      console.log(err);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    fetchLogin();
  };
  return (
    <div className={classes.form}>
      <h1>Admin Authentication</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.input}>
          <input
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            placeholder="Input Your UserName!!"
          />
        </div>
        <div className={classes.input}>
          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Input Your Password"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
