import React from 'react';

function TableRow (props) {

    return (
        <tr id={props.uniqueKey} className={props.className}>
            <td>{props.firstColumn}</td>
            <td>{props.secondColumn}</td>
        </tr>
    )
}

export default TableRow