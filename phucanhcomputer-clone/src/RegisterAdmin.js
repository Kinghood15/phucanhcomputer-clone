import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useState,useContext} from 'react';
import {AuthContext} from './contexts/AuthContext';
import AlertMessage from './layout/SystemDashboard/AlertMessage';
import './bootstrap.css';
import ImgBackground from './image/pc-gaming-tot-700x375.jpg';
const RegisterAdmin = (props) => {
    //Context
    const {registerAdmin} = useContext(AuthContext);
    //Local state
    const [registerAdminForm,setRegisterAdminForm] = useState({
        usernameAdmin:'',
        passwordAdmin:'', 
        confirmpasswordAdmin:''
    });
    const [alert, setAlert] = useState(null)
    const {usernameAdmin, passwordAdmin, confirmpasswordAdmin, confirmCheckbox} = registerAdminForm;
    const onChangeRegisterAdminForm = event => {
        setRegisterAdminForm({
            ...registerAdminForm, [event.target.name]:event.target.value || event.target.checked
        })
    }
    const register = async event => {
        event.preventDefault();
        try{
            if(confirmCheckbox === true) {
                const registerAdminData = await registerAdmin(registerAdminForm);
                if (!registerAdminData.success) {
                    setAlert({ type: 'danger', message: registerAdminData.message })
                    setTimeout(() => setAlert(null), 5000)
                }
            }
            else{
                setAlert({ type: 'danger', message: ' Bạn chưa tích vào Tôi đồng ý các điều khoản và quyết định này' })
                setTimeout(() => setAlert(null), 5000)
            }
            
        }catch(e){
            console.log(e);
        }
    }
    return(
        <Register>
            <AlertMessage info={alert} />
            <BoxRegister>
                <h3>Đăng ký vào thành viên của công ty Acodern</h3>
                <TitleRegister>
                    Bạn có tài khoản tại đây ?
                    <Link to="/login"> Đăng nhập </Link>
                </TitleRegister>
                <form onSubmit={register}>
                    <fieldset>
                        <FormGroup className="form-group">

                            <label for="exampleInputUsername" className="form-label mt-2">Tên đăng nhập</label>
                            <input type="text" className="form-control"  name="usernameAdmin" id="exampleInputUsername" placeholder="Tên đăng nhập" value={usernameAdmin} onChange={onChangeRegisterAdminForm} />

                            <label for="exampleInputPassword" className="form-label mt-2">Mật khẩu</label>
                            <input type="password" className="form-control"  name="passwordAdmin" id="exampleInputPassword" placeholder="Mật khẩu" value={passwordAdmin} onChange={onChangeRegisterAdminForm} />
                            <label for="exampleInputConfirmPassword" className="form-label mt-2">Xác nhận mật khẩu</label>
                            <input type="password" className="form-control" name="confirmpasswordAdmin" id="exampleInputConfirmPassword" placeholder="Xác nhận mật khẩu"  value={confirmpasswordAdmin} onChange={onChangeRegisterAdminForm} />
                            <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" name="confirmCheckbox" onChange={onChangeRegisterAdminForm} />
                            <label class="form-check-label" for="flexCheckDefault"> Tôi đồng ý với các điều khoản và quyết định này.</label>
                            <input type="submit" className="btn btn-outline-primary" value="Đăng ký" name="submitRegister"/>
                        </FormGroup>
                    </fieldset>
                </form>
            </BoxRegister>
        </Register>
    );
}

const Register = styled.div`
    background: url(${ImgBackground});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position:relative;
`;
const BoxRegister = styled.div`
    max-width:28vw;
    max-height:85vh;
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
        height:85%;
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
    input[type="checkbox"]{
        margin-right:5px;
    }
    input[type="submit"]{
        margin-top:20px;
        width:100%;
        height:50px;
        background-color:black;
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
export default RegisterAdmin;