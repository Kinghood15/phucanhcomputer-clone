import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo2 from '../image/logo2.png';
import '../fontawesome-free-5.15.2-web/css/all.css';
import {AuthClientContext} from '../contexts/AuthClientContext';
const Header = (props) => {
    const {
        authClientState:{
            user:{cart}
        }
    } = useContext(AuthClientContext);
    return (
        <header className="header">
            <Container>
                <Logo className="header-logo">
                    <Link to='./'>
                        <img src={logo2} className="img-fluid" alt="logo" />
                    </Link>
                </Logo>
                <InputSearch className="header-search form">
                    <form>
                        <input type="text" placeholder="Nhập từ tìm kiếm " />
                        <select id="select-search">
                            <option value="product">Sản phẩm </option>
                            <option value="article">Bài viết </option>
                        </select>
                        <input type="submit" className='fas fa-search' value=" " />

                    </form>
                </InputSearch>
                <HotlineHeader id="header-hotline">
                    <p>Gọi mua hàng:<span> 1900 2164</span></p>
                </HotlineHeader>
                <CartHeader className="header-card">
                    <i className="fas fa-shopping-cart"></i>
                    <p>Giỏ hàng</p>
                    <b className='item-cart-number'>{cart.length}</b>
                </CartHeader>
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
const InputSearch = styled.div`
    width:40vw;
    max-width:40vw;
    height:35px;
    margin-top:35px;
    margin-left:25px;
    float: left;
    form {
        width:100%;
        height:100%;
        border: 1px solid red;
        input{
            border:0;
        }
        input[type=text]{
            padding: 0;
            padding-left: 15px;
            float:left;
            width:75%;
            height:100%;
        }
        input[type=text]:focus{
            outline-width: 0;
            outline: none;
        }
        select{
            height:30px;
            background-color: white;
            border: 0;
            width:100px;
            float:left;
            padding: 5px;
        }
        input[type=submit]{
            width:35px;
            height: 35px;
            float: right;
            background-color: red;
            background-image: url('./image/magnifying-glass.png');
        }
    }
`;
const HotlineHeader = styled.div`
    width: 20vw;
    color:red;
    float:left;
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
const CartHeader = styled.div`
    width:130px;
    height:40px;
    color: white;
    margin-top:20px;
    float: right; 
    display:flex;
    background-color: red;
    i{
        font-size:18px;
        line-height:35px;
        padding-left:5px;
    }
    p{
        padding:5px;
        margin: 0;
    }
    b{
        width:20px;
        height:20px;
        display:inline-block;
        margin-top:10px;
        text-align:center;
        background-color: white;
        border:1px solid white;
        border-radius: 100%;
        color: red;
        line-height:15px;
    }
`;

export default Header;