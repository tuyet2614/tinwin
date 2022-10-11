import { useEffect, useState } from "react"
import listShopService from "../../services/ShopService"

export const useGetListShops = () => {
    const [res, setRes] = useState([{}])
    useEffect(() => {
        listShopService.getListShop().then(res => {
            setRes(res.data)
            console.log("list", res.data)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}

export const getShopById = (id: string) => {
    const [res, setRes] = useState({})
    useEffect(() => {
        listShopService.getShopById(id).then(res => {
            setRes(res.data)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}

export const getRateOfShop = (shopId: string) => {
    const [res, setRes] = useState({})
    const params = {
        'supplierId': shopId,
    }
    useEffect(() => {
        listShopService.getRateOfShopId(params).then(res => {
            setRes(res.data)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}

export const getProductOfShop = (shopId: string, categoryId?: string) => {
    const [res, setRes] = useState({})
    const params = categoryId ? {
        'ListSupplierId': shopId,
        'ListCategoryId': categoryId
    } : {
        'ListSupplierId': shopId,
    }
    useEffect(() => {
        listShopService.getProductsByCategoryOfShop(params).then(res => {
            setRes(res.data.items)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}
export const getCategoriesOfShop = (id: string) => {
    const [res, setRes] = useState([{}])
    useEffect(() => {
        listShopService.getCategoriesOfShop(id).then(res => {
            setRes(res.data.items)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}



