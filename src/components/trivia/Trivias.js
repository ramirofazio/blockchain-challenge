import React from 'react';
import surveyjson from '../survey-sample.json';
import Trivia from './Trivia.js';


function Trivias() {

    const trivias = surveyjson.questions

    return (
        <div>
            {trivias.map((trivia, index) =>
                <Trivia
                    key={index}
                    text={trivia.text}
                    img={trivia.image}
                    time={trivia.lifetimeSeconds}
                    options={trivia.options}
                />
            )}
        </div>
    );
}

export default Trivias;