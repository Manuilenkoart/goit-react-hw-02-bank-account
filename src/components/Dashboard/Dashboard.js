import React, { Component } from "react";
import shortid from "short-id";
import Controls from "../Controls/Controls";
import Balance from "../Balance/Balance";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Dashboard.module.css";

export default class Dashboard extends Component {
  static defaultProps = {};
  state = {
    transactions: [],
    balance: 0.0
  };

  saveTransactionDeposit = amount => {
    !amount && toast.warning("Введите сумму для проведения операции!");

    const transaction = {
      id: shortid.generate(),
      amount,
      type: "deposit",
      date: new Date().toLocaleString()
    };
    this.setState(state => ({
      transactions: [...state.transactions, transaction]
    }));
    this.setState(prevState => ({
      balance: prevState.balance + amount
    }));
  };
  saveTransactionWithdraw = amount => {
    if (!amount) {
      toast.warning("Введите сумму для проведения операции!");
      return;
    }
    if (amount > this.state.balance) {
      toast.error("На счету недостаточно средств для проведения операции!");
      return;
    }
    const transaction = {
      id: shortid.generate(),
      amount,
      type: "withdraw",
      date: new Date().toLocaleString()
    };
    this.setState(state => ({
      transactions: [...state.transactions, transaction]
    }));
    this.setState(prevState => ({
      balance: prevState.balance - amount
    }));
  };
  paymentCalculation = (transactions, billType) => {
    const filterByType = transactions.filter(el => el.type === billType);
    const total = filterByType.reduce((acc, value) => acc + value.amount, 0);

    return total;
  };

  render() {
    const { transactions, balance } = this.state;

    return (
      <div className={styles.dashboard}>
        <ToastContainer />

        <Controls
          onSaveDeposit={this.saveTransactionDeposit}
          onSaveWithdraw={this.saveTransactionWithdraw}
        />
        <Balance
          income={this.paymentCalculation(transactions, "deposit")}
          expenses={this.paymentCalculation(transactions, "withdraw")}
          balance={balance}
        />
        <TransactionHistory items={transactions} />
      </div>
    );
  }
}
