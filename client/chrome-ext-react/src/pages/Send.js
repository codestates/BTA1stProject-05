import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blocks } from "react-loader-spinner";

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
    <main>
      <div>
        <h1>Send IOTA Coin</h1>
        <div className="loading">
          <Blocks visible={loading} height="80" width="80" />
        </div>
        <label>Current Balance : </label>
        {balance ? balance : "?"}
        <hr />
        <label>Address</label>
        <input
          name="address"
          type="text"
          placeholder="address"
          onChange={onChangeAddress}
        />
        <hr />
        <label>Amount</label>
        <input
          name="amount"
          type="number"
          placeholder="amount"
          onChange={onChangeAmount}
        />
        <hr />
        <button onClick={sendRequest}>Confirm</button>
        <hr />
        <Link to="/account">Go to Account</Link>
      </div>
    </main>
  );
};

export default Send;
