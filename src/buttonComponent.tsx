import React from 'react';

type ButtonComponentProps = {
    // addNum?: () => void
    // reset?: () => void
    //error?: string | null
    // onSet?: () => void
    title: string
    className?: any
    //id: string
    disabled:boolean
    fun:()=>void
}

export function ButtonComponent(props: ButtonComponentProps) {
    
    let someClick = () => {
        props.fun()
        // if ('set' === props.id) {
        //     props.onSet && props.onSet()
        // }
        // if ('reset' === props.id) {
        //     // alert("RESET")
        //     props.reset && props.reset()
        // }
        // if ('addNum' === props.id) {
        //     // alert("addNum")
        //     props.addNum && props.addNum()
        // }
    }
    // debugger
    return (
        <button
            // id={props.id}
            onClick={someClick}
            className={props.className}
            disabled={props.disabled}
        >{props.title}
        </button>
    )
}



