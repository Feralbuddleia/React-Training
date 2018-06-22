import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button className={this.props.style} onClick={this.props.eventHandler}>
                {this.props.value}
            </button>
        )
    }
}

Button.propTypes = {
    eventHandler: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Button;