import React from 'react'

const TableRow = (props,initial) => {
console.log(initial)

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
                {/* <tr>
                    <td>{data.year}</td>
                    <td>{data.savingsEndOfYear}</td>
                    <td>{data.yearlyInterest}</td>
                    <td>{data.savingsEndOfYear -data.initialInvestment - data.yearlyContribution * data.year}</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                </tr> */}
            </tbody>
        </table>
  )
}

export default TableRow