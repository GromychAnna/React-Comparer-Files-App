import React from 'react';

class TableRow extends React.Component {
    render() {
        const {data} = this.props;
        const row = data.map((data) =>
                <tr>
                    <td key={data.id}>{data.id}</td>
                    <td key={data.sign}>{data.sign}</td>
                    <td key={data.value}>{data.value}</td>
                </tr>
        );
        return (
            <tbody>{row}</tbody>
        );
    }
}

export default TableRow;