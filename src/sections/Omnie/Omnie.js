import React from 'react';
import {Image} from "./Image/Image"
import {OmnieText} from "./OmnieText/OmnieText"
import { Parallax } from 'react-scroll-parallax';


const Omnie = () => {
    return(
        <div className="omnie_background">
             <Parallax className="custom-class" y={[200, -25]} tagOuter="figure">
                <Image />
             </Parallax>
            <OmnieText />
        </div>
    )
    
}

export { Omnie }