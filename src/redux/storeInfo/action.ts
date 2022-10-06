import { SHOW_STORE_INFORMATION } from "./constant";

const showStoreInformation = (data: object) => ({
    type: SHOW_STORE_INFORMATION,
    payload: data
})

export { showStoreInformation }