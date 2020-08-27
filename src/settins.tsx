import React, {ChangeEvent, useState} from 'react';

type propsType = {
    setting:(x:number,y:number)=>void
}
export function Settings(props:propsType) {
let[minValue,setMinValue]=useState('');
let[maxValue,setMaxValue]=useState('');
const onChangeMaxValue = (e:ChangeEvent<HTMLInputElement>) =>{setMaxValue(e.currentTarget.value)};
const onChangeMinValue = (e:ChangeEvent<HTMLInputElement>) =>{setMinValue(e.currentTarget.value)};
const set =()=> props.setting(+minValue,+maxValue)
    return(
        <div className="wrapper">
            <span className="pullLeft">max value: <input type="number" min="0" max="25" value={maxValue} onChange={onChangeMaxValue} className="someValue"/></span>
            <span className="pullLeft">start value: <input type="number" min="0" max={maxValue} value={minValue} onChange={onChangeMinValue} className="someValue"/></span><br/><br/>
            <div className="dflex wrBtn center">
                <button onClick={set}
                        // className={clInc}
                        // disabled
                >set</button>
            </div>
        </div>
    )
}