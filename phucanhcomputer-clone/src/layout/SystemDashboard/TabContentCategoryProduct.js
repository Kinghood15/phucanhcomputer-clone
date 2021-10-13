import React from 'react';
import styled from 'styled-components';
import '../../bootstrap.css';
import '../../fontawesome-free-5.15.2-web/css/all.css';
import TabAddCategoryProduct from './TabAddCategoryProduct';
import TabEditCategoryProduct from './TabEditCategoryProduct';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import {CategoryProductContext} from '../../contexts/CategoryProductContext';
import { useContext, useEffect  } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const TabContent = () => {
    let i=1;
    //Contexts
    const {
        categoryProductState:{
            categoryProduct,
            categoryProducts,
            categoryProductLoading },
        getCategoryProducts,
        setShowAddCategoryProductModal,
        DeleteCategoryProduct,
        FindCategoryProduct,
        setShowEditCategoryProductModal
    } = useContext(CategoryProductContext);
    const chooseCategoryProduct = categoryProductId => {
        FindCategoryProduct(categoryProductId);
        setShowEditCategoryProductModal(true);
    }
    // Start getAll supplier
    setTimeout( useEffect(() => getCategoryProducts(), []),10000);

    let body=null;
    if(categoryProductLoading) {
        return(
            <Spinner animation="border" role="status" size="sm" style={{margin:"auto",marginTop:"200px"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }else if(categoryProducts.length === 0){
        body = (
            <BoxCategoryProductNone>
                <i className="fas fa-exclamation-circle"></i>
                <h3>Danh mục sản phẩm trống </h3>
            </BoxCategoryProductNone>
        );
    }
    else{
        body = (
            <Table responsive="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên loại sản phẩm</th>
                        <th>Editor</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryProducts.map(categoryProduct => (
                        <tr key={categoryProduct._id}>
                            <td>{i++}</td>
                            <td>{categoryProduct.nameCategoryProduct}</td>
                            <td>{categoryProduct.userAdmin.usernameAdmin}</td>
                            <td><button alt="edit" onClick={chooseCategoryProduct.bind(this,categoryProduct._id)}><i className="fas fa-edit"></i></button></td>
                            <td><button alt="edit" onClick={DeleteCategoryProduct.bind(this,categoryProduct._id)}><i className="fas fa-trash"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
    return(
        <Containerr>
            <BoxAddCategory id="BoxAddCategory">
                <TabAddCategoryProduct />
                {categoryProduct !== null && <TabEditCategoryProduct />}
            </BoxAddCategory>
            <Title id="Title">
                <TitleButton>
                    <h2>Loại sản phẩm</h2>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            <Tooltip>
                                Thêm loại sản phẩm
                            </Tooltip>}
                    >
                        <button className="btn btn-primary" onClick={setShowAddCategoryProductModal.bind(this,true)} >Add new</button>
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
const BoxAddCategory = styled.div`
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
const BoxCategoryProductNone = styled.div`
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