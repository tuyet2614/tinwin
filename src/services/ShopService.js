import { get } from './AxiosHelper';
import axios from 'axios';

const listShopService = {
    getShop(params) {
        return get('/partnership/api/app/supplier/supplier-by-list-id', params)
    },


}

export default listShopService;