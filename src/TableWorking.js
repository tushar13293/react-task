import React, {Component, useState,useEffect} from 'react';

import {Button} from "react-bootstrap";

    function Table(props) {


        const [invoiceData, setInvoiceData] = useState(null)

        fetch('./invoice.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function(response){
                console.log(response)
                return response.json()
            })
            .then(function (myJson) {

                if(!invoiceData)
                    setInvoiceData(myJson)

                // debugger;
                console.log(invoiceData)


            })

        if(invoiceData == null)
            return (<p>Loading....</p>)

        // debugger;

        return (
            <table cellPadding="0" cellSpacing="0">
                <tbody>
                <tr className="top">
                    <td colSpan="2">
                        <table>
                            <tbody>
                            <tr>
                                <td className="title">
                                    {  invoiceData.fullName}
                                    <Button variant="primary">Primary</Button>{' '}
                                    <img
                                        src="cai_logo.svg"
                                        // style={logoStyle}
                                        alt="logo"
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                <tr className="information">
                    <td colSpan="2">
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    collectAI.
                                    <br />
                                    20457 Hamburg
                                    <br />
                                    Hamburg, Germany
                                </td>

                                <td>
                                    Acme, GmbH.
                                    <br />
                                    Bob Hans Jens, The Great <br />
                                    youknowit@star-wars-is-real.pew
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                <tr className="heading">
                    <td>Item</td>
                    <td>Price</td>
                </tr>

                <tr className="item last">

                    <td>Death Star</td>
                    <td>1100,39 EUR</td>
                </tr>
                <tr className="item last">

                    <td>Star destroyer</td>
                    <td>399,99 EUR</td>
                </tr>

                <tr className="total">
                    <td></td>

                    <td>Total: 1500,38 EUR</td>
                </tr>
                <tr className="vat">
                    <td></td>
                    <td>VAT (19%): 285,07 EUR</td>
                </tr>
                </tbody>
            </table>
        )

    }

    // constructor(props) {
    //     super(props);
    //     this.state = {jsonData: []};
    // }

    // componentDidMount() {
    //         fetch('./invoice.json',
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json'
    //                 }
    //             })
    //             .then(function(response){
    //                 console.log(response)
    //                 return response.json()
    //             })
    //             .then(function (myJson) {
    //                 this.setState({
    //                     jsonData: [myJson],
    //                 })
    //                 // console.log(jsonData)
    //             })
    //     }



    // useEffect(() => {
    //     invoiceData()
    // }, []);
    //
    // console.log(data)
    //
    // const jsondata = [data]


    // render() {
    //     const logoStyle = {
    //         width: '100%',
    //         maxWidth: '300px',
    //     };
    //
    //     const {jsonData} = this.state
    //
    //     // console.log(data);
    //
    //     return (
    //         <table cellPadding="0" cellSpacing="0">
    //             <tbody>
    //             <tr className="top">
    //                 <td colSpan="2">
    //                     <table>
    //                         <tbody>
    //                         <tr>
    //                             <td className="title">
    //                                 <Button variant="primary">Primary</Button>{' '}
    //                                 <img
    //                                     src="cai_logo.svg"
    //                                     style={logoStyle}
    //                                     alt="logo"
    //                                 />
    //                             </td>
    //                         </tr>
    //                         </tbody>
    //                     </table>
    //                 </td>
    //             </tr>
    //
    //             <tr className="information">
    //                 <td colSpan="2">
    //                     <table>
    //                         <tbody>
    //                         <tr>
    //                             <td>
    //                                 collectAI GmbH.
    //                                 <br />
    //                                 20457 Hamburg
    //                                 <br />
    //                                 Hamburg, Germany
    //                             </td>
    //
    //                             <td>
    //                                 Acme, GmbH.
    //                                 <br />
    //                                 Bob Hans Jens, The Great <br />
    //                                 youknowit@star-wars-is-real.pew
    //                             </td>
    //                         </tr>
    //                         </tbody>
    //                     </table>
    //                 </td>
    //             </tr>
    //
    //             <tr className="heading">
    //                 <td>Item</td>
    //                 <td>Price</td>
    //             </tr>
    //
    //             <tr className="item last">
    //
    //                 <td>Death Star</td>
    //                 <td>1100,39 EUR</td>
    //             </tr>
    //             <tr className="item last">
    //
    //                 <td>Star destroyer</td>
    //                 <td>399,99 EUR</td>
    //             </tr>
    //
    //             <tr className="total">
    //                 <td></td>
    //
    //                 <td>Total: 1500,38 EUR</td>
    //             </tr>
    //             <tr className="vat">
    //                 <td></td>
    //                 <td>VAT (19%): 285,07 EUR</td>
    //             </tr>
    //             </tbody>
    //         </table>
    //     )
    // }
    //}



export default Table