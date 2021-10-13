import {createContext, useReducer, useEffect} from 'react';
import {authClientReducer} from '../reducers/AuthClientReducer';
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME_CLIENT,SET_AUTH_CLIENT} from './Constants';
import axios from 'axios';
import setAuthClientToken from '../Utils/setAuthClientToken';

export const AuthClientContext = createContext(); 

const AuthClientContextProvider = ({children}) =>{
    const [authClientState, dispatch] = useReducer(authClientReducer,{
        authClientLoading: true, 
        isAutherticated:false, 
        user: null
    });
    //Loading user User
    const loadingUser = async() =>{
        if(localStorage[LOCAL_STORAGE_TOKEN_NAME_CLIENT]){
            setAuthClientToken(localStorage[LOCAL_STORAGE_TOKEN_NAME_CLIENT]);
        }
        try {
            const response = await axios.get(`${apiUrl}/user`)
            if(response.data.success){
                dispatch({ 
                    type:SET_AUTH_CLIENT,
                    payload:{ isAutherticated:true,
                    user:response.data.user} 
                })
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME_CLIENT);
            setAuthClientToken(null);
            dispatch({ 
                type:SET_AUTH_CLIENT,
                payload:{isAutherticated:false, user:null}
            })
        }
    }
    useEffect(() => loadingUser(),[])
    //Login
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/user/login`,userForm);
            if(response.data.success) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME_CLIENT, response.data.accessToken);
            }
            await loadingUser();            
            return response.data;
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    //Register
    const registerUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/user/register`,userForm);
            if(response.data.success) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME_CLIENT, response.data.accessToken);
            }
            await loadingUser();            
            return response.data;
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    //Logout
    const logoutUser = () =>{
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME_CLIENT);
        dispatch({ 
            type:SET_AUTH_CLIENT,
            payload:{isAutherticated:false, user:null}
        })
    }
    //Context data
    const authClientContextData = {loginUser:loginUser, registerUser:registerUser, logoutUser , authClientState};

    //Return provider information
    return (
        <AuthClientContext.Provider value={authClientContextData}>
            {children}
        </AuthClientContext.Provider>
    );
}
export default AuthClientContextProvider;
