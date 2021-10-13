import {createContext, useReducer, useState} from 'react';
import {categoryProductReducer} from '../reducers/CategoryProductReducer';
import {apiUrl,CATEGORY_PRODUCT_FIND_BY_ID_LOADED_SUCCESS,CATEGORY_PRODUCT_FIND_BY_ID_LOADED_FAIL,CATEGORY_PRODUCT_LOADED_SUCCESS,CATEGORY_PRODUCT_LOADED_FAIL,CATEGORY_PRODUCT_ADDED,CATEGORY_PRODUCT_UPDATED,CATEGORY_PRODUCT_DELETED,CATEGORY_PRODUCT_FIND} from './Constants';
import axios from 'axios';

export const CategoryProductContext = createContext(); 

const CategoryProductContextProvider = ({children}) =>{
    const [categoryProductState, dispatch] = useReducer(categoryProductReducer,{
        categoryProduct:null,
        categoryProducts:[],
        categoryProductFindbyId:null,
        categoryProductLoading: true
    });

    const [showAddCategoryProductModal, setShowAddCategoryProductModal ] = useState(false);
    const [showEditCategoryProductModal, setShowEditCategoryProductModal ] = useState(false);
    // Get all children
    const getCategoryProducts = async() => {
        try {
            const response = await axios.get(`${apiUrl}/danhmucsanpham`);
            if(response.data.success) {
                dispatch({ type:CATEGORY_PRODUCT_LOADED_SUCCESS, payload: response.data.categoryProducts})
            }
        } catch (error) {
            dispatch({ type:CATEGORY_PRODUCT_LOADED_FAIL})   
        }
    }
    // Get children by Id
    const getCategoryProductById = async categoryProductId => {
        try {
            const response = await axios.get(`${apiUrl}/danhmucsanpham/categoryProduct/${categoryProductId}`);
            if(response.data.success) {
                dispatch({ type:CATEGORY_PRODUCT_FIND_BY_ID_LOADED_SUCCESS, payload: response.data.categoryProductFindbyId})
            }
        } catch (error) {
            dispatch({ type:CATEGORY_PRODUCT_FIND_BY_ID_LOADED_FAIL})   
        }
    }
    // Add item CategoryProduct
    const AddCategoryProduct = async categoryProductForm => {
        try {
            const response = await axios.post(`${apiUrl}/danhmucsanpham/themdanhmucsp`, categoryProductForm);  
            if(response.data.success){
                dispatch({ type:CATEGORY_PRODUCT_ADDED , payload: response.data.categoryProduct });
                return response.data;
            }        
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    // Find item CategoryProduct
    const FindCategoryProduct = categoryProductId => {
        const categoryProduct = categoryProductState.categoryProducts.find(categoryProduct => categoryProduct._id === categoryProductId);
        dispatch({ type: CATEGORY_PRODUCT_FIND, payload: categoryProduct})
    }
    // Edit item CategoryProduct
    const UpdateCategoryProduct = async UpdateCategoryProduct => {
        try {
            const response = await axios.put(`${apiUrl}/danhmucsanpham/${UpdateCategoryProduct._id}`,UpdateCategoryProduct);  
            if(response.data.success){
                dispatch({ type:CATEGORY_PRODUCT_UPDATED , payload: response.data.categoryProduct});
                getCategoryProducts();
                return response.data;
            }        
            
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    // Delete item CategoryProduct 
    const DeleteCategoryProduct = async categoryProductId => {
        try {
            const response = await axios.delete(`${apiUrl}/danhmucsanpham/${categoryProductId}`);  
            if(response.data.success){
                dispatch({ type:CATEGORY_PRODUCT_DELETED , payload: categoryProductId});
            }        
            return response.data;
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    //Context data
    const categoryProductContextData = { getCategoryProductById,categoryProductState , getCategoryProducts , showAddCategoryProductModal , setShowAddCategoryProductModal, AddCategoryProduct, UpdateCategoryProduct, DeleteCategoryProduct, showEditCategoryProductModal,setShowEditCategoryProductModal , FindCategoryProduct};

    //Return provider information
    return (
        <CategoryProductContext.Provider value={categoryProductContextData}>
            {children}
        </CategoryProductContext.Provider>
    );
}
export default CategoryProductContextProvider;
