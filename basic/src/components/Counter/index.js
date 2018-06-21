import React, { Component } from 'react';
import './Counter.css';
import Button from './Button';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    increase = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    decrease = () => {
        this.setState({
            number: this.state.number > 1 ? this.state.number - 1 : 0
        });
    }

    render() {
        return (
            <div className="Counter-container">
                <div className="Counter-screen">
                    <span>{this.state.number}</span>
                </div>
                <div>
                    <Button value="+" eventHandler={this.increase}/>
                    <Button value="-" eventHandler={this.decrease}/>
                </div>
            </div>
        )
    }
}

export default Counter;