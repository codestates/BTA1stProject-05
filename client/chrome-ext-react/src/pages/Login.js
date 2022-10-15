import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blocks } from "react-loader-spinner";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(null);

  const loginRequest = async () => {
    console.log(username);
    console.log(password);
    setLoading(true);

    try {
      const response = await axios.get("http://localhost:8080/wallet/account");
      console.log(response.data);
    } catch (e) {}
    // setLoading(false);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  return (
    <main>
      <div>
        <h1>Login</h1>
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
        <button onClick={loginRequest}>Submit</button>
        <hr />
        <Link to="/">Home</Link>
      </div>
    </main>
  );
};

export default Login;
