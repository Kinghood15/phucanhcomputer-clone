import React from 'react';
import styled from 'styled-components';
import '../../bootstrap.css';
import '../../fontawesome-free-5.15.2-web/css/all.css';
import TabAddSupplier from './TabAddSupplier';
import TabEditSupplier from './TabEditSupplier';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import {SupplierContext} from '../../contexts/SupplierContext';
import { useContext, useEffect  } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const TabContent = () => {
    let i=1;
    //Contexts
    const {
        supplierState:{
            supplier,
            suppliers,
            supplierLoading },
        getSuppliers,
        setShowAddSupplierModal,
        DeleteSupplier,
        FindSupplier,
        setShowEditSupplierModal
    } = useContext(SupplierContext);

    const chooseSupplier = supplierId => {
        FindSupplier(supplierId);
        setShowEditSupplierModal(true);
    }
    // Start getAll supplier
    useEffect(() => getSuppliers(), []);

    let body=null;
    if(supplierLoading) {
        return(
            <Spinner animation="border" role="status" size="sm" style={{margin:"auto"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }else if(suppliers.length === 0){
        body = (
            <BoxSupplierNone>
                <i className="fas fa-exclamation-circle"></i>
                <h3>Sản phẩm trống </h3>
            </BoxSupplierNone>
        );
    }
    else{
        body = (
            <Table responsive="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên nhà cung cấp</th>
                        <th>Logo</th>
                        <th>Địa chỉ</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => (
                        <tr key={supplier._id}>
                            <td>{i++}</td>
                            <td>{supplier.nameSupplier}</td>
                            <td><img style={{height:"100px"}} src={supplier.ImageLogoSupplier} alt="Image" /></td>
                            <td>{supplier.addressSupplier}</td>
                            <td>{supplier.emailSupplier}</td>
                            <td>{supplier.phonenumberSupplier}</td>
                            <td><button alt="edit" onClick={chooseSupplier.bind(this,supplier._id)}><i className="fas fa-edit"></i></button></td>
                            <td><button alt="edit" onClick={DeleteSupplier.bind(this,supplier._id)}><i className="fas fa-trash"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
    return(
        <Containerr>
            <BoxAddSupplier id="BoxAddSupplier">
                <TabAddSupplier />
                {supplier !== null && <TabEditSupplier />}
            </BoxAddSupplier>
            <Title id="Title">
                <TitleButton>
                    <h2>Nhà cung cấp</h2>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            <Tooltip>
                                Thêm nhà cung cấp
                            </Tooltip>}
                    >
                        <button className="btn btn-primary" onClick={setShowAddSupplierModal.bind(this,true)} >Add new</button>
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
const BoxAddSupplier = styled.div`
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
const BoxSupplierNone = styled.div`
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