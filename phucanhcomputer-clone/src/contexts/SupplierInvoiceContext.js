import {createContext, useReducer, useState} from 'react';
import {supplierInvoiceReducer} from '../reducers/SupplierInvoiceReducer';
import {apiUrl,SUPPLIERS_INVOICE_LOADED_SUCCESS,SUPPLIERS_INVOICE_LOADED_FAIL,SUPPLIERS_INVOICE_ADDED,SUPPLIERS_INVOICE_UPDATED,SUPPLIERS_INVOICE_DELETED,SUPPLIERS_INVOICE_FIND} from './Constants';
import axios from 'axios';


export const SupplierInvoiceContext = createContext(); 

const SupplierInvoiceContextProvider = ({children}) =>{
    const [supplierInvoiceState, dispatch] = useReducer(supplierInvoiceReducer,{
        supplierInvoice:null,
        supplierInvoices:[],
        supplierInvoiceLoading: true
    });

    const [showAddSupplierInvoiceModal, setShowAddSupplierInvoiceModal ] = useState(false);
    const [showEditSupplierInvoiceModal, setShowEditSupplierInvoiceModal ] = useState(false);
    // Get all children
    const getSupplierInvoices = async() => {
        try {
            const response = await axios.get(`${apiUrl}/hdncc`);
            if(response.data.success) {
                dispatch({ type:SUPPLIERS_INVOICE_LOADED_SUCCESS, payload: response.data.supplierInvoices})
            }
        } catch (error) {
            dispatch({ type:SUPPLIERS_INVOICE_LOADED_FAIL})   
        }
    }
    // Add item SupplierInvoice
    const AddSupplierInvoice = async supplierInvoiceForm => {
        try {
            const response = await axios.post(`${apiUrl}/hdncc/them-hdncc`, supplierInvoiceForm);  
            if(response.data.success){
                dispatch({ type:SUPPLIERS_INVOICE_ADDED , payload: response.data.supplierInvoice});
                return response.data;
            }        
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    // Find item SupplierInvoice
    const FindSupplierInvoice = supplierInvoiceId => {
        const supplierInvoice = supplierInvoiceState.supplierInvoices.find(supplierInvoice => supplierInvoice._id === supplierInvoiceId);
        dispatch({ type: SUPPLIERS_INVOICE_FIND, payload: supplierInvoice})
    }
    // Edit item SupplierInvoice
    const UpdateSupplierInvoice = async UpdateSupplierInvoice => {
        try {
            const response = await axios.put(`${apiUrl}/hdncc/${UpdateSupplierInvoice._id}`,UpdateSupplierInvoice);  
            if(response.data.success){
                dispatch({ type:SUPPLIERS_INVOICE_UPDATED , payload: response.data.supplierInvoice});
                return response.data;
            }        
            
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    // Delete item SupplierInvoice 
    const DeleteSupplierInvoice = async SupplierInvoiceId => {
        try {
            const response = await axios.delete(`${apiUrl}/hdncc/${SupplierInvoiceId}`);  
            if(response.data.success){
                dispatch({ type:SUPPLIERS_INVOICE_DELETED , payload: SupplierInvoiceId});
            }        
            return response.data;
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    //Context data
    const supplierInvoiceContextData = { supplierInvoiceState , getSupplierInvoices , showAddSupplierInvoiceModal , setShowAddSupplierInvoiceModal, AddSupplierInvoice, UpdateSupplierInvoice, DeleteSupplierInvoice, showEditSupplierInvoiceModal,setShowEditSupplierInvoiceModal , FindSupplierInvoice};

    //Return provider information
    return (
        <SupplierInvoiceContext.Provider value={supplierInvoiceContextData}>
            {children}
        </SupplierInvoiceContext.Provider>
    );
}
export default SupplierInvoiceContextProvider;
