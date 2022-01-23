import React, { useState } from 'react';
import styles from './Survey.module.css'
import surveyjson from './survey-sample.json'
import Trivia from '../trivia/Trivia.js'

function Survey() {

    const [start, setStart] = useState(false)

    return (
        <div className={styles.container}>
            <h1>{surveyjson.title}</h1>
            <img src={surveyjson.image} className={styles.img} />
            <button onClick={() => setStart(!start)} className={styles.startTriviaBtn}>Start!</button>
            {start ? <Trivia /> : null}
        </div>
    );
}

export default Survey;