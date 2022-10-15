import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blocks } from "react-loader-spinner";
import { Button, Container, Stack } from "@mui/material";

const Account = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkBalance = async () => {
    // setLoading(true);
    // try {
    //   const response = await axios.get("http://localhost:8080/wallet/coin");
    //   console.log(response.data);
    //   setLoading(false);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    checkBalance();
  });

  return (
    <Container>
      <div>
        <h1>Account</h1>
        <div className="loading">
          <Blocks visible={loading} height="80" width="80" />
        </div>
        <Stack spacing={2}>
          <label>Username</label>
          <hr />
          <label>Address</label>
          <hr />
          <label>Balance</label>

          <hr />
          <Button variant="contained">
            <Link to="/send">Send</Link>
          </Button>
        </Stack>
      </div>
    </Container>
  );
};

export default Account;
