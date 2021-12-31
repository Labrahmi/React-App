
import React, { useState } from 'react';
import './home.css';

var temp = 0;

const Home = () => {

    const [num, setNum] = useState(temp);

    const incNum = () => {
        setNum(num+1);
    }
    
    const decNum = () => {
        setNum(num-1);
    }
    temp = num;
    return (
        <>
        <p className='plilfo9'>this is home</p>
        <div className='containn'>
            <div className='main_div'>
                <p> {num} </p>
                <div className='btns'>
                    <button onClick={incNum}> + </button>
                    <button onClick={decNum}> - </button>
                </div>
                
            </div>
        </div>
        
        </>
    )
}

export default Home
