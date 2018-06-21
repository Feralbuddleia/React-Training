import React, { Component } from 'react';

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

export default Icon;