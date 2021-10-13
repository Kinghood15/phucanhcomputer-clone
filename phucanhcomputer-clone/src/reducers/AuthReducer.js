import {SET_AUTH} from '../contexts/Constants';

export const authReducer = (state, action) => {
    const {
        type,
        payload: {isAutherticated,userAdmin}
    } = action;
    switch (type) {
        case SET_AUTH:
            return {
                ...state,
                authLoading:false,
                isAutherticated,
                userAdmin
            };
        default: return state;
    }
}