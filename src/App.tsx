import React, {useCallback, useState} from 'react';
import './App.css';
import Count from './count';
import {Settings} from "./settins";
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, resetAC, maxNumAC, startNumAC, setAC, addNumAC} from "./redux/CounterReduser";
import {storeType} from "./redux/Store";


const App = React.memo (()=> {
    const localState = useSelector<storeType, initialStateType>((state) => state.counter)

    const dispatch = useDispatch()
    const addNum = useCallback( () => {
        dispatch(addNumAC())
    },[])
    const reset = useCallback(  () => {
        dispatch(resetAC())
        // setError("its max value")
    },[])
    const setting = useCallback(  () => {
        // setMaxNum(maxValue);
        // setStartNum(minValue);
        dispatch(setAC())
    },[])
    const onChangeMaxValue = useCallback(  (maxNum: number): void => {
        // setError('')
        dispatch(maxNumAC(maxNum))
    },[])
    const onChangeMinValue = useCallback(  (startNum: number): void => {
        dispatch(startNumAC(startNum))
    },[])

    return (
        <div className="App">
            <Settings
                onChangeMaxValue={onChangeMaxValue}
                onChangeMinValue={onChangeMinValue}
                set={setting}
                error={localState.error}
                startNum={localState.startNum}
                newMaxNum={localState.maxNum}
            /><br/>

            <Count addNum={addNum}
                   startNum={localState.currentValue}
                   reset={reset}
                   error={localState.error}
                   maxNum={localState.maxNum}
            />

        </div>
    );
})

export default App;



