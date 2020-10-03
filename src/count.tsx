import React, {useState} from 'react';
import {ButtonComponent} from "./buttonComponent";
import {SomeHoc} from "./SomeHoc";

type countProps={
    startNum:number| null
    addNum:()=>void
    reset:()=>void
    error?:string | null
    maxNum:number| null
}
function Count(props:countProps){
    const clInc= props.error? "error" :"inc";
  // const disabled :boolean= !!props.error || props.error!=='incorrect value';
   const disabled: boolean = !!props.error;
//     const styleError={
//         if(props.maxNum===null){

//         }
//  // background: 'rgb(' + Math.floor(255-10.2*props.maxNum) + ',' + Math.floor(255-10.2*props.startNum) + ',0)'
//         // background: 'rgb(' + Math.floor(255-10.2*props.maxNum) + ',0 ,0)'
//         background: 'rgb(' + props.startNum+10.2*props.maxNum + ',0 ,0)'
        
//     }

    const value=()=>{
        return props.error? props.error : props.startNum
    }

 return(
     <div className="wrapper">
         <div id="num" className="num" > 
          { value() }
          </div>
         <div className="dflex wrBtn">
             <ButtonComponent
              fun={props.addNum}
               title={"inc"}
                 disabled={disabled}
                  className={clInc }
            />
             <ButtonComponent
              fun={props.reset}
               title={"reset"}
                 disabled={disabled}
                  className={clInc}
            />
         </div>
     </div>
 )
}
//export default SomeHoc(Count);
export default Count;


//style={styleError}