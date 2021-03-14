import React from 'react';
import { Button } from 'antd';
import Logo from "../../images/logo.svg"

const Front = () => {
    return(

        <div className="front_background" id="1">
            <img className="logo" src={Logo} /> 
        </div>
    )
    
}

export { Front }