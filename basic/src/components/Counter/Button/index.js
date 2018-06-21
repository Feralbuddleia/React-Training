import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button className="Counter-btn" onClick={this.props.eventHandler}>
                {this.props.value}
            </button>
        )
    }
}

export default Button;