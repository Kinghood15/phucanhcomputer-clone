import React from 'react';
import styled from 'styled-components';
import TopClient from './layout/TopClient';
import HeadersClient from './layout/HeaderClient';
import NavBar from './layout/Navbar';
import Footer from './layout/Footer';


const ProductDetails = (props) => {
    return(
        <div>
            <TopClient />
            <HeadersClient />
            <Container className="container">
                <NavBar />
                
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
export default ProductDetails;