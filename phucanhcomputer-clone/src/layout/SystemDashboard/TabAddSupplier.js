import React,{useContext,useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {SupplierContext} from '../../contexts/SupplierContext';
import FileBase64 from 'react-file-base64';
const TabAddSupplier = () => {
    const {showAddSupplierModal, setShowAddSupplierModal } = useContext(SupplierContext);

    const closeDialog = () => {
        setShowAddSupplierModal(false);
        setAddSupplierForm({nameSupplier:'',ImageLogoSupplier:'',addressSupplier:'',emailSupplier:'',phonenumberSupplier:''})
    }
    //Context
    const {AddSupplier} = useContext(SupplierContext);
    //Local state
    const [addSupplierForm,setAddSupplierForm] = useState({
        nameSupplier:'',
        ImageLogoSupplier:'',
        addressSupplier:'',
        emailSupplier:'',
        phonenumberSupplier:''
    });
    const {nameSupplier,ImageLogoSupplier,addressSupplier,emailSupplier, phonenumberSupplier} = addSupplierForm;
    const onChangeAddSupplierForm = event => {
        setAddSupplierForm({
            ...addSupplierForm, [event.target.name]:event.target.value
        })
    }
    const SubmitAddSupplier = async event => {
        event.preventDefault();
        try{
            const addSupplierData = await AddSupplier(addSupplierForm);
            if (!addSupplierData.success) {
                
            }
            else{
                
                setAddSupplierForm({nameSupplier:'',ImageLogoSupplier:'',addressSupplier:'',emailSupplier:'',phonenumberSupplier:''});
                setShowAddSupplierModal(false);
            }

        }catch(e){
            console.log(e);
        }
    }
    return(
        <Modal show={showAddSupplierModal} animation={true} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm nhà cung cấp</Modal.Title>
            </Modal.Header>
            <Form onSubmit={SubmitAddSupplier}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="nameSupplier" placeholder=" Tên công ty nhà cung cấp" required aria-describedby="nameSupplier-help" value={nameSupplier} onChange={onChangeAddSupplierForm} />
                        <Form.Text id="nameSupplier-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <FileBase64 name="ImageLogoSupplier" multiple={ false } onDone={({base64}) => setAddSupplierForm({...addSupplierForm,ImageLogoSupplier: base64 })} />
                    <div style={{width: '100%', height: '30px'}}>
                    </div>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="addressSupplier" placeholder=" Địa chỉ nhà cung cấp" required aria-describedby="addressSupplier-help" value={addressSupplier} onChange={onChangeAddSupplierForm} />
                        <Form.Text id="addressSupplier-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="email" className="form-control-plaintext" name="emailSupplier" placeholder=" Email nhà cung cấp" required aria-describedby="emailSupplier-help" value={emailSupplier} onChange={onChangeAddSupplierForm} />
                        <Form.Text id="emailSupplier-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="phonenumberSupplier" placeholder=" Số điện thoại nhà cung cấp" required aria-describedby="phonenumberSupplier-help"  value={phonenumberSupplier} onChange={onChangeAddSupplierForm} />
                        <Form.Text id="phonenumberSupplier-help" muted>Requied</Form.Text>
                    </Form.Group>
                </Modal.Body>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeDialog}>Close</Button>
                <Button variant="primary" onClick={SubmitAddSupplier}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TabAddSupplier;