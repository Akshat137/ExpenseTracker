import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((el) => el.amount);
  let total = 0;
  if (amounts.length > 0) {
    total = amounts.reduce((prev, item) => prev + item).toFixed(2);
  }
  return (
    <>
      <h4>Your Balance</h4>
      <h1>Rs. {total}</h1>
    </>
  );
}

export default Balance;
