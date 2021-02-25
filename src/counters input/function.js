import React, {useState} from 'react';

export default function({min, max}){
    
    let [cnt, setCnt] = useState(min);

    let increase = (operator = true) => {
        if (operator) {
            setCnt(Math.max(min, Math.min(max, cnt + 1)))
            return
        }
        setCnt(Math.max(min, Math.min(max, cnt - 1)))
    };

    const changeInput = (newValue) => {

        if (newValue < min) {
            setCnt(min);
            return
        } else if (newValue > max) {
            setCnt(max);
            return
        }
        setCnt(newValue)
    }

    return (
        <div>
            <button onClick={() => increase(false)}>Minus 1</button>
            <br/>
            <input onChange={(e)=> changeInput(e.target.value)} type="text" value={cnt}/>
            <br/>
            <button onClick={increase}>Plus 1</button>
        </div>
    );
}