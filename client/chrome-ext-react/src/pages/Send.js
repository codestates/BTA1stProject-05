import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blocks } from "react-loader-spinner";
import { Button, Container, Stack, TextField } from "@mui/material";

const Send = () => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(null);
  const [amount, setAmount] = useState(null);
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  const sendRequest = async () => {
    console.log(username);
    console.log(password);
    console.log(amount);
    console.log(address);
    setLoading(true);

    // try {
    //   const response = await axios.post("http://localhost:8080/wallet/coin");
    //   console.log(response.data);
    // } catch (e) {}
    // setLoading(false);
  };

  const checkBalance = () => {
    setLoading(true);
    // try {
    //   const response = await axios.post("http://localhost:8080/wallet/coin");
    //   console.log(response.data);
    // } catch (e) {}
    // setLoading(false);
  };

  useEffect(() => {
    checkBalance();
  });

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
    console.log(address);
  };

  return (
    <Container>
      <div>
        <h1>Send IOTA Coin</h1>
        <div className="loading">
          <Blocks visible={loading} height="80" width="80" />
        </div>
        <Stack spacing={2}>
          <label>Current Balance</label>
          <label>{balance ? balance : "?"}</label>
          <hr />
          <label>Address</label>

          <TextField
            required
            id="outlined-required"
            label="address"
            type="text"
            onChange={onChangeAddress}
          />

          <label>Amount</label>

          <TextField
            required
            id="outlined-required"
            label="amount"
            type="number"
            onChange={onChangeAmount}
          />
          <hr />
          <Button variant="contained" onClick={sendRequest}>
            Confirm
          </Button>
          <hr />
          <Button variant="contained">
            <Link to="/account">Go to Account</Link>
          </Button>
        </Stack>
      </div>
    </Container>
  );
};

export default Send;
