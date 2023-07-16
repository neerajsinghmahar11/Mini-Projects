import React from 'react'
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const TableRow = ({props, initialInvestment}) => {

    return (
       <>
        <tbody>
            <tr>
                <td>{props.year}</td>
                <td>{formatter.format(props.savingsEndOfYear)}</td>
                <td>{formatter.format(props.yearlyInterest)}</td>
                <td>{formatter.format(props.savingsEndOfYear -
                    initialInvestment -
                    props.yearlyContribution * props.year)}</td>
                <td>{formatter.format(initialInvestment + props.yearlyContribution * props.year)}</td>
            </tr>
        </tbody>
       </>
    )
}


export default TableRow