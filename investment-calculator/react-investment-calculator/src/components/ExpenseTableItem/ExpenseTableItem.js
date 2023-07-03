import ExpenseTable from "../ExpenseTable/ExpenseTable";
const ExpenseTableItem = ({ items }) => {
    debugger;
  return (
    <table className="result">
    <thead>
    {items.map(function (exp, index) {
        debugger;
        return (
          <ExpenseTable
            key={index}
            year
            totalSavings
            yearlyInterest
            totalInterest
            yearlyContribution
          />
        );
      })}
    </thead>
      <tbody>
        
      </tbody>
    </table>
  );
};

export default ExpenseTableItem;
