import React, { Component } from 'react';
import Table from './table/Table';

class HtmlTable extends Component {
    render() {
        const data = [
            ["", "Knocky", "Flor", "Ella", "Juan"],
            ["Breed", "Jack Russell", "Poodle", "Streetdog", "Cocker Spaniel"],
            ["Age", "16", "9", "10", "5"],
            ["Owner", "Mother-in-low", "Me", "Me", "Sister-in-law"],
            ["Eating Habits", "leftovers", "Nibbles", "Hearty eater", "will eat till he explodes"]
        ];
        return (
            <Table table={data}/>
        );
            
    }
}

export default HtmlTable;