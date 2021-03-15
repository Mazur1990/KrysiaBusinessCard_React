import React from 'react';
import Image from "../../images/logo_white.svg"

const Kontakt = () => {
    return(
        <>
        <div className="kontakt_background" id="4">
            <div className="kontakt_title" >

                <h1>Kontakt</h1>
            </div>
            <div className="kontakt_box row">
                <div className="kontakt_left_box col-12 col-md-3">
                    <p>Krystyna Śmieszniak</p>
                    <p>Obornicka 39</p>
                    <p>Wrocław</p>
                </div>
                <div className="kontakt_middle_box col-12 col-md-6">
                    <img src={Image} />
                </div>
                <div className="kontakt_right_box col-12 col-md-3">
                    <p>Zapraszam na stronę:</p>
                    <a href="https://www.znanylekarz.pl/krystyna-smieszniak/psycholog/wroclaw?gclid=Cj0KCQiA7YyCBhD_ARIsALkj54qTqnyOAU4Qml-NqOB4_J3fN9FsDCB2PBR5EqfydNdvKqAyacrPeIEaAhacEALw_wcB">znanylekarz.pl</a>
                    <p>Tel: 666 555 444</p>
                </div>
            </div>

        </div>
        </>
    )
    
}

export { Kontakt  }