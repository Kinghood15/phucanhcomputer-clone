import {CategoryProductContext} from '../contexts/CategoryProductContext';
import {useContext,useEffect} from 'react';
import {Phone,Laptop,PC} from '../contexts/CategoryProduct';
export const SwitchCategoryProduct = ({categoryProduct:{_id},products}) =>{
    switch(_id){
        case Laptop:
            return(
                Laptop=products
            );
        case Phone:
            return(
                Phone=products
            );
        case PC:
            return(
                PC=products
            );
        default: return null;
        
    }

}
