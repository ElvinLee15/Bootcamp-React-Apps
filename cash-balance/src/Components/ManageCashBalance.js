import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withdraw, deposit, addInterest, charges } from "../Store/balance";
import { useState } from "react";

import "./ManageCashBalanceDisplay.css";

// Manage Balance Output
const CurrentBalance = (props) => {
  return (
    <output className="form-output">
      Current Balance: {props.currentBalance}
    </output>
  );
};

const ManageCashBalanceDisplay = () => {
  const balance = useSelector((state) => state.balance.value);
  const [userInput, setUserInput] = useState(0);
  const dispatch = useDispatch();

  // Withdraw function
  const handleWithdraw = () => {
    dispatch(withdraw(Number(userInput)));
    setUserInput(0);
  };

  // Deposit function
  const handleDeposit = () => {
    dispatch(deposit(Number(userInput)));
    setUserInput(0);
  };

  // Add Interest function
  const handleAddInterest = () => {
    dispatch(addInterest());
  };

  // Charges Function
  const handleCharges = () => {
    dispatch(charges());
  };

  return (
    <form className="form">
      <h1 className="form-heading">Manage Cash Balance</h1>
      <input
        className="form-input"
        type="text"
        name="value"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      ></input>

      <button type="button" onClick={handleWithdraw}>
        Withdraw
      </button>
      <button type="button" onClick={handleDeposit}>
        Deposit
      </button>
      <button type="button" onClick={handleAddInterest}>
        Add Interest
      </button>
      <button type="button" onClick={handleCharges}>
        Charges
      </button>

      <CurrentBalance currentBalance={`£${balance.toFixed(2)}`} />
    </form>
  );
};

export default ManageCashBalanceDisplay;
