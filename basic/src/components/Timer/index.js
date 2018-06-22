import React, { Component } from 'react';
import Button from '../common/Button';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            isPaused: true
        }
    }

    start = () => {
        this.setState({
            isPaused: !this.state.isPaused
        })
        if (!this.id) {
            this.autoIncrease();
        }
    }

    autoIncrease = () => {
        this.id = setInterval(() => {
            if (!this.state.isPaused) {
                this.setState({
                    number: this.state.number + 1
                })
            }
            
        }, 1000);
    }

    stop = () => {
        clearInterval(this.id);
        this.setState({
            number: 0,
            isPaused: true
        })
    }

    render() {
        return (
            <div className="Timer-container">
                <div className="Timer-screen">
                    <p>{this.state.number}</p>
                </div>
                <div>
                    <Button value={this.state.isPaused ? "START" : "PAUSE"}
                        eventHandler={this.start}  style="Timer-btn"/>
                    <Button value="RESET" eventHandler={this.stop} style="Timer-btn" />
                </div>
            </div>
        )
    }
}

export default Timer;