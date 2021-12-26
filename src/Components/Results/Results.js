import React from 'react';
import './Results.css';
import { useSelector } from 'react-redux';

const Results = () => {

    const state = useSelector(state => state);

    return (
        <div className="resultsSection">
            <h1>React - Redux</h1>
            <h1>Value of A : {state.valueOfA}</h1>
            <h1>Value of B : {state.valueOfB}</h1>
        </div>
    )
}

export default Results
