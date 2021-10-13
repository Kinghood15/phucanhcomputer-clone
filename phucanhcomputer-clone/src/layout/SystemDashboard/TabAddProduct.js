import React,{useContext,useState,useEffect,useRef} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ProductContext} from '../../contexts/ProductContext';
import {CategoryProductContext} from '../../contexts/CategoryProductContext';
import {SupplierInvoiceContext} from '../../contexts/SupplierInvoiceContext';
import FileBase64 from 'react-file-base64';
import Spinner from 'react-bootstrap/Spinner';
const TabAddProduct = () => {
    const {showAddProductModal, setShowAddProductModal } = useContext(ProductContext);
    const editor = useRef(null);
    const config = {
		readonly: false 
	}
    const closeDialog = () => {
        setShowAddProductModal(false);
        setAddProductForm({
            nameProduct:'',
            originCategoryProduct:'',
            ImageurlProduct:'',
            ImageurlProductIn:'',
            ImageurlProductAfter:'',
            ImageurlProductBefore:'',
            modelProduct:'',
            versionProduct:'',
            descriptionProduct:'',
            remarkProduct:'',
            categoryProductId:'',
            supplierInvoiceId:'',
            priceProduct:''
        })
    }
    const {
        categoryProductState:{
            categoryProducts 
        }
    }  = useContext(CategoryProductContext);
    const {
        supplierInvoiceState:{
            supplierInvoices,
            supplierInvoiceLoading 
        },
        getSupplierInvoices
    }  = useContext(SupplierInvoiceContext);

    useEffect(() => getSupplierInvoices(), []);
    //Context
    const {AddProduct} = useContext(ProductContext);
    //Local state
    const [addProductForm,setAddProductForm] = useState({
        nameProduct:'',
        originCategoryProduct:'',
        ImageurlProduct:'',
        ImageurlProductIn:'',
        ImageurlProductAfter:'',
        ImageurlProductBefore:'',
        modelProduct:'',
        versionProduct:'',
        descriptionProduct:'',
        remarkProduct:'',
        categoryProductId:'',
        supplierInvoiceId:'',
        priceProduct:''
    });
    const {nameProduct,originCategoryProduct,ImageurlProduct,ImageurlProductIn,ImageurlProductAfter,ImageurlProductBefore,modelProduct,versionProduct,descriptionProduct,remarkProduct,categoryProductId,supplierInvoiceId,priceProduct} = addProductForm;
    const onChangeAddProductForm = event => {
        setAddProductForm({
            ...addProductForm, [event.target.name]:event.target.value
        })
    }
    const SubmitAddProduct = async event => {
        event.preventDefault();
        try{
            const addProductData = await AddProduct(addProductForm);
            if (!addProductData.success) {
                
            }
            else{
                
                setAddProductForm({
                    nameProduct:'',
                    originCategoryProduct:'',
                    ImageurlProduct:'',
                    ImageurlProductIn:'',
                    ImageurlProductAfter:'',
                    ImageurlProductBefore:'',
                    modelProduct:'',
                    versionProduct:'',
                    descriptionProduct:'',
                    remarkProduct:'',
                    categoryProductId:'',
                    supplierInvoiceId:'',
                    priceProduct:''
                });
                setShowAddProductModal(false);
            }

        }catch(e){
            console.log(e);
        }
    }
    function ChangeCategoryProduct(event){
        setAddProductForm({...addProductForm,categoryProductId: event.target.value})
    }
    function ChangeSupplierInvoice(event){
        setAddProductForm({...addProductForm,supplierInvoiceId: event.target.value})
    }
    if(supplierInvoiceLoading){
        return(
            <Spinner animation="border" role="status" size="sm" style={{margin:"auto"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    } else if(supplierInvoices.length > 0){
        return(
            <Modal show={showAddProductModal} animation={true} onHide={closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm sản phẩm</Modal.Title>
                </Modal.Header>
                <Form onSubmit={SubmitAddProduct}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="nameProduct" placeholder=" Tên sản phẩm" required aria-describedby="nameProduct-help" value={nameProduct} onChange={onChangeAddProductForm} />
                            <Form.Text id="nameProduct-help" muted>Requied</Form.Text>
                        </Form.Group>
                        <FileBase64 name="ImageUrlProduct" multiple={ false } onDone={({base64}) => setAddProductForm({...addProductForm,ImageurlProduct: base64 })} />
                        <div style={{width: '100%', height: '30px'}}>
                        </div>
                        <FileBase64 name="ImageurlProductIn" multiple={ false } onDone={({base64}) => setAddProductForm({...addProductForm,ImageurlProductIn: base64 })} />
                        <div style={{width: '100%', height: '30px'}}>
                        </div>
                        <FileBase64 name="ImageurlProductAfter" multiple={ false } onDone={({base64}) => setAddProductForm({...addProductForm,ImageurlProductAfter: base64 })} />
                        <div style={{width: '100%', height: '30px'}}>
                        </div>
                        <FileBase64 name="ImageurlProductBefore" multiple={ false } onDone={({base64}) => setAddProductForm({...addProductForm,ImageurlProductBefore: base64 })} />
                        <div style={{width: '100%', height: '30px'}}>
                        </div>
                        <Form.Group>
                            <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="originCategoryProduct" placeholder="Xuất sứ" required aria-describedby="originCategoryProduct-help" value={originCategoryProduct} onChange={onChangeAddProductForm} />
                            <Form.Text id="originCategoryProduct-help" muted>Requied</Form.Text>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="modelProduct" placeholder="Model sản phẩm" required aria-describedby="modelProduct-help" value={modelProduct} onChange={onChangeAddProductForm} />
                            <Form.Text id="modelProduct-help" muted>Requied</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="versionProduct" placeholder=" Version" required aria-describedby="versionProduct-help" value={versionProduct} onChange={onChangeAddProductForm} />
                            <Form.Text id="versionProduct-help" muted>Requied</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            {/* <JoditEditor ref={editor} value={descriptionProduct} config={config} name="descriptionProduct" tabIndex={1} onChange={onChangeAddProductForm} /> */}
                            <textarea style={{border:"0.5px solid black",padding:"10px"}} className="form-control-plaintext" name="descriptionProduct" placeholder=" Mô tả" required aria-describedby="descriptionProduct-help" value={descriptionProduct} onChange={onChangeAddProductForm} />
                            <Form.Text id="descriptionProduct-help" muted>Requied</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="priceProduct" placeholder=" Giá bán sản phẩm" required aria-describedby="priceProduct-help" value={priceProduct} onChange={onChangeAddProductForm} />
                            <Form.Text id="priceProduct-help" muted>Requied</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control style={{border:"0.5px solid black",padding:"10px"}} type="text" className="form-control-plaintext" name="remarkProduct" placeholder=" Ghi chú" required aria-describedby="remarkProduct-help" value={remarkProduct} onChange={onChangeAddProductForm} />
                            <Form.Text id="remarkProduct-help" muted></Form.Text>
                        </Form.Group>
                        <Form.Label>
                            Danh mục sản phẩm
                        </Form.Label>
                        <Form.Select aria-label="Default select example" onChange={ChangeCategoryProduct} default={categoryProducts[0]._id} >
                            {categoryProducts.map(categoryProduct =>(
                                <option value={categoryProduct._id}>{categoryProduct.nameCategoryProduct}</option>
                            ))}
                        </Form.Select>
                        <Form.Label>
                            Hoá đơn nhập sản phẩm
                        </Form.Label>
                        <Form.Select default={supplierInvoices[0]._id} aria-label="Default select example" onChange={ChangeSupplierInvoice}>
                            {supplierInvoices.map(supplierInvoice =>(
                                <option value={supplierInvoice._id}>{supplierInvoice.nameSupplierInvoice}</option>
                            ))}
                        </Form.Select>
                    </Modal.Body>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDialog}>Close</Button>
                    <Button variant="primary" onClick={SubmitAddProduct}>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    
}

export default TabAddProduct;