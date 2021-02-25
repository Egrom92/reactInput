import React from 'react';
import CounterClassSpan from './counters span/class.js';
import CounterFunctionSpan from './counters span/function.js';

import CounterClassInput from './counters input/class.js';
import CounterFunctionInput from './counters input/function.js';

export default function(){
    return (
        <div>
            <h2>Counter as class</h2>
            <CounterClassSpan/>
            <h2>Counter as function</h2>
            <CounterFunctionSpan/>
            <hr/>
            <h2>Counter as class</h2>
            <CounterClassInput min={10} max={20}/>
            <h2>Counter as function</h2>
            <CounterFunctionInput min={10} max={20}/>
        </div>
    );
}