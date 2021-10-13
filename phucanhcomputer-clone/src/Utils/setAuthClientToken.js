import axios from 'axios';

const setAuthClientToken = token =>{
    if(token){
        axios.defaults.headers.common['AuthorizationUser'] = `Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common['AuthorizationUser'];
    }
}   
export default setAuthClientToken;