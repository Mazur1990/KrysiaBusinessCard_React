import React from 'react';
import {Zakresy} from './Zakresy/Zakresy'



const ZakresUslug = () => {

    const numbers = [1, 2, 3, 4, 5];
    const letters = ["a", "b","c"];
    const pralina = ['lubie cuksy', 'psicholog']
    
    return(
        <div className="zakres_background">
            <h1>Usługi</h1>
            <h2>
                Specjalizuję się w udzielaniu wsparcia psychologicznego osobom będącym w trudnej sytuacji życiowej i rodzinnej, zmagającym się z lękiem i obniżonym nastrojem. Szczególnie pochylam się nad aspektem doświadczania kryzysów, zmian, z którymi ciężko sobie poradzić, problemów emocjonalnych, relacyjnych oraz szeroko rozumianej przemocy.
                Towarzyszę w odzyskiwaniu równowagi emocjonalnej oraz poczucia kontroli nad własnym życiem.
            </h2>
            <div className="test">

            <Zakresy className="" text={numbers}/>
            <Zakresy className="" text={letters}/>
            <Zakresy className="" text={pralina} />
            </div>
        </div>
    )
    
}

export { ZakresUslug }