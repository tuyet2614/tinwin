import { get } from './AxiosHelper';
import axios from 'axios';

const listShopService = {
    getAll(params) {
        return get(`/partnership/api/app/report/store-access-for-admin`, params)
    }

}

export default listShopService;