import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
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
        <ExpensesList items={expenses} />
      </Card>
    </div>
  );
};

export default Expenses;
