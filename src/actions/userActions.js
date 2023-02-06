import {
    USER_LOGIN_ERROR,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from '../constants/userConstants';
import { CART_EMPTY } from '../constants/cartConstants'

export const signin = (userInfo) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
        await localStorage.setItem('userInfo', JSON.stringify(userInfo));
        const data = localStorage.getItem('userInfo');
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: USER_LOGIN_ERROR,
            paload: e.message,
        });
    }
};
export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');

    dispatch({
        type: USER_LOGOUT,
    });
    dispatch({
        type: CART_EMPTY,
    });
};