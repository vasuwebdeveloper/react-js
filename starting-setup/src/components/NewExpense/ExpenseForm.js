import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = () => {
    const [title,changeTitle] = useState('');
    const [amount,changeAmount] = useState('');
    const [date,changeDate] = useState('');
    
    const inputTitleChangeHandler = (event) => {
      changeTitle(event.target.value);   
     }

     const amountChangeHandler = (event) => {
        changeAmount(event.target.value);  
     }

     const dateChangeHandler = (event) => {
        changeDate(event.target.value); 
     }


    return <form>
        <div className = 'new-expense__controls'>
            <div className = 'new-expense__control'>
               <label>Title</label>
               <input type ='text' onChange = {inputTitleChangeHandler}/>
            </div>
            <div className = 'new-expense__control'>
               <label>Amount</label>
               <input type ='number' min='0.01' step = '0.01' onChange = {amountChangeHandler}/>
            </div>
            <div className = 'new-expense__control'>
               <label>Date</label>
               <input type ='date' min ='2019-01-01' max ='2022-12-31' onChange = {dateChangeHandler}/>
            </div>
        </div>
        <div className = 'new-expense__actions'>
            <button type= 'submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;