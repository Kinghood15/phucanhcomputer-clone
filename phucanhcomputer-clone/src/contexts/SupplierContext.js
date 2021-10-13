import {createContext, useReducer, useState} from 'react';
import {supplierReducer} from '../reducers/SupplierReducer';
import {apiUrl,SUPPLIERS_LOADED_SUCCESS,SUPPLIERS_LOADED_FAIL,SUPPLIERS_ADDED,SUPPLIERS_UPDATED,SUPPLIERS_DELETED,SUPPLIERS_FIND} from './Constants';
import axios from 'axios';


export const SupplierContext = createContext(); 

const SupplierContextProvider = ({children}) =>{
    const [supplierState, dispatch] = useReducer(supplierReducer,{
        supplier:null,
        suppliers:[],
        supplierLoading: true
    });

    const [showAddSupplierModal, setShowAddSupplierModal ] = useState(false);
    const [showEditSupplierModal, setShowEditSupplierModal ] = useState(false);
    // Get all children
    const getSuppliers = async() => {
        try {
            const response = await axios.get(`${apiUrl}/nhacungcap`);
            if(response.data.success) {
                dispatch({ type:SUPPLIERS_LOADED_SUCCESS, payload: response.data.suppliers})
            }
        } catch (error) {
            dispatch({ type:SUPPLIERS_LOADED_FAIL})   
        }
    }
    // Get all children
    const getSuppliersClient = async() => {
        try {
            const response = await axios.get(`${apiUrl}/nhacungcap/supplier`);
            if(response.data.success) {
                dispatch({ type:SUPPLIERS_LOADED_SUCCESS, payload: response.data.suppliers})
            }
        } catch (error) {
            dispatch({ type:SUPPLIERS_LOADED_FAIL})   
        }
    }
    // Add item supplier
    const AddSupplier = async supplierForm => {
        try {
            const response = await axios.post(`${apiUrl}/nhacungcap/themnhacungcap`, supplierForm);  
            if(response.data.success){
                dispatch({ type:SUPPLIERS_ADDED , payload: response.data.supplier});
                return response.data;
            }       
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    // Find item supplier
    const FindSupplier = supplierId => {
        const supplier = supplierState.suppliers.find(supplier => supplier._id === supplierId);
        dispatch({ type: SUPPLIERS_FIND, payload: supplier})
    }
    // Edit item supplier
    const UpdateSupplier = async UpdateSupplier => {
        try {
            const response = await axios.put(`${apiUrl}/nhacungcap/${UpdateSupplier._id}`,UpdateSupplier);  
            if(response.data.success){
                dispatch({ type:SUPPLIERS_UPDATED , payload: response.data.supplier});
                return response.data;
            }        
            
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    // Delete item supplier 
    const DeleteSupplier = async supplierId => {
        try {
            const response = await axios.delete(`${apiUrl}/nhacungcap/${supplierId}`);  
            if(response.data.success){
                dispatch({ type:SUPPLIERS_DELETED , payload: supplierId});
            }        
            return response.data;
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success:false, message: error.message};
            
        }
    }
    //Context data
    const supplierContextData = { getSuppliersClient,supplierState , getSuppliers , showAddSupplierModal , setShowAddSupplierModal, AddSupplier, UpdateSupplier, DeleteSupplier, showEditSupplierModal,setShowEditSupplierModal , FindSupplier};

    //Return provider information
    return (
        <SupplierContext.Provider value={supplierContextData}>
            {children}
        </SupplierContext.Provider>
    );
}
export default SupplierContextProvider;
