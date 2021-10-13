import {PRODUCT_LOADED_SUCCESS,PRODUCT_LOADED_FAIL,PRODUCT_ADDED,PRODUCT_DELETED,PRODUCT_UPDATED,PRODUCT_FIND,PRODUCTS_FIND,PRODUCTS_LOADED_SUCCESS,PRODUCTS_LOADED_FAIL} from '../contexts/Constants';
export const productReducer = (state, action) => {
    const { type,payload } = action;
    switch (type) {
        case PRODUCT_LOADED_SUCCESS:
            return {
                ...state,
                products:payload,
                productLoading:false
            };
        case PRODUCT_LOADED_FAIL:
            return {
                ...state,
                products:[],
                productLoading:false
            };
        case PRODUCT_ADDED:
            return {
                ...state,
                products:[...state.products, payload],
                productLoading:false
            };
        case PRODUCT_DELETED:
            return {
                ...state,
                products:[...state.products.filter(product => product._id !== payload)]
            };
        case PRODUCT_UPDATED:
            const newProducts = state.products.map(product => 
                product._id === payload._id ? payload : product
            )
            return {
                ...state,
                products: newProducts
            };
        case PRODUCT_FIND:
            return {
                ...state,
                product:payload
            };
        case PRODUCTS_FIND:
            return {
                ...state,
                product:payload
            };
        case PRODUCTS_LOADED_SUCCESS:
            return {
                ...state,
                products:payload,
                productLoading:false
            };
        case PRODUCTS_LOADED_FAIL:
            return {
                ...state,
                products:[],
                productLoading:false
            };
        default: return state;
    }
}