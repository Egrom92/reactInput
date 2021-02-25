import React, {useState} from 'react';

export default function(props){
    let [cnt, setCnt] = useState(0);

    let increase = (operator = true) => {
        if (operator) {
            setCnt(cnt + 1);
        } else {
            setCnt(cnt - 1);
        }
    };

    return (
        <div>
            <button onClick={() => increase(false)}>Minus 1</button>
            <br/>
            <strong>{cnt}</strong>
            <br/>
            <button onClick={increase}>Plus 1</button>
        </div>
    );
}