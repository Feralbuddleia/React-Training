import React, { Component } from 'react';

class Num2Ordinal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: '',
            ordinal: ''
        }
        this.data = ['', 'st', 'nd', 'rd', 'th'];
    }

    handleInputChange = e => {
        this.setState({
            num: e.target.value,
            ordinal: ''
        })
        
    }

    handleClick = () => {
        const num = +this.state.num;
        let ordinal = '';
        if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
            ordinal = this.state.num;
        } else {
            let mod = num % 10;
            ordinal = num + (mod < 4 ? this.data[mod] : this.data[4]);
        }
        this.setState({
            ordinal: ordinal
        });
    }

    render() {
        const ordinal = this.state.ordinal;
        const num = this.state.num;
        return (
            <div>
                <div>
                    <input type="text" value={num} onChange={this.handleInputChange} />
                    <button onClick={this.handleClick}>Convert</button>
                </div>
                {ordinal !== '' && (
                <div>
                    <p>The result is: {ordinal}</p>
                </div>
                )}
            </div>
        )
    }
}

export default Num2Ordinal;