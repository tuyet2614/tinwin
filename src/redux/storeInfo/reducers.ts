import { SHOW_STORE_INFORMATION } from "./constant";

interface StoreInfoState {
    storeInfo: object
}

const initState: StoreInfoState = {
    storeInfo: {
        // visible: false
    }
}

const storeInfoReducer = (state = initState, action: any) => {
    switch (action?.type) {
        case SHOW_STORE_INFORMATION:
            return { ...state, storeInfo: action.payload }
        default:
            return state
    }
}

export default storeInfoReducer