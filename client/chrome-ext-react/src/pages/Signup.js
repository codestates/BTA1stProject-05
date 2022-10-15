import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blocks } from "react-loader-spinner";

const Signup = () => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(null);
  const [passwordCheck, setPasswordCheck] = useState(null);

  const checkPassword = (password, passwordCheck) => {
    if (password === passwordCheck) {
      return true;
    } else {
      return false;
    }
  };

  const signupRequest = async () => {
    setLoading(true);
    if (checkPassword(password, passwordCheck)) {
      console.log("password is same");
      try {
        const response = await axios.post(
          "http://localhost:8080/wallet/account"
        );
        console.log(response.data);
      } catch (e) {}
    } else {
      console.log("password is different");
    }
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
    console.log(passwordCheck);
  };

  return (
    <main>
      <div>
        <h1>Sign up</h1>
        <div className="loading">
          <Blocks visible={loading} height="80" width="80" />
        </div>

        <label>Username</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={onChangeUsername}
        />
        <hr />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={onChangePassword}
        />
        <hr />
        <label>Password(check)</label>
        <input
          name="password2"
          type="password"
          placeholder="password"
          onChange={onChangePasswordCheck}
        />
        <hr />
        <button onClick={signupRequest}>Submit</button>
        <hr />
        <Link to="/">Home</Link>
      </div>
    </main>
  );
};

export default Signup;
