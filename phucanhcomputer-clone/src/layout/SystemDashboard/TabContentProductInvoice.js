/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import '../../bootstrap.css';
import '../../fontawesome-free-5.15.2-web/css/all.css';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import {ProductInvoiceContext} from '../../contexts/ProductInvoiceContext';
import { useContext, useEffect  } from 'react';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';

const TabContent = () => {
    let i=1;
    //Contexts
    const {
        productInvoiceState:{
            productInvoices,
            productInvoiceLoading },
        getProductInvoices,
        DeleteProductInvoice,
        FindProductInvoice,
        setShowEditProductInvoiceModal
    } = useContext(ProductInvoiceContext);

    const chooseProductInvoice = productInvoiceId => {
        FindProductInvoice(productInvoiceId);
        setShowEditProductInvoiceModal(true);
    }
    // Start getAll ProductInvoice
    useEffect(() => getProductInvoices(), []);

    let body=null;
    if(productInvoiceLoading) {
        return(
            <Spinner animation="border" role="status" size="sm" style={{margin:"auto"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            );
    }else if(productInvoices.length === 0){
        body = (
        
            <BoxProductInvoiceNone>
                <i className="fas fa-exclamation-circle"></i>
                <h3>Đơn hàng sản phẩm trống </h3>
            </BoxProductInvoiceNone>
        );
    }
    else{
        body = (
            <Table responsive="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên hoá đơn nhập</th>
                        <th>Hình ảnh nhập</th>
                        <th>Tên khách hàng</th>
                        <th>Địa chỉ thông tin khách hàng</th>
                        <th>Số điện thoại khách hàng</th>
                        <th>Ngày tạo</th>
                        <th>Mã sản phẩm </th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {productInvoices.map(productInvoice => (
                        <tr key={productInvoice._id}>
                            <td>{i++}</td>
                            <td>{productInvoice.product.nameProduct}</td>
                            <td><img src={productInvoice.ImageUrlProductInvoice} alt="Image" /></td>
                            <td>{productInvoice.client.nameClient}</td>
                            <td>{productInvoice.client.addressClient}</td>
                            <td>{productInvoice.client.phonenumberClient}</td>
                            <td>{productInvoice.createAtProductInvoice}</td>
                            <td>{productInvoice.quanlityProductInvoice}</td>
                            <td>{productInvoice.totalpriceProductInvoice}</td>
                            <td>{productInvoice.remarkProductInvoice}</td>
                            <td><button alt="edit" onClick={chooseProductInvoice.bind(this,productInvoice._id)}><i className="fas fa-edit"></i></button></td>
                            <td><button alt="edit" onClick={DeleteProductInvoice.bind(this,productInvoice._id)}><i className="fas fa-trash"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
    return(
        <Containerr>
            <Title id="Title">
                <TitleButton>
                    <h2>Hoá đơn </h2>
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
const BoxProductInvoiceNone = styled.div`
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