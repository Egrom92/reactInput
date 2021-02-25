import React from 'react';

export default class extends React.Component{
    // this.props

    state = {
        cnt: 0
    };

    increase = (operator = true) => {
        if (operator) {
            this.setState({
                cnt: this.state.cnt + 1
            });
        } else {
            this.setState({
                cnt: this.state.cnt - 1
            });
        }
    }

    render(){
        return (
            <div>
                <button onClick={() => this.increase(false)}>Minus 1</button>
                <br/>
                <strong>{this.state.cnt}</strong>
                <br/>
                <button onClick={this.increase}>Plus 1</button>
            </div>
        );
    }
}