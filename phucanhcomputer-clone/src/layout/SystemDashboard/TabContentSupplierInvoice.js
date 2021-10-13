import React from 'react';
import styled from 'styled-components';
import '../../bootstrap.css';
import '../../fontawesome-free-5.15.2-web/css/all.css';
import TabAddSupplierInvoice from './TabAddSupplierInvoice';
import TabEditSupplierInvoice from './TabEditSupplierInvoice';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import {SupplierInvoiceContext} from '../../contexts/SupplierInvoiceContext';
import { useContext, useEffect  } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const TabContent = () => {
    let i=1;
    //Contexts
    const {
        supplierInvoiceState:{
            supplierInvoice,
            supplierInvoices,
            supplierInvoiceLoading },
        getSupplierInvoices,
        setShowAddSupplierInvoiceModal,
        DeleteSupplierInvoice,
        FindSupplierInvoice,
        setShowEditSupplierInvoiceModal
    } = useContext(SupplierInvoiceContext);

    const chooseSupplierInvoice = supplierInvoiceId => {
        FindSupplierInvoice(supplierInvoiceId);
        setShowEditSupplierInvoiceModal(true);
    }
    // Start getAll SupplierInvoice
    useEffect(() => getSupplierInvoices(), []);

    let body=null;
    if(supplierInvoiceLoading) {
        return(
            <Spinner animation="border" role="status" size="sm" style={{margin:"auto"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            );
    }else if(supplierInvoices.length === 0){
        body = (
            <div style={{padding:"50px",fontSize:"50px"}}>
                <i className="fas fa-exclamation-circle"></i>
                <h3>Danh mục hoá đơn nhập trống </h3>
            </div>
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
                        <th>Ngày tạo</th>
                        <th>Mã sản phẩm </th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {supplierInvoices.map(supplierInvoice => (
                        <tr key={supplierInvoice._id}>
                            <td>{i++}</td>
                            <td>{supplierInvoice.nameSupplierInvoice}</td>
                            <td><img style={{width:"150px",height:"150px"}} src={supplierInvoice.ImageUrlSupplierInvoice} alt="Image" /></td>
                            <td>{supplierInvoice.createAtSupplierInvoice}</td>
                            <td>{supplierInvoice.codeproduct}</td>
                            <td>{supplierInvoice.quanlityDetails}</td>
                            <td>{supplierInvoice.importprice}</td>
                            <td><button alt="edit" onClick={chooseSupplierInvoice.bind(this,supplierInvoice._id)}><i className="fas fa-edit"></i></button></td>
                            <td><button alt="edit" onClick={DeleteSupplierInvoice.bind(this,supplierInvoice._id)}><i className="fas fa-trash"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
    return(
        <Containerr>
            <BoxAddSupplierInvoice id="BoxAddSupplierInvoice">
                <TabAddSupplierInvoice />
                {supplierInvoice !== null && <TabEditSupplierInvoice />}
            </BoxAddSupplierInvoice>
            <Title id="Title">
                <TitleButton>
                    <h2>Hoá đơn nhập nhà cung cấp</h2>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            <Tooltip>
                                Thêm hoá đơn nhập
                            </Tooltip>}
                    >
                        <button className="btn btn-primary" onClick={setShowAddSupplierInvoiceModal.bind(this,true)} >Add new</button>
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
const BoxAddSupplierInvoice = styled.div`
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