// eslint-disable-next-line
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Blocks } from "react-loader-spinner";
import { TextField, Button, Stack, Container } from "@mui/material";
import { useRecoilState } from "recoil";
import { passwordState, usernameState } from "../utils/account_state";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(null);
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState(null);

  const [gusername, setGusername] = useRecoilState(usernameState);
  const [gpassword, setGpassword] = useRecoilState(passwordState);

  const loginRequest = async () => {
    console.log(username);
    console.log(password);
    setLoading(true);
    setGusername(username);
    setGpassword(password);

    try {
      const response = await axios.post(
        "http://localhost:8080/wallet/account",
        {
          username: username,
          password: password,
        }
      );
      console.log(response.data);
      setResult(response.data.accountId);
      setMessage(response.data.resultMessage);
      setLoading(false);
    } catch (e) {}
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
    <Container>
      <div>
        <h1>Login</h1>
        <div className="loading">
          <Blocks visible={loading} height="80" width="80" />
        </div>

        <Stack spacing={1}>
          {message ? <div className="address">{message}</div> : null}
          {result ? <div className="address">{result}</div> : null}
          {!result ? (
            <>
              <label>Username</label>

              <TextField
                required
                id="outlined-required"
                label="Username"
                name="username"
                onChange={onChangeUsername}
              />

              <label>Password</label>

              <TextField
                required
                id="outlined-required"
                label="password"
                type="password"
                onChange={onChangePassword}
              />

              <hr />
              <Button variant="contained" onClick={loginRequest}>
                Login
              </Button>
            </>
          ) : null}
          <hr />
          {!result ? (
            <Button variant="contained">
              <Link to="/">Home</Link>
            </Button>
          ) : (
            <Button variant="contained">
              <Link to="/account">Account</Link>
            </Button>
          )}
        </Stack>
      </div>
    </Container>
  );
};

export default Login;
