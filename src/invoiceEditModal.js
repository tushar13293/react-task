import {useState} from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

function InvoiceEditModal (props) {

    const [hideModal, handleHide] = useState(false);

    return(
        <Modal show={props.show} onClick={props.toggle}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Invoice</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl id="desc"
                        placeholder= {props.invoicesArray[props.invoiceRowId].description}
                    />
                    <FormControl id = "val"
                        placeholder= {props.invoicesArray[props.invoiceRowId].price}
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.toggle}>
                    Close
                </Button>
                <Button variant="primary" >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InvoiceEditModal