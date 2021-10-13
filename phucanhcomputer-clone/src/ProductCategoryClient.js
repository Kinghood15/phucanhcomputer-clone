import React from 'react';
import styled from 'styled-components';
import TopClient from './layout/TopClient';
import HeadersClient from './layout/HeaderClient';
import NavBar from './layout/Navbar';
import Footer from './layout/Footer';
import SlideProductCategory from './layout/SlideProductCategory';
import BoxListCategoryProduct from './layout/BoxListCategoryProduct';

const ProductCategory = () => {
    return (
        <div>
            <TopClient />
            <HeadersClient />
            <Container className="container">
                <NavBar />
                <SlideProductCategory />
                <BoxListCategoryProduct />
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




