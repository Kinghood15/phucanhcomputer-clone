import React from 'react';
import TopClient from './layout/TopClient';
import styled from 'styled-components';
import './Home.css';
import HeadersClient from './layout/HeaderClient';
import './bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.css';
import AdvPopup from './layout/Adv-Popup';
import SlideRightAdv from './layout/SlideRightAdv';
import HomeSection from './layout/HomeSection';
import BoxListProduct from './layout/BoxListProduct.js';
import Footer from './layout/Footer';
import NavBarHome from './layout/NavbarHome';
import {CategoryProductContext} from './contexts/CategoryProductContext';
import {useContext,useEffect} from 'react';
const Home = () => {
  const {
    categoryProductState:{
      categoryProducts },
    getCategoryProducts
  } = useContext(CategoryProductContext);
  let body= null;
  useEffect(() => getCategoryProducts(), []);
  if(categoryProducts.length > 0) {
      body = (
        categoryProducts.map(categoryProduct => (
          <BoxListProduct  categoryProduct={categoryProduct} />
        ))
      );
  }
    return (
        <div>
            <AdvPopup/>
            <TopClient />
            <HeadersClient />
            <Container className="container">
              <NavBarHome />
              <SlideRightAdv />
              <HomeSection />
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
export default Home;