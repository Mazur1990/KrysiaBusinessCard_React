import React from 'react';


const Zakresy = ({className, text}) => {
    return(
        <div className="zakresy">
            <i className={className}></i>
            <div>
            <ul className="zakresy_list">
                {text && text.map((item) =>
                <li>{item}</li>
                )}
            </ul>
        </div>
        </div>
    )
    
}

export { Zakresy }