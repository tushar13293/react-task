import {useState} from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

function InvoiceEditModal (props) {

    const [textboxValues, setTextboxValues] = useState({textbox1: '', textbox2: 0});

    const childComponentFunction = () => {
        const value1 = textboxValues.textbox1
        const value2 = textboxValues.textbox2
        props.onTextboxValueChanged(value1, value2)
        props.toggle()
    }

    return(
        <Modal show={props.show} >
            <Modal.Header closeButton onHide={props.toggle}>
                <Modal.Title>Edit Invoice</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl id="desc" onChange= {e => setTextboxValues({ textbox1: e.target.value, textbox2: textboxValues.textbox2 })}
                        placeholder= {props.invoicesArray[props.invoiceRowId].description}
                    />
                    <FormControl id = "val" onChange= {e => setTextboxValues({textbox1: textboxValues.textbox1, textbox2: parseFloat(e.target.value)})}
                        placeholder= {props.invoicesArray[props.invoiceRowId].price }
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.toggle}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => childComponentFunction()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InvoiceEditModal