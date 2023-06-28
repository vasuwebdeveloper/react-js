import Header from "./components/Header/Header";
import FormInput from "./components/Form/FormInput";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
function App() {
  return (
    <div>
      <Header/>
      <FormInput/>
      <ExpenseTable/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

    </div>
  );
}

export default App;
