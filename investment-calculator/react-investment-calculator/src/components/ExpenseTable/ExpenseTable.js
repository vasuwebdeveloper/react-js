const ExpenseTable = (props) => {
  debugger;
  return (
        <tr>
          <th>{props.year}</th>
          <th>{props.totalSavings}</th>
          <th>{props.yearlyInterest}</th>
          <th>{props.totalInterest}</th>
          <th>{props.yearlyContribution}</th>
        </tr>
  );
};

export default ExpenseTable;
