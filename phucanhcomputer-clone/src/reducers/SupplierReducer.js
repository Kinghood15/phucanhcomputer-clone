import {SUPPLIERS_LOADED_SUCCESS,SUPPLIERS_LOADED_FAIL,SUPPLIERS_ADDED,SUPPLIERS_DELETED,SUPPLIERS_UPDATED,SUPPLIERS_FIND} from '../contexts/Constants';
export const supplierReducer = (state, action) => {
    const { type,payload } = action;
    switch (type) {
        case SUPPLIERS_LOADED_SUCCESS:
            return {
                ...state,
                suppliers:payload,
                supplierLoading:false
            };
        case SUPPLIERS_LOADED_FAIL:
            return {
                ...state,
                suppliers:[],
                supplierLoading:false
            };
        case SUPPLIERS_ADDED:
            return {
                ...state,
                suppliers:[...state.suppliers, payload],
                supplierLoading:false
            };
        case SUPPLIERS_DELETED:
            return {
                ...state,
                suppliers:[...state.suppliers.filter(supplier => supplier._id !== payload)]
            };
        case SUPPLIERS_UPDATED:
            const newSuppliers = state.suppliers.map(supplier => 
                supplier._id === payload._id ? payload : supplier
            )
            return {
                ...state,
                suppliers: newSuppliers
            };
        case SUPPLIERS_FIND:
            return {
                ...state,
                supplier:payload
            };
        default: return state;
    }
}