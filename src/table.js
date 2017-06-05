import React from 'react';
import TableBody from './table-body.js';

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Sign</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <TableBody data={this.props.data} />
            </table>
        );
    }
}

export default Table;