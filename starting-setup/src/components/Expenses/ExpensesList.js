import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        <p>No expenses found!!!</p>
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {items.map(function (item, index) {
        return (
          <ExpenseItem
            key={index}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
