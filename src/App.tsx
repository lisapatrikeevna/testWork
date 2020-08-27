import React, { useState } from 'react';
import './App.css';
import Count from './count';
import {Settings} from "./settins";

// type startNumberType = {
//   startNum: number
// }
function App() {

  // let y=0;
  let[maxNum,setMaxNum]=useState<number>(0)
  let[startNum, setStartNum] = useState<number>(0);
  let[error,setError]= useState<string | null>('');
  const addNum = () => {
    if(startNum<maxNum){setStartNum(startNum+=1)}
    else{setError("error")}
  }
  const reset = () =>{
      setStartNum(startNum=0)
      {setError("")}
  }
  const setting = (minValue:number,maxValue:number) =>{setMaxNum(maxValue);setStartNum(minValue)}

  return (
    <div className="App">
        <Settings setting={setting}/><br/>
        <Count addNum={addNum}
             startNum={startNum}
             reset={reset}
             error={error}
             maxNum={maxNum}
        />

    </div>
  );
}

export default App;



