import DataTable from "./Components/DataTable/DataTable";
import InputForm from "./Components/InuputForm/InputForm";
import Header from "./Components/Header/Header";
import { useState } from "react";

function App() {
  const [tableData, setTableData] = useState();
  let initialInvestment;
  const calculateHandler = (userInput) => {
    initialInvestment=+userInput.currentSavings;
    const yearlyData = []; // per-year results
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
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
    // do something with yearlyData ...
    setTableData((prev) => {
      return {
        ...prev,
        yearlyData,
      };
    });
  };

  // let resultTable = <h2>Calculat Your Investment</h2>;
  // if (tableData.lenght>0) {
  //   <DataTable props={tableData} />;
  // }

  return (
    <div>
      <Header />

      <InputForm onSubmitForm={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      { tableData ? <DataTable props={tableData}/>  :  <h2>Calculat Your Investment</h2> }
    </div>
  );
}

export default App;
