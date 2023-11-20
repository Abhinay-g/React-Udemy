import { useState } from "react";
import imgSrc from "./assets/investment-calculator-logo.png"
import InvestmentReturns from "./InvestmentReturns"
import UserInput from "./UserInput"
import {calculateInvestmentResults} from "./util/investment"
export const  inputItemsKeyMap = {
  INITIAL_INVESTMENT: "initialInvestment",
  ANNUAL_INVESTMENT: "annualInvestment",
  EXPECTED_RETURNS: "expectedReturn",
  DURATION: "duration",
};
function App() {
  let [investmentRecords,setInvestmentRecords] = useState([]);
  let [inputState, setInputstate] = useState({
    [inputItemsKeyMap.INITIAL_INVESTMENT]: 10000,
    [inputItemsKeyMap.ANNUAL_INVESTMENT]: 1500,
    [inputItemsKeyMap.EXPECTED_RETURNS]: 6,
    [inputItemsKeyMap.DURATION]: 10,
  });

  function handleChange(inputKey, inputValue) {
    setInputstate((previousValue) => {
      return {
        ...previousValue ,
        [inputKey]: inputValue,
      };
    });
  }
 const isInputValid = inputState[inputItemsKeyMap.DURATION] >=1
  return (
    <>
      <div id="header">
        <img src={imgSrc}alt="logo" />
        <h1>React Investment Calculator</h1>
      </div>
      <UserInput inputState={inputState} getReturns={handleChange}/>
      { !isInputValid && <p className="center">Please provide a valid duration</p>}
      {isInputValid && <InvestmentReturns inputState={inputState}/>}
    </>
  );
}

export default App;
