import React, {Component, useState,useEffect} from 'react';
import Table from "./Table";


function TableRow (props) {

    return (
        <tr id={props.uniqueKey}>
            <td>{props.firstColumn}</td>
            <td>{props.secondColumn}</td>
        </tr>
    )

}

export default TableRow