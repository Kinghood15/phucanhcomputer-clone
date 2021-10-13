import { Route, Redirect} from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext';
import Spinner from 'react-bootstrap/Spinner';
const ProtectedRoute = ({component:Component,...rest}) => {
    const { authState: {authLoading,isAutherticated}} = useContext(AuthContext)
    if(authLoading){
        return(
        <Spinner animation="border" role="status" >
            <span className="visually-hidden">Loading...</span>

        </Spinner>
        );
    } 
    return (
        <Route {...rest} render={props => isAutherticated ? (
            <>
                <Component {...rest} {...props} />
            </>
        ) : (
            <>
                <Redirect to='/admin-acodern/login' />
            </>
        )} />
    )
}

export default ProtectedRoute;