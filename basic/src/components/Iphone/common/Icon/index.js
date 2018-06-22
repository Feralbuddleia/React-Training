import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
    render() {
        return (
            <div className="Iphone-flex-item">
                <img src={this.props.src} alt="" width="50px" height="50px" />
                <div>{this.props.title}</div>
            </div>
        )
    }
}

Icon.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Icon;