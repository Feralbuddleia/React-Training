import React, { Component } from 'react';
import './Table.css'

class Row extends Component {
    render() {
        return (
            <tr>
                {this.props.row.map((val, idx) => 
                    <td className="col" key={idx}>
                        {val}
                    </td>
                )}
            </tr>
        )
    }
}

export default Row;