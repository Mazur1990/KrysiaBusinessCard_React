import React from 'react';
// import {ZakresyText} from './ZakresyText'

// const numbers = [1, 2, 3, 4, 5];
// const letters = ["a", "b","c"];

const Zakresy = ({className, text}) => {
    return(
        <div className="zakresy">
            <i class={className}></i>
            <div>
            <ul >
                {text && text.map((x) =>
                <li>{x}</li>
                )}
            </ul>
        </div>
        </div>
    )
    
}

export { Zakresy }