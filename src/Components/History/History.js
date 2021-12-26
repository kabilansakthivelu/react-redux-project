import React from 'react';
import {useSelector} from "react-redux";
import './History.css';

const History = () => {

    const state = useSelector(state => state);

    return (
        <div>
            <h1 className="sectionHeading">History:</h1>
            <div className="history">
            {state.history.length ?
            state.history.map((item)=>{
                return <p key={item.id}>{item.comment}</p>
            })
            :
            <p>No records found</p>
            }
            </div>
        </div>
    )
}

export default History
