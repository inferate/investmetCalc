import { calculateInvestmentResults, formatter } from '../util/investment.js';

function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const { valueEndOfYear, interest, annualInvestment } = resultsData[0];
  console.log(resultsData[0]);

  const initialInvestmentSum = valueEndOfYear - interest - annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Ivestment Value</th>
          <th>Interest</th>
          <th> Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestmentSum;
          const totalAmountInvested = data.valueEndOfYear - totalInterest;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
