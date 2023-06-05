import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
  
   const expenses = props.items;
  return (
    <div className = 'expenses'>
      {expenses.map(function(item, index){
          return (
          <ExpenseItem
          key = {index}
          date = {item.date}
          title = {item.title}
          amount = {item.amount}
        />
          )
      })}
    </div>
  );
}

export default Expenses;
