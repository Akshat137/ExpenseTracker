import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((el) => el.amount);

  let income = 0,
    expense = 0;

  if (amounts.length > 0) {
    income = amounts.filter((el) => el > 0);
    if (income.length > 0) {
      income = income.reduce((prev, item) => prev + item).toFixed(2);
    }

    expense = amounts.filter((el) => el < 0);
    if (expense.length > 0) {
      expense = expense.reduce((prev, item) => prev + item).toFixed(2);
    }
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{Math.abs(expense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
