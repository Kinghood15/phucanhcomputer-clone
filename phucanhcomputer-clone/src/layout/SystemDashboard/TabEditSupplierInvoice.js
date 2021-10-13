import React,{useContext,useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {SupplierInvoiceContext} from '../../contexts/SupplierInvoiceContext';
import FileBase64 from 'react-file-base64';
import {SupplierContext} from '../../contexts/SupplierContext';

const TabEditSupplierInvoice = () => {
    const {supplierInvoiceState:{supplierInvoice},showEditSupplierInvoiceModal, setShowEditSupplierInvoiceModal,UpdateSupplierInvoice } = useContext(SupplierInvoiceContext);

    const closeDialog = () => {
        setShowEditSupplierInvoiceModal(false);
    }
    //Local state
    const {
        supplierState:{
            suppliers 
        },
        getSuppliers
    }  = useContext(SupplierContext);

    useEffect(() => getSuppliers(), []);
    const [editSupplierInvoiceForm,setEditSupplierInvoiceForm] = useState(supplierInvoice);
    useEffect(() => setEditSupplierInvoiceForm(supplierInvoice), [supplierInvoice]);

    const { nameSupplierInvoice,ImageUrlSupplierInvoice,codeproduct, quanlityDetails,importprice } = editSupplierInvoiceForm;

    const onChangeEditSupplierInvoiceForm = event => {
        setEditSupplierInvoiceForm({
            ...editSupplierInvoiceForm, [event.target.name]:event.target.value
        })
    }
    function ChangeSupplier(event){
        setEditSupplierInvoiceForm({...editSupplierInvoiceForm,supplierId: event.target.value})
    }
    const SubmitEditSupplierInvoice = async event => {
        event.preventDefault();
        const editSupplierInvoiceData = await UpdateSupplierInvoice(editSupplierInvoiceForm);
        if (!editSupplierInvoiceData.success) {
        }
        else{
            setShowEditSupplierInvoiceModal(false);
        }
        
    }
    return(
        <Modal show={showEditSupplierInvoiceModal} animation={true} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Sửa hoá đơn nhà cung cấp</Modal.Title>
            </Modal.Header>
            <Form onSubmit={SubmitEditSupplierInvoice}>
                <Modal.Body>
                <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="nameSupplierInvoice" placeholder=" Tên hoá đơn nhập" required aria-describedby="nameSupplierInvoice-help" value={nameSupplierInvoice} onChange={onChangeEditSupplierInvoiceForm} />
                        <Form.Text id="nameSupplierInvoice-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <FileBase64 name="ImageUrlSupplierInvoice" multiple={ false } onDone={({base64}) => setEditSupplierInvoiceForm({...editSupplierInvoiceForm,ImageUrlSupplierInvoice: base64 })} />
                    <div style={{width: '100%', height: '30px'}}>
                    </div>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="codeproduct" placeholder=" Mã sản phẩm" required aria-describedby="codeproduct-help" value={codeproduct} onChange={onChangeEditSupplierInvoiceForm} />
                        
                        <Form.Text id="codeproduct-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="email" className="form-control-plaintext" name="quanlityDetails" placeholder=" Số lượng " required aria-describedby="quanlityDetails-help" value={quanlityDetails} onChange={onChangeEditSupplierInvoiceForm} />
                        <Form.Text id="quanlityDetails-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="importprice" placeholder=" Đơn giá" required aria-describedby="importprice-help"  value={importprice} onChange={onChangeEditSupplierInvoiceForm} />
                        <Form.Text id="importprice-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Select aria-label="Default select example" onChange={ChangeSupplier}>
                        {suppliers.map(supplier =>(
                            <option value={supplier._id}>{supplier.nameSupplier}</option>
                        ))}
                    </Form.Select>
                </Modal.Body>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeDialog}>Close</Button>
                <Button variant="primary" onClick={SubmitEditSupplierInvoice}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TabEditSupplierInvoice;