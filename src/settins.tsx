import React, {ChangeEvent, useState} from 'react';
import {ButtonComponent} from "./buttonComponent";
import {useDispatch} from "react-redux";

type propsType = {
    set: () => void
    onChangeMaxValue: (x: number) => void//error:string
    onChangeMinValue: (y: number) => void//|undefined
    error: string | null
    startNum: number
    newMaxNum:number
}

export function Settings(props: propsType) {
    const ChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxValue(+e.currentTarget.value)
    };
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMinValue(+e.currentTarget.value)
//    localStorage.setItem('StartValue',minValue);
    };
    const clInc= props.error? "error" :'set';
   const disabled: boolean = !!props.error ;
    return (
        <div className="wrapper">
            <span className="pullLeft">max value: 
                <input type="number" max="25" value={props.newMaxNum} onChange={ChangeMaxValue} className="someValue"/>
            </span>
            <span className="pullLeft">start value: 
                <input type="number" max={props.newMaxNum} value={props.startNum} onChange={onChangeMinValue} className="someValue"/>
            </span><br/><br/>
            <div className="dflex wrBtn center">
                <ButtonComponent
                    fun={props.set}
                    title={"set"}
                    className={clInc}
                   // error={props.error}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}