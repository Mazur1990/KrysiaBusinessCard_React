import React from 'react';
import Image from "../../images/logo-icon.svg"

const Kontakt = () => {
    return(
        <>
        <div className="kontakt_background">
            <div className="kontakt_title">

                <h1>Kontakt</h1>
            </div>
            <div className="kontakt_box">
                <div className="kontakt_left_box">
                    <p>Krystyna Śmieszniak</p>
                    <p>Obornicka 39</p>
                    <p>Wrocław</p>
                </div>
                <div className="kontakt_middle_box">
                    <img src={Image} />
                </div>
                <div className="kontakt_right_box">
                    <p>Zapraszam na stronę znany lekarz</p>
                    <p>link do klikniecia</p>
                    <p>Tel: 666 555 444</p>
                </div>
            </div>

        </div>
        </>
    )
    
}

export { Kontakt  }