import React from 'react';
import styled from 'styled-components';
import Top from './layout/Top';
import Headers from './layout/Header';
import NavBar from './layout/Navbar';
import Footer from './layout/Footer';
import BoxProductCart from './layout/BoxProductCart';

const ProductCart = ({cartItems,AddProductItem,RemoveProductItem}) => {
    return(
        <div>
            <Top />
            <Headers cartItems={cartItems} />
            <Container className="container">
                <NavBar />
                <BoxProductCart cartItems={cartItems} AddProductItem={AddProductItem} RemoveProductItem={RemoveProductItem} />
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
export default ProductCart;