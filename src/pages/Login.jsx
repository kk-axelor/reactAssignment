import React, { useContext, useState } from "react";
import styles from "../Styles/login.module.css";
import Input from "../Components/Input";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(userContext);
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setCredential((prev) => ({
      ...credential,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credential.username === "admin" && credential.password === "admin") {
      dispatch({
        type: "ADD_USER",
        paylod: {
          username: credential.username,
          password: credential.password,
        },
      });
      alert("Success fully login");
      navigate("/");
    } else {
      alert("wrong credential");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <h1 className={styles.heading}>Sign In To Account</h1>
        <form action="" onSubmit={handleLogin}>
          <Input
            text="Username"
            name="username"
            placeholder="Username"
            value={credential.username}
            onChange={onChange}
          />
          <Input
            text="Password"
            name="password"
            placeholder="Password"
            value={credential.password}
            onChange={onChange}
          />

          <button>login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
