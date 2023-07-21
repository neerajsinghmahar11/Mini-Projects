import { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import ItemsList from './Components/ItemsList/ItemsList';



function App() {
  let [data,setData]=useState([]);


  const showData=(inputData)=>{
    setData(prev => {
      const updatedData = [...prev];
      updatedData.push({ name: inputData.name, age:inputData.age, id: Math.random().toString() });
      return updatedData;
    });
  }
  let userList=(
    <h2 style={{color:"white"}}>No User Data , Add some!</h2>
  )
  if(data.length>0){
    userList=(
      <ItemsList Data={data}/>
    )
  }
  return (
    <div className="App">
      <UserInput onSubmit={showData}/>
      {userList}
    </div>
  );
}

export default App;
