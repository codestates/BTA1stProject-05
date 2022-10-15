import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blocks } from "react-loader-spinner";
import { Button, Container, Stack, TextField } from "@mui/material";

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
        // 기존 account 가 있는지 확인 로직 추가 필요
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
    <Container>
      <div>
        <h1>Sign up</h1>
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

          <label>Password(check)</label>

          <TextField
            required
            id="outlined-required"
            label="password2"
            type="password"
            onChange={onChangePasswordCheck}
          />
          <hr />
          <Button variant="contained" onClick={signupRequest}>
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

export default Signup;
