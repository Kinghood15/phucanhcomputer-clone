import React from 'react';
import styled from 'styled-components';
import Top from './layout/Top';
import Headers from './layout/Header';
import NavBar from './layout/Navbar';
import Footer from './layout/Footer';
import SlideProductCategory from './layout/SlideProductCategory';
import BoxListCategoryProduct from './layout/BoxListCategoryProduct';
import {CategoryProductContext} from './contexts/CategoryProductContext';
import {useParams} from 'react-router-dom';
import {useContext,useEffect} from 'react';
import Spinner from 'react-bootstrap/Spinner';
const ProductCategory = ({AddProductItem,cartItems}) => {
    const { id } = useParams();
    const {
        categoryProductState:{
            categoryProductFindbyId,
            categoryProductLoading },
        getCategoryProductById
    } = useContext(CategoryProductContext);
    useEffect(() => getCategoryProductById(id), []);
    let body=null;
    if(categoryProductLoading) {
        return(
            <Spinner animation="border" role="status" size="sm" style={{margin:"auto",marginTop:"200px"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }
    else if(categoryProductFindbyId.length === 0){
        body=(
            <div>
                <h4>Hiện tại danh mục này chưa cập nhật sản phẩm </h4>
            </div>
        );
    }else{
        if(categoryProductFindbyId !== null){
            body=(
                <BoxListCategoryProduct AddProductItem={AddProductItem} />
            );
        }
        
    }
    return (
        <div>
            <Top />
            <Headers cartItems={cartItems}/>
            <Container className="container">
                <NavBar />
                <SlideProductCategory />
                {body}
            </Container>
            <Footer />
        </div>
    );
}

const Container = styled.div`
    max-width:90vw;
    width:90vw;
    margin:auto;
    padding:0;
`;
export default ProductCategory;




