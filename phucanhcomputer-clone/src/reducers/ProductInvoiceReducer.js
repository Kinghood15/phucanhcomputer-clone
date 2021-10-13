import {PRODUCT_INVOICE_LOADED_SUCCESS,PRODUCT_INVOICE_LOADED_FAIL,PRODUCT_INVOICE_ADDED,PRODUCT_INVOICE_DELETED,PRODUCT_INVOICE_UPDATED,PRODUCT_INVOICE_FIND} from '../contexts/Constants';
export const productInvoiceReducer = (state, action) => {
    const { type,payload } = action;
    switch (type) {
        case PRODUCT_INVOICE_LOADED_SUCCESS:
            return {
                ...state,
                productInvoices:payload,
                productInvoiceLoading:false
            };
        case PRODUCT_INVOICE_LOADED_FAIL:
            return {
                ...state,
                productInvoices:[],
                productInvoiceLoading:false
            };
        case PRODUCT_INVOICE_ADDED:
            return {
                ...state,
                productInvoices:[...state.productInvoices, payload],
                productInvoiceLoading:false
            };
        case PRODUCT_INVOICE_DELETED:
            return {
                ...state,
                productInvoices:[...state.productInvoices.filter(productInvoice => productInvoice._id !== payload)]
            };
        case PRODUCT_INVOICE_UPDATED:
            const newProductInvoices = state.productInvoices.map(productInvoice => 
                productInvoice._id === payload._id ? payload : productInvoice
            )
            return {
                ...state,
                productInvoices: newProductInvoices
            };
        case PRODUCT_INVOICE_FIND:
            return {
                ...state,
                productInvoice:payload
            };
        default: return state;
    }
}