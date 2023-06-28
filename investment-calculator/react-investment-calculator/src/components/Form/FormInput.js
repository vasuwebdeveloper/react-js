import { useState } from "react";

const FormInput = ({onAddInvestment}) => {
    const [savings,setSavings] = useState('');
    const [yearlySavings,setYearlySavings] = useState('');
    const [interest,setInterest] = useState('');
    const [duration,setDuration] = useState('');


    const changeSavingsHandler = (event) => {
       let savings = event.target.value;
       setSavings(savings);
    }

    const changeYearlySavingsHandler = (event) => {
      let yearly_savings = event.target.value;
      setYearlySavings(yearly_savings);
   }

   const expectedInterestHandler = (event) => {
     let expectedInterest = event.target.value;
     setInterest(expectedInterest);
   }

   const durationHandler = (event) => {
    let duration = event.target.value;
    setDuration(duration);
    
   }


    const calculateHandler = (userInput) => {
        userInput.preventDefault();
    
        const yearlyData = []; // per-year results
    
        let currentSavings = +savings; // feel free to change the shape of this input object!
        const yearlyContribution = +yearlySavings; // as mentioned: feel free to change the shape...
        const expectedReturn = +interest / 100;
        const investmentDuration = +duration;
    
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < investmentDuration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          });
        }
         
        onAddInvestment(yearlyData);
        // do something with yearlyData ...
      };
return (
    <div>
         <form className="form" onSubmit={calculateHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange = {changeSavingsHandler} value = {savings}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value = {yearlySavings} onChange = {changeYearlySavingsHandler}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange = {expectedInterestHandler} value ={interest}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange = {durationHandler} value = {duration}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button" >
            Calculate
          </button>
        </p>
      </form>
    </div>
  
)
}

export default FormInput; 