import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'react-bootstrap';
import logo2 from '../image/logo2.png'
import '../fontawesome-free-5.15.2-web/css/all.css'
const Header = (porps) => {
    return (
        <header className="header">
            <Container>
                <Logo className="header-logo">
                    <Link to='/'>
                        <img src={logo2} className="img-fluid" alt="logo" />
                    </Link>
                </Logo>
                <HotlineHeader id="header-hotline">
                    <p>Gọi mua hàng:<span> 1900 2164</span></p>
                </HotlineHeader>
            </Container>
        </header>
    );
}
const Container = styled.div`
    width: 90vw;
    height:120px;
    padding:0;
    margin:auto;
`;
const Logo = styled.div`
    float:left;
    max-width:300px;
    height:100%;
    a{
        img{
            margin-top:30px;
            width:250px;
            max-height:90px;
        }
    }
`;

const HotlineHeader = styled.div`
    width: 20vw;
    color:red;
    float:right;
    font-weight:400;
    text-align: center;
    padding:10px;
    font-size: 20px;
    span{
        font-weight: 700;
        font-size:25px;
        vertical-align: center;
    }
`;

export default Header;