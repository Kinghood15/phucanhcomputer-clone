import {createContext, useReducer, useState} from 'react';
import {productReducer} from '../reducers/ProductReducer';
import {apiUrl,PRODUCT_LOADED_SUCCESS,PRODUCT_LOADED_FAIL,PRODUCT_ADDED,PRODUCT_UPDATED,PRODUCT_DELETED,PRODUCT_FIND,PRODUCTS_FIND,PRODUCTS_LOADED_SUCCESS,PRODUCTS_LOADED_FAIL} from './Constants';
import axios from 'axios';


export const ProductContext = createContext(); 

const ProductContextProvider = ({children}) =>{
    const [productState, dispatch] = useReducer(productReducer,{
        product:null,
        products:[],
        productFinds:[],
        productLoading: true
    });

    const [showAddProductModal, setShowAddProductModal ] = useState(false);
    const [showEditProductModal, setShowEditProductModal ] = useState(false);
    // Get all children
    const getProducts = async() => {
        try {
            const response = await axios.get(`${apiUrl}/sanpham`);
            if(response.data.success) {
                dispatch({ type:PRODUCT_LOADED_SUCCESS, payload: response.data.products})
            }
        } catch (error) {
            dispatch({ type:PRODUCT_LOADED_FAIL})   
        }
    }
    // Get children by Id
    const getProductsbyId = async productID => {
        try {
            const response = await axios.get(`${apiUrl}/sanpham/${productID}`);
            if(response.data.success) {
                dispatch({ type:PRODUCT_LOADED_SUCCESS, payload: response.data.products})
            }
        } catch (error) {
            dispatch({ type:PRODUCT_LOADED_FAIL})   
        }
    }
    // Get children by Id
    const getQuantityProductsbyId = async productID => {
        try {
            const response = await axios.get(`${apiUrl}/sanpham/ProductId/quanlityDetails/${productID}`);
            if(response.data.success) {
                dispatch({ type:PRODUCT_LOADED_SUCCESS, payload: response.data.products})
            }
        } catch (error) {
            dispatch({ type:PRODUCT_LOADED_FAIL})   
        }
    }
    // Add item Product
    const AddProduct = async productForm => {
        try {
            const response = await axios.post(`${apiUrl}/sanpham/themsanpham`, productForm);  
            if(response.data.success){
                getProducts();
                dispatch({ type:PRODUCT_ADDED , payload: response.data.product });
                return response.data;
            }        
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    //Find items product by category product 
    // Get all children
    const getProductsbyCategoryProduct = async categoryProductId => {
        try {
            const response = await axios.get(`${apiUrl}/sanpham/categoryProductId/${categoryProductId}`);
            if(response.data.success) {
                dispatch({ type:PRODUCTS_LOADED_SUCCESS, payload: response.data.products})
                
            }
        } catch (error) {
            dispatch({ type:PRODUCTS_LOADED_FAIL})   
        }
    }
    // Get all children
    // const getProductsbyCategoryProduct = async categoryProductId => {
    //     try {
    //         const response = await axios.get(`${apiUrl}/sanpham/categoryProductId/${categoryProductId}`);
    //         if(categoryProductId === '6159fa47267b752d7ee4cb33'){
    //             if(response.data.success) {
    //                 dispatch({ type:PRODUCTS_LOADED_SUCCESS, payload: response.data.Laptops})
                    
    //             }
    //         }
    //         if(categoryProductId === '615b6dcdb2ee834c5cbb5ba3'){
    //             if(response.data.success) {
    //                 dispatch({ type:PRODUCTS_LOADED_SUCCESS, payload: response.data.Phones})
                    
    //             }
    //         }
    //     } catch (error) {
    //         dispatch({ type:PRODUCTS_LOADED_FAIL})   
    //     }
    // }
    const FindCategoryProduct = categoryProductId => {
        const productFinds = productState.products.find(productFinds => productFinds.categoryproduct.ObjectId === categoryProductId);
        dispatch({ type: PRODUCTS_FIND, payload: productFinds});
        return productFinds;
    }
    // Find item product
    const FindProduct = productId => {
        const product = productState.products.find(product => product._id === productId);
        dispatch({ type: PRODUCT_FIND, payload: product})
    }
    // Edit item product
    const UpdateProduct = async UpdateProduct => {
        try {
            const response = await axios.put(`${apiUrl}/sanpham/${UpdateProduct._id}`,UpdateProduct);  
            if(response.data.success){
                dispatch({ type:PRODUCT_UPDATED , payload: response.data.product});
                getProducts();
                return response.data;
            }        
            
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    // Delete item product 
    const DeleteProduct = async productId => {
        try {
            const response = await axios.delete(`${apiUrl}/sanpham/${productId}`);  
            if(response.data.success){
                dispatch({ type:PRODUCT_DELETED , payload: productId});
            }        
            return response.data;
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    //Context data
    const productContextData = {getQuantityProductsbyId,getProductsbyId, productState , getProducts , showAddProductModal , setShowAddProductModal, FindCategoryProduct,AddProduct, UpdateProduct, DeleteProduct, showEditProductModal,setShowEditProductModal , FindProduct,getProductsbyCategoryProduct};

    //Return provider information
    return (
        <ProductContext.Provider value={productContextData}>
            {children}
        </ProductContext.Provider>
    );
}
export default ProductContextProvider;
