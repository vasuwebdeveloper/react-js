import { useState } from "react";
const UserInput = () => {
  const userData = {
    "current-savings": 10000,
    "yearly-contribution": 1500,
    "expected-return": 230,
    duration: 2,
  };

  const [userInput, setUserInput] = useState(userData);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const resetHandler = () => {
    setUserInput(userData);
  };

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => {
              changeHandler("current-savings", event.target.value);
            }}
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => {
              changeHandler("yearly-contribution", event.target.value);
            }}
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) => {
              changeHandler("expected-return", event.target.value);
            }}
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => {
              changeHandler("duration", event.target.value);
            }}
            type="number"
            id="duration"
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
