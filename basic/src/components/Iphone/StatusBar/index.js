import React, { Component } from 'react';

class StatusBar extends Component {
    render() {
        return (
            <div className="Iphone-status-flex">
                <div>
                    ...signal
                </div>
                <div>
                    6:00PM
                </div>
                <div>
                    Battery
                </div>
            </div>

        )
    }
}

export default StatusBar;