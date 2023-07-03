const ExpenseTable = ({ items }) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {props.items.map((goal) => (
            <CourseGoalItem
              key={goal.id}
              id={goal.id}
              onDelete={props.onDeleteItem}
            >
              {goal.text}
            </CourseGoalItem>
          ))}
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseTable;
