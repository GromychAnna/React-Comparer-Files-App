import React from 'react';

class TableBody extends React.Component {
    render() {
        const {data} = this.props;
        const rows = data.map((data) =>
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.sign}</td>
                    <td>{data.value}</td>
                </tr>
        );
        return (
            <tbody>{rows}</tbody>
        );
    }
}

export default TableBody;