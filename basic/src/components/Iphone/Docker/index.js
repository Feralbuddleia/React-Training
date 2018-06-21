import React, { Component } from 'react';
import Icon from '../common/Icon';

class Docker extends Component {
    render() {
        return (
            <div className="Iphone-flex Iphone-footer">
                {this.props.apps.map((app, idx) => 
                    <Icon src={app.src} title={app.title} key={idx}/>
                )}
            </div>
        )
    }
}

export default Docker;