import React,{useContext,useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {SupplierContext} from '../../contexts/SupplierContext';
import FileBase64 from 'react-file-base64';
const TabEditSupplier = () => {
    const {supplierState:{supplier},showEditSupplierModal, setShowEditSupplierModal,UpdateSupplier } = useContext(SupplierContext);

    const closeDialog = () => {
        setShowEditSupplierModal(false);
    }
    //Local state
    const [editSupplierForm,setEditSupplierForm] = useState(supplier);
    useEffect(() => setEditSupplierForm(supplier), [supplier]);

    const { nameSupplier,ImageLogoSupplier,addressSupplier,emailSupplier, phonenumberSupplier } = editSupplierForm;

    const onChangeEditSupplierForm = event => {
        setEditSupplierForm({
            ...editSupplierForm, [event.target.name]:event.target.value
        })
    }

    const SubmitEditSupplier = async event => {
        event.preventDefault();
        const editSupplierData = await UpdateSupplier(editSupplierForm);
        if (!editSupplierData.success) {
        }
        else{
            setShowEditSupplierModal(false);
        }
    }
    return(
        <Modal show={showEditSupplierModal} animation={true} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Sửa nhà cung cấp</Modal.Title>
            </Modal.Header>
            <Form onSubmit={SubmitEditSupplier}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="nameSupplier" placeholder=" Tên công ty nhà cung cấp" required aria-describedby="nameSupplier-help" value={nameSupplier} onChange={onChangeEditSupplierForm} />
                        <Form.Text id="nameSupplier-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <FileBase64 name="ImageLogoSupplier" multiple={ false } onDone={({base64}) => setEditSupplierForm({...editSupplierForm,ImageLogoSupplier: base64 })} />
                    <div style={{width: '100%', height: '30px'}}>
                    </div>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="addressSupplier" placeholder=" Địa chỉ nhà cung cấp" required aria-describedby="addressSupplier-help" value={addressSupplier} onChange={onChangeEditSupplierForm} />
                        <Form.Text id="addressSupplier-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="email" className="form-control-plaintext" name="emailSupplier" placeholder=" Email nhà cung cấp" required aria-describedby="emailSupplier-help" value={emailSupplier} onChange={onChangeEditSupplierForm} />
                        <Form.Text id="emailSupplier-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="phonenumberSupplier" placeholder=" Số điện thoại nhà cung cấp" required aria-describedby="phonenumberSupplier-help"  value={phonenumberSupplier} onChange={onChangeEditSupplierForm} />
                        <Form.Text id="phonenumberSupplier-help" muted>Requied</Form.Text>
                    </Form.Group>
                </Modal.Body>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeDialog}>Close</Button>
                <Button variant="primary" onClick={SubmitEditSupplier}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TabEditSupplier;