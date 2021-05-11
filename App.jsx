import React from 'react';
import "./App.css";


function App(props)
{
    return (
        <div className="cards">
        <div className="card">
        
        <div className="card_info">
        <img src={props.imgs} alt="Supergirl" className="card_img" />
        <br />
            <span className="card_category">{props.title}</span>
            <h3>{props.sname}</h3>
            <a href={props.link} target="_blank">
                <button className="btn btn-success">Watch</button>
            </a>
        </div>
        </div>
        </div>
    );
} 
export default App;
