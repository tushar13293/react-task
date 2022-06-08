import {useState} from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

function InvoiceEditModal (props) {

    const [hideModal, handleHide] = useState(false);
    //
    //
    // const hideInvoiceModal = () => handleHide(true);

    console.log(props.show)

    return(
        <Modal show={props.show} >
            <Modal.Header closeButton>
                <Modal.Title>Edit Invoice</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl id="desc"
                        placeholder="Description"
                    />
                    <FormControl id = "val"
                        placeholder="value"
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