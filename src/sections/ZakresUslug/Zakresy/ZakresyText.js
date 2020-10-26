import React from 'react';





const ZakresyText = ({text}) => {
    return(
        
        <div>
            <ul >
            {text.map((x) =>
                <li>{x}</li>
                )}
            </ul>
        </div>
    )
    
}

export { ZakresyText }