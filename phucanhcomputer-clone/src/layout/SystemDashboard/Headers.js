import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../bootstrap.css';
import logo2 from '../../image/logo2.png';
import account from '../../image/account.png';
import '../../fontawesome-free-5.15.2-web/css/all.css';
import {AuthContext} from '../../contexts/AuthContext';
import {useContext} from 'react';
const Headers = (props) => {
    const { 
        authState: { userAdmin: {usernameAdmin}},logoutAdmin
    } = useContext(AuthContext);
    const logout = () =>logoutAdmin();
    return (
        <header className="header">
            <Header>
                <Container>
                    <Logo className="header-logo">
                        <Link to='./'>
                            <img src={logo2} className="img-fluid" alt="logo" />
                        </Link>
                    </Logo>
                    <InputSearch className="header-search form">
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </InputSearch>
                    <BoxUser>
                        <User>
                            <ImageUser>
                                <img src={account} name="accountAdmin" alt="accountAdmin" />
                                <BoxEditor>
                                    <ul>
                                        <li>Welcome {usernameAdmin}</li>
                                        <li><Link to="">Đặt lại mật khẩu</Link></li>
                                        <li><Link onClick={logout}>Đăng xuẩt</Link></li>
                                    </ul>
                                </BoxEditor>
                            </ImageUser>
                        </User>
                        <Notification>
                            <i class="fas fa-bell"></i>
                        </Notification>
                        
                    </BoxUser>
                </Container>
            </Header>   
        </header>
    );
}
const Header = styled.div`
    width: 100%;
    height:120px;
    background-color: white;
    border-bottom: 1px solid gray;
`;
const Container = styled.div`
    width: 80vw;
    height:100%;
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
    width:25vw;
    max-width:30vw;

    height:35px;
    margin:35px 150px;
    float: left;
    form {
        width:100%;
        height:100%;
        
        input[type=text]{
            width:150px;
            height: 35px;
            float: right
            color: #9e9ea7;
            transition: width 2s;
            border-radius:10px;
            :hover{
                width:100%;
                height:100%; 
            }
        }
        button{
            line-height:5px;
            background-color:var(--bs-gray-600);
            border-radius:10px;
            :hover{
                background-color:var(--bs-gray-600);
            }
        }
        :hover input[type=text]{
            width:100%;
            height:100%;
            transition: width 2s;
        }
    }
`;
const BoxUser = styled.div`
    width:15vw;
    height:100%;
    float:right;
`;
const Notification = styled.div`
    width:40px;
    height:40px;
    margin-top:40px;
    margin-right:15px;
    margin-left:15px;
    border-radius:100%;
    background-color:black;
    float:right;
    color:white;
    i{
        font-size:20px;
        line-height:40px;
    }
`;
const User = styled.div`
    width:50px;
    height:50px;
    margin-top:35px;
    margin-right:15px;
    margin-left:15px;
    border-radius:100%;
    float:right;
    position:relative;
`;
const ImageUser = styled.div`
    img{
        width:50px;
        height:50px;
    }
`;
const BoxEditor = styled.div`
    width:180px;
    height:100px;
    border-radius:10%;
    position:absolute;
    top:50px;
    box-shadow:3px 3px 3px black;
    right:0px;
    background-color:#f2f1f1;
    display:none;
    z-index:10;
    ul{
        list-style:none;
        text-align:left;
        padding:15px;
        li{
            a{
                text-decoration:none;
                color:black;
                :hover {
                    text-decoration:underline;
                    color:red;
                }
            }
        }
    }
    ${User}:hover && {
        display:block;
    }
`;
export default Headers;