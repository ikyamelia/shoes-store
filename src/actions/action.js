import { DELETE_CART, GET_PRODUCT, SET_PRODUCT, UPDATE_CART } from "../constants/action-type"

export function getProduct(payload) {
    return { type: GET_PRODUCT, payload }
};

export function setProduct(payload) {
    return { type: SET_PRODUCT, payload }
};

export function updateCart(payload) {
    return { type: UPDATE_CART, payload }
};

export function deleteCart(payload) {
    return { type: DELETE_CART, payload }
};