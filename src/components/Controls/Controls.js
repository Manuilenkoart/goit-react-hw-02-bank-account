import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Controls.module.css";

export default class Controls extends Component {
  state = {
    inputValue: ""
  };

  handleChange = e => {
    let inputToNumber = Number(e.target.value);
    if (isNaN(inputToNumber)) {
      toast.warning("Введите сумму для проведения операции!");
      return;
    }

    this.setState({ inputValue: inputToNumber });
  };
  handleDeposit = e => {
    this.props.onSaveDeposit(this.state.inputValue);
    this.reset();
  };
  handleWithdraw = e => {
    this.props.onSaveWithdraw(this.state.inputValue);
    this.reset();
  };
  reset = () => {
    this.setState({
      inputValue: ""
    });
  };
  render() {
    const { inputValue } = this.state;

    return (
      <section className={styles.controls}>
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <button type="button" onClick={(this.notify, this.handleDeposit)}>
          Deposit
        </button>
        <button type="button" onClick={this.handleWithdraw}>
          Withdraw
        </button>
      </section>
    );
  }
}
