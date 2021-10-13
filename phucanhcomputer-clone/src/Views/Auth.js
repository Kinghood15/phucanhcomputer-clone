import LoginAdmin from '../LoginAdmin';
import RegisterAdmin from '../RegisterAdmin';
// import ProductCategory from '../ProductCategory';
// import Home from '../Home';
// import ProductDetails from '../ProductDetails';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import {Redirect} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Auth = ({ authRoute }) => {
    const { authState: {authLoading,isAutherticated}} = useContext(AuthContext)
    if(authLoading){
        return(
        <Spinner animation="border" role="status" >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        );
    }else if(isAutherticated) return <Redirect to='/DataDashboard' />;
    else {
        return(
            <>
                {authRoute === 'loginAdmin' && <LoginAdmin/>}
                {authRoute === 'registerAdmin' && <RegisterAdmin/>}
            </>
        );
    }
}

export default Auth;

