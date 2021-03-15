import React from 'react';
import {OmnieText} from "./OmnieText/OmnieText"
import { Parallax } from 'react-scroll-parallax';
import pictureOne from '../../images/omnie3.JPG'


const Omnie = () => {
    return(
        <div className="omnie_background " id="2">
            <div className="container">
              <div className='row'>
                    <div className="col-xl-6 col-lg-6  col-xs-12" style={{zIndex:10}}>
                        <Parallax className="custom-class" y={[15,-27]} tagOuter="figure">
                                <img src={pictureOne} alt="Krystyna Śmieszniak"/>
                        </Parallax>
                    </div>
                    <div className="omnie_container col-xl-6 col-lg-6  col-xs-12">
                        <div className='omnie_box'>
                            <OmnieText className=""/>
                        </div>
                    </div>
                </div>
            </div>
               
     
        </div>
    )
    
}

export {Omnie}