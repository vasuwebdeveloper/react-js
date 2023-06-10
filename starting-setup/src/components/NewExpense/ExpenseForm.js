import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [title, changeTitle] = useState("");
  const [amount, changeAmount] = useState("");
  const [date, changeDate] = useState("");

  /** STEP 2
    const [userInput,setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
    })*/

  const inputTitleChangeHandler = (event) => {
    changeTitle(event.target.value);
    /*STEP 2:
      * setUserInput({
          ...userInput,
           title : event.target.value
        })
      **/
    // safest way to always operate on the latest state
    /*STEP 3:    
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });  **/
  };

  const amountChangeHandler = (event) => {
    changeAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    changeDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    onSaveExpenseData(expenseData);

    //after submit erase the values
    changeTitle("");
    changeAmount("");
    changeDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={inputTitleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick = {onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
