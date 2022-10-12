import { GET_ALL_PRODUCT_OF_SHOP, SORT_PRODUCT_BY_PRICE } from './constants'
export const setProducts = (product: object) => ({
    type: GET_ALL_PRODUCT_OF_SHOP,
    payload: product
})

export const sortProductByPrice = (product: object) => ({
    type: SORT_PRODUCT_BY_PRICE,
    payload: product
})
