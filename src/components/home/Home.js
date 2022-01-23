import React from 'react';
import styles from './Home.module.css';
import Metamask from '../metamask/Metamask.js';
import Survey from '../survey/Survey.js';

function Home() {
    return (
        <div className={styles.container}>
            <Metamask />
            <Survey />
        </div>
    );
}

export default Home;