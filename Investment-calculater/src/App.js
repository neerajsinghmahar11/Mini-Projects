import DataTable from "./Components/DataTable/DataTable";
import InputForm from "./Components/InuputForm/InputForm";
import Header from "./Components/Header/Header";
import { useState } from "react";

function App() {
  const [tableData, setTableData] = useState(null);
  const calculateHandler = (userInput) => {
    setTableData(userInput);
  };

  const yearlyData = []; 
  if(tableData){
    let currentSavings = +tableData["currentSavings"]; 
    const yearlyContribution = +tableData["yearlyContribution"];
    const expectedReturn = +tableData["expectedReturn"] / 100;
    const duration = +tableData["duration"];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <InputForm onSubmitForm={calculateHandler} />

      { tableData ? <DataTable props={yearlyData} initialInvestment={+tableData["currentSavings"]}/>  :  <h2 style={{textAlign:"center"}}>No Investment Calculated Yet</h2> }
    </div>
  );
}

export default App;
