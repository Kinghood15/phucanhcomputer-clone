import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useState,useContext} from 'react';
import {AuthContext} from './contexts/AuthContext';
import AlertMessage from './layout/SystemDashboard/AlertMessage';
import './bootstrap.css';
import ImgBackground from './image/pc-gaming-tot-700x375.jpg';
const LoginAdmin = () => {
    //Context
    const {loginAdmin} = useContext(AuthContext);
    //Local state
    const [loginAdminForm,setLoginAdminForm] = useState({
        usernameAdmin:'',
        passwordAdmin:''
    });
    const [alert, setAlert] = useState(null)
    const {usernameAdmin, passwordAdmin} = loginAdminForm;
    const onChangeLoginAdminForm = event => {
        setLoginAdminForm({
            ...loginAdminForm, [event.target.name]:event.target.value
        })
    }
    const login = async event => {
        event.preventDefault();
        try{
            const loginAdminData = await loginAdmin(loginAdminForm);
            if (!loginAdminData.success) {
				setAlert({ type: 'danger', message: loginAdminData.message })
				setTimeout(() => setAlert(null), 5000)
			}

        }catch(e){
            console.log(e);
        }
    }
    return (
        <Login>
            <AlertMessage info={alert} />
            <BoxLogin>
                <h3>Đăng nhập vào Acodern</h3>
                <TitleRegister>
                    Tạo mới tài khoản tại đây ?
                    <Link to="/admin-acodern/register"> Tạo tài khoản mới </Link>
                </TitleRegister>
                <form onSubmit={login}>
                    <fieldset>
                        <FormGroup className="form-group">
                            <label for="exampleInputUsername" className="form-label mt-4">Tên đăng nhập</label>
                            <input type="text" className="form-control"  name="usernameAdmin" id="exampleInputUsername" placeholder="Tên đăng nhập" value={usernameAdmin} onChange={onChangeLoginAdminForm} />
                            <label for="exampleInputPassword" className="form-label mt-4">Mật khẩu</label>
                            <Link to='/'>Quên mật khẩu ? </Link>
                            <input type="password" className="form-control" name="passwordAdmin" id="exampleInputPassword" placeholder="Mật khẩu" value={passwordAdmin} onChange={onChangeLoginAdminForm} />
                            <input type="submit" className="btn btn-primary" value="Đăng nhập" name="submitLogin"/>
                        </FormGroup>
                    </fieldset>
                </form>
            </BoxLogin>
        </Login>
    );
}
const Login = styled.div`
    background: url(${ImgBackground});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    max-height:100%;
    position:relative;
`;
const BoxLogin = styled.div`
    max-width:28vw;
    max-height:80vh;
    width:28vw;
    height:500px;
    right:200px;
    top:calc(100% - 85%);
    position: absolute;
    border-shadow:3px 3px gray;
    background-color:white;
    border-radius:50px;
    h3{
        margin-top:20px;
        padding:5px;
        font-weight:700;
    }
    form{
        width:85%;
        height:68%;
        margin:auto;    
    }
`;
const FormGroup = styled.div`
    width:100%;
    text-align:left;
    a{
        margin-top:24px;
        margin-bottom:8px;
        float:right;
        text-decoration:none;
        :hover{
            color:red;
        }
    }
    input[type="submit"]{
        margin-top:30px;
        width:100%;
        height:50px;
        background-color:#0d6efd;
    }
`;
const TitleRegister = styled.div`
    width:85%;
    height:30px;
    margin:auto;
    text-align:left;
    a{
        text-decoration:none;
        :hover{
            color:red;
        }
    }
`;

export default LoginAdmin;