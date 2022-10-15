import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blocks } from "react-loader-spinner";
import { Box, TextField, Button, Stack, Container } from "@mui/material";

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
    <Container>
      <div>
        <h1>Login</h1>
        <div className="loading">
          <Blocks visible={loading} height="80" width="80" />
        </div>

        <Stack spacing={1}>
          <label>Username</label>

          <TextField
            required
            id="outlined-required"
            label="Username"
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
            Submit
          </Button>
          <hr />
          <Button variant="contained">
            <Link to="/">Home</Link>
          </Button>
        </Stack>
      </div>
    </Container>
  );
};

export default Login;
