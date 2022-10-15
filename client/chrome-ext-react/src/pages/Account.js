import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blocks } from "react-loader-spinner";

const Account = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkBalance = async () => {
    setLoading(true);

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
    <main>
      <div>
        <h1>Account</h1>
        <div className="loading">
          <Blocks visible={loading} height="80" width="80" />
        </div>
        <label>Username</label>
        <hr />
        <label>Address</label>
        <hr />
        <label>Balance</label>

        <hr />
        <button>
          <Link to="/send">Send</Link>
        </button>
      </div>
    </main>
  );
};

export default Account;
