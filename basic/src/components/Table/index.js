import React, {Component} from 'react';
import Row from './Row';
import './Table.css'

class Table extends Component {
    render() {
        const data = [
            ["", "Knocky", "Flor", "Ella", "Juan"],
            ["Breed", "Jack Russell", "Poodle", "Streetdog", "Cocker Spaniel"],
            ["Age", "16", "9", "10", "5"],
            ["Owner", "Mother-in-low", "Me", "Me", "Sister-in-law"],
            ["Eating Habits", "leftovers", "Nibbles", "Hearty eater", "will eat till he explodes"]
        ];
        return (
            <div>
                {data.map((row, idx) => 
                    <Row row={row} key={idx} />
                )}
            </div>
        )
    }
}

export default Table;