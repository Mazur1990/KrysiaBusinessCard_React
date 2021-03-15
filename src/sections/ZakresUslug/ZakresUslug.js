import React from 'react';
import {Zakresy} from './Zakresy/Zakresy'



const ZakresUslug = () => {

    const columnOne = ["Stany depresyjne", "Stany lękowe"];
    const columnTwo = [,"Niskie poczucie własnej wartości", "Kryzys życiowy, emocjonalny, zawodowy","Kryzys w związku"];
    const columnThree = ["Stres","Nerwica"]
    
    return(
        <div className="zakres_background" id="3">
            <div className="zakres_title">
                <h1 className="">Usługi</h1>
            </div>
            <div className="container">
                <div className="row">
                    <h2 className="">
                    Specjalizuję się w udzielaniu wsparcia psychologicznego osobom będącym w trudnej sytuacji życiowej i rodzinnej, zmagającym się z lękiem i obniżonym nastrojem. Szczególnie pochylam się nad aspektem doświadczania kryzysów, zmian, z którymi ciężko sobie poradzić, problemów emocjonalnych, relacyjnych oraz szeroko rozumianej przemocy.
                    Towarzyszę w odzyskiwaniu równowagi emocjonalnej oraz poczucia kontroli nad własnym życiem. Szczególnie dbam o prywatność oraz anonimowość moich klientów, kieruję się kodeksem etyczno-zawodowym psychologa, a swoją pracę poddaję superwizji. 
                    </h2>
                <div className="columns">
                    <Zakresy  text={columnOne} />
                    <Zakresy  text={columnTwo} />
                    <Zakresy  text={columnThree} />
                </div>
                </div>

         
            </div>
        </div>
    )
    
}

export { ZakresUslug }