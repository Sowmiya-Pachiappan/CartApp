import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';
import products from '../data/products';

export const addToCart =
    (productId, qty = 1) => async (dispatch, getState) => {

        const data = JSON.parse(products).find(
            (product) => product._id === productId
        );

        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                name: data.name,
                image: data.image,
                size: data.label,
                price: data.sellingPrice,
                countInStock: data.countInStock,
                product: data._id,
                qty: qty,
            },
        });
        localStorage.setItem(
            'cartItems',
            JSON.stringify(getState().cart.cartItems)
        );
    };
export const removeFromCart = (productId, size) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: { productId, size },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
