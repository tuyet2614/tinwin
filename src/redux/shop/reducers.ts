import { FETCH_SHOP_SUCCESS, FETCH_SHOP_ERROR } from "./action"


interface ShopInfoState {
    shopInfo: object,
    error: any

}

const initState: ShopInfoState = {
    shopInfo: {
        // visible: false
    },
    error: null,

}

const shopInfoReducer = (state = initState, action: any) => {
    switch (action?.type) {
        case FETCH_SHOP_SUCCESS:
            return { ...state, shopInfo: action.payload }

        case FETCH_SHOP_ERROR:
            return { ...state, error: action.error }
        default:
            return state
    }
}

export default shopInfoReducer