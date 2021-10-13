import React,{useContext,useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {SupplierInvoiceContext} from '../../contexts/SupplierInvoiceContext';
import FileBase64 from 'react-file-base64';
import {SupplierContext} from '../../contexts/SupplierContext';

const TabAddSupplierInvoice = (props) => {
    const {showAddSupplierInvoiceModal, setShowAddSupplierInvoiceModal } = useContext(SupplierInvoiceContext);

    const closeDialog = () => {
        setShowAddSupplierInvoiceModal(false);
        setAddSupplierInvoiceForm({nameSupplierInvoice:'',ImageUrlSupplierInvoice:'',codeproduct:'',quanlityDetails:'',importprice:'',supplierId:''})
    }
    //Context
    const {AddSupplierInvoice} = useContext(SupplierInvoiceContext);
    const {
        supplierState:{
            suppliers 
        },
        getSuppliers
    }  = useContext(SupplierContext);

    useEffect(() => getSuppliers(), []);

    //Local state
    const [addSupplierInvoiceForm,setAddSupplierInvoiceForm] = useState({
        nameSupplierInvoice:'',
        ImageUrlSupplierInvoice:'',
        codeproduct:'',
        quanlityDetails:'',
        importprice:'',
        supplierId:''
    });
    const {nameSupplierInvoice,ImageUrlSupplierInvoice,codeproduct,quanlityDetails,importprice,supplierId} = addSupplierInvoiceForm;
    const onChangeAddSupplierInvoiceForm = event => {
        setAddSupplierInvoiceForm({
            ...addSupplierInvoiceForm,[event.target.name]:event.target.value
        })
        
    }
    function ChangeSupplier(event){
        setAddSupplierInvoiceForm({...addSupplierInvoiceForm,supplierId: event.target.value})
    }
    const SubmitAddSupplierInvoice = async event => {
        event.preventDefault();
        try{
            const addSupplierInvoiceData = await AddSupplierInvoice(addSupplierInvoiceForm);
            if (!addSupplierInvoiceData.success) {
                
            }
            else{
                setAddSupplierInvoiceForm({nameSupplierInvoice:'',ImageUrlSupplierInvoice:'',codeproduct:'',quanlityDetails:'',importprice:'',supplierId:''});
                setShowAddSupplierInvoiceModal(false);
            }

        }catch(e){
            console.log(e);
        }
    }
    return(
        <Modal show={showAddSupplierInvoiceModal} animation={true} onHide={closeDialog} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Thêm hoá đơn nhà cung cấp</Modal.Title>
            </Modal.Header>
            <Form onSubmit={SubmitAddSupplierInvoice}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="nameSupplierInvoice" placeholder=" Tên hoá đơn nhập" required aria-describedby="nameSupplierInvoice-help" value={nameSupplierInvoice} onChange={onChangeAddSupplierInvoiceForm} />
                        <Form.Text id="nameSupplierInvoice-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <FileBase64 name="ImageUrlSupplierInvoice" multiple={ false } onDone={({base64}) => setAddSupplierInvoiceForm({...addSupplierInvoiceForm,ImageUrlSupplierInvoice: base64 })} />
                    <div style={{width: '100%', height: '30px'}}>
                    </div>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="codeproduct" placeholder=" Mã sản phẩm" required aria-describedby="codeproduct-help" value={codeproduct} onChange={onChangeAddSupplierInvoiceForm} />
                        
                        <Form.Text id="codeproduct-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="email" className="form-control-plaintext" name="quanlityDetails" placeholder=" Số lượng " required aria-describedby="quanlityDetails-help" value={quanlityDetails} onChange={onChangeAddSupplierInvoiceForm} />
                        <Form.Text id="quanlityDetails-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="importprice" placeholder=" Đơn giá" required aria-describedby="importprice-help"  value={importprice} onChange={onChangeAddSupplierInvoiceForm} />
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
                <Button variant="primary" onClick={SubmitAddSupplierInvoice}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TabAddSupplierInvoice;