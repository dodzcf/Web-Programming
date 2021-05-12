import React,{useState} from 'react';



const App=() =>
{
    const state = useState();

    const [count,setCount]= useState(0);

    const numinc =()=>
    {
        setCount(count+1);
    };
    return(
        <div>
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={numinc}>Counter</button>
        </div>
    );
};
export default App;