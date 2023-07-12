import React from 'react';
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillFeight="0%";
  
  if(props.maxValue>0){
    barFillFeight=Math.round((props.value / props.maxValue)*100)+"%";
  }
  
  
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height:barFillFeight}}></div>
      </div>
      <div className='chart-bar__lable'>{props.lable}</div>
    </div>
  )
}

export default ChartBar