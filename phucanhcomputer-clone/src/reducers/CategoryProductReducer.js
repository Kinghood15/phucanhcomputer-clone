import {CATEGORY_PRODUCT_FIND_BY_ID_LOADED_FAIL,CATEGORY_PRODUCT_FIND_BY_ID_LOADED_SUCCESS,CATEGORY_PRODUCT_LOADED_SUCCESS,CATEGORY_PRODUCT_LOADED_FAIL,CATEGORY_PRODUCT_ADDED,CATEGORY_PRODUCT_DELETED,CATEGORY_PRODUCT_UPDATED,CATEGORY_PRODUCT_FIND} from '../contexts/Constants';
export const categoryProductReducer = (state, action) => {
    const { type,payload } = action;
    switch (type) {
        case CATEGORY_PRODUCT_LOADED_SUCCESS:
            return {
                ...state,
                categoryProducts:payload,
                categoryProductLoading:false
            };
        case CATEGORY_PRODUCT_LOADED_FAIL:
            return {
                ...state,
                categoryProducts:[],
                categoryProductLoading:false
            };
        case CATEGORY_PRODUCT_FIND_BY_ID_LOADED_SUCCESS:
            return {
                ...state,
                categoryProductFindbyId:payload,
                categoryProductLoading:false
            };
        case CATEGORY_PRODUCT_FIND_BY_ID_LOADED_FAIL:
            return {
                ...state,
                categoryProductFindbyId:[],
                categoryProductLoading:false
            };
        case CATEGORY_PRODUCT_ADDED:
            return {
                ...state,
                categoryProducts:[...state.categoryProducts, payload],
                categoryProductLoading:false
            };
        case CATEGORY_PRODUCT_DELETED:
            return {
                ...state,
                categoryProducts:[...state.categoryProducts.filter(categoryProduct => categoryProduct._id !== payload)]
            };
        case CATEGORY_PRODUCT_UPDATED:
            const newCategoryProducts = state.categoryProducts.map(categoryProduct => 
                categoryProduct._id === payload._id ? payload : categoryProduct
            )
            return {
                ...state,
                categoryProducts: newCategoryProducts
            };
        case CATEGORY_PRODUCT_FIND:
            return {
                ...state,
                categoryProduct:payload
            };
        default: return state;
    }
}