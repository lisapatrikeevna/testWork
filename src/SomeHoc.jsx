import React from "react";

export const SomeHoc=(Component)=>{
    return (props)=>{
        return<>
            <header>header</header>
            <br/>
            <nav>navbar</nav>
            <Component {...props}/>
            <footer>footer</footer>
            </>
    }
}