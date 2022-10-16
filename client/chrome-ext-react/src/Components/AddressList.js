import { List, ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import React from "react";

function AddressList(props) {
  const addresses = props.addresses;
  const addressList = addresses.map((address, index) => {
    return (
      <div key={address.address}>
        <div>
          <b>Address {index + 1}</b>
        </div>
        <ListItem disablePadding>
          <ListItemText className="address" primary={address.address} />
        </ListItem>
        <div>Balance : {address.balance}</div>
        <hr />
      </div>
    );
  });
  return <List>{addressList}</List>;
}

export default AddressList;
