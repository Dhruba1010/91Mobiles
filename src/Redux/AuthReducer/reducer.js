
import * as types from './actionTypes';

const initState = {
    isLoading: false,
    isError: false,
    error: '',
    isAuth: false,
    token: ''
}

export const reducer = (state=initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload
            }

        case types.REGISTER_FAILURE:
            return {
                ...state,
                isAuth: false,
                token: '',
                isError: true,
                error: payload
            }

            
        default:
            return state;
    }
}