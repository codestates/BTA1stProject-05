import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blocks } from "react-loader-spinner";
import { Button, Container, Stack } from "@mui/material";
import { useRecoilState } from "recoil";
import { passwordState, usernameState } from "../utils/account_state";
import AddressList from "../Components/AddressList";

const Account = () => {
  const [addresses, setAddresses] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [gusername, setGusername] = useRecoilState(usernameState);
  const [gpassword, setGpassword] = useRecoilState(passwordState);

  const checkBalance = () => {
    setLoading(true);
    fetchAccount();
    try {
    } catch (e) {}
  };

  const fetchAccount = async () => {
    const response = await axios.post(
      "http://localhost:8080/wallet/coin/balance",
      {
        username: gusername,
        password: gpassword,
      }
    );
    console.log(response.data);
    setResult(response.data);
    console.log(result);
    setLoading(false);
  };

  useEffect(checkBalance, []);

  return (
    <Container>
      <div>
        <h1>My Wallet</h1>
        <div className="loading">
          <Blocks visible={loading} height="80" width="80" />
        </div>
        <Stack spacing={2}>
          <b>
            <label>[Account Id]</label>
          </b>
          {result ? <div className="address">{result.accountId}</div> : null}

          <hr />
          <b>
            <label>[Total Balance]</label>
          </b>
          {result && result.balance}
          <hr />
          <label>[Address List]</label>
          {result && <AddressList addresses={result.addresses} />}

          <Button variant="contained">
            <Link to="/send">Send Coin</Link>
          </Button>
        </Stack>
      </div>
    </Container>
  );
};

export default Account;
