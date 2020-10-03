import React, { useState } from 'react';
import './App.css';
import Count from './count';
import {Settings} from "./settins";


function AppOLD() {

  // let y=0;
  let[maxNum,setMaxNum]=useState<number| null>(null);
  let[startNum, setStartNum] = useState<number| null>(null);
  let[error,setError]= useState<string | null>('enter value');
  const addNum = () => {
    if(startNum && maxNum){
      if(startNum<maxNum ){setStartNum(startNum + 1)}
    }
    else{setError("set VALUE")
    }
  }
  const reset = () =>{
      setStartNum(startNum=0)
      setError("its max value")
  }
  const setting = (minValue:number,maxValue:number) =>{
    setMaxNum(maxValue);
    setStartNum(minValue);
  }
  const onChangeMaxValue = (maxValue:number,minValue:number):number|undefined =>{
    setError('')
    if(maxNum !== 0){
      if(maxValue>minValue){
       return maxValue//x
      }
      if(maxValue<minValue || maxValue === minValue){
        setError('incorrect value:max and min cannot be equal(мах и мин не могут быть равны)')
      }
    }else{
      setError('enter maxValue')
    }
    // return ''
  }
  const onChangeMinValue = (minValue:number,maxValue:number):number|undefined =>{
    if(minValue<0){
      setError('the value must be greater than 0(minValue<0)')
    }else if(maxValue===minValue){
      setError('incorrect value:maxValue=minValue')
    }else{
      setError('')
     return  minValue//y
    }
    // return ''
  }

  return (
    <div className="App">
        {/*<Settings */}
        {/*          onChangeMaxValue={onChangeMaxValue} */}
        {/*          onChangeMinValue={onChangeMinValue}*/}
        {/*          setting={setting}*/}
        {/*          error={error}*/}
        {/*/><br/>*/}
        {/*         */}
        {/*<Count addNum={addNum}*/}
        {/*     startNum={startNum}*/}
        {/*     reset={reset}*/}
        {/*     error={error}*/}
        {/*     maxNum={maxNum}*/}
        {/*/>*/}

    </div>
  );
}

export default AppOLD;



