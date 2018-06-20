import React, { Component } from 'react';

class Icon extends Component {
    render() {
        return (
            <div>
                <img src={this.props.src} alt="" width="50px" height="50px" />
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default Icon;