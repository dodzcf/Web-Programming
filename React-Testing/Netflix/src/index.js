import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './nav';
import listt from './list';
;
function ncard(val)
{
    return (
        <App
        imgs={val.imgs}
        sname={val.sname}
        link={val.link}
        title={val.title}
        />
    );
}

ReactDOM.render(
 

 
<div className="container">
<Nav />
{listt.map(ncard)}
 </div>



,document.getElementById('root'));
