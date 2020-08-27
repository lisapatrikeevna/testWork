import React, {useState} from 'react';

type countProps={
    startNum:number
    addNum:()=>void
    reset:()=>void
    error:string | null
    maxNum:number
}

function Count(props:countProps){
    // let[error,setError]= useState<string | null>(null);
    const clInc= props.error? "error" :"inc";
    const disabled :boolean= props.error? true : false;
    const styleError={
        // background: 'rgb(' + Math.floor(255-10.2*props.maxNum) + ',' + Math.floor(255-10.2*props.startNum) + ',0)'
        // background: 'rgb(' + Math.floor(255-10.2*props.maxNum) + ',0 ,0)'
        background: 'rgb(' + props.startNum+10.2*props.maxNum + ',0 ,0)'
    }

 return(
     <div className="wrapper">
         <div id="num" className="num" style={styleError}> {props.startNum} </div>
         <div className="dflex wrBtn">
             <button onClick={props.addNum}
                     className={clInc}
                     disabled={disabled}
             >inc</button>
             <button onClick={props.reset} className="reset">reset</button>
         </div>
     </div>
 )
}

export default Count;


