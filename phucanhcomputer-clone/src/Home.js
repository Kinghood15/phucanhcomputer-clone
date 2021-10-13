import React from 'react';
import Top from './layout/Top';
import styled from 'styled-components';
import './Home.css';
import Headers from './layout/Header';
import './bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.css';
import AdvPopup from './layout/Adv-Popup';
import SlideRightAdv from './layout/SlideRightAdv';
import HomeSection from './layout/HomeSection';
import BoxListProduct from './layout/BoxListProduct.js';
import Footer from './layout/Footer';
import NavBarHome from './layout/NavbarHome';

const Home = ({AddProductItem,cartItems}) => {
  console.log(cartItems);
  return (
      <div>
          <AdvPopup/>
          <Top />
          <Headers cartItems={cartItems} />
          <Container className="container">
            <NavBarHome />
            <SlideRightAdv />
            <HomeSection />
            <BoxListProduct AddProductItem={AddProductItem}/>
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