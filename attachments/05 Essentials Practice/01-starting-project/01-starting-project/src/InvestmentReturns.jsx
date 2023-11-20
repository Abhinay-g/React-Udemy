import { calculateInvestmentResults, formatter } from "./util/investment";
export default function InvestmentReturns({ inputState }) {
  console.log(inputState);
  let result = calculateInvestmentResults(inputState);
  const initialInvest =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Iterest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {result.map((yearResult) => {
          const totalInterest =
            yearResult.valueEndOfYear -
            yearResult.annualInvestment * yearResult.year -
            initialInvest;
        const totalInvested = yearResult.valueEndOfYear-totalInterest
          return (
            <tr key={yearResult.year}>
              <td>{yearResult.year}</td>
              <td>{formatter.format(yearResult.valueEndOfYear)}</td>
              <td>{formatter.format(yearResult.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
