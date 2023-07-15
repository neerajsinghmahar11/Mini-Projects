import React from 'react';
import "./DataTable.css";
import TableRow from '../TableRow/TableRow';

const DataTable = ({props}) => {
    console.log(props)
    return(
        <>
        {props.yearlyData.map((el)=>{
            return <TableRow key={el.year} {...el } />
        })}
        </>
    )
}

export default DataTable