
export const FETCH_SHOP_SUCCESS = 'FETCH_SHOP_SUCCESS'
export const FETCH_SHOP_ERROR = 'FETCH_SHOP_ERROR'


export const fetchShopsSuccess = (shops: object) => {
    return {
        type: FETCH_SHOP_SUCCESS,
        payloads: shops
    }
}

export const fetchShopsError = (error: any) => {
    return {
        type: FETCH_SHOP_ERROR,
        error: error
    }
}
