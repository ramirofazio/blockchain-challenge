import React from 'react';
import Survey from '../survey/Survey.js';
import NavBar from '../navBar/NavBar';

function Home() {
    return (
        <div>
            <NavBar />
            <Survey />
        </div>
    );
}

export default Home;