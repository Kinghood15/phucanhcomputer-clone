import { Route, Redirect} from 'react-router-dom';
import { useContext } from 'react';
import { AuthClientContext } from '../contexts/AuthClientContext';
import Spinner from 'react-bootstrap/Spinner';
const ClientProtectedRoute = ({component:Component,...rest}) => {
    const { authClientState: {authClientLoading,isAutherticated}} = useContext(AuthClientContext)
    if(authClientLoading){
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
                <Redirect to='/' />
                <Component {...rest} {...props} />
            </>
        )} />
    )
}

export default ClientProtectedRoute;