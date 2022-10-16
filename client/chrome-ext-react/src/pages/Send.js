import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blocks } from "react-loader-spinner";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { passwordState, usernameState } from "../utils/account_state";

const Send = () => {
  const [loading, setLoading] = useState(false);

  const [amount, setAmount] = useState(null);
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [result, setResult] = useState(null);
  const [gusername, setGusername] = useRecoilState(usernameState);
  const [gpassword, setGpassword] = useRecoilState(passwordState);

  const fetchAccount = async () => {
    console.log(gusername);
    console.log(gpassword);
    setLoading(true);
    const response = await axios.post(
      "http://localhost:8080/wallet/coin/balance",
      {
        username: gusername,
        password: gpassword,
      }
    );
    setResult(response.data);
    setLoading(false);
  };

  const sendCoin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/wallet/coin/send",
        {
          username: gusername,
          password: gpassword,
          address: address,
          amount: parseInt(amount),
        }
      );
      console.log(response.data);
      setResult(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const initialize = () => {
    fetchAccount();
  };

  useEffect(initialize, []);

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
          <label>{result ? result.balance : null}</label>
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
          <Button variant="contained" onClick={sendCoin}>
            Confirm
          </Button>
          <hr />
          {result ? (
            <div className="message">{result.resultMessage}</div>
          ) : null}
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
