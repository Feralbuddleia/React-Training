import React, { Component } from 'react';

class Row extends Component {
    render() {
        return (
            <tr>
                {this.props.row.map((val, idx) => 
                    <td className="Table-col" key={idx}>
                        {val}
                    </td>
                )}
            </tr>
        )
    }
}

export default Row;