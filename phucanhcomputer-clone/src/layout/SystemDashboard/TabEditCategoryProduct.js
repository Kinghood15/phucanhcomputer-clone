import React,{useContext,useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {CategoryProductContext} from '../../contexts/CategoryProductContext';

const TabEditCategory = () => {
    const {showEditCategoryProductModal, setShowEditCategoryProductModal } = useContext(CategoryProductContext);

    const closeDialog = () => {
        setShowEditCategoryProductModal(false);
        setEditCategoryProductForm({nameCategoryProduct:''})
    }
    //Context
    const {EditCategoryProduct} = useContext(CategoryProductContext);
    //Local state
    const [editCategoryProductForm,setEditCategoryProductForm] = useState({
        nameCategoryProduct:''
    });
    const {nameCategoryProduct} = editCategoryProductForm;
    const onChangeEditCategoryProductForm = event => {
        setEditCategoryProductForm({
            ...editCategoryProductForm, [event.target.name]:event.target.value
        })
    }
    const SubmitEditCategoryProduct = async event => {
        event.preventDefault();
        try{
            const addCategoryProductData = await EditCategoryProduct(editCategoryProductForm);
            if (!addCategoryProductData.success) {
                
            }
            else{
                
                setEditCategoryProductForm({nameCategoryProduct:''});
                setShowEditCategoryProductModal(false);
            }

        }catch(e){
            console.log(e);
        }
    }
    return(
        <Modal show={showEditCategoryProductModal} animation={true} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm loại sản phẩm</Modal.Title>
            </Modal.Header>
            <Form onSubmit={SubmitEditCategoryProduct}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="nameCategoryProduct" placeholder=" Tên công ty nhà cung cấp" required aria-describedby="nameCategoryProduct-help" value={nameCategoryProduct} onChange={onChangeEditCategoryProductForm} />
                        <Form.Text id="nameCategoryProduct-help" muted>Requied</Form.Text>
                    </Form.Group>
                </Modal.Body>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeDialog}>Close</Button>
                <Button variant="primary" onClick={SubmitEditCategoryProduct}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TabEditCategory;