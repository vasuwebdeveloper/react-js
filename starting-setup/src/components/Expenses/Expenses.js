import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, changeYear] = useState("2020");
  const expensesArr = props.items;
  let expenses = expensesArr.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  const selectFilterHandler = (selectedYear) => {
    changeYear(selectedYear);
  };

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={year} onSelectFilter={selectFilterHandler} />
      {expenses.map(function (item, index) {
        return (
          <ExpenseItem
            key={index}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </Card>
    </div>
  );
};

export default Expenses;
