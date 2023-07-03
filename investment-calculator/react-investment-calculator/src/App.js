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

  let content = (
    <p style={{ textAlign: 'center' }}>No data is available</p>
  );

  if(investments.length > 0){
    content = (
      <ExpenseTable items = {investments}/>
    );
  }
  }

  return (
    <div>
      <Header/>
      <FormInput onAddInvestment = {addInvestmentHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <section>
        {content}
      </section>

    </div>
  );
}

export default App;
