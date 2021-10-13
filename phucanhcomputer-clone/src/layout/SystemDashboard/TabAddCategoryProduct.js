import React,{useContext,useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {CategoryProductContext} from '../../contexts/CategoryProductContext';

const TabAddCategory = () => {
    const {showAddCategoryProductModal, setShowAddCategoryProductModal } = useContext(CategoryProductContext);

    const closeDialog = () => {
        setShowAddCategoryProductModal(false);
        setAddCategoryProductForm({nameCategoryProduct:''})
    }
    //Context
    const {AddCategoryProduct} = useContext(CategoryProductContext);
    //Local state
    const [addCategoryProductForm,setAddCategoryProductForm] = useState({
        nameCategoryProduct:''
    });
    const {nameCategoryProduct} = addCategoryProductForm;
    const onChangeAddCategoryProductForm = event => {
        setAddCategoryProductForm({
            ...addCategoryProductForm, [event.target.name]:event.target.value
        })
    }
    const SubmitAddCategoryProduct = async event => {
        event.preventDefault();
        try{
            const addCategoryProductData = await AddCategoryProduct(addCategoryProductForm);
            if (!addCategoryProductData.success) {
                
            }
            else{
                
                setAddCategoryProductForm({nameCategoryProduct:''});
                setShowAddCategoryProductModal(false);
            }

        }catch(e){
            console.log(e);
        }
    }
    return(
        <Modal show={showAddCategoryProductModal} animation={true} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm loại sản phẩm</Modal.Title>
            </Modal.Header>
            <Form onSubmit={SubmitAddCategoryProduct}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="nameCategoryProduct" placeholder=" Tên loại sản phẩm" required aria-describedby="nameCategoryProduct-help" value={nameCategoryProduct} onChange={onChangeAddCategoryProductForm} />
                        <Form.Text id="nameCategoryProduct-help" muted>Requied</Form.Text>
                    </Form.Group>
                </Modal.Body>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeDialog}>Close</Button>
                <Button variant="primary" onClick={SubmitAddCategoryProduct}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TabAddCategory;