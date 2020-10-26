import React from 'react';
import {Zakresy} from './Zakresy/Zakresy'

const numbers = [1, 2, 3, 4, 5];
const letters = ["a", "b","c"];
const pralina = ['lubie cuksy', 'psicholog']

const ZakresUslug = () => {
    return(
        <div className="zakres_background">
            <h1>Usługi</h1>
            <h2>
                Specjalizuję się w udzielaniu wsparcia psychologicznego osobom będącym w trudnej sytuacji życiowej i rodzinnej, zmagającym się z lękiem i obniżonym nastrojem. Szczególnie pochylam się nad aspektem doświadczania kryzysów, zmian, z którymi ciężko sobie poradzić, problemów emocjonalnych, relacyjnych oraz szeroko rozumianej przemocy.
                Towarzyszę w odzyskiwaniu równowagi emocjonalnej oraz poczucia kontroli nad własnym życiem.
            </h2>
            <Zakresy className="fas fa-book-open" text={numbers}/>
            <Zakresy className="fas fa-folder-open" text={letters}/>
            <Zakresy className="fas fa-book-open" text={pralina} />
            <Zakresy className="fas fa-folder-open" />
        </div>
    )
    
}

export { ZakresUslug }