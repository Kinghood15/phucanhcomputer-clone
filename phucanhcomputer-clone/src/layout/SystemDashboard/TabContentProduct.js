import React from 'react';
import styled from 'styled-components';
import '../../bootstrap.css';
import '../../fontawesome-free-5.15.2-web/css/all.css';
import TabAddProduct from './TabAddProduct';
import TabEditProduct from './TabEditProduct';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import {ProductContext} from '../../contexts/ProductContext';
import { useContext, useEffect  } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const TabContent = () => {
    let i=1;
    //Contexts
    const {
        productState:{
            product,
            products,
            productLoading },
        getProducts,
        setShowAddProductModal,
        DeleteProduct,
        FindProduct,
        setShowEditProductModal
    } = useContext(ProductContext);
    
    const chooseProduct = ProductId => {
        FindProduct(ProductId);
        setShowEditProductModal(true);
    }
    // Start getAll supplier
    setTimeout(useEffect(() => getProducts(), []),5000);

    let body=null;
    if(productLoading) {
        return(
            <Spinner animation="border" role="status" size="sm" style={{margin:"auto",marginTop:"200px"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }else if(products.length === 0){
        body = (
        
            <BoxProductNone>
                <i className="fas fa-exclamation-circle"></i>
                <h3>Sản phẩm trống </h3>
            </BoxProductNone>
        );
    }
    else{
        body = (
            <Table responsive="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Xuất sứ</th>
                        <th>Tên danh mục sản phẩm</th>
                        <th>Mã sản phẩm</th>
                        <th>Số lượng sản phẩm tồn kho</th>
                        <th>Đơn giá</th>
                        <th>Hình ảnh sản phẩm</th>
                        <th>Model sản phẩm</th>
                        <th>CPU</th>
                        <th>Ghi chú</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{i++}</td>
                            <td>{product.nameProduct}</td>
                            <td>{product.originCategoryProduct}</td>
                            <td>{product.categoryproduct.nameCategoryProduct}</td>
                            <td>{product.supplierinvoice.codeproduct}</td>
                            <td>{product.supplierinvoice.quanlityDetails}</td>
                            <td>{product.supplierinvoice.importprice}</td>
                            <td><img style={{width:"100px",height:"100px"}} src={product.ImageurlProduct} alt="ImageProduct"/></td>
                            <td>{product.modelProduct}</td>
                            <td>{product.versionProduct}</td>
                            <td>{product.remarkProduct}</td>
                            <td><button alt="edit" onClick={chooseProduct.bind(this,product._id)}><i className="fas fa-edit"></i></button></td>
                            <td><button alt="delete" onClick={DeleteProduct.bind(this,product._id)}><i className="fas fa-trash"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
    return(
        <Containerr>
            <BoxAddProduct id="BoxAddProduct">
                <TabAddProduct />
                {product !== null && <TabEditProduct />}
            </BoxAddProduct>
            <Title id="Title">
                <TitleButton>
                    <h2>Sản phẩm</h2>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            <Tooltip>
                                Thêm sản phẩm
                            </Tooltip>}
                    >
                        <button className="btn btn-primary" onClick={setShowAddProductModal.bind(this,true)} >Add new</button>
                    </OverlayTrigger>,
                    
                </TitleButton>
                <InputSearch className="header-search form">
                    
                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </InputSearch>
            </Title>
            <BoxTable>
                <BoxSelectValue>
                    <select>
                        <option value="Ascending">Từ giảm dần đến tăng dần</option>
                        <option value="Descending">Từ tăng dần đến giảm dần</option>
                    </select>
                    <button className="btn btn-primary" >Apply</button>
                </BoxSelectValue>
                <>
                    {body}
                </>
            </BoxTable>
        </Containerr>
    );
}
const Containerr = styled.div`
`;
const BoxAddProduct = styled.div`
    width:100%;
    height:100%;
    display:none;
`;
const Title = styled.div`
    width:100%;
    height:100px;
    display:flex;
    justify-content:space-between;
    margin-bottom:30px;
`;
const TitleButton= styled.div`
    margin:30px;
    h2{
        float:left;
    }
    button{
        margin-left:30px;
        float:left;
    }
`;
const InputSearch = styled.div`
    margin:30px;
    float:right;
`;
const BoxProductNone = styled.div`
    width:650px;
    margin:auto;
    padding:50px;
    font-size:3.5rem;
`;
const BoxTable = styled.div`
    Table{
        tr{
            td{
                button{
                    margin:0;
                    padding:0;
                    border:0;

                    i{
                        color:var(--bs-blue);
                    }
                }
            }
        }
    }
`;
const BoxSelectValue = styled.div`
    float:left;
    select{
        height:38px;
    }
    button{
        margin-left:10px;
        line-height:25px;
    }
    margin:0 0 30px 30px;
`;
export default TabContent;