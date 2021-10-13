import React,{useContext,useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ProductContext} from '../../contexts/ProductContext';
import {CategoryProductContext} from '../../contexts/CategoryProductContext';
import {SupplierInvoiceContext} from '../../contexts/SupplierInvoiceContext';
import FileBase64 from 'react-file-base64';
const TabEditProduct = () => {

    const closeDialog = () => {
        setShowEditProductModal(false);
    }
    const {
        categoryProductState:{
            categoryProducts 
        },
        getCategoryProducts
    }  = useContext(CategoryProductContext);

    useEffect(() => getCategoryProducts(), []);
    const {
        supplierInvoiceState:{
            supplierInvoices 
        },
        getSupplierInvoices
    }  = useContext(SupplierInvoiceContext);

    useEffect(() => getSupplierInvoices(), []);
    //Context
    const {productState:{product},showEditProductModal, setShowEditProductModal,UpdateProduct } = useContext(ProductContext);
    //Local state
    
    const [editProductForm,setEditProductForm] = useState(product);
    const {nameProduct,originCategoryProduct,ImageurlProduct,ImageurlProductIn,ImageurlProductAfter,ImageurlProductBefore,modelProduct,versionProduct,descriptionProduct,remarkProduct,categoryProductId,supplierInvoiceId,priceProduct} = editProductForm;
    const onChangeEditProductForm = event => {
        setEditProductForm({
            ...editProductForm, [event.target.name]:event.target.value
        })
    }
    const SubmitEditProduct = async event => {
        event.preventDefault();
        try{
            const editProductData = await UpdateProduct(editProductForm);
            if (!editProductData.success) {
                
            }
            else{

                setShowEditProductModal(false);
            }

        }catch(e){
            console.log(e);
        }
    }
    function ChangeCategoryProduct(event){
        setEditProductForm({...editProductForm,categoryProductId: event.target.value})
    }
    function ChangeSupplierInvoice(event){
        setEditProductForm({...editProductForm,supplierInvoiceId: event.target.value})
    }
    return(
        <Modal show={showEditProductModal} animation={true} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm sản phẩm</Modal.Title>
            </Modal.Header>
            <Form onSubmit={SubmitEditProduct}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="nameProduct" placeholder=" Tên sản phẩm" required aria-describedby="nameProduct-help" value={nameProduct} onChange={onChangeEditProductForm} />
                        <Form.Text id="nameProduct-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <FileBase64 name="ImageUrlProduct" multiple={ false } onDone={({base64}) => setEditProductForm({...editProductForm,ImageurlProduct: base64 })} />
                    <div style={{width: '100%', height: '30px'}}>
                    </div>
                    <FileBase64 name="ImageurlProductIn" multiple={ false } onDone={({base64}) => setEditProductForm({...editProductForm,ImageurlProductIn: base64 })} />
                    <div style={{width: '100%', height: '30px'}}>
                    </div>
                    <FileBase64 name="ImageurlProductAfter" multiple={ false } onDone={({base64}) => setEditProductForm({...editProductForm,ImageurlProductAfter: base64 })} />
                    <div style={{width: '100%', height: '30px'}}>
                    </div>
                    <FileBase64 name="ImageurlProductBefore" multiple={ false } onDone={({base64}) => setEditProductForm({...editProductForm,ImageurlProductBefore: base64 })} />
                    <div style={{width: '100%', height: '30px'}}>
                    </div>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="originCategoryProduct" placeholder="Xuất sứ" required aria-describedby="originCategoryProduct-help" value={originCategoryProduct} onChange={onChangeEditProductForm} />
                        <Form.Text id="originCategoryProduct-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="modelProduct" placeholder="Model sản phẩm" required aria-describedby="modelProduct-help" value={modelProduct} onChange={onChangeEditProductForm} />
                        <Form.Text id="modelProduct-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="versionProduct" placeholder=" Version" required aria-describedby="versionProduct-help" value={versionProduct} onChange={onChangeEditProductForm} />
                        <Form.Text id="versionProduct-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <textarea style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="descriptionProduct" placeholder=" Mô tả" required aria-describedby="descriptionProduct-help" value={descriptionProduct} onChange={onChangeEditProductForm} />
                        <Form.Text id="descriptionProduct-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="priceProduct" placeholder=" Giá bán sản phẩm" required aria-describedby="priceProduct-help" value={priceProduct} onChange={onChangeEditProductForm} />
                        <Form.Text id="priceProduct-help" muted>Requied</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control style={{border:"0.5px solid black",padding:"10px"}}  type="text" className="form-control-plaintext" name="remarkProduct" placeholder=" Ghi chú" required aria-describedby="remarkProduct-help" value={remarkProduct} onChange={onChangeEditProductForm} />
                        <Form.Text id="remarkProduct-help" muted></Form.Text>
                    </Form.Group>
                    <Form.Label>
                        Danh mục sản phẩm
                    </Form.Label>
                    <Form.Select aria-label="Default select example" onChange={ChangeCategoryProduct}>
                        {categoryProducts.map(categoryProduct =>(
                            <option value={categoryProduct._id}>{categoryProduct.nameCategoryProduct}</option>
                        ))}
                    </Form.Select>
                    <Form.Label>
                        Hoá đơn nhập sản phẩm
                    </Form.Label>
                    <Form.Select aria-label="Default select example" onChange={ChangeSupplierInvoice}>
                        {supplierInvoices.map(supplierInvoice =>(
                            <option value={supplierInvoice._id}>{supplierInvoice.nameSupplierInvoice}</option>
                        ))}
                    </Form.Select>
                </Modal.Body>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeDialog}>Close</Button>
                <Button variant="primary" onClick={SubmitEditProduct}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TabEditProduct;