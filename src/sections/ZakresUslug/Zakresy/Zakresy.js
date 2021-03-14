import React from 'react';


const Zakresy = ({className, text}) => {
    return(
        <div className="zakresy">
            {/* <i className={className}></i> */}
            <div>
            <ul className="">
                {text && text.map((item) =>
                <li className='test'>{item}</li>
                )}
            </ul>
        </div>
        </div>
    )
    
}

export { Zakresy }