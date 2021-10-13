import {SUPPLIERS_INVOICE_LOADED_SUCCESS,SUPPLIERS_INVOICE_LOADED_FAIL,SUPPLIERS_INVOICE_ADDED,SUPPLIERS_INVOICE_DELETED,SUPPLIERS_INVOICE_UPDATED,SUPPLIERS_INVOICE_FIND} from '../contexts/Constants';
export const supplierInvoiceReducer = (state, action) => {
    const { type,payload } = action;
    switch (type) {
        case SUPPLIERS_INVOICE_LOADED_SUCCESS:
            return {
                ...state,
                supplierInvoices:payload,
                supplierInvoiceLoading:false
            };
        case SUPPLIERS_INVOICE_LOADED_FAIL:
            return {
                ...state,
                supplierInvoices:[],
                supplierInvoiceLoading:false
            };
        case SUPPLIERS_INVOICE_ADDED:
            return {
                ...state,
                supplierInvoices:[...state.supplierInvoices, payload],
                supplierInvoiceLoading:false
            };
        case SUPPLIERS_INVOICE_DELETED:
            return {
                ...state,
                supplierInvoices:[...state.supplierInvoices.filter(supplierInvoice => supplierInvoice._id !== payload)]
            };
        case SUPPLIERS_INVOICE_UPDATED:
            const newSupplierInvoices = state.supplierInvoices.map(supplierInvoice => 
                supplierInvoice._id === payload._id ? payload : supplierInvoice
            )
            return {
                ...state,
                supplierInvoices: newSupplierInvoices
            };
        case SUPPLIERS_INVOICE_FIND:
            return {
                ...state,
                supplierInvoice:payload
            };
        default: return state;
    }
}