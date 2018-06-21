import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button className={this.props.style} onClick={this.props.eventHandler}>
                {this.props.value}
            </button>
        )
    }
}

export default Button;