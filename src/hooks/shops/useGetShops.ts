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
    const [res, setRes] = useState([{}])
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

export const getProductOfShop = (shopId: string) => {
    const [res, setRes] = useState({})
    const params = {
        'ListSupplierId': shopId,
    }
    useEffect(() => {
        listShopService.getProductOfShop(params).then(res => {
            setRes(res.data)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}

