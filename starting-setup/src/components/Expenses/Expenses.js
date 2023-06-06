import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {
  
   const expenses = props.items;
  return (
    <Card className = 'expenses'>
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
    </Card>
  );
}

export default Expenses;
