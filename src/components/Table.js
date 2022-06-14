import React, {useEffect, useState} from 'react';
import TableRow from "./TableRow";
import InvoiceEditModal from "./invoiceEditModal";
import {Button} from "react-bootstrap";
import {FileUploader} from "react-drag-drop-files";

function Table(props) {


    const [showModal, setShow] = useState(false);
    const [invoiceRowId, setInvoiceRowId] = useState(0);
    const [invoiceData, setInvoiceData] = useState({data: {}})

    const toggleModal = () => {
        setShow(!showModal)
    }

    const fileTypes = ["JSON"];

    const handleChange = (fileparameter) => {
        const fileReader = new FileReader();
        fileReader.readAsText(fileparameter);
        fileReader.onload = e => {
            const temp = JSON.parse(e.target.result)
            setInvoiceData({data: temp} )
            console.log( invoiceData )
        };
    };



    if(props.tableData.loading === true)
    {
        return (<p>Loading....</p>)
    }
    else {

        function setStateFunction() {
            const newState = {data: props.tableData};
            return newState;
        }

        if(Object.keys(invoiceData.data).length === 0 ){
            setInvoiceData( setStateFunction())
        }

        const test = (value1, value2) => {
            console.log(value1)
            console.log(value2)

            let tempArray = invoiceData.data.lineItems
            tempArray[invoiceRowId].description = value1
            tempArray[invoiceRowId].price = value2

            setInvoiceData(prevState => { // Object.assign would also work
                return {...prevState, ...tempArray}})
        }

        const testArray = invoiceData?.data?.lineItems

        const invoiceHeader =
            <>
                <span>Invoice: {invoiceData.data.id}</span> <br />
                <span>created: {invoiceData.data.createdAt}</span><br />
                <span>Due: {invoiceData.data.dueAt}</span>
            </>

        const companyInfo =
            <>
                <span>collectAI.</span> <br />
                <span>20457 Hamburg</span><br />
                <span>DGermany</span>
            </>

        const customerInfo =
            <>
                <span>{invoiceData.data.company}</span> <br />
                <span>Bob Hans Jens, The Great</span><br />
                <span>{invoiceData.data.email}</span>
            </>

        const logo =
            <img
                src="cai_logo.svg"
                className="logoStyle"
                alt="logo"
            />


        const total = () => {
            let invoiceTotal = 0
            invoiceData?.data?.lineItems?.forEach( (value) => {
                invoiceTotal = invoiceTotal + value.price
                console.log(invoiceTotal)
            })
            return invoiceTotal.toFixed(2)
        }

        function editButton(e) {
            e.preventDefault();
            setShow(true)
            setInvoiceRowId(parseInt(e.target.id))
            console.log(e.target.id)
        }



        return (
            <div className="invoice-box">
                <table cellPadding="0" cellSpacing="0" >
                    <tbody>

                    <tr>
                        <FileUploader children={<p className="fileUploadZone">Drop JSON file here</p>} handleChange={handleChange} name="file" types={fileTypes} />
                    </tr>

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


                    {testArray?.map(function (value, index) {
                        return <tr>
                                    <td>
                                        <table>
                                            <tbody>
                                                <TableRow uniqueKey={index} firstColumn ={value.description} secondColumn = {value.price}/>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><Button id={index} variant="primary" onClick={editButton}>Edit</Button></td>
                                </tr>
                    })}

                    <TableRow className= "total"  firstColumn = "Total:" secondColumn = {total()} />
                    <TableRow className= "vat"  firstColumn = "VAT (19%):" secondColumn = {(total() * .19).toFixed(2) + ' EUR'}  />

                    <InvoiceEditModal show={showModal} toggle={toggleModal}  invoiceRowId={invoiceRowId} invoicesArray={invoiceData?.data?.lineItems} onTextboxValueChanged={test}/>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table