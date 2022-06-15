import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>
              {transaction.amount < 0 ? "-" : "+"}Rs.{" "}
              {Math.abs(transaction.amount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
