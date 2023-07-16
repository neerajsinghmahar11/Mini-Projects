import React from 'react';
import "./DataTable.css";
import TableRow from '../TableRow/TableRow';

const DataTable = ({ props, initialInvestment }) => {
    return (
        <>
           


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
            {props.map((el) => {
                return <TableRow key={el.year} props={el} initialInvestment={initialInvestment} />
            })}
            </table>
        </>
    )
}

export default DataTable