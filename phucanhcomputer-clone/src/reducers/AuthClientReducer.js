import {SET_AUTH_CLIENT} from '../contexts/Constants';

export const authClientReducer = (state, action) => {
    const {
        type,
        payload: {isAutherticated,user}
    } = action;
    switch (type) {
        case SET_AUTH_CLIENT:
            return {
                ...state,
                authClientLoading:false,
                isAutherticated,
                user
            };
        default: return state;
    }
}