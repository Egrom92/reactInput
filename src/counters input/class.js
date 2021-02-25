import React from 'react';

export default class extends React.Component{

    min = this.props.min;
    max = this.props.max;

    state = {
        cnt: this.min
    };

    increase = (operator = true) => {
        console.log(this.min)
        if (operator) {
            this.setState({
                cnt: Math.max(this.min, Math.min(this.max, this.state.cnt + 1))
            });
        } else {
            this.setState({
                cnt: Math.max(this.min, Math.min(this.max, this.state.cnt - 1))
            });
        }
    }

    changeInput = () => {

    }

    render(){
        return (
            <div>
                <button onClick={() => this.increase(false)}>Minus 1</button>
                <br/>
                <input type="text" onChange={(e) => changeInput(e.target.value)} value={this.state.cnt}/>
                <br/>
                <button onClick={this.increase}>Plus 1</button>
            </div>
        );
    }
}