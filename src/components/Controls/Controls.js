import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import T from 'prop-types';
import styles from './Controls.module.css';

export default class Controls extends Component {
  static propTypes = {
    onSaveDeposit: T.func.isRequired,
    onSaveWithdraw: T.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleChange = e => {
    const inputToNumber = Number(e.target.value);
    if (Number.isNaN(inputToNumber)) {
      toast.warning('Введите сумму для проведения операции!');
      return;
    }

    this.setState({ inputValue: inputToNumber });
  };

  handleDeposit = () => {
    this.props.onSaveDeposit(this.state.inputValue);
    this.reset();
  };

  handleWithdraw = () => {
    this.props.onSaveWithdraw(this.state.inputValue);
    this.reset();
  };

  reset = () => {
    this.setState({
      inputValue: '',
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
