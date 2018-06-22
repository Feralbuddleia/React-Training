import React, { Component } from 'react';
import Icon from '../common/Icon';
import PropTypes from 'prop-types';
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

Content.propTypes = {
    apps: PropTypes.array
}

export default Content;