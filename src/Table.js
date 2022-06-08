import React, {Component, useState,useEffect} from 'react';
import TableRow from "./TableRow";
import InvoiceEditModal from "./invoiceEditModal";
import {Button} from "react-bootstrap";

function Table(props) {

    const logoStyle = {width: '200px'}

    const [showModal, setShow] = useState(false);

    const toggleModal = () => {
        setShow(!showModal)
    }

    console.log(props)

    // debugger;

    if(props.tableData.loading === true)
    {
        console.log(props)
        return (<p>Loading....</p>)
    }
    else {
        // return( <p>Data Loaded</p> )
        console.log(props.tableData.lineItems[0])

        const lineArray = props.tableData.lineItems
        console.log(lineArray)

        const invoiceHeader =
            <>
                <span>Invoice: {props.tableData.id} <br />
                </span> <span>created: {props.tableData.createdAt}</span><br />
                <span>Due: {props.tableData.dueAt}</span>
            </>

        const companyInfo =
            <>
                <span>collectAI.</span> <br />
                <span>20457 Hamburg</span><br />
                <span>DGermany</span>
            </>

        const customerInfo =
            <>
                <span>{props.tableData.company}</span> <br />
                <span>Bob Hans Jens, The Great</span><br />
                <span>{props.tableData.email}</span>
            </>

        const logo =
            <img
                src="cai_logo.svg"
                style={logoStyle}
                alt="logo"
            />


        const total = () => {
            let prevTotal = 0

            lineArray.forEach( (value) => {
                prevTotal = prevTotal + value.price
                console.log(prevTotal)
            })

            return prevTotal
        }



        function testButton(e) {
            e.preventDefault();
            setShow(true)
            console.log(e.target.previousElementSibling.id);
        }

        return (
            <>
                <table cellPadding="0" cellSpacing="0">
                    <tbody>

                    <tr className="top">
                        <td colSpan="2">
                            <table>
                                <tbody>
                                    <TableRow  firstColumn = {logo} secondColumn = {invoiceHeader} />
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr className="information">
                        <td colSpan="2">
                            <table>
                                <tbody>
                                    <TableRow firstColumn = {companyInfo} secondColumn = {customerInfo} />
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <TableRow className= "heading"  firstColumn = "Item" secondColumn = "Price"  />

                    {lineArray.map(function (value, index) {
                        return <>
                            <TableRow key={index} firstColumn ={value.description} secondColumn = {value.price}/>
                            <Button variant="light" onClick={testButton}>Edit</Button>
                        </>
                    })}

                    <TableRow className= "total"  firstColumn = "Total:" secondColumn = {total()} />
                    <TableRow className= "vat"  firstColumn = "VAT (19%):" secondColumn = {(total() * .19) + ' EUR'}  />

                    <InvoiceEditModal show={showModal} toggle={toggleModal} />

                    </tbody>
                </table>
            </>

        )
    }

}

export default Table