import Header from "./components/Header/Header";
import FormInput from "./components/Form/FormInput";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import { useState } from "react";

function App() {

  const [investments, setInvestments] = useState('');
  const addInvestmentHandler = (investments) =>{
    setInvestments((prevInvestments) => {
        return [investments, ...prevInvestments];
      });
  }
  return (
    <div>
      <Header/>
      <FormInput onAddInvestment = {addInvestmentHandler}/>
      <ExpenseTable items = {investments}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

    </div>
  );
}

export default App;
