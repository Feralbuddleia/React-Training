import React, { Component } from 'react';
import Icon from '../common/Icon';
import '../Iphone.css'

class Content extends Component {
    render() {
        return (
            <div className="Iphone-content Iphone-flex">
                {this.props.apps.map((icon, idx) => 
                    <Icon src={icon.src} title={icon.title} key={idx}/>
                )}
            </div>
        )
    }
}

export default Content;