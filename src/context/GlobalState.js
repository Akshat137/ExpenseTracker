import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (el) => el.id !== action.payload
        ),
      };

    case "ADD":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
