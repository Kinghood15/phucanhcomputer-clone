import {createContext, useReducer, useState} from 'react';
import {productInvoiceReducer} from '../reducers/ProductInvoiceReducer';
import {apiUrl,PRODUCT_INVOICE_LOADED_SUCCESS,PRODUCT_INVOICE_LOADED_FAIL,PRODUCT_INVOICE_ADDED,PRODUCT_INVOICE_UPDATED,PRODUCT_INVOICE_DELETED,PRODUCT_INVOICE_FIND} from './Constants';
import axios from 'axios';


export const ProductInvoiceContext = createContext(); 

const ProductInvoiceContextProvider = ({children}) =>{
    const [productInvoiceState, dispatch] = useReducer(productInvoiceReducer,{
        productInvoice:null,
        productInvoices:[],
        productInvoiceLoading: true
    });

    const [showAddProductInvoiceModal, setShowAddProductInvoiceModal ] = useState(false);
    const [showEditProductInvoiceModal, setShowEditProductInvoiceModal ] = useState(false);
    // Get all children
    const getProductInvoices = async() => {
        try {
            const response = await axios.get(`${apiUrl}/hdsp`);
            if(response.data.success) {
                dispatch({ type:PRODUCT_INVOICE_LOADED_SUCCESS, payload: response.data.productInvoices})
            }
        } catch (error) {
            dispatch({ type:PRODUCT_INVOICE_LOADED_FAIL})   
        }
    }
    // Add item Product Invoice
    const AddProductInvoice = async productInvoiceForm => {
        try {
            const response = await axios.post(`${apiUrl}/hdsp/hoadonsanpham`, productInvoiceForm);  
            if(response.data.success){
                dispatch({ type:PRODUCT_INVOICE_ADDED , payload: response.data.productInvoice });
                return response.data;
            }        
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    // Add item Product Invoice
    const AddProductInvoiceClient = async productInvoiceForm => {
        try {
            const response = await axios.post(`${apiUrl}/hdsp/hoadonsanphamClient`, productInvoiceForm);  
            if(response.data.success){
                dispatch({ type:PRODUCT_INVOICE_ADDED , payload: response.data.productInvoice });
                return response.data;
            }        
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    // Find item product Invoice
    const FindProductInvoice = productInvoiceId => {
        const productInvoice = productInvoiceState.products.find(productInvoice => productInvoice._id === productInvoiceId);
        dispatch({ type: PRODUCT_INVOICE_FIND, payload: productInvoice})
    }
    // Edit item product Invoice
    const UpdateProductInvoice = async UpdateProductInvoice => {
        try {
            const response = await axios.put(`${apiUrl}/hdsp/${UpdateProductInvoice._id}`,UpdateProductInvoice);  
            if(response.data.success){
                dispatch({ type:PRODUCT_INVOICE_UPDATED , payload: response.data.productInvoice});
                getProductInvoices();
                return response.data;
            }        
            
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    // Delete item product Invoice
    const DeleteProductInvoice = async productInvoiceId => {
        try {
            const response = await axios.delete(`${apiUrl}/hdsp/${productInvoiceId}`);  
            if(response.data.success){
                dispatch({ type:PRODUCT_INVOICE_DELETED , payload: productInvoiceId});
            }        
            return response.data;
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    //Context data
    const productInvoiceContextData = { AddProductInvoiceClient, productInvoiceState , getProductInvoices , showAddProductInvoiceModal , setShowAddProductInvoiceModal, AddProductInvoice, UpdateProductInvoice, DeleteProductInvoice, showEditProductInvoiceModal,setShowEditProductInvoiceModal , FindProductInvoice};

    //Return provider information
    return (
        <ProductInvoiceContext.Provider value={productInvoiceContextData}>
            {children}
        </ProductInvoiceContext.Provider>
    );
}
export default ProductInvoiceContextProvider;
