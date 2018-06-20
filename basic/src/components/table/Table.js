import React, {Component} from 'react';
import Row from './Row';

class Table extends Component {
    render() {
        console.log(this.props.table);
        return (
            <div>
                {this.props.table.map((row, idx) => 
                    <Row row={row} key={idx} />
                )}
            </div>
        )
    }
}

export default Table;